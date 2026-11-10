import { createFileRoute, Link } from '@tanstack/react-router'
import { ConsultPanel } from '~/components/ConsultPanel'
import { Faq } from '~/components/Faq'
import { usePageEnhancements } from '~/lib/usePageEnhancements'
import { asset, cdnHead } from '~/lib/assets'

/* Converted from whole-life.html (King Health, Summit). Page copy and markup are unchanged. */
const head = {
  "meta": [
    {
      "title": "Whole Life Insurance in NJ and North Carolina | King Health"
    },
    {
      "name": "description",
      "content": "Whole life insurance in Newark and across New Jersey, with permanent protection, level premiums and guaranteed cash value. Call King Health to compare plans."
    },
    {
      "name": "robots",
      "content": "index,follow"
    },
    {
      "name": "theme-color",
      "content": "#355E3B"
    },
    {
      "property": "og:type",
      "content": "website"
    },
    {
      "property": "og:site_name",
      "content": "King Health"
    },
    {
      "property": "og:locale",
      "content": "en_US"
    },
    {
      "property": "og:title",
      "content": "Whole Life Insurance in NJ and North Carolina | King Health"
    },
    {
      "property": "og:description",
      "content": "Whole life insurance in Newark and across New Jersey, with permanent protection, level premiums and guaranteed cash value. Call King Health to compare plans."
    },
    {
      "property": "og:url",
      "content": "https://kinghealthdirect.com/whole-life"
    },
    {
      "property": "og:image",
      "content": "https://kinghealthdirect.com/assets/og/king-health-og.jpg"
    },
    {
      "property": "og:image:width",
      "content": "1200"
    },
    {
      "property": "og:image:height",
      "content": "630"
    },
    {
      "property": "og:image:alt",
      "content": "King Health, independent insurance advisory"
    },
    {
      "name": "twitter:card",
      "content": "summary_large_image"
    },
    {
      "name": "twitter:title",
      "content": "Whole Life Insurance in NJ and North Carolina | King Health"
    },
    {
      "name": "twitter:description",
      "content": "Whole life insurance in Newark and across New Jersey, with permanent protection, level premiums and guaranteed cash value. Call King Health to compare plans."
    },
    {
      "name": "twitter:image",
      "content": "https://kinghealthdirect.com/assets/og/king-health-og.jpg"
    }
  ],
  "links": [
    {
      "rel": "canonical",
      "href": "https://kinghealthdirect.com/whole-life"
    }
  ],
  "scripts": [
    {
      "type": "application/ld+json",
      "children": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"https://kinghealthdirect.com/#organization\",\"name\":\"King Health\",\"legalName\":\"King Health LLC\",\"url\":\"https://kinghealthdirect.com/\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://kinghealthdirect.com/brand/king-health-lockup.png\",\"width\":1000,\"height\":659},\"sameAs\":[\"https://www.facebook.com/kinghealthdirect\",\"https://www.instagram.com/kinghealthdirect\",\"https://wa.me/19735247188?text=Hello%20Javon%2C%20I%20found%20King%20Health%20online%20and%20would%20like%20to%20talk%20about%20my%20coverage.\",\"https://www.google.com/maps?cid=9265971853131828090\"],\"contactPoint\":{\"@type\":\"ContactPoint\",\"telephone\":\"+1-973-524-7188\",\"contactType\":\"customer service\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}],\"availableLanguage\":\"en\",\"email\":\"Javon@kinghealthdirect.com\"}},{\"@type\":\"WebSite\",\"@id\":\"https://kinghealthdirect.com/#website\",\"url\":\"https://kinghealthdirect.com/\",\"name\":\"King Health\",\"inLanguage\":\"en-US\",\"publisher\":{\"@id\":\"https://kinghealthdirect.com/#organization\"}},{\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://kinghealthdirect.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Individual Benefits\",\"item\":\"https://kinghealthdirect.com/individual-benefits\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Whole Life\",\"item\":\"https://kinghealthdirect.com/whole-life\"}]},{\"@type\":\"Service\",\"name\":\"Whole Life\",\"serviceType\":\"Whole Life\",\"url\":\"https://kinghealthdirect.com/whole-life\",\"provider\":{\"@type\":\"InsuranceAgency\",\"@id\":\"https://kinghealthdirect.com/#agency\",\"name\":\"King Health\",\"url\":\"https://kinghealthdirect.com/\",\"telephone\":\"+1-973-524-7188\"},\"description\":\"Whole life insurance offers permanent protection, level premiums and guaranteed cash value growth, creating a foundation your family can rely on.\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}]},{\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"How does whole life differ from term life?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Term life covers a defined period and generally carries a lower premium, while whole life covers your entire lifetime and builds cash value. Many families combine these forms of coverage, and we help you decide which approach, or which combination, best fits your goals and your budget.\"}},{\"@type\":\"Question\",\"name\":\"Can we use the cash value during our lifetime?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. You may borrow against the cash value or make withdrawals, subject to your policy terms. Outstanding loans and withdrawals reduce the death benefit, so we review the effect of any access with you beforehand.\"}},{\"@type\":\"Question\",\"name\":\"Will our premium ever increase?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Traditional whole life policies carry a level premium that is set when the policy is issued and does not rise with age.\"}}]}]}"
    }
  ]
}

export const Route = createFileRoute('/whole-life')({
  head: () => cdnHead(head),
  component: WholeLifePage,
})

function WholeLifePage() {
  usePageEnhancements()
  return (
    <>
<nav className="subnav" aria-label="Individual Benefits pages" data-from="individual"><div className="container sn"><ul className="sn-list"><li className="sn-label-item"><Link to="/individual-benefits" className="sn-label">Individual Benefits</Link></li><li><Link to="/individual-health">Individual Health</Link></li><li><Link to="/whole-life" aria-current="page">Whole Life</Link></li><li><Link to="/term-life">Term Life</Link></li><li><Link to="/ancillary" search={{ from: "individual" }}>Ancillary</Link></li><li><Link to="/dental-vision">Dental and Vision</Link></li></ul>
</div>
</nav>{" "}
<main id="main" tabIndex={-1}>{" "}<section className="banner" aria-labelledby="page-title">{" "}<div className="hero-media hero-wide"><div className="hero-photo"><img src={asset('/media/photos/family-outdoor-warm.jpg')} alt="" width="867" height="1300" loading="eager" fetchPriority="high" style={{ "objectPosition": "50% 58%" }} /></div>
</div>{" "}<div className="container">{" "}<div className="hero-band band">{" "}<p className="kicker"><Link to="/individual-benefits">Individual Benefits</Link></p>
<h1 id="page-title" tabIndex={-1}>Whole Life</h1>{" "}<p className="band-lede">Whole life insurance that provides for your family for a lifetime.</p>{" "}</div>{" "}</div>{" "}</section>{" "}<section className="section after-band" aria-labelledby="glance-title">{" "}<div className="container prow">{" "}<div className="prow-body reveal">{" "}<p className="kicker">Whole Life</p>{" "}<h2 className="h2" id="glance-title">Coverage at a glance</h2>{" "}<div className="copy"><p>Whole life insurance is permanent coverage that remains in force for your entire life as long as premiums are paid. Premiums are generally level, which means they do not increase as you grow older, and the death benefit is paid to your beneficiaries income tax free in most circumstances.</p>
<p>Each policy also builds cash value at a guaranteed rate over time. Some whole life policies issued by mutual companies may also earn dividends, although dividends are not guaranteed. The cash value grows on a tax deferred basis and may be accessed through policy loans or withdrawals, which reduce the death benefit if they are not repaid.</p>
</div>{" "}</div>{" "}<div className="prow-media reveal"><img src={asset('/media/photos/father-baby-garden.jpg')} alt="A father holding his baby in a garden" width="1800" height="1200" decoding="async" style={{ "objectPosition": "40% 32%" }} /></div>{" "}</div>{" "}</section>{" "}<section className="section tint" aria-labelledby="suits-title">{" "}<div className="container sec-head sec-copy reveal">{" "}<h2 className="h2" id="suits-title">Who it is designed for</h2>{" "}<div className="copy"><p>Whole life insurance is designed for people who want protection that never expires, such as parents who wish to leave a lasting inheritance, business owners planning for succession, and anyone who values the predictability of level premiums and guaranteed cash value. It is also well suited to families who would like to provide for a loved one with lifelong needs.</p>
</div>{" "}</div>{" "}</section>{" "}<section className="section" aria-labelledby="how-title">{" "}<div className="container sec-head sec-copy reveal">{" "}<h2 className="h2" id="how-title">How the plan works</h2>{" "}<div className="copy"><p>When you purchase a whole life policy, you select a death benefit and pay a level premium for the life of the policy or for a defined payment period. A portion of each premium supports the cost of insurance, and the remainder contributes to the cash value, which grows steadily according to the guarantees in your contract.</p>
<p>We compare whole life policies across carriers, considering the strength of each company, the guaranteed values, any dividend history and the premium that fits your budget. We then help you through underwriting and remain available to review your policy, beneficiaries and cash value as your life unfolds.</p>
</div>{" "}</div>{" "}</section>{" "}<section className="section tint consult" id="consult" tabIndex={-1} aria-labelledby="consult-title">{" "}<div className="container consult-faq">{" "}<ConsultPanel kicker={<>Request a consultation</>} title={<>Speak with us about Whole Life</>} lede={<>Share a few details, and we will reach out personally to arrange a conversation at a time that suits you. There is never any cost or obligation for our guidance.</>} category="Individual Benefits" coverage="Whole Life" />{" "}<aside className="consult-faq-aside" aria-labelledby="cfaq-title">{" "}<p className="kicker">Common questions</p>{" "}<h2 id="cfaq-title">Whole Life, answered</h2>{" "}<Faq className="faq cfaq" items={[{ qid: "cfaq-q1", aid: "cfaq-a1", open: true, q: <>How does whole life differ from term life?</>, a: <><p>Term life covers a defined period and generally carries a lower premium, while whole life covers your entire lifetime and builds cash value. Many families combine these forms of coverage, and we help you decide which approach, or which combination, best fits your goals and your budget.</p>
</> }, { qid: "cfaq-q2", aid: "cfaq-a2", open: false, q: <>Can we use the cash value during our lifetime?</>, a: <><p>Yes. You may borrow against the cash value or make withdrawals, subject to your policy terms. Outstanding loans and withdrawals reduce the death benefit, so we review the effect of any access with you beforehand.</p>
</> }, { qid: "cfaq-q3", aid: "cfaq-a3", open: false, q: <>Will our premium ever increase?</>, a: <><p>Traditional whole life policies carry a level premium that is set when the policy is issued and does not rise with age.</p>
</> }]} />{" "}<p className="fine">Prefer to talk it through? Call{" "}<a href="tel:+19735247188" data-config="phone-link"><span data-config="phone">(973) 524-7188</span></a>{" "}and we will answer in person.</p>{" "}</aside>{" "}</div>{" "}</section>{" "}</main>
    </>
  )
}
