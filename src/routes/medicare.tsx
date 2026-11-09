import { createFileRoute, Link } from '@tanstack/react-router'
import { ConsultPanel } from '~/components/ConsultPanel'
import { Faq } from '~/components/Faq'
import { usePageEnhancements } from '~/lib/usePageEnhancements'

/* Converted from medicare.html (King Health, Summit). Page copy and markup are unchanged. */
const head = {
  "meta": [
    {
      "title": "Medicare Plans in NJ and North Carolina | King Health"
    },
    {
      "name": "description",
      "content": "Medicare guidance in Newark and across New Jersey: we compare the plans available where you live against your doctors and prescriptions. Call us to review."
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
      "content": "Medicare Plans in NJ and North Carolina | King Health"
    },
    {
      "property": "og:description",
      "content": "Medicare guidance in Newark and across New Jersey: we compare the plans available where you live against your doctors and prescriptions. Call us to review."
    },
    {
      "property": "og:url",
      "content": "https://kinghealthdirect.com/medicare"
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
      "content": "Medicare Plans in NJ and North Carolina | King Health"
    },
    {
      "name": "twitter:description",
      "content": "Medicare guidance in Newark and across New Jersey: we compare the plans available where you live against your doctors and prescriptions. Call us to review."
    },
    {
      "name": "twitter:image",
      "content": "https://kinghealthdirect.com/assets/og/king-health-og.jpg"
    }
  ],
  "links": [
    {
      "rel": "canonical",
      "href": "https://kinghealthdirect.com/medicare"
    }
  ],
  "scripts": [
    {
      "type": "application/ld+json",
      "children": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"https://kinghealthdirect.com/#organization\",\"name\":\"King Health\",\"legalName\":\"King Health LLC\",\"url\":\"https://kinghealthdirect.com/\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://kinghealthdirect.com/brand/king-health-lockup.png\",\"width\":1000,\"height\":659},\"sameAs\":[\"https://www.facebook.com/kinghealthdirect\",\"https://www.instagram.com/kinghealthdirect\",\"https://wa.me/19735247188?text=Hello%20Javon%2C%20I%20found%20King%20Health%20online%20and%20would%20like%20to%20talk%20about%20my%20coverage.\",\"https://www.google.com/maps?cid=9265971853131828090\"],\"contactPoint\":{\"@type\":\"ContactPoint\",\"telephone\":\"+1-973-524-7188\",\"contactType\":\"customer service\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}],\"availableLanguage\":\"en\",\"email\":\"Javon@kinghealthdirect.com\"}},{\"@type\":\"WebSite\",\"@id\":\"https://kinghealthdirect.com/#website\",\"url\":\"https://kinghealthdirect.com/\",\"name\":\"King Health\",\"inLanguage\":\"en-US\",\"publisher\":{\"@id\":\"https://kinghealthdirect.com/#organization\"}},{\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://kinghealthdirect.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Senior Benefits\",\"item\":\"https://kinghealthdirect.com/senior-benefits\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Medicare\",\"item\":\"https://kinghealthdirect.com/medicare\"}]},{\"@type\":\"Service\",\"name\":\"Medicare\",\"serviceType\":\"Medicare\",\"url\":\"https://kinghealthdirect.com/medicare\",\"provider\":{\"@type\":\"InsuranceAgency\",\"@id\":\"https://kinghealthdirect.com/#agency\",\"name\":\"King Health\",\"url\":\"https://kinghealthdirect.com/\",\"telephone\":\"+1-973-524-7188\"},\"description\":\"We help you understand your Medicare choices and compare the plans available where you live, so that your coverage reflects your doctors, your prescriptions and your budget.\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}]},{\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Should we choose Medicare Advantage or a Medicare Supplement plan?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Each approach suits different priorities. Medicare Supplement plans pair with Original Medicare and offer broad freedom to see providers who accept Medicare, while Medicare Advantage plans often feature lower monthly premiums and added benefits within a network. We compare these approaches against your doctors, your travel habits and your budget before recommending a direction.\"}},{\"@type\":\"Question\",\"name\":\"Is there a cost for your Medicare guidance?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"There is no fee for our guidance. We are compensated by the carriers whose plans we place, and the premium for a given plan is the same whether you enroll through us or directly. King Health is not connected with or endorsed by the U.S. government or the federal Medicare program. We do not offer every plan available in your area, and you may always contact Medicare directly or visit Medicare.gov for a complete view of your options.\"}},{\"@type\":\"Question\",\"name\":\"Can we change plans after we enroll?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"In many cases you can. The annual enrollment period each fall allows changes to Medicare Advantage and prescription drug coverage, and certain life events open special enrollment periods. Changing a Medicare Supplement plan may involve health questions depending on your state and timing, so we review the rules that apply to you before any change.\"}}]}]}"
    }
  ]
}

export const Route = createFileRoute('/medicare')({
  head: () => head,
  component: MedicarePage,
})

function MedicarePage() {
  usePageEnhancements()
  return (
    <>
<nav className="subnav" aria-label="Senior Benefits pages" data-from="senior"><div className="container sn"><ul className="sn-list"><li className="sn-label-item"><Link to="/senior-benefits" className="sn-label">Senior Benefits</Link></li><li><Link to="/medicare" aria-current="page">Medicare</Link></li><li><Link to="/final-expense">Final Expense</Link></li><li><Link to="/ancillary" search={{ from: "senior" }}>Ancillary</Link></li></ul>
</div>
</nav>{" "}
<main id="main" tabIndex={-1}>{" "}<section className="banner" aria-labelledby="page-title">{" "}<div className="hero-media hero-wide"><div className="hero-photo"><img src="/media/photos/doctor-patient-smile.jpg" alt="" width="1800" height="1200" loading="eager" fetchPriority="high" style={{ "objectPosition": "50% 22%" }} /></div>
</div>{" "}<div className="container">{" "}<div className="hero-band band">{" "}<p className="kicker"><Link to="/senior-benefits">Senior Benefits</Link></p>
<h1 id="page-title" tabIndex={-1}>Medicare</h1>{" "}<p className="band-lede">Medicare guidance that brings calm to an important decision.</p>{" "}</div>{" "}</div>{" "}</section>{" "}<section className="section after-band" aria-labelledby="glance-title">{" "}<div className="container prow">{" "}<div className="prow-body reveal">{" "}<p className="kicker">Medicare</p>{" "}<h2 className="h2" id="glance-title">Coverage at a glance</h2>{" "}<div className="copy"><p>Medicare is the federal health insurance program for people who qualify by age or by certain disabilities or conditions. Original Medicare consists of Part A, which helps with hospital care, and Part B, which helps with doctor visits, outpatient services and preventive care. Many people pair Original Medicare with a Medicare Supplement plan, which helps with costs that Original Medicare leaves to you, and a Part D plan for prescription drugs.</p>
<p>Medicare Advantage, sometimes called Part C, is an alternative offered by private insurers approved by Medicare. These plans provide the benefits of Part A and Part B, often include prescription drug coverage, and may offer additional benefits such as dental, vision or hearing care, usually within a network of providers. King Health is not connected with or endorsed by the U.S. government or the federal Medicare program. We do not offer every plan available in your area, and you may always contact Medicare directly or visit Medicare.gov for a complete view of your options.</p>
</div>{" "}</div>{" "}<div className="prow-media reveal"><img src="/media/photos/senior-caregiver-visit.jpg" alt="A caregiver checking in with an older woman in her living room" width="1800" height="1200" decoding="async" style={{ "objectPosition": "50% 32%" }} /></div>{" "}</div>{" "}</section>{" "}<section className="section tint" aria-labelledby="suits-title">{" "}<div className="container sec-head sec-copy reveal">{" "}<h2 className="h2" id="suits-title">Who it is designed for</h2>{" "}<div className="copy"><p>This guidance is designed for people approaching Medicare eligibility, those already enrolled who would like to review their coverage, and adult children who are helping a parent make sense of the choices. It is equally suited to someone who is retiring from employer coverage and to someone who simply wants to confirm that the current plan still fits.</p>
</div>{" "}</div>{" "}</section>{" "}<section className="section" aria-labelledby="how-title">{" "}<div className="container sec-head sec-copy reveal">{" "}<h2 className="h2" id="how-title">How the plan works</h2>{" "}<div className="copy"><p>We begin by learning about your physicians, your prescriptions, the places you receive care and the budget you are comfortable with. With that understanding, we compare the Medicare Advantage, Medicare Supplement and prescription drug plans available in your area and explain how each would affect your access to care and your costs throughout the year.</p>
<p>Medicare has defined enrollment periods, including an initial window when you first become eligible, an annual enrollment period each fall when plan changes are permitted, and special enrollment periods triggered by certain life events. We help you understand which window applies to you, complete your enrollment accurately and revisit your plan each year as benefits and needs change.</p>
</div>{" "}</div>{" "}</section>{" "}<section className="section tpmo-sec" aria-label="Medicare disclaimer">{" "}<div className="container"><div className="tpmo" data-lint-exempt="tpmo">{/* MEDICARE THIRD PARTY MARKETING DISCLAIMER: required wording, counsel to confirm. Decision pending with the client and counsel: whether to add it to the footer Disclosures sitewide. */}<p>We do not offer every plan available in your area. Any information we provide is limited to those plans we do offer in your area. Please contact Medicare.gov or 1-800-MEDICARE to get information on all of your options.</p>
</div>
</div>{" "}</section>{" "}<section className="section tint consult" id="consult" tabIndex={-1} aria-labelledby="consult-title">{" "}<div className="container consult-faq">{" "}<ConsultPanel kicker={<>Request a consultation</>} title={<>Speak with us about Medicare</>} lede={<>Share a few details, and we will reach out personally to arrange a conversation at a time that suits you. There is never any cost or obligation for our guidance.</>} category="Senior Benefits" coverage="Medicare" />{" "}<aside className="consult-faq-aside" aria-labelledby="cfaq-title">{" "}<p className="kicker">Common questions</p>{" "}<h2 id="cfaq-title">Medicare, answered</h2>{" "}<Faq className="faq cfaq" items={[{ qid: "cfaq-q1", aid: "cfaq-a1", open: true, q: <>Should we choose Medicare Advantage or a Medicare Supplement plan?</>, a: <><p>Each approach suits different priorities. Medicare Supplement plans pair with Original Medicare and offer broad freedom to see providers who accept Medicare, while Medicare Advantage plans often feature lower monthly premiums and added benefits within a network. We compare these approaches against your doctors, your travel habits and your budget before recommending a direction.</p>
</> }, { qid: "cfaq-q2", aid: "cfaq-a2", open: false, q: <>Is there a cost for your Medicare guidance?</>, a: <><p>There is no fee for our guidance. We are compensated by the carriers whose plans we place, and the premium for a given plan is the same whether you enroll through us or directly. King Health is not connected with or endorsed by the U.S. government or the federal Medicare program. We do not offer every plan available in your area, and you may always contact Medicare directly or visit Medicare.gov for a complete view of your options.</p>
</> }, { qid: "cfaq-q3", aid: "cfaq-a3", open: false, q: <>Can we change plans after we enroll?</>, a: <><p>In many cases you can. The annual enrollment period each fall allows changes to Medicare Advantage and prescription drug coverage, and certain life events open special enrollment periods. Changing a Medicare Supplement plan may involve health questions depending on your state and timing, so we review the rules that apply to you before any change.</p>
</> }]} />{" "}<p className="fine">Prefer to talk it through? Call{" "}<a href="tel:+19735247188" data-config="phone-link"><span data-config="phone">(973) 524-7188</span></a>{" "}and we will answer in person.</p>{" "}</aside>{" "}</div>{" "}</section>{" "}</main>
    </>
  )
}
