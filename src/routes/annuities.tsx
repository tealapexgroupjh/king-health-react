import { createFileRoute, Link } from '@tanstack/react-router'
import { ConsultPanel } from '~/components/ConsultPanel'
import { Faq } from '~/components/Faq'
import { usePageEnhancements } from '~/lib/usePageEnhancements'

/* Converted from annuities.html (King Health, Summit). Page copy and markup are unchanged. */
const head = {
  "meta": [
    {
      "title": "Annuities in New Jersey and North Carolina | King Health"
    },
    {
      "name": "description",
      "content": "Fixed, fixed indexed and income annuities in Newark and across New Jersey, built to protect savings and provide dependable income. Call King Health to review."
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
      "content": "Annuities in New Jersey and North Carolina | King Health"
    },
    {
      "property": "og:description",
      "content": "Fixed, fixed indexed and income annuities in Newark and across New Jersey, built to protect savings and provide dependable income. Call King Health to review."
    },
    {
      "property": "og:url",
      "content": "https://kinghealthdirect.com/annuities"
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
      "content": "Annuities in New Jersey and North Carolina | King Health"
    },
    {
      "name": "twitter:description",
      "content": "Fixed, fixed indexed and income annuities in Newark and across New Jersey, built to protect savings and provide dependable income. Call King Health to review."
    },
    {
      "name": "twitter:image",
      "content": "https://kinghealthdirect.com/assets/og/king-health-og.jpg"
    }
  ],
  "links": [
    {
      "rel": "canonical",
      "href": "https://kinghealthdirect.com/annuities"
    }
  ],
  "scripts": [
    {
      "type": "application/ld+json",
      "children": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"https://kinghealthdirect.com/#organization\",\"name\":\"King Health\",\"legalName\":\"King Health LLC\",\"url\":\"https://kinghealthdirect.com/\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://kinghealthdirect.com/brand/king-health-lockup.png\",\"width\":1000,\"height\":659},\"sameAs\":[\"https://www.facebook.com/kinghealthdirect\",\"https://www.instagram.com/kinghealthdirect\",\"https://wa.me/19735247188?text=Hello%20Javon%2C%20I%20found%20King%20Health%20online%20and%20would%20like%20to%20talk%20about%20my%20coverage.\",\"https://www.google.com/maps?cid=9265971853131828090\"],\"contactPoint\":{\"@type\":\"ContactPoint\",\"telephone\":\"+1-973-524-7188\",\"contactType\":\"customer service\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}],\"availableLanguage\":\"en\",\"email\":\"Javon@kinghealthdirect.com\"}},{\"@type\":\"WebSite\",\"@id\":\"https://kinghealthdirect.com/#website\",\"url\":\"https://kinghealthdirect.com/\",\"name\":\"King Health\",\"inLanguage\":\"en-US\",\"publisher\":{\"@id\":\"https://kinghealthdirect.com/#organization\"}},{\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://kinghealthdirect.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Retirement\",\"item\":\"https://kinghealthdirect.com/retirement\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Annuities\",\"item\":\"https://kinghealthdirect.com/annuities\"}]},{\"@type\":\"Service\",\"name\":\"Annuities\",\"serviceType\":\"Annuities\",\"url\":\"https://kinghealthdirect.com/annuities\",\"provider\":{\"@type\":\"InsuranceAgency\",\"@id\":\"https://kinghealthdirect.com/#agency\",\"name\":\"King Health\",\"url\":\"https://kinghealthdirect.com/\",\"telephone\":\"+1-973-524-7188\"},\"description\":\"Fixed, fixed indexed and income annuities can protect your savings, grow on a tax deferred basis and provide income you can rely on for as long as you live.\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}]},{\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Can we lose money in a fixed indexed annuity?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"The principal and credited interest in a fixed indexed annuity are protected from index declines. However, surrender charges, optional rider fees or withdrawals beyond the contract allowance can reduce the value, so we review these terms carefully before you commit.\"}},{\"@type\":\"Question\",\"name\":\"Can we access our money if we need it?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Most annuities allow a portion of the value to be withdrawn each year without a surrender charge, and many waive charges in certain circumstances such as confinement to a nursing facility. Larger withdrawals during the surrender period may incur charges and taxes, which we explain fully.\"}},{\"@type\":\"Question\",\"name\":\"How is annuity income taxed?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Earnings are taxed as ordinary income when withdrawn, and the treatment of income payments depends on how the annuity was funded. We recommend consulting your tax professional, and we are glad to coordinate with them.\"}}]}]}"
    }
  ]
}

export const Route = createFileRoute('/annuities')({
  head: () => head,
  component: AnnuitiesPage,
})

function AnnuitiesPage() {
  usePageEnhancements()
  return (
    <>
<nav className="subnav" aria-label="Retirement pages" data-from="retirement"><div className="container sn"><ul className="sn-list"><li className="sn-label-item"><Link to="/retirement" className="sn-label">Retirement</Link></li><li><Link to="/annuities" aria-current="page">Annuities</Link></li><li><Link to="/indexed-universal-life">Indexed Universal Life</Link></li></ul>
</div>
</nav>{" "}
<main id="main" tabIndex={-1}>{" "}<section className="banner" aria-labelledby="page-title">{" "}<div className="hero-media hero-wide"><div className="hero-photo"><img src="/media/photos/senior-signing.jpg" alt="" width="1800" height="1202" loading="eager" fetchPriority="high" style={{ "objectPosition": "50% 0%" }} /></div>
</div>{" "}<div className="container">{" "}<div className="hero-band band">{" "}<p className="kicker"><Link to="/retirement">Retirement</Link></p>
<h1 id="page-title" tabIndex={-1}>Annuities</h1>{" "}<p className="band-lede">Annuities that turn your savings into dependable retirement income.</p>{" "}</div>{" "}</div>{" "}</section>{" "}<section className="section after-band" aria-labelledby="glance-title">{" "}<div className="container prow">{" "}<div className="prow-body reveal">{" "}<p className="kicker">Annuities</p>{" "}<h2 className="h2" id="glance-title">Coverage at a glance</h2>{" "}<div className="copy"><p>An annuity is a contract with an insurance company in which you make a lump sum payment or a series of payments, and the company agrees to credit interest and, when you choose, to provide income. Fixed annuities credit a declared interest rate for a set period. Fixed indexed annuities credit interest based in part on the performance of a market index, subject to a cap or participation rate, while protecting your principal from index declines. Income annuities convert a sum of money into a stream of payments that may begin right away or at a future date and may last for life.</p>
<p>Earnings within an annuity grow tax deferred until withdrawn. Annuities are long term products, and most include a surrender period during which withdrawals above a certain amount incur charges; withdrawals may also be subject to income tax and, depending on your age, a federal tax penalty. Annuities are not bank deposits and are not insured by the FDIC, and their guarantees are backed by the claims paying ability of the issuing insurer.</p>
</div>{" "}</div>{" "}<div className="prow-media reveal"><img src="/media/photos/advisor-lounge-meeting.jpg" alt="Clients meeting with an advisor in a calm, bright lounge" width="1800" height="1202" decoding="async" style={{ "objectPosition": "55% 40%" }} /></div>{" "}</div>{" "}</section>{" "}<section className="section tint" aria-labelledby="suits-title">{" "}<div className="container sec-head sec-copy reveal">{" "}<h2 className="h2" id="suits-title">Who it is designed for</h2>{" "}<div className="copy"><p>Annuities are designed for people approaching or enjoying retirement who would like to protect a portion of their savings from market declines, create a dependable income stream to cover essential expenses, or accumulate savings on a tax deferred basis beyond what employer plans and individual retirement accounts allow.</p>
</div>{" "}</div>{" "}</section>{" "}<section className="section" aria-labelledby="how-title">{" "}<div className="container prow how">{" "}<div className="prow-body reveal"><h2 className="h2" id="how-title">How the plan works</h2>
<div className="copy"><p>Most annuities have an accumulation phase, during which your money earns interest according to the contract, and an income phase, during which the annuity pays you. Some contracts allow you to add an income rider that provides lifetime withdrawals regardless of the account value, typically for an additional cost.</p>
<p>We begin by understanding your income needs, your other resources, your time horizon and your comfort with tradeoffs between growth, guarantees and access. We then compare contracts across carriers, explaining crediting methods, surrender schedules, fees and income options in plain language, and recommend a contract only when it suits your goals.</p>
</div>
</div>{" "}<div className="reveal"><figure className="chart chart-ring">{" "}<p className="chart-title">Income built on a guaranteed foundation</p>{" "}<div className="chart-stage"><svg viewBox="0 0 200 200" role="img" aria-label="Illustration: a ring that sweeps to full, made mostly of guaranteed income with a smaller share of growth potential."><circle className="track" cx="100" cy="100" r="76" pathLength="100" /><circle className="seg seg-a" cx="100" cy="100" r="76" pathLength="100" /><circle className="seg seg-b" cx="100" cy="100" r="76" pathLength="100" /><circle className="seg seg-gold" cx="100" cy="100" r="89" pathLength="100" /></svg><span className="ring-center" aria-hidden="true">Income<br />for life</span><ul className="chart-legend"><li><span className="key key-b" aria-hidden="true"></span>Guaranteed income</li><li><span className="key key-a" aria-hidden="true"></span>Growth potential</li><li><span className="key key-gold-line" aria-hidden="true"></span>The guarantee</li></ul>
</div>{" "}<figcaption>A guaranteed income base, with room for growth linked to the contract's crediting method.<span className="chart-note">Illustration only. Actual results depend on the policy and carrier.</span></figcaption>{" "}</figure>
</div>{" "}</div>{" "}</section>{" "}<section className="section tint consult" id="consult" tabIndex={-1} aria-labelledby="consult-title">{" "}<div className="container consult-faq">{" "}<ConsultPanel kicker={<>Request a consultation</>} title={<>Speak with us about Annuities</>} lede={<>Share a few details, and we will reach out personally to arrange a conversation at a time that suits you. There is never any cost or obligation for our guidance.</>} category="Retirement" coverage="Annuities" />{" "}<aside className="consult-faq-aside" aria-labelledby="cfaq-title">{" "}<p className="kicker">Common questions</p>{" "}<h2 id="cfaq-title">Annuities, answered</h2>{" "}<Faq className="faq cfaq" items={[{ qid: "cfaq-q1", aid: "cfaq-a1", open: true, q: <>Can we lose money in a fixed indexed annuity?</>, a: <><p>The principal and credited interest in a fixed indexed annuity are protected from index declines. However, surrender charges, optional rider fees or withdrawals beyond the contract allowance can reduce the value, so we review these terms carefully before you commit.</p>
</> }, { qid: "cfaq-q2", aid: "cfaq-a2", open: false, q: <>Can we access our money if we need it?</>, a: <><p>Most annuities allow a portion of the value to be withdrawn each year without a surrender charge, and many waive charges in certain circumstances such as confinement to a nursing facility. Larger withdrawals during the surrender period may incur charges and taxes, which we explain fully.</p>
</> }, { qid: "cfaq-q3", aid: "cfaq-a3", open: false, q: <>How is annuity income taxed?</>, a: <><p>Earnings are taxed as ordinary income when withdrawn, and the treatment of income payments depends on how the annuity was funded. We recommend consulting your tax professional, and we are glad to coordinate with them.</p>
</> }]} />{" "}<p className="fine">Prefer to talk it through? Call{" "}<a href="tel:+19735247188" data-config="phone-link"><span data-config="phone">(973) 524-7188</span></a>{" "}and we will answer in person.</p>{" "}</aside>{" "}</div>{" "}</section>{" "}</main>
    </>
  )
}
