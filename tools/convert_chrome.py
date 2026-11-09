#!/usr/bin/env python3
"""Converts the static shared chrome (icon sprites, footer, Google badge inner markup) from medicare.html."""
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from convert_pages import parse, children_jsx, Ctx, format_tsx

pub, comps = Path(sys.argv[1]), Path(sys.argv[2])
html = (pub / "medicare.html").read_text()
body = html[html.index("<body"):]

def jsx(fragment):
    ctx = Ctx()
    return format_tsx(children_jsx(parse(fragment), ctx, "#root")), ctx

sprites, _ = jsx(body[body.index("<svg"):body.index('<a class="skip"')])
(comps / "IconSprites.tsx").write_text(f"""/* Shared SVG symbol sprites (category icons and the Google G), referenced with <use href="#..."> across the site. */
export function IconSprites() {{
  return (
    <>
{sprites}
    </>
  )
}}
""")

footer, ctx = jsx(body[body.index("<footer"):body.index("</footer>") + 9])
(comps / "Footer.tsx").write_text(f"""import {{ Link }} from '@tanstack/react-router'

/* Site footer, converted unchanged from the Summit build. */
export function Footer() {{
  return (
{footer}
  )
}}
""")

b0 = body.index('<a class="g-badge g-badge-float"')
b1 = body.index("</a>", b0) + 4
badge_inner, _ = jsx(body[body.index(">", b0) + 1:b1 - 4])
(comps / "GoogleBadge.tsx").write_text(f"""import {{ Link }} from '@tanstack/react-router'
import {{ useEffect, useRef }} from 'react'

/* Floating Google rating badge. It steps aside while the footer (which has its own Google Reviews link) is on screen. */
export function GoogleBadge() {{
  const ref = useRef<HTMLAnchorElement>(null)
  useEffect(() => {{
    const badge = ref.current
    const foot = document.querySelector('.site-footer')
    if (!badge || !foot || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => badge.classList.toggle('is-tucked', e.isIntersecting)),
      {{ threshold: 0.15 }},
    )
    io.observe(foot)
    return () => io.disconnect()
  }}, [])
  return (
    <Link
      ref={{ref}}
      to="/reviews"
      className="g-badge g-badge-float"
      data-lint-exempt="rating"
      aria-label="Rated 4.9 out of five on Google, 41 reviews"
    >
{badge_inner}
    </Link>
  )
}}
""")
print("ok")
