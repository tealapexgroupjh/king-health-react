import { createFileRoute, Link, redirect, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'
import { FROM, FROM_SLUG, type FromKey } from '~/lib/config'
import { ConsultPanel } from '~/components/ConsultPanel'
import { Faq } from '~/components/Faq'
import { usePageEnhancements } from '~/lib/usePageEnhancements'
import { useHydrated } from '~/lib/useHydrated'
import { asset, cdnHead } from '~/lib/assets'

/* Converted from ancillary.html (King Health, Summit). Page copy and markup are unchanged. */
const head = {
  "meta": [
    {
      "title": "Ancillary Coverage in NJ and North Carolina | King Health"
    },
    {
      "name": "description",
      "content": "Dental, vision, hearing, accident, critical illness and hospital indemnity coverage for New Jersey households and employers. Call King Health to compare."
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
      "content": "Ancillary Coverage in NJ and North Carolina | King Health"
    },
    {
      "property": "og:description",
      "content": "Dental, vision, hearing, accident, critical illness and hospital indemnity coverage for New Jersey households and employers. Call King Health to compare."
    },
    {
      "property": "og:url",
      "content": "https://kinghealthdirect.com/ancillary"
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
      "content": "Ancillary Coverage in NJ and North Carolina | King Health"
    },
    {
      "name": "twitter:description",
      "content": "Dental, vision, hearing, accident, critical illness and hospital indemnity coverage for New Jersey households and employers. Call King Health to compare."
    },
    {
      "name": "twitter:image",
      "content": "https://kinghealthdirect.com/assets/og/king-health-og.jpg"
    }
  ],
  "links": [
    {
      "rel": "canonical",
      "href": "https://kinghealthdirect.com/ancillary"
    }
  ],
  "scripts": [
    {
      "type": "application/ld+json",
      "children": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"https://kinghealthdirect.com/#organization\",\"name\":\"King Health\",\"legalName\":\"King Health LLC\",\"url\":\"https://kinghealthdirect.com/\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://kinghealthdirect.com/brand/king-health-lockup.png\",\"width\":1000,\"height\":659},\"sameAs\":[\"https://www.facebook.com/kinghealthdirect\",\"https://www.instagram.com/kinghealthdirect\",\"https://wa.me/19735247188?text=Hello%20Javon%2C%20I%20found%20King%20Health%20online%20and%20would%20like%20to%20talk%20about%20my%20coverage.\",\"https://www.google.com/maps?cid=9265971853131828090\"],\"contactPoint\":{\"@type\":\"ContactPoint\",\"telephone\":\"+1-973-524-7188\",\"contactType\":\"customer service\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}],\"availableLanguage\":\"en\",\"email\":\"Javon@kinghealthdirect.com\"}},{\"@type\":\"WebSite\",\"@id\":\"https://kinghealthdirect.com/#website\",\"url\":\"https://kinghealthdirect.com/\",\"name\":\"King Health\",\"inLanguage\":\"en-US\",\"publisher\":{\"@id\":\"https://kinghealthdirect.com/#organization\"}},{\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://kinghealthdirect.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Senior Benefits\",\"item\":\"https://kinghealthdirect.com/senior-benefits\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Ancillary\",\"item\":\"https://kinghealthdirect.com/ancillary\"}]},{\"@type\":\"Service\",\"name\":\"Ancillary\",\"serviceType\":\"Ancillary\",\"url\":\"https://kinghealthdirect.com/ancillary\",\"provider\":{\"@type\":\"InsuranceAgency\",\"@id\":\"https://kinghealthdirect.com/#agency\",\"name\":\"King Health\",\"url\":\"https://kinghealthdirect.com/\",\"telephone\":\"+1-973-524-7188\"},\"description\":\"Dental, vision, hearing, accident, critical illness, hospital indemnity and cancer coverage can strengthen any plan, and we arrange these benefits for seniors, individuals and employers alike.\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}]},{\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Do these plans replace our health insurance?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"No. Ancillary plans are designed to supplement your primary coverage rather than replace it. They fill specific needs such as routine dental care or provide cash benefits that help with costs your health plan does not cover.\"}},{\"@type\":\"Question\",\"name\":\"Can we purchase ancillary coverage on its own?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"In most cases, yes. Seniors, individuals and families can usually purchase these plans individually, and employers can offer them to their teams as part of a group or voluntary benefits program.\"}},{\"@type\":\"Question\",\"name\":\"How are cash benefits paid?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Accident, critical illness, hospital indemnity and cancer plans generally pay benefits directly to you once a covered claim is approved. The funds are yours to use as you see fit, whether for medical bills, travel, childcare or everyday household expenses.\"}}]}]}"
    }
  ]
}

export const Route = createFileRoute('/ancillary')({
  /* ?from=senior|individual chooses the second navigation bar, the banner kicker and the form preset.
     Group ancillary has its own page, so ?from=group forwards there. */
  validateSearch: (search: Record<string, unknown>): { from?: FromKey } => {
    const f = search.from
    return f === 'senior' || f === 'individual' || f === 'group' ? { from: f } : {}
  },
  beforeLoad: ({ search }) => {
    if (search.from === 'group') throw redirect({ to: '/group-ancillary', replace: true })
  },
  head: () => cdnHead(head),
  component: AncillaryPage,
})

function AncillaryPage() {
  usePageEnhancements()
  const { from } = Route.useSearch()
  const navigate = useNavigate()
  /* Static hosts serve this page's HTML for ?from=group too, so the forward also runs in the browser. */
  useEffect(() => {
    if (from === 'group') void navigate({ to: '/group-ancillary', replace: true })
  }, [from, navigate])
  const hydrated = useHydrated()
  const fromKey: FromKey = hydrated && from === 'individual' ? 'individual' : 'senior'
  return (
    <>
<nav className="subnav" aria-label="Senior Benefits pages" data-from="senior" hidden={fromKey !== 'senior'}><div className="container sn"><ul className="sn-list"><li className="sn-label-item"><Link to="/senior-benefits" className="sn-label">Senior Benefits</Link></li><li><Link to="/medicare">Medicare</Link></li><li><Link to="/final-expense">Final Expense</Link></li><li><Link to="/ancillary" search={{ from: "senior" }} aria-current="page">Ancillary</Link></li></ul>
</div>
</nav>{" "}<nav className="subnav" aria-label="Individual Benefits pages" data-from="individual" hidden={fromKey !== 'individual'}><div className="container sn"><ul className="sn-list"><li className="sn-label-item"><Link to="/individual-benefits" className="sn-label">Individual Benefits</Link></li><li><Link to="/individual-health">Individual Health</Link></li><li><Link to="/whole-life">Whole Life</Link></li><li><Link to="/term-life">Term Life</Link></li><li><Link to="/ancillary" search={{ from: "individual" }} aria-current="page">Ancillary</Link></li><li><Link to="/dental-vision">Dental and Vision</Link></li></ul>
</div>
</nav>{" "}
<main id="main" tabIndex={-1}>{" "}<section className="banner" aria-labelledby="page-title">{" "}<div className="hero-media hero-wide"><div className="hero-photo"><img src={asset('/media/photos/dental-visit.jpg')} alt="" width="1800" height="1200" loading="eager" fetchPriority="high" style={{ "objectPosition": "50% 22%" }} /></div>
</div>{" "}<div className="container">{" "}<div className="hero-band band">{" "}<p className="kicker"><Link to={FROM_SLUG[fromKey]} data-from-kicker>{FROM[fromKey]}</Link></p>
<h1 id="page-title" tabIndex={-1}>Ancillary</h1>{" "}<p className="band-lede">Ancillary coverage that fills the spaces a primary plan leaves open.</p>{" "}</div>{" "}</div>{" "}</section>{" "}<section className="section after-band" aria-labelledby="glance-title">{" "}<div className="container prow">{" "}<div className="prow-body reveal">{" "}<p className="kicker">Ancillary</p>{" "}<h2 className="h2" id="glance-title">Coverage at a glance</h2>{" "}<div className="copy"><p>Ancillary coverage refers to supplemental benefits that work alongside your primary health insurance. Dental, vision and hearing plans help with routine and restorative care that medical coverage often excludes, while accident, critical illness, hospital indemnity and cancer policies pay cash benefits directly to you when a covered event occurs, which you may use for deductibles, household bills or any other need.</p>
<p>For seniors, these benefits can complement Original Medicare or a Medicare Supplement plan, neither of which generally includes routine dental, vision or hearing care. For individuals and families, they add a layer of financial steadiness to a health plan. For employers, they offer valued voluntary benefits that employees can elect, often at little or no cost to the business. Availability and benefit design vary by state and by carrier.</p>
</div>{" "}</div>{" "}<div className="prow-media reveal"><img src={asset('/media/photos/vision-fitting-smile.jpg')} alt="A smiling man being fitted for new lenses at an eye care clinic" width="1800" height="1200" decoding="async" style={{ "objectPosition": "50% 30%" }} /></div>{" "}</div>{" "}</section>{" "}<section className="section tint" aria-labelledby="suits-title">{" "}<div className="container sec-head sec-copy reveal">{" "}<h2 className="h2" id="suits-title">Who it is designed for</h2>{" "}<div className="copy"><p>Ancillary coverage is designed for anyone who would like more complete protection than a primary health plan alone provides. Seniors often add dental, vision and hearing coverage, individuals and families frequently choose accident or hospital indemnity plans to soften unexpected expenses, and employers use these benefits to round out a competitive package without adding substantial cost.</p>
</div>{" "}</div>{" "}</section>{" "}<section className="section" aria-labelledby="how-title">{" "}<div className="container sec-head sec-copy reveal">{" "}<h2 className="h2" id="how-title">How the plan works</h2>{" "}<div className="copy"><p>Dental, vision and hearing plans typically pay toward covered services at participating providers, with preventive care often covered most generously and some major services subject to waiting periods. Accident, critical illness, hospital indemnity and cancer plans work differently: when a covered event occurs, the plan pays a set cash benefit directly to you, regardless of what your health insurance pays.</p>
<p>We begin by reviewing the coverage you already have and identifying where supplemental benefits would provide the most value for the premium. For employers, we design voluntary offerings that employees can elect through payroll deduction. In every case, we compare carriers and benefit levels so that the protection you add is both useful and affordable.</p>
</div>{" "}</div>{" "}</section>{" "}<section className="section tint consult" id="consult" tabIndex={-1} aria-labelledby="consult-title">{" "}<div className="container consult-faq">{" "}<ConsultPanel kicker={<>Request a consultation</>} title={<>Speak with us about Ancillary</>} lede={<>Share a few details, and we will reach out personally to arrange a conversation at a time that suits you. There is never any cost or obligation for our guidance.</>} category="Senior Benefits" coverage="Ancillary" followFrom />{" "}<aside className="consult-faq-aside" aria-labelledby="cfaq-title">{" "}<p className="kicker">Common questions</p>{" "}<h2 id="cfaq-title">Ancillary, answered</h2>{" "}<Faq className="faq cfaq" items={[{ qid: "cfaq-q1", aid: "cfaq-a1", open: true, q: <>Do these plans replace our health insurance?</>, a: <><p>No. Ancillary plans are designed to supplement your primary coverage rather than replace it. They fill specific needs such as routine dental care or provide cash benefits that help with costs your health plan does not cover.</p>
</> }, { qid: "cfaq-q2", aid: "cfaq-a2", open: false, q: <>Can we purchase ancillary coverage on its own?</>, a: <><p>In most cases, yes. Seniors, individuals and families can usually purchase these plans individually, and employers can offer them to their teams as part of a group or voluntary benefits program.</p>
</> }, { qid: "cfaq-q3", aid: "cfaq-a3", open: false, q: <>How are cash benefits paid?</>, a: <><p>Accident, critical illness, hospital indemnity and cancer plans generally pay benefits directly to you once a covered claim is approved. The funds are yours to use as you see fit, whether for medical bills, travel, childcare or everyday household expenses.</p>
</> }]} />{" "}<p className="fine">Prefer to talk it through? Call{" "}<a href="tel:+19735247188" data-config="phone-link"><span data-config="phone">(973) 524-7188</span></a>{" "}and we will answer in person.</p>{" "}</aside>{" "}</div>{" "}</section>{" "}</main>
    </>
  )
}
