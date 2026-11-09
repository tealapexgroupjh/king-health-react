import { createFileRoute, Link } from '@tanstack/react-router'
import { ConsultPanel } from '~/components/ConsultPanel'
import { Faq } from '~/components/Faq'
import { usePageEnhancements } from '~/lib/usePageEnhancements'

/* Converted from individual-health.html (King Health, Summit). Page copy and markup are unchanged. */
const head = {
  "meta": [
    {
      "title": "Individual Health Plans in NJ and NC | King Health"
    },
    {
      "name": "description",
      "content": "Individual health insurance in Newark and across New Jersey, comparing marketplace and private plans that fit your household budget. Call King Health today."
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
      "content": "Individual Health Plans in NJ and NC | King Health"
    },
    {
      "property": "og:description",
      "content": "Individual health insurance in Newark and across New Jersey, comparing marketplace and private plans that fit your household budget. Call King Health today."
    },
    {
      "property": "og:url",
      "content": "https://kinghealthdirect.com/individual-health"
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
      "content": "Individual Health Plans in NJ and NC | King Health"
    },
    {
      "name": "twitter:description",
      "content": "Individual health insurance in Newark and across New Jersey, comparing marketplace and private plans that fit your household budget. Call King Health today."
    },
    {
      "name": "twitter:image",
      "content": "https://kinghealthdirect.com/assets/og/king-health-og.jpg"
    }
  ],
  "links": [
    {
      "rel": "canonical",
      "href": "https://kinghealthdirect.com/individual-health"
    }
  ],
  "scripts": [
    {
      "type": "application/ld+json",
      "children": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"https://kinghealthdirect.com/#organization\",\"name\":\"King Health\",\"legalName\":\"King Health LLC\",\"url\":\"https://kinghealthdirect.com/\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://kinghealthdirect.com/brand/king-health-lockup.png\",\"width\":1000,\"height\":659},\"sameAs\":[\"https://www.facebook.com/kinghealthdirect\",\"https://www.instagram.com/kinghealthdirect\",\"https://wa.me/19735247188?text=Hello%20Javon%2C%20I%20found%20King%20Health%20online%20and%20would%20like%20to%20talk%20about%20my%20coverage.\",\"https://www.google.com/maps?cid=9265971853131828090\"],\"contactPoint\":{\"@type\":\"ContactPoint\",\"telephone\":\"+1-973-524-7188\",\"contactType\":\"customer service\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}],\"availableLanguage\":\"en\",\"email\":\"Javon@kinghealthdirect.com\"}},{\"@type\":\"WebSite\",\"@id\":\"https://kinghealthdirect.com/#website\",\"url\":\"https://kinghealthdirect.com/\",\"name\":\"King Health\",\"inLanguage\":\"en-US\",\"publisher\":{\"@id\":\"https://kinghealthdirect.com/#organization\"}},{\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://kinghealthdirect.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Individual Benefits\",\"item\":\"https://kinghealthdirect.com/individual-benefits\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Individual Health\",\"item\":\"https://kinghealthdirect.com/individual-health\"}]},{\"@type\":\"Service\",\"name\":\"Individual Health\",\"serviceType\":\"Individual Health\",\"url\":\"https://kinghealthdirect.com/individual-health\",\"provider\":{\"@type\":\"InsuranceAgency\",\"@id\":\"https://kinghealthdirect.com/#agency\",\"name\":\"King Health\",\"url\":\"https://kinghealthdirect.com/\",\"telephone\":\"+1-973-524-7188\"},\"description\":\"We compare marketplace and private health plans so that you can choose coverage that protects your household and fits comfortably within your budget.\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}]},{\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Can we qualify for help with the cost of coverage?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Many households do. Premium tax credits for marketplace plans are based on household income and size, and we will help you estimate whether you qualify and how much the credit may reduce your premium.\"}},{\"@type\":\"Question\",\"name\":\"What if we need coverage outside the open enrollment period?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"A qualifying life event such as a move, a marriage, a new child or the loss of other coverage may open a special enrollment period. Some private plans also accept applications throughout the year, and we will review which options are available to you.\"}},{\"@type\":\"Question\",\"name\":\"Will our current doctors be in network?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Networks vary from plan to plan, so we check your preferred physicians and hospitals against each option before making a recommendation.\"}}]}]}"
    }
  ]
}

export const Route = createFileRoute('/individual-health')({
  head: () => head,
  component: IndividualHealthPage,
})

function IndividualHealthPage() {
  usePageEnhancements()
  return (
    <>
<nav className="subnav" aria-label="Individual Benefits pages" data-from="individual"><div className="container sn"><ul className="sn-list"><li className="sn-label-item"><Link to="/individual-benefits" className="sn-label">Individual Benefits</Link></li><li><Link to="/individual-health" aria-current="page">Individual Health</Link></li><li><Link to="/whole-life">Whole Life</Link></li><li><Link to="/term-life">Term Life</Link></li><li><Link to="/ancillary" search={{ from: "individual" }}>Ancillary</Link></li><li><Link to="/dental-vision">Dental and Vision</Link></li></ul>
</div>
</nav>{" "}
<main id="main" tabIndex={-1}>{" "}<section className="banner" aria-labelledby="page-title">{" "}<div className="hero-media hero-wide"><div className="hero-photo"><img src="/media/photos/doctor-consult-desk.jpg" alt="" width="1800" height="1200" loading="eager" fetchPriority="high" style={{ "objectPosition": "55% 12%" }} /></div>
</div>{" "}<div className="container">{" "}<div className="hero-band band">{" "}<p className="kicker"><Link to="/individual-benefits">Individual Benefits</Link></p>
<h1 id="page-title" tabIndex={-1}>Individual Health</h1>{" "}<p className="band-lede">Individual health coverage chosen with care for you and your family.</p>{" "}</div>{" "}</div>{" "}</section>{" "}<section className="section after-band" aria-labelledby="glance-title">{" "}<div className="container prow">{" "}<div className="prow-body reveal">{" "}<p className="kicker">Individual Health</p>{" "}<h2 className="h2" id="glance-title">Coverage at a glance</h2>{" "}<div className="copy"><p>Individual health insurance covers people who do not receive coverage through an employer or a government program. Plans offered through the health insurance marketplace include essential health benefits such as preventive care, hospital care and prescription drugs, and they cannot deny coverage or charge more because of existing health conditions. Depending on household income, you may qualify for premium tax credits that reduce your monthly cost.</p>
<p>Private plans purchased outside the marketplace are also available, and some offer different network or pricing structures that may suit particular circumstances. Because the rules, benefits and protections differ between plan types, and because availability varies by state and by carrier, we explain each option clearly before you decide.</p>
</div>{" "}</div>{" "}<div className="prow-media reveal"><img src="/media/photos/pediatric-visit.jpg" alt="A doctor speaking with a young girl during a checkup" width="1800" height="1202" decoding="async" style={{ "objectPosition": "50% 38%" }} /></div>{" "}</div>{" "}</section>{" "}<section className="section tint" aria-labelledby="suits-title">{" "}<div className="container sec-head sec-copy reveal">{" "}<h2 className="h2" id="suits-title">Who it is designed for</h2>{" "}<div className="copy"><p>Individual health coverage is designed for people who are self employed, own a small business without a group plan, work for an employer that does not offer coverage, are between positions or are retiring before Medicare eligibility. It also serves families who would like to compare their employer plan against what the individual market can offer.</p>
</div>{" "}</div>{" "}</section>{" "}<section className="section" aria-labelledby="how-title">{" "}<div className="container sec-head sec-copy reveal">{" "}<h2 className="h2" id="how-title">How the plan works</h2>{" "}<div className="copy"><p>We begin by understanding your household, your preferred doctors and hospitals, your prescriptions and your budget. We then compare the plans available in your area, explaining how premiums, deductibles, copays and networks interact so that you can see the full cost of each option rather than the monthly premium alone.</p>
<p>Marketplace plans may be purchased during the annual open enrollment period or during a special enrollment period that follows a qualifying life event, such as a move, a marriage, the birth of a child or the loss of other coverage. We help you determine your eligibility for savings, complete your enrollment and review your plan each year.</p>
</div>{" "}</div>{" "}</section>{" "}<section className="section tint consult" id="consult" tabIndex={-1} aria-labelledby="consult-title">{" "}<div className="container consult-faq">{" "}<ConsultPanel kicker={<>Request a consultation</>} title={<>Speak with us about Individual Health</>} lede={<>Share a few details, and we will reach out personally to arrange a conversation at a time that suits you. There is never any cost or obligation for our guidance.</>} category="Individual Benefits" coverage="Individual Health" />{" "}<aside className="consult-faq-aside" aria-labelledby="cfaq-title">{" "}<p className="kicker">Common questions</p>{" "}<h2 id="cfaq-title">Individual Health, answered</h2>{" "}<Faq className="faq cfaq" items={[{ qid: "cfaq-q1", aid: "cfaq-a1", open: true, q: <>Can we qualify for help with the cost of coverage?</>, a: <><p>Many households do. Premium tax credits for marketplace plans are based on household income and size, and we will help you estimate whether you qualify and how much the credit may reduce your premium.</p>
</> }, { qid: "cfaq-q2", aid: "cfaq-a2", open: false, q: <>What if we need coverage outside the open enrollment period?</>, a: <><p>A qualifying life event such as a move, a marriage, a new child or the loss of other coverage may open a special enrollment period. Some private plans also accept applications throughout the year, and we will review which options are available to you.</p>
</> }, { qid: "cfaq-q3", aid: "cfaq-a3", open: false, q: <>Will our current doctors be in network?</>, a: <><p>Networks vary from plan to plan, so we check your preferred physicians and hospitals against each option before making a recommendation.</p>
</> }]} />{" "}<p className="fine">Prefer to talk it through? Call{" "}<a href="tel:+19735247188" data-config="phone-link"><span data-config="phone">(973) 524-7188</span></a>{" "}and we will answer in person.</p>{" "}</aside>{" "}</div>{" "}</section>{" "}</main>
    </>
  )
}
