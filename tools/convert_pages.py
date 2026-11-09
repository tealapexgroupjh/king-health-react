#!/usr/bin/env python3
"""One time converter: King Health static HTML (Summit build) to TanStack Start route files.

Usage: python3 tools/convert_pages.py <path to king-health/public> <path to src>

Each page's subnav and <main> become JSX inside src/routes/<slug>.tsx. Shared chrome (sprites, header,
menu, footer, theme drawer, Google badge) is NOT converted here; it lives in hand written components.
The universal consult form becomes <ConsultPanel>, every FAQ list becomes <Faq>, internal .html links
become TanStack <Link>, and relative asset paths become root absolute so nested routes resolve them.
"""
import json
import re
import sys
from html.parser import HTMLParser
from pathlib import Path

VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"}
SVG_TAG_CASE = {"clippath": "clipPath", "lineargradient": "linearGradient", "radialgradient": "radialGradient"}
ATTR_MAP = {
    "class": "className", "for": "htmlFor", "tabindex": "tabIndex", "autocomplete": "autoComplete",
    "inputmode": "inputMode", "novalidate": "noValidate", "fetchpriority": "fetchPriority",
    "srcset": "srcSet", "viewbox": "viewBox", "pathlength": "pathLength", "readonly": "readOnly",
    "maxlength": "maxLength", "crossorigin": "crossOrigin", "datetime": "dateTime", "colspan": "colSpan",
    "rowspan": "rowSpan", "xlink:href": "xlinkHref", "preserveaspectratio": "preserveAspectRatio",
    "clippathunits": "clipPathUnits", "gradientunits": "gradientUnits", "autofocus": "autoFocus",
}
BOOL_ATTRS = {"hidden", "required", "disabled", "novalidate", "open", "multiple", "readonly", "autofocus", "download"}
DROP_WS_PARENTS = {"ul", "ol", "dl", "table", "thead", "tbody", "tfoot", "tr", "select", "optgroup",
                   "svg", "g", "defs", "symbol", "clippath", "head", "html"}
ASSET_RE = re.compile(r"^(media|brand|assets)/")
PAGE_LINK_RE = re.compile(r"^([a-z0-9-]+)\.html(\?[^#]*)?(#.*)?$")
PHONE_TEL = "tel:+19735247188"
EMAIL_MAILTO = "mailto:Javon@kinghealthdirect.com"


class Node:
    def __init__(self, tag, attrs=None, parent=None):
        self.tag, self.attrs, self.parent, self.children = tag, list(attrs or []), parent, []

    def get(self, k, default=None):
        for a, v in self.attrs:
            if a == k:
                return v if v is not None else ""
        return default

    def has(self, k):
        return any(a == k for a, _ in self.attrs)

    def classes(self):
        return (self.get("class") or "").split()

    def find(self, pred):
        for c in self.children:
            if isinstance(c, Node):
                if pred(c):
                    return c
                r = c.find(pred)
                if r is not None:
                    return r
        return None

    def find_all(self, pred, out=None):
        out = [] if out is None else out
        for c in self.children:
            if isinstance(c, Node):
                if pred(c):
                    out.append(c)
                c.find_all(pred, out)
        return out


class Text:
    def __init__(self, s):
        self.s = s


class Comment:
    def __init__(self, s):
        self.s = s


class Builder(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node("#root")
        self.cur = self.root

    def handle_starttag(self, tag, attrs):
        n = Node(tag, attrs, self.cur)
        self.cur.children.append(n)
        if tag not in VOID:
            self.cur = n

    def handle_startendtag(self, tag, attrs):
        self.cur.children.append(Node(tag, attrs, self.cur))

    def handle_endtag(self, tag):
        n = self.cur
        while n is not self.root and n.tag != tag:
            n = n.parent
        if n is not self.root:
            self.cur = n.parent

    def handle_data(self, data):
        self.cur.children.append(Text(data))

    def handle_comment(self, data):
        self.cur.children.append(Comment(data))


def parse(fragment):
    b = Builder()
    b.feed(fragment)
    b.close()
    return b.root


def js(v):
    return json.dumps(v, ensure_ascii=False)


def camel(name):
    parts = name.split("-")
    return parts[0] + "".join(p.capitalize() for p in parts[1:])


def style_obj(s):
    items = []
    for decl in s.split(";"):
        if ":" not in decl:
            continue
        k, v = decl.split(":", 1)
        k, v = k.strip(), v.strip()
        if not k:
            continue
        key = k if k.startswith("--") else camel(k)
        items.append(f"{js(key)}: {js(v)}")
    return "{{ " + ", ".join(items) + " }}"


def fix_asset(v):
    return "/" + v if ASSET_RE.match(v) else v


def fix_srcset(v):
    out = []
    for cand in v.split(","):
        bits = cand.strip().split(None, 1)
        if bits:
            bits[0] = fix_asset(bits[0])
        out.append(" ".join(bits))
    return ", ".join(out)


def attr_value(v):
    if v is None:
        return None
    if any(ch in v for ch in '"&\\{}\n'):
        return "{" + js(v) + "}"
    return '"' + v + '"'


def convert_attrs(node, skip=()):
    out = []
    for k, v in node.attrs:
        if k in skip:
            continue
        if k == "style":
            out.append(f"style={style_obj(v or '')}")
            continue
        if k in ("src", "data-src", "data-reviews-src") and v:
            v = fix_asset(v)
        if k in ("srcset", "data-srcset") and v:
            v = fix_srcset(v)
        if k in BOOL_ATTRS and (v is None or v == "" or v == k):
            out.append(ATTR_MAP.get(k, k))
            continue
        if k == "tabindex":
            out.append(f"tabIndex={{{int(v)}}}")
            continue
        if k.startswith("data-") or k.startswith("aria-"):
            name = k
        elif k in ATTR_MAP:
            name = ATTR_MAP[k]
        elif "-" in k:
            name = camel(k)
        elif ":" in k:
            name = camel(k.replace(":", "-"))
        else:
            name = k
        if v is None:
            out.append(f"{name}")
        else:
            out.append(f"{name}={attr_value(v)}")
    return out


def esc_text(s):
    s = s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    return s.replace("{", "{'{'}").replace("}", "{'}'}")


class Ctx:
    def __init__(self):
        self.imports = set()


def children_jsx(node, ctx, parent_tag):
    parts = []
    for c in node.children:
        r = to_jsx(c, ctx, parent_tag)
        if r:
            parts.append(r)
    return "".join(parts)


def to_jsx(n, ctx, parent_tag=""):
    if isinstance(n, Text):
        t = re.sub(r"\s+", " ", n.s)
        if t == "":
            return ""
        if t == " ":
            return "" if parent_tag in DROP_WS_PARENTS else '{" "}'
        lead = '{" "}' if t.startswith(" ") else ""
        trail = '{" "}' if t.endswith(" ") else ""
        return lead + esc_text(t.strip()) + trail
    if isinstance(n, Comment):
        body = n.s.strip().replace("*/", "* /")
        body = re.sub(r"\s+", " ", body)
        return "{/* " + body + " */}"
    tag = n.tag
    cls = n.classes()

    # Universal consult panel
    if tag == "div" and "panel" in cls and n.find(lambda x: x.has("data-form-wrap")) is not None:
        return consult_panel(n, ctx)
    # FAQ accordions
    if tag == "ul" and n.has("data-faq"):
        return faq(n, ctx)
    # Links
    if tag == "a":
        return link(n, ctx)

    jsx_tag = SVG_TAG_CASE.get(tag, tag)
    attrs = convert_attrs(n)
    a = (" " + " ".join(attrs)) if attrs else ""
    if tag in VOID or (not n.children and tag in ("path", "circle", "rect", "line", "use", "ellipse", "polyline", "polygon", "stop")):
        return f"<{jsx_tag}{a} />"
    inner = children_jsx(n, ctx, tag)
    return f"<{jsx_tag}{a}>{inner}</{jsx_tag}>"


def link(n, ctx):
    href = n.get("href") or ""
    cfg = n.get("data-config")
    inner = children_jsx(n, ctx, "a")
    if cfg in ("phone-link", "email-link"):
        attrs = convert_attrs(n, skip=("href",))
        target = PHONE_TEL if cfg == "phone-link" else EMAIL_MAILTO
        return f'<a href="{target}" {" ".join(attrs)}>{inner}</a>'
    m = PAGE_LINK_RE.match(href)
    if m and m.group(1) != "404":
        slug = "" if m.group(1) == "index" else m.group(1)
        props = [f'to="/{slug}"']
        if m.group(2):
            q = dict(p.split("=", 1) for p in m.group(2)[1:].split("&") if "=" in p)
            props.append("search={{ " + ", ".join(f"{k}: {js(v)}" for k, v in q.items()) + " }}")
        if m.group(3):
            props.append(f'hash="{m.group(3)[1:]}"')
        attrs = convert_attrs(n, skip=("href",))
        ctx.imports.add("Link")
        return f'<Link {" ".join(props + attrs)}>{inner}</Link>'
    if href.endswith(".vcf") and not href.startswith("/"):
        attrs = convert_attrs(n, skip=("href",))
        return f'<a href="/{href}" {" ".join(attrs)}>{inner}</a>'
    attrs = convert_attrs(n)
    return f'<a {" ".join(attrs)}>{inner}</a>'


def frag(node, ctx, parent="p"):
    if node is None:
        return "null"
    return "<>" + children_jsx(node, ctx, parent) + "</>"


def consult_panel(n, ctx):
    wrap = n.find(lambda x: x.has("data-form-wrap"))
    kicker = wrap.find(lambda x: x.tag == "p" and "kicker" in x.classes())
    title = wrap.find(lambda x: x.tag == "h2")
    lede = wrap.find(lambda x: x.tag == "p" and "panel-lede" in x.classes())
    form = n.find(lambda x: x.tag == "form")
    props = [
        f"kicker={{{frag(kicker, ctx)}}}",
        f"title={{{frag(title, ctx, 'h2')}}}",
        f"lede={{{frag(lede, ctx)}}}",
        f"category={js(form.get('data-preset-category') or '')}",
        f"coverage={js(form.get('data-preset-coverage') or '')}",
    ]
    if title is not None and title.get("id") and title.get("id") != "consult-title":
        props.append(f"titleId={js(title.get('id'))}")
    if form.get("data-preset-follow-from") == "true":
        props.append("followFrom")
    ctx.imports.add("ConsultPanel")
    return "<ConsultPanel " + " ".join(props) + " />"


def faq(n, ctx):
    items = []
    for li in [c for c in n.children if isinstance(c, Node) and c.tag == "li"]:
        btn = li.find(lambda x: x.tag == "button")
        ans = li.find(lambda x: "ans" in x.classes())
        q = Node("#q")
        q.children = [c for c in btn.children if not (isinstance(c, Node) and "pm" in c.classes())]
        heading = next((c for c in li.children if isinstance(c, Node)), None)
        items.append(
            "{ "
            + f"qid: {js(btn.get('id'))}, aid: {js(ans.get('id'))}, open: {'true' if btn.get('aria-expanded') == 'true' else 'false'}, "
            + (f"level: {js(heading.tag)}, " if heading is not None and heading.tag != "h3" else "")
            + f"q: {frag(q, ctx, 'button')}, a: {frag(ans, ctx, 'div')}"
            + " }"
        )
    ctx.imports.add("Faq")
    return f"<Faq className={js(n.get('class') or 'faq')} items={{[{', '.join(items)}]}} />"


# ---------- head ----------

def head_data(html):
    head = html[html.index("<head>"):html.index("</head>")]
    title = re.search(r"<title>(.*?)</title>", head, re.S).group(1)
    root = parse(head)
    metas, links, ld = [], [], []
    for m in root.find_all(lambda x: x.tag == "meta"):
        if m.has("charset") or m.get("name") == "viewport":
            continue
        d = {k: v for k, v in m.attrs}
        metas.append(d)
    for l in root.find_all(lambda x: x.tag == "link"):
        if l.get("rel") == "canonical":
            links.append({"rel": "canonical", "href": l.get("href")})
    for s in re.findall(r'<script type="application/ld\+json">(.*?)</script>', head, re.S):
        ld.append(json.loads(s))
    import html as htmlmod
    return htmlmod.unescape(title), metas, links, ld


def pascal(slug):
    return "".join(p.capitalize() for p in re.split(r"[^a-z0-9]+", slug) if p) or "Home"


def format_tsx(body):
    # light formatting: break between sibling block tags for readable diffs
    return re.sub(r"(</(?:section|div|nav|main|article|aside|header|figure|ul|ol|p|h[1-6])>)(?=<)", r"\1\n", body)


def build_page(path: Path, out_routes: Path, out_components: Path):
    html = path.read_text()
    name = path.stem
    title, metas, links, ld = head_data(html)
    body = html[html.index("<body"):]
    menu_end = body.index('<div class="menu-panel"')
    main_start = body.index("<main")
    main_end = body.index("</main>") + len("</main>")
    # subnav(s) sit between the menu panel and <main>
    between = body[menu_end:main_start]
    sub_idx = between.find('<nav class="subnav"')
    subnav_html = between[sub_idx:] if sub_idx > -1 else ""
    ctx = Ctx()
    sub_jsx = children_jsx(parse(subnav_html), ctx, "#root") if subnav_html else ""
    main_jsx = children_jsx(parse(body[main_start:main_end]), ctx, "#root")
    jsx = format_tsx(sub_jsx + "\n" + main_jsx)

    head_obj = {"meta": [{"title": title}] + metas, "links": links}
    if ld:
        head_obj["scripts"] = [{"type": "application/ld+json", "children": json.dumps(ld[0] if len(ld) == 1 else ld, ensure_ascii=False, separators=(",", ":"))}]

    imports = []
    router_imports = ["createFileRoute"] + (["Link"] if "Link" in ctx.imports else [])
    if name == "404":
        router_imports = (["Link"] if "Link" in ctx.imports else [])
    if router_imports:
        imports.append(f"import {{ {', '.join(router_imports)} }} from '@tanstack/react-router'")
    if "ConsultPanel" in ctx.imports:
        imports.append("import { ConsultPanel } from '~/components/ConsultPanel'")
    if "Faq" in ctx.imports:
        imports.append("import { Faq } from '~/components/Faq'")
    comp = pascal(name) + "Page" if name != "index" else "HomePage"

    if name == "404":
        src = "\n".join(imports) + f"""

/* Converted from 404.html. Rendered by the root route's notFoundComponent. */
export const notFoundHead = {json.dumps(head_obj, ensure_ascii=False, indent=2)}

export function NotFoundPage() {{
  return (
    <>
{jsx}
    </>
  )
}}
"""
        (out_components / "NotFoundPage.tsx").write_text(src)
        return
    route_path = "/" if name == "index" else f"/{name}"
    src = "\n".join(imports) + f"""

/* Converted from {name}.html (King Health, Summit). Page copy and markup are unchanged. */
const head = {json.dumps(head_obj, ensure_ascii=False, indent=2)}

export const Route = createFileRoute('{route_path}')({{
  head: () => head,
  component: {comp},
}})

function {comp}() {{
  return (
    <>
{jsx}
    </>
  )
}}
"""
    (out_routes / f"{name}.tsx").write_text(src)


def main():
    pub, src = Path(sys.argv[1]), Path(sys.argv[2])
    routes, comps = src / "routes", src / "components"
    for p in sorted(pub.glob("*.html")):
        build_page(p, routes, comps)
        print("converted", p.name)


if __name__ == "__main__":
    main()
