import { createFileRoute, Link } from '@tanstack/react-router'
import { ConsultPanel } from '~/components/ConsultPanel'
import { Faq } from '~/components/Faq'
import { usePageEnhancements } from '~/lib/usePageEnhancements'

/* Converted from group-ancillary.html (King Health, Summit). Page copy and markup are unchanged. */
const head = {
  "meta": [
    {
      "title": "Group Ancillary Benefits in NJ and NC | King Health"
    },
    {
      "name": "description",
      "content": "Group accident, critical illness, hospital indemnity, cancer and disability coverage for New Jersey employers, employer paid or voluntary. Call King Health."
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
      "content": "Group Ancillary Benefits in NJ and NC | King Health"
    },
    {
      "property": "og:description",
      "content": "Group accident, critical illness, hospital indemnity, cancer and disability coverage for New Jersey employers, employer paid or voluntary. Call King Health."
    },
    {
      "property": "og:url",
      "content": "https://kinghealthdirect.com/group-ancillary"
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
      "content": "Group Ancillary Benefits in NJ and NC | King Health"
    },
    {
      "name": "twitter:description",
      "content": "Group accident, critical illness, hospital indemnity, cancer and disability coverage for New Jersey employers, employer paid or voluntary. Call King Health."
    },
    {
      "name": "twitter:image",
      "content": "https://kinghealthdirect.com/assets/og/king-health-og.jpg"
    }
  ],
  "links": [
    {
      "rel": "canonical",
      "href": "https://kinghealthdirect.com/group-ancillary"
    }
  ],
  "scripts": [
    {
      "type": "application/ld+json",
      "children": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"https://kinghealthdirect.com/#organization\",\"name\":\"King Health\",\"legalName\":\"King Health LLC\",\"url\":\"https://kinghealthdirect.com/\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://kinghealthdirect.com/brand/king-health-lockup.png\",\"width\":1000,\"height\":659},\"sameAs\":[\"https://www.facebook.com/kinghealthdirect\",\"https://www.instagram.com/kinghealthdirect\",\"https://wa.me/19735247188?text=Hello%20Javon%2C%20I%20found%20King%20Health%20online%20and%20would%20like%20to%20talk%20about%20my%20coverage.\",\"https://www.google.com/maps?cid=9265971853131828090\"],\"contactPoint\":{\"@type\":\"ContactPoint\",\"telephone\":\"+1-973-524-7188\",\"contactType\":\"customer service\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}],\"availableLanguage\":\"en\",\"email\":\"Javon@kinghealthdirect.com\"}},{\"@type\":\"WebSite\",\"@id\":\"https://kinghealthdirect.com/#website\",\"url\":\"https://kinghealthdirect.com/\",\"name\":\"King Health\",\"inLanguage\":\"en-US\",\"publisher\":{\"@id\":\"https://kinghealthdirect.com/#organization\"}},{\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://kinghealthdirect.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Group Benefits\",\"item\":\"https://kinghealthdirect.com/group-benefits\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Group Ancillary\",\"item\":\"https://kinghealthdirect.com/group-ancillary\"}]},{\"@type\":\"Service\",\"name\":\"Group Ancillary\",\"serviceType\":\"Group Ancillary\",\"url\":\"https://kinghealthdirect.com/group-ancillary\",\"provider\":{\"@type\":\"InsuranceAgency\",\"@id\":\"https://kinghealthdirect.com/#agency\",\"name\":\"King Health\",\"url\":\"https://kinghealthdirect.com/\",\"telephone\":\"+1-973-524-7188\"},\"description\":\"Accident, critical illness, hospital indemnity, cancer and disability coverage offered through the workplace, so your employees gain added protection and your business strengthens its benefits without carrying the full cost.\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}]},{\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Who pays for group ancillary benefits?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"The employer decides. Benefits can be fully employer paid, shared between the business and its employees, or offered on a voluntary basis in which employees pay their own premiums through payroll deduction, which adds valuable choices at little or no cost to the business.\"}},{\"@type\":\"Question\",\"name\":\"How is this different from ancillary coverage purchased individually?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Group ancillary coverage is arranged through the employer under a group contract, with eligibility, plan design and pricing set for the whole group, and enrollment usually takes place during a set enrollment period. Individual ancillary policies are purchased and owned directly by the policyholder, with underwriting and pricing determined individually.\"}},{\"@type\":\"Question\",\"name\":\"Do employees need a medical exam to enroll?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Often they do not. Many carriers offer guaranteed issue or simplified enrollment during the initial enrollment period, up to set coverage limits. Requirements vary by carrier, product and group size, and enrolling after that window may require answers to health questions.\"}},{\"@type\":\"Question\",\"name\":\"Can employees keep coverage if they leave the company?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"It depends on the plan. Some group policies include a portability or conversion option that lets a departing employee continue coverage by paying the carrier directly, while others end when employment ends. We confirm these terms before you choose a plan.\"}},{\"@type\":\"Question\",\"name\":\"Is there a minimum number of participants?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Carriers commonly require a minimum level of participation for a group ancillary plan to be placed and renewed, and the threshold usually differs between employer paid and voluntary plans. We confirm the requirements that apply to your company before any quote is prepared.\"}}]}]}"
    }
  ]
}

export const Route = createFileRoute('/group-ancillary')({
  head: () => head,
  component: GroupAncillaryPage,
})

function GroupAncillaryPage() {
  usePageEnhancements()
  return (
    <>
<nav className="subnav" aria-label="Group Benefits pages" data-from="group"><div className="container sn"><ul className="sn-list"><li className="sn-label-item"><Link to="/group-benefits" className="sn-label">Group Benefits</Link></li><li><Link to="/group-health">Group Health</Link></li><li><Link to="/group-life">Group Life</Link></li><li><Link to="/group-ancillary" aria-current="page">Group Ancillary</Link></li><li><Link to="/group-dental-vision">Group Dental and Vision</Link></li></ul>
</div>
</nav>{" "}
<main id="main" tabIndex={-1}>{" "}<section className="banner" aria-labelledby="page-title">{" "}<div className="hero-media hero-wide"><div className="hero-photo"><img src="/media/photos/group-consult.jpg" alt="" width="1800" height="1200" loading="eager" fetchPriority="high" style={{ "objectPosition": "50% 35%" }} /></div>
</div>{" "}<div className="container">{" "}<div className="hero-band band">{" "}<p className="kicker"><Link to="/group-benefits">Group Benefits</Link></p>
<h1 id="page-title" tabIndex={-1}>Group Ancillary</h1>{" "}<p className="band-lede">Group ancillary benefits that round out the package your team relies on.</p>{" "}</div>{" "}</div>{" "}</section>{" "}<section className="section after-band" aria-labelledby="glance-title">{" "}<div className="container prow">{" "}<div className="prow-body reveal">{" "}<p className="kicker">Group Ancillary</p>{" "}<h2 className="h2" id="glance-title">Coverage at a glance</h2>{" "}<div className="copy"><p>Group ancillary benefits are supplemental coverages offered through an employer alongside the core group health plan. They commonly include accident, critical illness, hospital indemnity and cancer insurance, which pay cash benefits directly to the employee when a covered event occurs, as well as short term and long term disability coverage, which replaces a portion of income when an illness or injury keeps an employee from working. These plans provide limited benefits and do not replace comprehensive health insurance.</p>
<p>Unlike an individually purchased policy, a group plan is arranged under a master contract held by the employer. Benefits can be fully employer paid, shared between the business and its employees, or offered on a voluntary basis in which employees pay their own premiums through payroll deduction, so a business can expand its package with little or no added cost. Plan design, eligibility and pricing are set at the group level and vary by carrier and by state.</p>
</div>{" "}</div>{" "}<div className="prow-media reveal"><img src="/media/photos/doctor-consult-desk.jpg" alt="A physician listening to a patient across her desk" width="1800" height="1200" decoding="async" style={{ "objectPosition": "55% 28%" }} /></div>{" "}</div>{" "}</section>{" "}<section className="section tint duo-sec" aria-label="Who it is designed for and how the plan works">{" "}<div className="container duo">{" "}<article className="duo-card reveal" aria-labelledby="suits-title">{" "}<span className="duo-ic" aria-hidden="true"><svg className="ic" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><use href="#i-group-benefits" /></svg></span>{" "}<p className="kicker">Who it serves</p>{" "}<h2 className="h2" id="suits-title">Who it is designed for</h2>{" "}<div className="copy"><p>Group ancillary benefits are designed for employers of every size who want to strengthen recruiting and retention, give employees choices that fit their own households, and help their teams manage the deductibles and out of pocket costs that higher deductible health plans can bring. Accident coverage often suits physical and hourly workforces, while critical illness, hospital indemnity and disability coverage appeal broadly to employees who want a financial cushion when life is interrupted.</p>
</div>{" "}<div className="duo-tags"><p className="duo-tags-label">Coverages commonly offered</p>
<p className="duo-tags-hint">Hover over or tap a coverage to see what it provides.</p>
<ul><li className="has-tip"><button type="button" className="duo-tag" aria-describedby="duo-tip-1" aria-expanded="false" data-tip>Accident</button><div className="duo-tip" id="duo-tip-1" role="tooltip"><p className="duo-tip-title">Accident</p>
<p>Pays a cash benefit when an employee is injured in a covered accident, on or off the job depending on the plan. Benefits help with the costs a health plan leaves behind.</p>
<ul><li>Emergency room and urgent care visits</li><li>Fractures, dislocations and burns</li><li>Hospital stays and follow up care</li></ul>
</div>
</li><li className="has-tip"><button type="button" className="duo-tag" aria-describedby="duo-tip-2" aria-expanded="false" data-tip>Critical illness</button><div className="duo-tip" id="duo-tip-2" role="tooltip"><p className="duo-tip-title">Critical illness</p>
<p>Pays a lump sum when an employee is diagnosed with a covered serious illness. The money can go toward treatment, travel or everyday bills.</p>
<ul><li>Heart attack and stroke</li><li>Cancer, depending on the plan</li><li>Kidney failure and major organ transplant</li></ul>
</div>
</li><li className="has-tip"><button type="button" className="duo-tag" aria-describedby="duo-tip-3" aria-expanded="false" data-tip>Hospital indemnity</button><div className="duo-tip" id="duo-tip-3" role="tooltip"><p className="duo-tip-title">Hospital indemnity</p>
<p>Pays a set cash benefit when an employee is admitted to the hospital, regardless of what the health plan pays. It helps soften deductibles and out of pocket costs.</p>
<ul><li>Hospital admission</li><li>Each day of a covered stay</li><li>Intensive care stays, depending on the plan</li></ul>
</div>
</li><li className="has-tip"><button type="button" className="duo-tag" aria-describedby="duo-tip-4" aria-expanded="false" data-tip>Cancer</button><div className="duo-tip" id="duo-tip-4" role="tooltip"><p className="duo-tip-title">Cancer</p>
<p>Pays benefits after a covered cancer diagnosis and throughout treatment. Benefits help with expenses that medical coverage may not fully cover.</p>
<ul><li>An initial diagnosis benefit</li><li>Chemotherapy and radiation treatment</li><li>Travel and lodging for treatment, depending on the plan</li></ul>
</div>
</li><li className="has-tip"><button type="button" className="duo-tag" aria-describedby="duo-tip-5" aria-expanded="false" data-tip>Short term disability</button><div className="duo-tip" id="duo-tip-5" role="tooltip"><p className="duo-tip-title">Short term disability</p>
<p>Replaces a portion of an employee's income when a covered illness or injury keeps them from working for a short period. Benefits begin after a brief waiting period.</p>
<ul><li>A percentage of weekly earnings</li><li>Recovery from surgery or childbirth, depending on the plan</li><li>Works alongside state disability programs where they apply</li></ul>
</div>
</li><li className="has-tip"><button type="button" className="duo-tag" aria-describedby="duo-tip-6" aria-expanded="false" data-tip>Long term disability</button><div className="duo-tip" id="duo-tip-6" role="tooltip"><p className="duo-tip-title">Long term disability</p>
<p>Replaces a portion of income when a covered illness or injury keeps an employee from working for an extended period. Benefits often begin after short term disability ends.</p>
<ul><li>A percentage of monthly earnings</li><li>Benefits that can last for years, depending on the plan</li><li>Protection for serious or lasting conditions</li></ul>
</div>
</li></ul>
</div>{" "}</article>{" "}<article className="duo-card reveal" aria-labelledby="how-title">{" "}<span className="duo-ic" aria-hidden="true"><svg className="ic" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><use href="#i-group-ancillary" /></svg></span>{" "}<p className="kicker">The mechanics</p>{" "}<h2 className="h2" id="how-title">How the plan works</h2>{" "}<div className="copy"><p>Most group ancillary plans are offered during an enrollment period, when eligible employees can elect coverage for themselves and often for a spouse and children. Many carriers offer guaranteed issue or simplified enrollment at that time, which means coverage up to set limits can be issued without a medical exam, and carriers typically require a minimum level of participation before a plan can be placed.</p>
<p>When a covered event occurs, cash benefit plans pay a set amount directly to the employee, regardless of what the health plan pays, and disability plans pay a portion of the employee's earnings for a defined period after a waiting period. Some policies allow employees to keep their coverage if they leave the company while others end with employment, so we review portability, participation rules and contribution options with you, compare carriers side by side and help you plan an enrollment your team understands.</p>
</div>{" "}</article>{" "}</div>{" "}</section>{" "}<section className="section tint consult" id="consult" tabIndex={-1} aria-labelledby="consult-title">{" "}<div className="container consult-faq">{" "}<ConsultPanel kicker={<>Request a consultation</>} title={<>Speak with us about Group Ancillary</>} lede={<>Share a few details, and we will reach out personally to arrange a conversation at a time that suits you. There is never any cost or obligation for our guidance.</>} category="Group Benefits" coverage="Group Ancillary" />{" "}<aside className="consult-faq-aside" aria-labelledby="cfaq-title">{" "}<p className="kicker">Common questions</p>{" "}<h2 id="cfaq-title">Group ancillary, answered</h2>{" "}<Faq className="faq cfaq" items={[{ qid: "cfaq-q1", aid: "cfaq-a1", open: true, q: <>Who pays for group ancillary benefits?</>, a: <><p>The employer decides. Benefits can be fully employer paid, shared between the business and its employees, or offered on a voluntary basis in which employees pay their own premiums through payroll deduction, which adds valuable choices at little or no cost to the business.</p>
</> }, { qid: "cfaq-q2", aid: "cfaq-a2", open: false, q: <>How is this different from ancillary coverage purchased individually?</>, a: <><p>Group ancillary coverage is arranged through the employer under a group contract, with eligibility, plan design and pricing set for the whole group, and enrollment usually takes place during a set enrollment period. Individual ancillary policies are purchased and owned directly by the policyholder, with underwriting and pricing determined individually.</p>
</> }, { qid: "cfaq-q3", aid: "cfaq-a3", open: false, q: <>Do employees need a medical exam to enroll?</>, a: <><p>Often they do not. Many carriers offer guaranteed issue or simplified enrollment during the initial enrollment period, up to set coverage limits. Requirements vary by carrier, product and group size, and enrolling after that window may require answers to health questions.</p>
</> }, { qid: "cfaq-q4", aid: "cfaq-a4", open: false, q: <>Can employees keep coverage if they leave the company?</>, a: <><p>It depends on the plan. Some group policies include a portability or conversion option that lets a departing employee continue coverage by paying the carrier directly, while others end when employment ends. We confirm these terms before you choose a plan.</p>
</> }, { qid: "cfaq-q5", aid: "cfaq-a5", open: false, q: <>Is there a minimum number of participants?</>, a: <><p>Carriers commonly require a minimum level of participation for a group ancillary plan to be placed and renewed, and the threshold usually differs between employer paid and voluntary plans. We confirm the requirements that apply to your company before any quote is prepared.</p>
</> }]} />{" "}<p className="fine">Prefer to talk it through? Call{" "}<a href="tel:+19735247188" data-config="phone-link"><span data-config="phone">(973) 524-7188</span></a>{" "}and we will answer in person.</p>{" "}</aside>{" "}</div>{" "}</section>{" "}</main>
    </>
  )
}
