import { createFileRoute, Link } from '@tanstack/react-router'
import { ConsultPanel } from '~/components/ConsultPanel'
import { Faq } from '~/components/Faq'
import { usePageEnhancements } from '~/lib/usePageEnhancements'
import { asset, cdnHead } from '~/lib/assets'

/* Converted from group-dental-vision.html (King Health, Summit). Page copy and markup are unchanged. */
const head = {
  "meta": [
    {
      "title": "Group Dental and Vision in NJ and NC | King Health"
    },
    {
      "name": "description",
      "content": "Group dental and vision plans for New Jersey employers, among the most valued and most used employee benefits, priced to suit you. Call King Health today."
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
      "content": "Group Dental and Vision in NJ and NC | King Health"
    },
    {
      "property": "og:description",
      "content": "Group dental and vision plans for New Jersey employers, among the most valued and most used employee benefits, priced to suit you. Call King Health today."
    },
    {
      "property": "og:url",
      "content": "https://kinghealthdirect.com/group-dental-vision"
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
      "content": "Group Dental and Vision in NJ and NC | King Health"
    },
    {
      "name": "twitter:description",
      "content": "Group dental and vision plans for New Jersey employers, among the most valued and most used employee benefits, priced to suit you. Call King Health today."
    },
    {
      "name": "twitter:image",
      "content": "https://kinghealthdirect.com/assets/og/king-health-og.jpg"
    }
  ],
  "links": [
    {
      "rel": "canonical",
      "href": "https://kinghealthdirect.com/group-dental-vision"
    }
  ],
  "scripts": [
    {
      "type": "application/ld+json",
      "children": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"https://kinghealthdirect.com/#organization\",\"name\":\"King Health\",\"legalName\":\"King Health LLC\",\"url\":\"https://kinghealthdirect.com/\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://kinghealthdirect.com/brand/king-health-lockup.png\",\"width\":1000,\"height\":659},\"sameAs\":[\"https://www.facebook.com/kinghealthdirect\",\"https://www.instagram.com/kinghealthdirect\",\"https://wa.me/19735247188?text=Hello%20Javon%2C%20I%20found%20King%20Health%20online%20and%20would%20like%20to%20talk%20about%20my%20coverage.\",\"https://www.google.com/maps?cid=9265971853131828090\"],\"contactPoint\":{\"@type\":\"ContactPoint\",\"telephone\":\"+1-973-524-7188\",\"contactType\":\"customer service\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}],\"availableLanguage\":\"en\",\"email\":\"Javon@kinghealthdirect.com\"}},{\"@type\":\"WebSite\",\"@id\":\"https://kinghealthdirect.com/#website\",\"url\":\"https://kinghealthdirect.com/\",\"name\":\"King Health\",\"inLanguage\":\"en-US\",\"publisher\":{\"@id\":\"https://kinghealthdirect.com/#organization\"}},{\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://kinghealthdirect.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Group Benefits\",\"item\":\"https://kinghealthdirect.com/group-benefits\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Group Dental and Vision\",\"item\":\"https://kinghealthdirect.com/group-dental-vision\"}]},{\"@type\":\"Service\",\"name\":\"Group Dental and Vision\",\"serviceType\":\"Group Dental and Vision\",\"url\":\"https://kinghealthdirect.com/group-dental-vision\",\"provider\":{\"@type\":\"InsuranceAgency\",\"@id\":\"https://kinghealthdirect.com/#agency\",\"name\":\"King Health\",\"url\":\"https://kinghealthdirect.com/\",\"telephone\":\"+1-973-524-7188\"},\"description\":\"Group dental and vision plans are among the most valued and most frequently used employee benefits, and we help employers offer them in a way that suits the budget.\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}]},{\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Can we offer these benefits without paying for them?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. Voluntary dental and vision plans allow employees to purchase coverage at group rates through payroll deduction, often with minimal administrative effort for the employer.\"}},{\"@type\":\"Question\",\"name\":\"Are there participation requirements?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Many carriers set minimum participation levels, particularly for employer paid plans. We will confirm the requirements for each option and help you choose a structure that your team will support.\"}},{\"@type\":\"Question\",\"name\":\"Do group plans have waiting periods?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Waiting periods for major services are common, but group plans frequently shorten or waive them, especially for larger groups or employer paid programs. We compare these terms as part of our recommendation.\"}}]}]}"
    }
  ]
}

export const Route = createFileRoute('/group-dental-vision')({
  head: () => cdnHead(head),
  component: GroupDentalVisionPage,
})

function GroupDentalVisionPage() {
  usePageEnhancements()
  return (
    <>
<nav className="subnav" aria-label="Group Benefits pages" data-from="group"><div className="container sn"><ul className="sn-list"><li className="sn-label-item"><Link to="/group-benefits" className="sn-label">Group Benefits</Link></li><li><Link to="/group-health">Group Health</Link></li><li><Link to="/group-life">Group Life</Link></li><li><Link to="/group-ancillary">Group Ancillary</Link></li><li><Link to="/group-dental-vision" aria-current="page">Group Dental and Vision</Link></li></ul>
</div>
</nav>{" "}
<main id="main" tabIndex={-1}>{" "}<section className="banner" aria-labelledby="page-title">{" "}<div className="hero-media hero-wide"><div className="hero-photo"><img src={asset('/media/photos/group-team-table.jpg')} alt="" width="1800" height="1200" loading="eager" fetchPriority="high" style={{ "objectPosition": "50% 38%" }} /></div>
</div>{" "}<div className="container">{" "}<div className="hero-band band">{" "}<p className="kicker"><Link to="/group-benefits">Group Benefits</Link></p>
<h1 id="page-title" tabIndex={-1}>Group Dental and Vision</h1>{" "}<p className="band-lede">Group dental and vision benefits your employees will use and appreciate.</p>{" "}</div>{" "}</div>{" "}</section>{" "}<section className="section after-band" aria-labelledby="glance-title">{" "}<div className="container prow">{" "}<div className="prow-body reveal">{" "}<p className="kicker">Group Dental and Vision</p>{" "}<h2 className="h2" id="glance-title">Coverage at a glance</h2>{" "}<div className="copy"><p>Group dental plans generally cover preventive care such as cleanings and examinations most generously, with basic and major services covered at progressively lower levels up to an annual maximum. Group vision plans typically cover routine eye examinations and provide allowances toward frames, lenses or contact lenses.</p>
<p>Employers may pay for these benefits in full, share the cost with employees or offer them on a voluntary basis that employees fund through payroll deduction. Group plans often feature richer benefits and shorter waiting periods than comparable individual plans, and designs vary by carrier and by state.</p>
</div>{" "}</div>{" "}<div className="prow-media reveal"><img src={asset('/media/photos/vision-exam.jpg')} alt="An optometrist examining a patient's eyes with a slit lamp" width="1800" height="1200" decoding="async" style={{ "objectPosition": "50% 32%" }} /></div>{" "}</div>{" "}</section>{" "}<section className="section tint" aria-labelledby="suits-title">{" "}<div className="container sec-head sec-copy reveal">{" "}<h2 className="h2" id="suits-title">Who it is designed for</h2>{" "}<div className="copy"><p>Group dental and vision coverage is designed for employers who want to round out a health plan with benefits employees use throughout the year, and for businesses that would like to offer meaningful benefits on a voluntary basis even before introducing a group health plan.</p>
</div>{" "}</div>{" "}</section>{" "}<section className="section" aria-labelledby="how-title">{" "}<div className="container sec-head sec-copy reveal">{" "}<h2 className="h2" id="how-title">How the plan works</h2>{" "}<div className="copy"><p>We review your team's needs and your budget, then compare plan designs, networks and funding options across carriers. Whether you choose an employer paid, contributory or voluntary approach, we present the options clearly so that you can see how each would serve your employees.</p>
<p>We coordinate enrollment, help employees confirm that their dentists and eye doctors participate, and remain available for questions throughout the year. At renewal, we review usage and pricing to keep the program valuable and sustainable.</p>
</div>{" "}</div>{" "}</section>{" "}<section className="section tint consult" id="consult" tabIndex={-1} aria-labelledby="consult-title">{" "}<div className="container consult-faq">{" "}<ConsultPanel kicker={<>Request a consultation</>} title={<>Speak with us about Group Dental and Vision</>} lede={<>Share a few details, and we will reach out personally to arrange a conversation at a time that suits you. There is never any cost or obligation for our guidance.</>} category="Group Benefits" coverage="Group Dental and Vision" />{" "}<aside className="consult-faq-aside" aria-labelledby="cfaq-title">{" "}<p className="kicker">Common questions</p>{" "}<h2 id="cfaq-title">Group Dental and Vision, answered</h2>{" "}<Faq className="faq cfaq" items={[{ qid: "cfaq-q1", aid: "cfaq-a1", open: true, q: <>Can we offer these benefits without paying for them?</>, a: <><p>Yes. Voluntary dental and vision plans allow employees to purchase coverage at group rates through payroll deduction, often with minimal administrative effort for the employer.</p>
</> }, { qid: "cfaq-q2", aid: "cfaq-a2", open: false, q: <>Are there participation requirements?</>, a: <><p>Many carriers set minimum participation levels, particularly for employer paid plans. We will confirm the requirements for each option and help you choose a structure that your team will support.</p>
</> }, { qid: "cfaq-q3", aid: "cfaq-a3", open: false, q: <>Do group plans have waiting periods?</>, a: <><p>Waiting periods for major services are common, but group plans frequently shorten or waive them, especially for larger groups or employer paid programs. We compare these terms as part of our recommendation.</p>
</> }]} />{" "}<p className="fine">Prefer to talk it through? Call{" "}<a href="tel:+19735247188" data-config="phone-link"><span data-config="phone">(973) 524-7188</span></a>{" "}and we will answer in person.</p>{" "}</aside>{" "}</div>{" "}</section>{" "}</main>
    </>
  )
}
