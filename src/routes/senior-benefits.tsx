import { createFileRoute, Link } from '@tanstack/react-router'
import { ConsultPanel } from '~/components/ConsultPanel'
import { Faq } from '~/components/Faq'
import { usePageEnhancements } from '~/lib/usePageEnhancements'

/* Converted from senior-benefits.html (King Health, Summit). Page copy and markup are unchanged. */
const head = {
  "meta": [
    {
      "title": "Senior Benefits in NJ and North Carolina | King Health"
    },
    {
      "name": "description",
      "content": "Senior benefits guidance in Newark and across New Jersey, covering Medicare, final expense and supplemental plans explained with patience. Call us to begin."
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
      "content": "Senior Benefits in NJ and North Carolina | King Health"
    },
    {
      "property": "og:description",
      "content": "Senior benefits guidance in Newark and across New Jersey, covering Medicare, final expense and supplemental plans explained with patience. Call us to begin."
    },
    {
      "property": "og:url",
      "content": "https://kinghealthdirect.com/senior-benefits"
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
      "content": "Senior Benefits in NJ and North Carolina | King Health"
    },
    {
      "name": "twitter:description",
      "content": "Senior benefits guidance in Newark and across New Jersey, covering Medicare, final expense and supplemental plans explained with patience. Call us to begin."
    },
    {
      "name": "twitter:image",
      "content": "https://kinghealthdirect.com/assets/og/king-health-og.jpg"
    }
  ],
  "links": [
    {
      "rel": "canonical",
      "href": "https://kinghealthdirect.com/senior-benefits"
    }
  ],
  "scripts": [
    {
      "type": "application/ld+json",
      "children": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"https://kinghealthdirect.com/#organization\",\"name\":\"King Health\",\"legalName\":\"King Health LLC\",\"url\":\"https://kinghealthdirect.com/\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://kinghealthdirect.com/brand/king-health-lockup.png\",\"width\":1000,\"height\":659},\"sameAs\":[\"https://www.facebook.com/kinghealthdirect\",\"https://www.instagram.com/kinghealthdirect\",\"https://wa.me/19735247188?text=Hello%20Javon%2C%20I%20found%20King%20Health%20online%20and%20would%20like%20to%20talk%20about%20my%20coverage.\",\"https://www.google.com/maps?cid=9265971853131828090\"],\"contactPoint\":{\"@type\":\"ContactPoint\",\"telephone\":\"+1-973-524-7188\",\"contactType\":\"customer service\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}],\"availableLanguage\":\"en\",\"email\":\"Javon@kinghealthdirect.com\"}},{\"@type\":\"WebSite\",\"@id\":\"https://kinghealthdirect.com/#website\",\"url\":\"https://kinghealthdirect.com/\",\"name\":\"King Health\",\"inLanguage\":\"en-US\",\"publisher\":{\"@id\":\"https://kinghealthdirect.com/#organization\"}},{\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://kinghealthdirect.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Senior Benefits\",\"item\":\"https://kinghealthdirect.com/senior-benefits\"}]},{\"@type\":\"Service\",\"name\":\"Senior Benefits\",\"serviceType\":\"Senior Benefits\",\"url\":\"https://kinghealthdirect.com/senior-benefits\",\"provider\":{\"@type\":\"InsuranceAgency\",\"@id\":\"https://kinghealthdirect.com/#agency\",\"name\":\"King Health\",\"url\":\"https://kinghealthdirect.com/\",\"telephone\":\"+1-973-524-7188\"},\"description\":\"We guide you through Medicare, final expense coverage and supplemental benefits with patience, so that every decision feels clear and every plan fits your budget.\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}]},{\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"When should we begin planning for Medicare?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Your Initial Enrollment Period is a seven month window that opens three months before the month you turn sixty five, includes that month, and closes three months after it. Beginning the conversation a few months early leaves time to compare plans against your doctors and prescriptions without the pressure of a deadline.\"}},{\"@type\":\"Question\",\"name\":\"Is there a cost for your guidance?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"There is no fee for our guidance. We are compensated by the carriers whose plans we place, and the premium for a given plan is the same whether you enroll through us or directly. King Health is not connected with or endorsed by the U.S. government or the federal Medicare program.\"}},{\"@type\":\"Question\",\"name\":\"Does Original Medicare cover dental, vision and hearing?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Original Medicare generally does not cover routine dental care, eye examinations for glasses or hearing aids. Standalone ancillary plans, and some Medicare Advantage plans, can close those gaps, and we compare both routes against the care you expect to need.\"}},{\"@type\":\"Question\",\"name\":\"What does final expense insurance provide?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Final expense coverage is a modest whole life policy intended to cover funeral costs, outstanding medical bills and other obligations at the end of life. The benefit is paid directly to your beneficiary, and many policies require answers to a short set of health questions rather than a medical examination.\"}}]}]}"
    }
  ]
}

export const Route = createFileRoute('/senior-benefits')({
  head: () => head,
  component: SeniorBenefitsPage,
})

function SeniorBenefitsPage() {
  usePageEnhancements()
  return (
    <>
<nav className="subnav" aria-label="Senior Benefits pages" data-from="senior"><div className="container sn"><ul className="sn-list"><li className="sn-label-item"><Link to="/senior-benefits" className="sn-label" aria-current="page">Senior Benefits</Link></li><li><Link to="/medicare">Medicare</Link></li><li><Link to="/final-expense">Final Expense</Link></li><li><Link to="/ancillary" search={{ from: "senior" }}>Ancillary</Link></li></ul>
</div>
</nav>{" "}
<main id="main" tabIndex={-1}>{" "}<section className="banner" aria-labelledby="page-title">{" "}<div className="hero-media hero-wide"><div className="hero-photo"><img src="/media/photos/senior-caregiver-visit.jpg" alt="" width="1800" height="1200" loading="eager" fetchPriority="high" style={{ "objectPosition": "50% 30%" }} /></div>
</div>{" "}<div className="container">{" "}<div className="hero-band band">{" "}<p className="kicker">Coverage category</p>
<h1 id="page-title" tabIndex={-1}>Senior Benefits</h1>{" "}<p className="band-lede">Senior benefits that bring clarity to the years ahead.</p>{" "}</div>{" "}</div>{" "}</section>{" "}<section className="section after-band" aria-labelledby="ov-title">{" "}<div className="container overview reveal">{" "}<div><p className="kicker">Overview</p>
<h2 className="vh" id="ov-title">Senior Benefits overview</h2>
</div>{" "}<div><p className="statement">Approaching Medicare is a meaningful milestone, and the choices that come with it deserve calm, careful attention. We help you understand how Original Medicare, Medicare Advantage, Medicare Supplement and prescription drug coverage relate to one another, and we compare the options available where you live so that your plan reflects your doctors, your prescriptions and your budget.</p>
<p>Beyond health coverage, many of our senior clients want to make thoughtful provision for their families. Final expense coverage and supplemental benefits such as dental, vision and hospital indemnity plans can round out that protection, and we explain each option clearly so that you can choose with confidence and without pressure.</p>
</div>{" "}</div>{" "}</section>{" "}<section className="section tint" aria-labelledby="opts-title">{" "}<div className="container">{" "}<div className="sec-head reveal"><h2 className="h2" id="opts-title">Coverage within Senior Benefits</h2>
</div>{" "}<div className="cards cards-3"><article className="card card-text has-ic reveal">{" "}<div className="card-body"><span className="card-ic" aria-hidden="true"><svg className="ic" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><use href="#i-medicare" /></svg></span><h3><Link to="/medicare">Medicare</Link></h3>
<p>Clear guidance on Original Medicare, Medicare Advantage, Medicare Supplement and prescription drug plans.</p>
<span className="tlink" aria-hidden="true"><span>Explore Medicare</span></span></div>{" "}</article>
<article className="card card-text has-ic reveal">{" "}<div className="card-body"><span className="card-ic" aria-hidden="true"><svg className="ic" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><use href="#i-final-expense" /></svg></span><h3><Link to="/final-expense">Final Expense</Link></h3>
<p>Modest, permanent life insurance designed to provide for final arrangements so that your family can focus on one another.</p>
<span className="tlink" aria-hidden="true"><span>Explore Final Expense</span></span></div>{" "}</article>
<article className="card card-text has-ic reveal">{" "}<div className="card-body"><span className="card-ic" aria-hidden="true"><svg className="ic" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><use href="#i-ancillary" /></svg></span><h3><Link to="/ancillary" search={{ from: "senior" }}>Ancillary</Link></h3>
<p>Supplemental dental, vision, hearing, accident, critical illness, hospital indemnity and cancer coverage that strengthens your primary plan.</p>
<span className="tlink" aria-hidden="true"><span>Explore Ancillary</span></span></div>{" "}</article>
</div>{" "}</div>{" "}</section>{" "}<section className="section" aria-labelledby="help-title">{" "}<div className="container">{" "}<h2 className="h2 trio-title reveal" id="help-title">How we serve our senior clients</h2>{" "}<div className="trio reveal"><div className="trio-item"><h3>Unhurried explanation</h3>
<p>We take the time to walk through how each part of Medicare works, and we welcome family members who would like to join the conversation.</p>
</div>
<div className="trio-item"><h3>Careful plan comparison</h3>
<p>We review the plans available in your area against your physicians, your prescriptions and your monthly budget before making any recommendation.</p>
</div>
<div className="trio-item"><h3>Annual attention</h3>
<p>Plans and needs change from year to year, so we revisit your coverage during each enrollment season to confirm that it still serves you well.</p>
</div>
</div>{" "}</div>{" "}</section>{" "}<section className="section tint consult" id="consult" tabIndex={-1} aria-labelledby="consult-title">{" "}<div className="container consult-faq">{" "}<ConsultPanel kicker={<>Request a consultation</>} title={<>Speak with us about your senior benefits</>} lede={<>Tell us a little about your situation, and we will arrange a conversation to review your options with patience and care.</>} category="Senior Benefits" coverage="All or unsure" />{" "}<aside className="consult-faq-aside" aria-labelledby="cfaq-title">{" "}<p className="kicker">Common questions</p>{" "}<h2 id="cfaq-title">Senior benefits, answered</h2>{" "}<Faq className="faq cfaq" items={[{ qid: "cfaq-q1", aid: "cfaq-a1", open: true, q: <>When should we begin planning for Medicare?</>, a: <><p>Your Initial Enrollment Period is a seven month window that opens three months before the month you turn sixty five, includes that month, and closes three months after it. Beginning the conversation a few months early leaves time to compare plans against your doctors and prescriptions without the pressure of a deadline.</p>
</> }, { qid: "cfaq-q2", aid: "cfaq-a2", open: false, q: <>Is there a cost for your guidance?</>, a: <><p>There is no fee for our guidance. We are compensated by the carriers whose plans we place, and the premium for a given plan is the same whether you enroll through us or directly. King Health is not connected with or endorsed by the U.S. government or the federal Medicare program.</p>
</> }, { qid: "cfaq-q3", aid: "cfaq-a3", open: false, q: <>Does Original Medicare cover dental, vision and hearing?</>, a: <><p>Original Medicare generally does not cover routine dental care, eye examinations for glasses or hearing aids. Standalone ancillary plans, and some Medicare Advantage plans, can close those gaps, and we compare both routes against the care you expect to need.</p>
</> }, { qid: "cfaq-q4", aid: "cfaq-a4", open: false, q: <>What does final expense insurance provide?</>, a: <><p>Final expense coverage is a modest whole life policy intended to cover funeral costs, outstanding medical bills and other obligations at the end of life. The benefit is paid directly to your beneficiary, and many policies require answers to a short set of health questions rather than a medical examination.</p>
</> }]} />{" "}<p className="fine">Prefer to talk it through? Call{" "}<a href="tel:+19735247188" data-config="phone-link"><span data-config="phone">(973) 524-7188</span></a>{" "}and we will answer in person.</p>{" "}</aside>{" "}</div>{" "}</section>{" "}</main>
    </>
  )
}
