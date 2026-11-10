import { createFileRoute, Link } from '@tanstack/react-router'
import { ConsultPanel } from '~/components/ConsultPanel'
import { Faq } from '~/components/Faq'
import { usePageEnhancements } from '~/lib/usePageEnhancements'
import { asset, cdnHead } from '~/lib/assets'

/* Converted from group-life.html (King Health, Summit). Page copy and markup are unchanged. */
const head = {
  "meta": [
    {
      "title": "Group Life Insurance in NJ and North Carolina | King Health"
    },
    {
      "name": "description",
      "content": "Group life insurance for New Jersey employers, an efficient way to protect employees' families and strengthen your benefits program. Call King Health today."
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
      "content": "Group Life Insurance in NJ and North Carolina | King Health"
    },
    {
      "property": "og:description",
      "content": "Group life insurance for New Jersey employers, an efficient way to protect employees' families and strengthen your benefits program. Call King Health today."
    },
    {
      "property": "og:url",
      "content": "https://kinghealthdirect.com/group-life"
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
      "content": "Group Life Insurance in NJ and North Carolina | King Health"
    },
    {
      "name": "twitter:description",
      "content": "Group life insurance for New Jersey employers, an efficient way to protect employees' families and strengthen your benefits program. Call King Health today."
    },
    {
      "name": "twitter:image",
      "content": "https://kinghealthdirect.com/assets/og/king-health-og.jpg"
    }
  ],
  "links": [
    {
      "rel": "canonical",
      "href": "https://kinghealthdirect.com/group-life"
    }
  ],
  "scripts": [
    {
      "type": "application/ld+json",
      "children": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"https://kinghealthdirect.com/#organization\",\"name\":\"King Health\",\"legalName\":\"King Health LLC\",\"url\":\"https://kinghealthdirect.com/\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://kinghealthdirect.com/brand/king-health-lockup.png\",\"width\":1000,\"height\":659},\"sameAs\":[\"https://www.facebook.com/kinghealthdirect\",\"https://www.instagram.com/kinghealthdirect\",\"https://wa.me/19735247188?text=Hello%20Javon%2C%20I%20found%20King%20Health%20online%20and%20would%20like%20to%20talk%20about%20my%20coverage.\",\"https://www.google.com/maps?cid=9265971853131828090\"],\"contactPoint\":{\"@type\":\"ContactPoint\",\"telephone\":\"+1-973-524-7188\",\"contactType\":\"customer service\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}],\"availableLanguage\":\"en\",\"email\":\"Javon@kinghealthdirect.com\"}},{\"@type\":\"WebSite\",\"@id\":\"https://kinghealthdirect.com/#website\",\"url\":\"https://kinghealthdirect.com/\",\"name\":\"King Health\",\"inLanguage\":\"en-US\",\"publisher\":{\"@id\":\"https://kinghealthdirect.com/#organization\"}},{\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://kinghealthdirect.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Group Benefits\",\"item\":\"https://kinghealthdirect.com/group-benefits\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Group Life\",\"item\":\"https://kinghealthdirect.com/group-life\"}]},{\"@type\":\"Service\",\"name\":\"Group Life\",\"serviceType\":\"Group Life\",\"url\":\"https://kinghealthdirect.com/group-life\",\"provider\":{\"@type\":\"InsuranceAgency\",\"@id\":\"https://kinghealthdirect.com/#agency\",\"name\":\"King Health\",\"url\":\"https://kinghealthdirect.com/\",\"telephone\":\"+1-973-524-7188\"},\"description\":\"Group life insurance gives employees valued protection for their loved ones and gives employers an efficient way to strengthen their benefits program.\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}]},{\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Is employer paid group life taxable to employees?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Employer paid group term life coverage above a certain amount may create imputed income for employees under federal tax rules. We explain how this works and coordinate with your payroll provider so that it is handled correctly.\"}},{\"@type\":\"Question\",\"name\":\"Can employees keep their coverage if they leave?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Many group life policies include portability or conversion provisions that allow departing employees to continue coverage on an individual basis. The specific terms depend on the carrier and the policy.\"}},{\"@type\":\"Question\",\"name\":\"Do employees need to answer health questions?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Basic coverage and amounts of voluntary coverage up to a guaranteed issue limit often require no health questions when elected during initial enrollment. Larger amounts may require evidence of insurability.\"}}]}]}"
    }
  ]
}

export const Route = createFileRoute('/group-life')({
  head: () => cdnHead(head),
  component: GroupLifePage,
})

function GroupLifePage() {
  usePageEnhancements()
  return (
    <>
<nav className="subnav" aria-label="Group Benefits pages" data-from="group"><div className="container sn"><ul className="sn-list"><li className="sn-label-item"><Link to="/group-benefits" className="sn-label">Group Benefits</Link></li><li><Link to="/group-health">Group Health</Link></li><li><Link to="/group-life" aria-current="page">Group Life</Link></li><li><Link to="/group-ancillary">Group Ancillary</Link></li><li><Link to="/group-dental-vision">Group Dental and Vision</Link></li></ul>
</div>
</nav>{" "}
<main id="main" tabIndex={-1}>{" "}<section className="banner" aria-labelledby="page-title">{" "}<div className="hero-media hero-wide"><div className="hero-photo"><img src={asset('/media/photos/group-team-highfive.jpg')} alt="" width="1800" height="1200" loading="eager" fetchPriority="high" style={{ "objectPosition": "50% 36%" }} /></div>
</div>{" "}<div className="container">{" "}<div className="hero-band band">{" "}<p className="kicker"><Link to="/group-benefits">Group Benefits</Link></p>
<h1 id="page-title" tabIndex={-1}>Group Life</h1>{" "}<p className="band-lede">Group life insurance that extends your care to your employees' families.</p>{" "}</div>{" "}</div>{" "}</section>{" "}<section className="section after-band" aria-labelledby="glance-title">{" "}<div className="container prow">{" "}<div className="prow-body reveal">{" "}<p className="kicker">Group Life</p>{" "}<h2 className="h2" id="glance-title">Coverage at a glance</h2>{" "}<div className="copy"><p>Group life insurance is term life coverage provided through an employer. Basic group life is often paid by the employer and may be offered as a flat amount or as a multiple of salary, while voluntary or supplemental group life allows employees to purchase additional coverage for themselves and often for a spouse or children through payroll deduction.</p>
<p>Group life is frequently paired with accidental death and dismemberment coverage, and many policies allow employees to continue or convert their coverage if they leave the company. Because enrollment is offered to the group, employees can often obtain a meaningful amount of coverage with simplified underwriting. Features and limits vary by carrier.</p>
</div>{" "}</div>{" "}<div className="prow-media reveal"><img src={asset('/media/photos/group-boardroom.jpg')} alt="Colleagues reviewing documents together around a boardroom table" width="1800" height="1202" decoding="async" style={{ "objectPosition": "50% 35%" }} /></div>{" "}</div>{" "}</section>{" "}<section className="section tint" aria-labelledby="suits-title">{" "}<div className="container sec-head sec-copy reveal">{" "}<h2 className="h2" id="suits-title">Who it is designed for</h2>{" "}<div className="copy"><p>Group life insurance is designed for employers of every size who would like to offer a benefit that employees value highly at a modest cost to the business. It is particularly meaningful for teams with young families and for employers who want to complement a group health plan with broader protection.</p>
</div>{" "}</div>{" "}</section>{" "}<section className="section" aria-labelledby="how-title">{" "}<div className="container sec-head sec-copy reveal">{" "}<h2 className="h2" id="how-title">How the plan works</h2>{" "}<div className="copy"><p>We help you decide on the structure of the basic benefit, whether to offer voluntary coverage and how the program should interact with your other benefits. We then compare carriers, coordinate enrollment and explain the coverage to your employees in clear terms so that they understand what they have.</p>
<p>Throughout the year, we support you with additions, changes and claims, and we review the program at renewal so that it remains competitive and continues to meet the needs of your team.</p>
</div>{" "}</div>{" "}</section>{" "}<section className="section tint consult" id="consult" tabIndex={-1} aria-labelledby="consult-title">{" "}<div className="container consult-faq">{" "}<ConsultPanel kicker={<>Request a consultation</>} title={<>Speak with us about Group Life</>} lede={<>Share a few details, and we will reach out personally to arrange a conversation at a time that suits you. There is never any cost or obligation for our guidance.</>} category="Group Benefits" coverage="Group Life" />{" "}<aside className="consult-faq-aside" aria-labelledby="cfaq-title">{" "}<p className="kicker">Common questions</p>{" "}<h2 id="cfaq-title">Group Life, answered</h2>{" "}<Faq className="faq cfaq" items={[{ qid: "cfaq-q1", aid: "cfaq-a1", open: true, q: <>Is employer paid group life taxable to employees?</>, a: <><p>Employer paid group term life coverage above a certain amount may create imputed income for employees under federal tax rules. We explain how this works and coordinate with your payroll provider so that it is handled correctly.</p>
</> }, { qid: "cfaq-q2", aid: "cfaq-a2", open: false, q: <>Can employees keep their coverage if they leave?</>, a: <><p>Many group life policies include portability or conversion provisions that allow departing employees to continue coverage on an individual basis. The specific terms depend on the carrier and the policy.</p>
</> }, { qid: "cfaq-q3", aid: "cfaq-a3", open: false, q: <>Do employees need to answer health questions?</>, a: <><p>Basic coverage and amounts of voluntary coverage up to a guaranteed issue limit often require no health questions when elected during initial enrollment. Larger amounts may require evidence of insurability.</p>
</> }]} />{" "}<p className="fine">Prefer to talk it through? Call{" "}<a href="tel:+19735247188" data-config="phone-link"><span data-config="phone">(973) 524-7188</span></a>{" "}and we will answer in person.</p>{" "}</aside>{" "}</div>{" "}</section>{" "}</main>
    </>
  )
}
