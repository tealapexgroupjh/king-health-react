import { createFileRoute, Link } from '@tanstack/react-router'
import { ConsultPanel } from '~/components/ConsultPanel'
import { Faq } from '~/components/Faq'
import { usePageEnhancements } from '~/lib/usePageEnhancements'

/* Converted from indexed-universal-life.html (King Health, Summit). Page copy and markup are unchanged. */
const head = {
  "meta": [
    {
      "title": "Indexed Universal Life in NJ and NC | King Health"
    },
    {
      "name": "description",
      "content": "Indexed universal life in Newark and across New Jersey: permanent coverage with cash value linked to an index, a floor and a cap. Call us to learn more."
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
      "content": "Indexed Universal Life in NJ and NC | King Health"
    },
    {
      "property": "og:description",
      "content": "Indexed universal life in Newark and across New Jersey: permanent coverage with cash value linked to an index, a floor and a cap. Call us to learn more."
    },
    {
      "property": "og:url",
      "content": "https://kinghealthdirect.com/indexed-universal-life"
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
      "content": "Indexed Universal Life in NJ and NC | King Health"
    },
    {
      "name": "twitter:description",
      "content": "Indexed universal life in Newark and across New Jersey: permanent coverage with cash value linked to an index, a floor and a cap. Call us to learn more."
    },
    {
      "name": "twitter:image",
      "content": "https://kinghealthdirect.com/assets/og/king-health-og.jpg"
    }
  ],
  "links": [
    {
      "rel": "canonical",
      "href": "https://kinghealthdirect.com/indexed-universal-life"
    }
  ],
  "scripts": [
    {
      "type": "application/ld+json",
      "children": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"https://kinghealthdirect.com/#organization\",\"name\":\"King Health\",\"legalName\":\"King Health LLC\",\"url\":\"https://kinghealthdirect.com/\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://kinghealthdirect.com/brand/king-health-lockup.png\",\"width\":1000,\"height\":659},\"sameAs\":[\"https://www.facebook.com/kinghealthdirect\",\"https://www.instagram.com/kinghealthdirect\",\"https://wa.me/19735247188?text=Hello%20Javon%2C%20I%20found%20King%20Health%20online%20and%20would%20like%20to%20talk%20about%20my%20coverage.\",\"https://www.google.com/maps?cid=9265971853131828090\"],\"contactPoint\":{\"@type\":\"ContactPoint\",\"telephone\":\"+1-973-524-7188\",\"contactType\":\"customer service\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}],\"availableLanguage\":\"en\",\"email\":\"Javon@kinghealthdirect.com\"}},{\"@type\":\"WebSite\",\"@id\":\"https://kinghealthdirect.com/#website\",\"url\":\"https://kinghealthdirect.com/\",\"name\":\"King Health\",\"inLanguage\":\"en-US\",\"publisher\":{\"@id\":\"https://kinghealthdirect.com/#organization\"}},{\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://kinghealthdirect.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Retirement\",\"item\":\"https://kinghealthdirect.com/retirement\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Indexed Universal Life\",\"item\":\"https://kinghealthdirect.com/indexed-universal-life\"}]},{\"@type\":\"Service\",\"name\":\"Indexed Universal Life\",\"serviceType\":\"Indexed Universal Life\",\"url\":\"https://kinghealthdirect.com/indexed-universal-life\",\"provider\":{\"@type\":\"InsuranceAgency\",\"@id\":\"https://kinghealthdirect.com/#agency\",\"name\":\"King Health\",\"url\":\"https://kinghealthdirect.com/\",\"telephone\":\"+1-973-524-7188\"},\"description\":\"Indexed universal life provides permanent coverage and cash value that can grow with a market index, protected by a floor and moderated by a cap.\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}]},{\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Is our cash value invested in the stock market?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"No. Interest is credited based on the performance of an index, but your cash value is not invested directly in the market. This is what allows the floor to protect your account from index losses.\"}},{\"@type\":\"Question\",\"name\":\"How can indexed universal life support retirement?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Once sufficient cash value has accumulated, you may access it through policy loans or withdrawals to supplement retirement income. Because access affects the death benefit and the long term health of the policy, we plan these distributions carefully with you.\"}},{\"@type\":\"Question\",\"name\":\"Are the illustrated values guaranteed?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Illustrations show how a policy may perform under stated assumptions, and actual results will vary with index performance and policy charges. We review the guaranteed values alongside the illustrated values so that you understand the full range of outcomes.\"}}]}]}"
    }
  ]
}

export const Route = createFileRoute('/indexed-universal-life')({
  head: () => head,
  component: IndexedUniversalLifePage,
})

function IndexedUniversalLifePage() {
  usePageEnhancements()
  return (
    <>
<nav className="subnav" aria-label="Retirement pages" data-from="retirement"><div className="container sn"><ul className="sn-list"><li className="sn-label-item"><Link to="/retirement" className="sn-label">Retirement</Link></li><li><Link to="/annuities">Annuities</Link></li><li><Link to="/indexed-universal-life" aria-current="page">Indexed Universal Life</Link></li></ul>
</div>
</nav>{" "}
<main id="main" tabIndex={-1}>{" "}<section className="banner" aria-labelledby="page-title">{" "}<div className="hero-media hero-wide"><div className="hero-photo"><img src="/media/photos/family-kitchen-plan.jpg" alt="" width="1800" height="1200" loading="eager" fetchPriority="high" style={{ "objectPosition": "55% 40%" }} /></div>
</div>{" "}<div className="container">{" "}<div className="hero-band band">{" "}<p className="kicker"><Link to="/retirement">Retirement</Link></p>
<h1 id="page-title" tabIndex={-1}>Indexed Universal Life</h1>{" "}<p className="band-lede">Indexed universal life that combines lasting protection with the potential for growth.</p>{" "}</div>{" "}</div>{" "}</section>{" "}<section className="section after-band" aria-labelledby="glance-title">{" "}<div className="container prow">{" "}<div className="prow-body reveal">{" "}<p className="kicker">Indexed Universal Life</p>{" "}<h2 className="h2" id="glance-title">Coverage at a glance</h2>{" "}<div className="copy"><p>Indexed universal life is permanent life insurance that pairs a death benefit with a cash value account. The cash value earns interest credited from the performance of a market index, such as a broad stock index, without being directly invested in the market. A floor protects the cash value from losses when the index declines, while a cap or participation rate limits the amount of interest credited in strong years.</p>
<p>Premiums are flexible within the limits of the policy, and the cash value grows on a tax deferred basis. It may be accessed through policy loans or withdrawals, which reduce the death benefit and the cash value if they are not repaid. Policy charges continue to apply each year regardless of index performance, and caps, floors, participation rates and riders vary by carrier and by product.</p>
</div>{" "}</div>{" "}<div className="prow-media reveal"><img src="/media/photos/advisor-client-meeting.jpg" alt="An advisor in a dark suit reviewing paperwork with a client at a bright office desk" width="1800" height="1200" decoding="async" style={{ "objectPosition": "62% 32%" }} /></div>{" "}</div>{" "}</section>{" "}<section className="section tint" aria-labelledby="suits-title">{" "}<div className="container sec-head sec-copy reveal">{" "}<h2 className="h2" id="suits-title">Who it is designed for</h2>{" "}<div className="copy"><p>Indexed universal life is designed for people who want lifelong protection for their families along with the potential to build cash value that may supplement retirement income. It is often considered by established professionals, business owners and families who have already funded their employer retirement plans and would like an additional tax advantaged resource.</p>
</div>{" "}</div>{" "}</section>{" "}<section className="section" aria-labelledby="how-title">{" "}<div className="container prow how">{" "}<div className="prow-body reveal"><h2 className="h2" id="how-title">How the plan works</h2>
<div className="copy"><p>Each premium you pay, after policy charges, is added to the cash value, which you may allocate between a fixed account and index accounts. At the end of each crediting period, interest is credited based on the index performance, never less than the floor and never more than the cap. Over time, this structure is designed to capture a portion of market growth while protecting the account from market losses.</p>
<p>Because indexed universal life is a long term strategy, careful design and consistent funding are essential to keeping the policy in force as intended. We illustrate how the policy may perform under a range of assumptions, explain every charge and feature clearly and review the policy with you regularly so that it stays aligned with your goals.</p>
</div>
</div>{" "}<div className="reveal"><figure className="chart chart-iul">{" "}<p className="chart-title">How interest is credited</p>{" "}<div className="chart-stage"><svg viewBox="0 44 560 168" role="img" aria-label="Illustration: across a run of years the market index rises and falls, sometimes below the baseline. Your credited interest follows the gains but is trimmed at a dashed cap line, and it never falls below the floor in down years."><rect className="bar s-a" style={{ "--i": "0" }} x="10" y="95.0" width="17" height="55.0" /><rect className="bar s-b" style={{ "--i": "1" }} x="30" y="95.0" width="17" height="55.0" /><rect className="bar s-a" style={{ "--i": "1" }} x="58" y="65.0" width="17" height="85.0" /><rect className="bar s-b" style={{ "--i": "2" }} x="78" y="90.0" width="17" height="60.0" /><rect className="bar neg s-a" style={{ "--i": "2" }} x="106" y="150" width="17" height="45.0" /><rect className="bar s-b" style={{ "--i": "3" }} x="126" y="146" width="17" height="4" /><rect className="bar s-a" style={{ "--i": "3" }} x="154" y="120.0" width="17" height="30.0" /><rect className="bar s-b" style={{ "--i": "4" }} x="174" y="120.0" width="17" height="30.0" /><rect className="bar s-a" style={{ "--i": "4" }} x="202" y="55.0" width="17" height="95.0" /><rect className="bar s-b" style={{ "--i": "5" }} x="222" y="90.0" width="17" height="60.0" /><rect className="bar neg s-a" style={{ "--i": "5" }} x="250" y="150" width="17" height="30.0" /><rect className="bar s-b" style={{ "--i": "6" }} x="270" y="146" width="17" height="4" /><rect className="bar s-a" style={{ "--i": "6" }} x="298" y="88.0" width="17" height="62.0" /><rect className="bar s-b" style={{ "--i": "7" }} x="318" y="90.0" width="17" height="60.0" /><rect className="bar s-a" style={{ "--i": "7" }} x="346" y="132.0" width="17" height="18.0" /><rect className="bar s-b" style={{ "--i": "8" }} x="366" y="132.0" width="17" height="18.0" /><rect className="bar s-a" style={{ "--i": "8" }} x="394" y="70.0" width="17" height="80.0" /><rect className="bar s-b" style={{ "--i": "9" }} x="414" y="90.0" width="17" height="60.0" /><rect className="bar neg s-a" style={{ "--i": "9" }} x="442" y="150" width="17" height="55.0" /><rect className="bar s-b" style={{ "--i": "10" }} x="462" y="146" width="17" height="4" /><line className="cap" x1="4" y1="90.0" x2="490" y2="90.0" /><line className="floor" x1="4" y1="150" x2="490" y2="150" /></svg><span className="ov ov-r" style={{ "left": "88.93%", "top": "27.38%" }}>Cap</span><span className="ov ov-r" style={{ "left": "88.93%", "top": "63.10%" }}>Floor</span></div>{" "}<div className="chart-axis" aria-hidden="true"><span>Early years</span><span>Later years</span></div>{" "}<ul className="chart-legend"><li><span className="key key-a" aria-hidden="true"></span>Market index</li><li><span className="key key-b" aria-hidden="true"></span>Your credited interest</li><li><span className="key key-cap" aria-hidden="true"></span>Cap</li><li><span className="key key-floor" aria-hidden="true"></span>Floor</li></ul>{" "}<figcaption>Interest is credited from index gains up to a cap, and a floor protects the cash value in down years.<span className="chart-note">Illustration only. Actual results depend on the policy and carrier.</span></figcaption>{" "}</figure>
</div>{" "}</div>{" "}</section>{" "}<section className="section tint consult" id="consult" tabIndex={-1} aria-labelledby="consult-title">{" "}<div className="container consult-faq">{" "}<ConsultPanel kicker={<>Request a consultation</>} title={<>Speak with us about Indexed Universal Life</>} lede={<>Share a few details, and we will reach out personally to arrange a conversation at a time that suits you. There is never any cost or obligation for our guidance.</>} category="Retirement" coverage="Indexed Universal Life" />{" "}<aside className="consult-faq-aside" aria-labelledby="cfaq-title">{" "}<p className="kicker">Common questions</p>{" "}<h2 id="cfaq-title">Indexed Universal Life, answered</h2>{" "}<Faq className="faq cfaq" items={[{ qid: "cfaq-q1", aid: "cfaq-a1", open: true, q: <>Is our cash value invested in the stock market?</>, a: <><p>No. Interest is credited based on the performance of an index, but your cash value is not invested directly in the market. This is what allows the floor to protect your account from index losses.</p>
</> }, { qid: "cfaq-q2", aid: "cfaq-a2", open: false, q: <>How can indexed universal life support retirement?</>, a: <><p>Once sufficient cash value has accumulated, you may access it through policy loans or withdrawals to supplement retirement income. Because access affects the death benefit and the long term health of the policy, we plan these distributions carefully with you.</p>
</> }, { qid: "cfaq-q3", aid: "cfaq-a3", open: false, q: <>Are the illustrated values guaranteed?</>, a: <><p>Illustrations show how a policy may perform under stated assumptions, and actual results will vary with index performance and policy charges. We review the guaranteed values alongside the illustrated values so that you understand the full range of outcomes.</p>
</> }]} />{" "}<p className="fine">Prefer to talk it through? Call{" "}<a href="tel:+19735247188" data-config="phone-link"><span data-config="phone">(973) 524-7188</span></a>{" "}and we will answer in person.</p>{" "}</aside>{" "}</div>{" "}</section>{" "}</main>
    </>
  )
}
