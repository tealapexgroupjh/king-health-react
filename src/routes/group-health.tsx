import { createFileRoute, Link } from '@tanstack/react-router'
import { ConsultPanel } from '~/components/ConsultPanel'
import { Faq } from '~/components/Faq'
import { usePageEnhancements } from '~/lib/usePageEnhancements'

/* Converted from group-health.html (King Health, Summit). Page copy and markup are unchanged. */
const head = {
  "meta": [
    {
      "title": "Group Health Insurance in NJ and NC | King Health"
    },
    {
      "name": "description",
      "content": "Group health insurance for New Jersey employers, chosen to give employees valued coverage while keeping costs predictable. Call King Health to plan yours."
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
      "content": "Group Health Insurance in NJ and NC | King Health"
    },
    {
      "property": "og:description",
      "content": "Group health insurance for New Jersey employers, chosen to give employees valued coverage while keeping costs predictable. Call King Health to plan yours."
    },
    {
      "property": "og:url",
      "content": "https://kinghealthdirect.com/group-health"
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
      "content": "Group Health Insurance in NJ and NC | King Health"
    },
    {
      "name": "twitter:description",
      "content": "Group health insurance for New Jersey employers, chosen to give employees valued coverage while keeping costs predictable. Call King Health to plan yours."
    },
    {
      "name": "twitter:image",
      "content": "https://kinghealthdirect.com/assets/og/king-health-og.jpg"
    }
  ],
  "links": [
    {
      "rel": "canonical",
      "href": "https://kinghealthdirect.com/group-health"
    }
  ],
  "scripts": [
    {
      "type": "application/ld+json",
      "children": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"https://kinghealthdirect.com/#organization\",\"name\":\"King Health\",\"legalName\":\"King Health LLC\",\"url\":\"https://kinghealthdirect.com/\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://kinghealthdirect.com/brand/king-health-lockup.png\",\"width\":1000,\"height\":659},\"sameAs\":[\"https://www.facebook.com/kinghealthdirect\",\"https://www.instagram.com/kinghealthdirect\",\"https://wa.me/19735247188?text=Hello%20Javon%2C%20I%20found%20King%20Health%20online%20and%20would%20like%20to%20talk%20about%20my%20coverage.\",\"https://www.google.com/maps?cid=9265971853131828090\"],\"contactPoint\":{\"@type\":\"ContactPoint\",\"telephone\":\"+1-973-524-7188\",\"contactType\":\"customer service\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}],\"availableLanguage\":\"en\",\"email\":\"Javon@kinghealthdirect.com\"}},{\"@type\":\"WebSite\",\"@id\":\"https://kinghealthdirect.com/#website\",\"url\":\"https://kinghealthdirect.com/\",\"name\":\"King Health\",\"inLanguage\":\"en-US\",\"publisher\":{\"@id\":\"https://kinghealthdirect.com/#organization\"}},{\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://kinghealthdirect.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Group Benefits\",\"item\":\"https://kinghealthdirect.com/group-benefits\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Group Health\",\"item\":\"https://kinghealthdirect.com/group-health\"}]},{\"@type\":\"Service\",\"name\":\"Group Health\",\"serviceType\":\"Group Health\",\"url\":\"https://kinghealthdirect.com/group-health\",\"provider\":{\"@type\":\"InsuranceAgency\",\"@id\":\"https://kinghealthdirect.com/#agency\",\"name\":\"King Health\",\"url\":\"https://kinghealthdirect.com/\",\"telephone\":\"+1-973-524-7188\"},\"description\":\"We help employers select group health plans that provide valued coverage for employees and their families while keeping costs predictable for the business.\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}]},{\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"How small can a business be to offer group health coverage?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Many carriers offer group plans to quite small businesses, including some with only a few employees. Minimum participation and contribution requirements vary by carrier and by state, and we will confirm what applies to your business.\"}},{\"@type\":\"Question\",\"name\":\"How much must the employer contribute?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Carriers typically require a minimum employer contribution toward employee coverage, and employers may choose to contribute more or to help with dependent coverage. We help you design a contribution strategy that fits your budget and your goals for the team.\"}},{\"@type\":\"Question\",\"name\":\"Can we offer employees a choice among plan options?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Many carriers allow employers to offer a choice of plans, which lets employees select the balance of premium and benefits that suits their own households. We will show you which arrangements are available.\"}}]}]}"
    }
  ]
}

export const Route = createFileRoute('/group-health')({
  head: () => head,
  component: GroupHealthPage,
})

function GroupHealthPage() {
  usePageEnhancements()
  return (
    <>
<nav className="subnav" aria-label="Group Benefits pages" data-from="group"><div className="container sn"><ul className="sn-list"><li className="sn-label-item"><Link to="/group-benefits" className="sn-label">Group Benefits</Link></li><li><Link to="/group-health" aria-current="page">Group Health</Link></li><li><Link to="/group-life">Group Life</Link></li><li><Link to="/group-ancillary">Group Ancillary</Link></li><li><Link to="/group-dental-vision">Group Dental and Vision</Link></li></ul>
</div>
</nav>{" "}
<main id="main" tabIndex={-1}>{" "}<section className="banner" aria-labelledby="page-title">{" "}<div className="hero-media hero-wide"><div className="hero-photo"><img src="/media/photos/group-diverse-meeting.jpg" alt="" width="1800" height="1200" loading="eager" fetchPriority="high" style={{ "objectPosition": "50% 35%" }} /></div>
</div>{" "}<div className="container">{" "}<div className="hero-band band">{" "}<p className="kicker"><Link to="/group-benefits">Group Benefits</Link></p>
<h1 id="page-title" tabIndex={-1}>Group Health</h1>{" "}<p className="band-lede">Group health insurance that supports your team and sustains your business.</p>{" "}</div>{" "}</div>{" "}</section>{" "}<section className="section after-band" aria-labelledby="glance-title">{" "}<div className="container prow">{" "}<div className="prow-body reveal">{" "}<p className="kicker">Group Health</p>{" "}<h2 className="h2" id="glance-title">Coverage at a glance</h2>{" "}<div className="copy"><p>Group health insurance is coverage an employer purchases for eligible employees and, often, their dependents. The employer typically contributes toward the premium, and employee contributions are usually made through payroll deduction on a pretax basis. Group plans generally offer broader benefits and more favorable rates than comparable individual coverage.</p>
<p>Employers may choose among several funding arrangements, including fully insured plans, level funded plans and health reimbursement arrangements, each with its own balance of predictability and flexibility. Eligibility, participation requirements and plan designs vary by carrier and by state, and we explain each option in plain terms.</p>
</div>{" "}</div>{" "}<div className="prow-media reveal"><img src="/media/photos/doctor-patient-review.jpg" alt="A doctor reviewing a chart with a patient in a clinic" width="1800" height="1200" decoding="async" style={{ "objectPosition": "50% 26%" }} /></div>{" "}</div>{" "}</section>{" "}<section className="section tint" aria-labelledby="suits-title">{" "}<div className="container sec-head sec-copy reveal">{" "}<h2 className="h2" id="suits-title">Who it is designed for</h2>{" "}<div className="copy"><p>Group health coverage is designed for small and growing businesses that want to attract and retain capable people, owners who would like to provide for their own families through the business, and established employers who would like to review their current program at renewal.</p>
</div>{" "}</div>{" "}</section>{" "}<section className="section" aria-labelledby="how-title">{" "}<div className="container sec-head sec-copy reveal">{" "}<h2 className="h2" id="how-title">How the plan works</h2>{" "}<div className="copy"><p>We begin by learning about your workforce, your current benefits if any and the budget you have in mind. We gather the census information carriers require, request proposals across the market and present a clear comparison of plan designs, networks and employer and employee costs.</p>
<p>Once you select a program, we coordinate enrollment, help your employees understand their choices and serve as their point of contact for questions throughout the year. At each renewal, we review your program against the market and recommend adjustments that keep it valuable and sustainable.</p>
</div>{" "}</div>{" "}</section>{" "}<section className="section tint consult" id="consult" tabIndex={-1} aria-labelledby="consult-title">{" "}<div className="container consult-faq">{" "}<ConsultPanel kicker={<>Request a consultation</>} title={<>Speak with us about Group Health</>} lede={<>Share a few details, and we will reach out personally to arrange a conversation at a time that suits you. There is never any cost or obligation for our guidance.</>} category="Group Benefits" coverage="Group Health" />{" "}<aside className="consult-faq-aside" aria-labelledby="cfaq-title">{" "}<p className="kicker">Common questions</p>{" "}<h2 id="cfaq-title">Group Health, answered</h2>{" "}<Faq className="faq cfaq" items={[{ qid: "cfaq-q1", aid: "cfaq-a1", open: true, q: <>How small can a business be to offer group health coverage?</>, a: <><p>Many carriers offer group plans to quite small businesses, including some with only a few employees. Minimum participation and contribution requirements vary by carrier and by state, and we will confirm what applies to your business.</p>
</> }, { qid: "cfaq-q2", aid: "cfaq-a2", open: false, q: <>How much must the employer contribute?</>, a: <><p>Carriers typically require a minimum employer contribution toward employee coverage, and employers may choose to contribute more or to help with dependent coverage. We help you design a contribution strategy that fits your budget and your goals for the team.</p>
</> }, { qid: "cfaq-q3", aid: "cfaq-a3", open: false, q: <>Can we offer employees a choice among plan options?</>, a: <><p>Many carriers allow employers to offer a choice of plans, which lets employees select the balance of premium and benefits that suits their own households. We will show you which arrangements are available.</p>
</> }]} />{" "}<p className="fine">Prefer to talk it through? Call{" "}<a href="tel:+19735247188" data-config="phone-link"><span data-config="phone">(973) 524-7188</span></a>{" "}and we will answer in person.</p>{" "}</aside>{" "}</div>{" "}</section>{" "}</main>
    </>
  )
}
