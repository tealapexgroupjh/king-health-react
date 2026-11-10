import { createFileRoute, Link } from '@tanstack/react-router'
import { ConsultPanel } from '~/components/ConsultPanel'
import { Faq } from '~/components/Faq'
import { usePageEnhancements } from '~/lib/usePageEnhancements'
import { asset, cdnHead } from '~/lib/assets'

/* Converted from term-life.html (King Health, Summit). Page copy and markup are unchanged. */
const head = {
  "meta": [
    {
      "title": "Term Life Insurance in NJ and North Carolina | King Health"
    },
    {
      "name": "description",
      "content": "Term life insurance in Newark and across New Jersey, sized to the years your family depends on your income and compared across carriers. Call King Health."
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
      "content": "Term Life Insurance in NJ and North Carolina | King Health"
    },
    {
      "property": "og:description",
      "content": "Term life insurance in Newark and across New Jersey, sized to the years your family depends on your income and compared across carriers. Call King Health."
    },
    {
      "property": "og:url",
      "content": "https://kinghealthdirect.com/term-life"
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
      "content": "Term Life Insurance in NJ and North Carolina | King Health"
    },
    {
      "name": "twitter:description",
      "content": "Term life insurance in Newark and across New Jersey, sized to the years your family depends on your income and compared across carriers. Call King Health."
    },
    {
      "name": "twitter:image",
      "content": "https://kinghealthdirect.com/assets/og/king-health-og.jpg"
    }
  ],
  "links": [
    {
      "rel": "canonical",
      "href": "https://kinghealthdirect.com/term-life"
    }
  ],
  "scripts": [
    {
      "type": "application/ld+json",
      "children": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"https://kinghealthdirect.com/#organization\",\"name\":\"King Health\",\"legalName\":\"King Health LLC\",\"url\":\"https://kinghealthdirect.com/\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://kinghealthdirect.com/brand/king-health-lockup.png\",\"width\":1000,\"height\":659},\"sameAs\":[\"https://www.facebook.com/kinghealthdirect\",\"https://www.instagram.com/kinghealthdirect\",\"https://wa.me/19735247188?text=Hello%20Javon%2C%20I%20found%20King%20Health%20online%20and%20would%20like%20to%20talk%20about%20my%20coverage.\",\"https://www.google.com/maps?cid=9265971853131828090\"],\"contactPoint\":{\"@type\":\"ContactPoint\",\"telephone\":\"+1-973-524-7188\",\"contactType\":\"customer service\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}],\"availableLanguage\":\"en\",\"email\":\"Javon@kinghealthdirect.com\"}},{\"@type\":\"WebSite\",\"@id\":\"https://kinghealthdirect.com/#website\",\"url\":\"https://kinghealthdirect.com/\",\"name\":\"King Health\",\"inLanguage\":\"en-US\",\"publisher\":{\"@id\":\"https://kinghealthdirect.com/#organization\"}},{\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://kinghealthdirect.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Individual Benefits\",\"item\":\"https://kinghealthdirect.com/individual-benefits\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Term Life\",\"item\":\"https://kinghealthdirect.com/term-life\"}]},{\"@type\":\"Service\",\"name\":\"Term Life\",\"serviceType\":\"Term Life\",\"url\":\"https://kinghealthdirect.com/term-life\",\"provider\":{\"@type\":\"InsuranceAgency\",\"@id\":\"https://kinghealthdirect.com/#agency\",\"name\":\"King Health\",\"url\":\"https://kinghealthdirect.com/\",\"telephone\":\"+1-973-524-7188\"},\"description\":\"Term life insurance provides substantial protection for a defined period at an accessible cost, helping your family stay secure while they depend on your income.\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}]},{\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"How much coverage does our family need?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"The right amount depends on your income, your debts, your children's future needs and the savings you already have. We work through these factors with you and recommend a figure that provides meaningful protection at a premium you can sustain.\"}},{\"@type\":\"Question\",\"name\":\"What happens when the term ends?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Depending on your policy, you may convert some or all of the coverage to a permanent policy, renew it at a higher premium, or allow it to end if your family no longer needs it. We review these choices with you well before the term concludes.\"}},{\"@type\":\"Question\",\"name\":\"Is a medical examination required?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Some policies require a brief examination, while others rely on health questions and records alone. We will explain the underwriting path for each carrier we recommend.\"}}]}]}"
    }
  ]
}

export const Route = createFileRoute('/term-life')({
  head: () => cdnHead(head),
  component: TermLifePage,
})

function TermLifePage() {
  usePageEnhancements()
  return (
    <>
<nav className="subnav" aria-label="Individual Benefits pages" data-from="individual"><div className="container sn"><ul className="sn-list"><li className="sn-label-item"><Link to="/individual-benefits" className="sn-label">Individual Benefits</Link></li><li><Link to="/individual-health">Individual Health</Link></li><li><Link to="/whole-life">Whole Life</Link></li><li><Link to="/term-life" aria-current="page">Term Life</Link></li><li><Link to="/ancillary" search={{ from: "individual" }}>Ancillary</Link></li><li><Link to="/dental-vision">Dental and Vision</Link></li></ul>
</div>
</nav>{" "}
<main id="main" tabIndex={-1}>{" "}<section className="banner" aria-labelledby="page-title">{" "}<div className="hero-media hero-wide"><div className="hero-photo"><img src={asset('/media/photos/parents-baby-dusk.jpg')} alt="" width="1800" height="1200" loading="eager" fetchPriority="high" style={{ "objectPosition": "50% 64%" }} /></div>
</div>{" "}<div className="container">{" "}<div className="hero-band band">{" "}<p className="kicker"><Link to="/individual-benefits">Individual Benefits</Link></p>
<h1 id="page-title" tabIndex={-1}>Term Life</h1>{" "}<p className="band-lede">Term life insurance that protects your family through the years that matter most.</p>{" "}</div>{" "}</div>{" "}</section>{" "}<section className="section after-band" aria-labelledby="glance-title">{" "}<div className="container prow">{" "}<div className="prow-body reveal">{" "}<p className="kicker">Term Life</p>{" "}<h2 className="h2" id="glance-title">Coverage at a glance</h2>{" "}<div className="copy"><p>Term life insurance provides a death benefit for a defined period, often chosen to match the years of a mortgage, the years until children are grown or the years remaining until retirement. Premiums generally remain level throughout the term, and because the coverage is temporary, term life typically offers the most protection for the lowest premium.</p>
<p>Many term policies include a conversion option that allows you to exchange some or all of the coverage for a permanent policy without new medical underwriting, within the limits your contract sets. Some policies are also renewable at the end of the term, usually at a higher premium. Features and availability vary by carrier and by state.</p>
</div>{" "}</div>{" "}<div className="prow-media reveal"><img src={asset('/media/photos/family-outdoor-warm.jpg')} alt="Parents embracing their baby outdoors in warm evening light" width="867" height="1300" decoding="async" style={{ "objectPosition": "50% 30%" }} /></div>{" "}</div>{" "}</section>{" "}<section className="section tint" aria-labelledby="suits-title">{" "}<div className="container sec-head sec-copy reveal">{" "}<h2 className="h2" id="suits-title">Who it is designed for</h2>{" "}<div className="copy"><p>Term life insurance is designed for people whose families rely on their income, including young parents, homeowners with a mortgage, couples planning for the future and business owners who want to protect a partner or a loan. It is especially valuable when a household needs a meaningful amount of protection at a premium that fits a growing family budget.</p>
</div>{" "}</div>{" "}</section>{" "}<section className="section" aria-labelledby="how-title">{" "}<div className="container prow how">{" "}<div className="prow-body reveal"><h2 className="h2" id="how-title">How the plan works</h2>
<div className="copy"><p>You select a coverage amount and a term length that reflect your family's needs, and you pay a level premium for the duration of the term. If you pass away while the policy is in force, your beneficiaries receive the death benefit, generally free of income tax, to replace your income, pay off debts or fund future goals.</p>
<p>We help you determine an appropriate amount of coverage by considering your income, your debts and the goals you hold for your family. We then compare carriers whose underwriting suits your health profile, guide you through the application and remind you of conversion opportunities as the end of your term approaches.</p>
</div>
</div>{" "}<div className="reveal"><figure className="chart chart-term">{" "}<p className="chart-title">Coverage sized to the years that matter most</p>{" "}<div className="chart-stage"><svg viewBox="0 0 520 220" role="img" aria-label="Illustration: what a family would need declines in steps from today to later years, while level term coverage stays constant above it for the full term."><rect className="cband" x="8" y="26" width="446" height="178" /><rect className="band-outline" x="8" y="26" width="446" height="178" /><rect className="bar s-b" style={{ "--i": "0" }} x="14" y="54" width="30" height="150" /><rect className="bar s-b" style={{ "--i": "1" }} x="54" y="64" width="30" height="140" /><rect className="bar s-b" style={{ "--i": "2" }} x="94" y="76" width="30" height="128" /><rect className="bar s-b" style={{ "--i": "3" }} x="134" y="89" width="30" height="115" /><rect className="bar s-b" style={{ "--i": "4" }} x="174" y="103" width="30" height="101" /><rect className="bar s-b" style={{ "--i": "5" }} x="214" y="117" width="30" height="87" /><rect className="bar s-b" style={{ "--i": "6" }} x="254" y="132" width="30" height="72" /><rect className="bar s-b" style={{ "--i": "7" }} x="294" y="147" width="30" height="57" /><rect className="bar s-b" style={{ "--i": "8" }} x="334" y="162" width="30" height="42" /><rect className="bar s-b" style={{ "--i": "9" }} x="374" y="176" width="30" height="28" /><rect className="bar s-b" style={{ "--i": "10" }} x="414" y="190" width="30" height="14" /><line className="baseline" x1="4" y1="204" x2="516" y2="204" /></svg><span className="ov" style={{ "left": "3.08%", "top": "15.91%" }}>Your term coverage</span></div>{" "}<div className="chart-axis" aria-hidden="true"><span>Today</span><span>Later years</span></div>{" "}<ul className="chart-legend"><li><span className="key key-outline" aria-hidden="true"></span>Your term coverage</li><li><span className="key key-b" aria-hidden="true"></span>What your family would need</li></ul>{" "}<figcaption>Level coverage sized to the years your family depends on your income.<span className="chart-note">Illustration only. Actual results depend on the policy and carrier.</span></figcaption>{" "}</figure>
</div>{" "}</div>{" "}</section>{" "}<section className="section tint consult" id="consult" tabIndex={-1} aria-labelledby="consult-title">{" "}<div className="container consult-faq">{" "}<ConsultPanel kicker={<>Request a consultation</>} title={<>Speak with us about Term Life</>} lede={<>Share a few details, and we will reach out personally to arrange a conversation at a time that suits you. There is never any cost or obligation for our guidance.</>} category="Individual Benefits" coverage="Term Life" />{" "}<aside className="consult-faq-aside" aria-labelledby="cfaq-title">{" "}<p className="kicker">Common questions</p>{" "}<h2 id="cfaq-title">Term Life, answered</h2>{" "}<Faq className="faq cfaq" items={[{ qid: "cfaq-q1", aid: "cfaq-a1", open: true, q: <>How much coverage does our family need?</>, a: <><p>The right amount depends on your income, your debts, your children's future needs and the savings you already have. We work through these factors with you and recommend a figure that provides meaningful protection at a premium you can sustain.</p>
</> }, { qid: "cfaq-q2", aid: "cfaq-a2", open: false, q: <>What happens when the term ends?</>, a: <><p>Depending on your policy, you may convert some or all of the coverage to a permanent policy, renew it at a higher premium, or allow it to end if your family no longer needs it. We review these choices with you well before the term concludes.</p>
</> }, { qid: "cfaq-q3", aid: "cfaq-a3", open: false, q: <>Is a medical examination required?</>, a: <><p>Some policies require a brief examination, while others rely on health questions and records alone. We will explain the underwriting path for each carrier we recommend.</p>
</> }]} />{" "}<p className="fine">Prefer to talk it through? Call{" "}<a href="tel:+19735247188" data-config="phone-link"><span data-config="phone">(973) 524-7188</span></a>{" "}and we will answer in person.</p>{" "}</aside>{" "}</div>{" "}</section>{" "}</main>
    </>
  )
}
