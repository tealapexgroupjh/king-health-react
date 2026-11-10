import { createFileRoute, Link } from '@tanstack/react-router'
import { ConsultPanel } from '~/components/ConsultPanel'
import { Faq } from '~/components/Faq'
import { usePageEnhancements } from '~/lib/usePageEnhancements'
import { asset, cdnHead } from '~/lib/assets'

/* Converted from group-benefits.html (King Health, Summit). Page copy and markup are unchanged. */
const head = {
  "meta": [
    {
      "title": "Group Employee Benefits in NJ and NC | King Health"
    },
    {
      "name": "description",
      "content": "Group health, life, dental and vision benefits for New Jersey employers, designed to attract good people within a sensible budget. Call King Health today."
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
      "content": "Group Employee Benefits in NJ and NC | King Health"
    },
    {
      "property": "og:description",
      "content": "Group health, life, dental and vision benefits for New Jersey employers, designed to attract good people within a sensible budget. Call King Health today."
    },
    {
      "property": "og:url",
      "content": "https://kinghealthdirect.com/group-benefits"
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
      "content": "Group Employee Benefits in NJ and NC | King Health"
    },
    {
      "name": "twitter:description",
      "content": "Group health, life, dental and vision benefits for New Jersey employers, designed to attract good people within a sensible budget. Call King Health today."
    },
    {
      "name": "twitter:image",
      "content": "https://kinghealthdirect.com/assets/og/king-health-og.jpg"
    }
  ],
  "links": [
    {
      "rel": "canonical",
      "href": "https://kinghealthdirect.com/group-benefits"
    }
  ],
  "scripts": [
    {
      "type": "application/ld+json",
      "children": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"https://kinghealthdirect.com/#organization\",\"name\":\"King Health\",\"legalName\":\"King Health LLC\",\"url\":\"https://kinghealthdirect.com/\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://kinghealthdirect.com/brand/king-health-lockup.png\",\"width\":1000,\"height\":659},\"sameAs\":[\"https://www.facebook.com/kinghealthdirect\",\"https://www.instagram.com/kinghealthdirect\",\"https://wa.me/19735247188?text=Hello%20Javon%2C%20I%20found%20King%20Health%20online%20and%20would%20like%20to%20talk%20about%20my%20coverage.\",\"https://www.google.com/maps?cid=9265971853131828090\"],\"contactPoint\":{\"@type\":\"ContactPoint\",\"telephone\":\"+1-973-524-7188\",\"contactType\":\"customer service\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}],\"availableLanguage\":\"en\",\"email\":\"Javon@kinghealthdirect.com\"}},{\"@type\":\"WebSite\",\"@id\":\"https://kinghealthdirect.com/#website\",\"url\":\"https://kinghealthdirect.com/\",\"name\":\"King Health\",\"inLanguage\":\"en-US\",\"publisher\":{\"@id\":\"https://kinghealthdirect.com/#organization\"}},{\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://kinghealthdirect.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Group Benefits\",\"item\":\"https://kinghealthdirect.com/group-benefits\"}]},{\"@type\":\"Service\",\"name\":\"Group Benefits\",\"serviceType\":\"Group Benefits\",\"url\":\"https://kinghealthdirect.com/group-benefits\",\"provider\":{\"@type\":\"InsuranceAgency\",\"@id\":\"https://kinghealthdirect.com/#agency\",\"name\":\"King Health\",\"url\":\"https://kinghealthdirect.com/\",\"telephone\":\"+1-973-524-7188\"},\"description\":\"We help employers design health, life, dental and vision benefits that attract and retain good people while respecting the realities of a business budget.\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}]},{\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Is our business large enough to offer group coverage?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Eligibility rules vary by carrier and by state, and many carriers write small group plans for businesses with only a handful of employees. We confirm the participation and eligibility requirements that apply to your company before any quote is prepared.\"}},{\"@type\":\"Question\",\"name\":\"What will group coverage cost the business?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Employers typically contribute a share of each employee premium, and carriers often set a minimum employer contribution. We model several contribution levels so that you can see the cost to the business and the cost to employees side by side before you commit.\"}},{\"@type\":\"Question\",\"name\":\"Can we offer dental, vision or life without group health?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"In many cases you can. Group dental, vision and life plans can often be offered on their own or added later, which allows a business to begin with a focused benefits package and expand it as the team grows.\"}},{\"@type\":\"Question\",\"name\":\"How long does it take for coverage to begin?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Group plans usually take effect on the first day of a month once the carrier approves the application, the employee census and the initial premium. Timing depends on underwriting, so we recommend beginning the process several weeks before the date you have in mind.\"}}]}]}"
    }
  ]
}

export const Route = createFileRoute('/group-benefits')({
  head: () => cdnHead(head),
  component: GroupBenefitsPage,
})

function GroupBenefitsPage() {
  usePageEnhancements()
  return (
    <>
<nav className="subnav" aria-label="Group Benefits pages" data-from="group"><div className="container sn"><ul className="sn-list"><li className="sn-label-item"><Link to="/group-benefits" className="sn-label" aria-current="page">Group Benefits</Link></li><li><Link to="/group-health">Group Health</Link></li><li><Link to="/group-life">Group Life</Link></li><li><Link to="/group-ancillary">Group Ancillary</Link></li><li><Link to="/group-dental-vision">Group Dental and Vision</Link></li></ul>
</div>
</nav>{" "}
<main id="main" tabIndex={-1}>{" "}<section className="banner" aria-labelledby="page-title">{" "}<div className="hero-media hero-wide"><div className="hero-photo"><img src={asset('/media/photos/group-office-celebrate.jpg')} alt="" width="1800" height="1200" loading="eager" fetchPriority="high" style={{ "objectPosition": "50% 30%" }} /></div>
</div>{" "}<div className="container">{" "}<div className="hero-band band">{" "}<p className="kicker">Coverage category</p>
<h1 id="page-title" tabIndex={-1}>Group Benefits</h1>{" "}<p className="band-lede">Group benefits that help you care for the people who build your business.</p>{" "}</div>{" "}</div>{" "}</section>{" "}<section className="section after-band" aria-labelledby="ov-title">{" "}<div className="container overview reveal">{" "}<div><p className="kicker">Overview</p>
<h2 className="vh" id="ov-title">Group Benefits overview</h2>
</div>{" "}<div><p className="statement">A thoughtful benefits package is among the most meaningful ways an employer can show care for a team. We work with business owners to understand their workforce, their goals and their budget, and we compare group health, group life, dental, vision and supplemental options so that the program you offer is both valued by employees and sustainable for the business.</p>
<p>We also handle much of the work that makes benefits feel complicated. From gathering census information and presenting proposals to supporting enrollment and answering employee questions, we serve as a steady partner throughout the plan year and at every renewal.</p>
</div>{" "}</div>{" "}</section>{" "}<section className="section tint" aria-labelledby="opts-title">{" "}<div className="container">{" "}<div className="sec-head reveal"><h2 className="h2" id="opts-title">Coverage within Group Benefits</h2>
</div>{" "}<div className="cards cards-4"><article className="card card-text has-ic reveal">{" "}<div className="card-body"><span className="card-ic" aria-hidden="true"><svg className="ic" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><use href="#i-group-health" /></svg></span><h3><Link to="/group-health">Group Health</Link></h3>
<p>Employer sponsored health plans designed to care for your team and keep business costs predictable.</p>
<span className="tlink" aria-hidden="true"><span>Explore Group Health</span></span></div>{" "}</article>
<article className="card card-text has-ic reveal">{" "}<div className="card-body"><span className="card-ic" aria-hidden="true"><svg className="ic" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><use href="#i-group-life" /></svg></span><h3><Link to="/group-life">Group Life</Link></h3>
<p>Employer paid and voluntary life insurance that extends meaningful protection to your employees' families.</p>
<span className="tlink" aria-hidden="true"><span>Explore Group Life</span></span></div>{" "}</article>
<article className="card card-text has-ic reveal">{" "}<div className="card-body"><span className="card-ic" aria-hidden="true"><svg className="ic" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><use href="#i-group-ancillary" /></svg></span><h3><Link to="/group-ancillary">Group Ancillary</Link></h3>
<p>Workplace accident, critical illness, hospital indemnity, cancer and disability coverage that employers can offer on an employer paid or voluntary basis.</p>
<span className="tlink" aria-hidden="true"><span>Explore Group Ancillary</span></span></div>{" "}</article>
<article className="card card-text has-ic reveal">{" "}<div className="card-body"><span className="card-ic" aria-hidden="true"><svg className="ic" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><use href="#i-group-dental-vision" /></svg></span><h3><Link to="/group-dental-vision">Group Dental and Vision</Link></h3>
<p>Employer paid or voluntary dental and vision plans that your team will use and appreciate.</p>
<span className="tlink" aria-hidden="true"><span>Explore Group Dental and Vision</span></span></div>{" "}</article>
</div>{" "}</div>{" "}</section>{" "}<section className="section" aria-labelledby="help-title">{" "}<div className="container">{" "}<h2 className="h2 trio-title reveal" id="help-title">How we partner with employers</h2>{" "}<div className="trio reveal"><div className="trio-item"><h3>Benefits shaped to your workforce</h3>
<p>We consider the size, needs and preferences of your team so that the program reflects the people it serves.</p>
</div>
<div className="trio-item"><h3>Sensible cost structures</h3>
<p>We explain employer paid and voluntary options clearly, helping you decide how to share costs in a way that works for the business and its employees.</p>
</div>
<div className="trio-item"><h3>Enrollment and renewal support</h3>
<p>We guide your employees through enrollment and return each renewal season to review the program, the market and any changes that may serve you better.</p>
</div>
</div>{" "}</div>{" "}</section>{" "}<section className="section tint consult" id="consult" tabIndex={-1} aria-labelledby="consult-title">{" "}<div className="container consult-faq">{" "}<ConsultPanel kicker={<>Request a consultation</>} title={<>Speak with us about benefits for your team</>} lede={<>Tell us about your business and your goals for employee benefits, and we will arrange a conversation to explore the options together.</>} category="Group Benefits" coverage="All or unsure" />{" "}<aside className="consult-faq-aside" aria-labelledby="cfaq-title">{" "}<p className="kicker">Common questions</p>{" "}<h2 id="cfaq-title">Group benefits, answered</h2>{" "}<Faq className="faq cfaq" items={[{ qid: "cfaq-q1", aid: "cfaq-a1", open: true, q: <>Is our business large enough to offer group coverage?</>, a: <><p>Eligibility rules vary by carrier and by state, and many carriers write small group plans for businesses with only a handful of employees. We confirm the participation and eligibility requirements that apply to your company before any quote is prepared.</p>
</> }, { qid: "cfaq-q2", aid: "cfaq-a2", open: false, q: <>What will group coverage cost the business?</>, a: <><p>Employers typically contribute a share of each employee premium, and carriers often set a minimum employer contribution. We model several contribution levels so that you can see the cost to the business and the cost to employees side by side before you commit.</p>
</> }, { qid: "cfaq-q3", aid: "cfaq-a3", open: false, q: <>Can we offer dental, vision or life without group health?</>, a: <><p>In many cases you can. Group dental, vision and life plans can often be offered on their own or added later, which allows a business to begin with a focused benefits package and expand it as the team grows.</p>
</> }, { qid: "cfaq-q4", aid: "cfaq-a4", open: false, q: <>How long does it take for coverage to begin?</>, a: <><p>Group plans usually take effect on the first day of a month once the carrier approves the application, the employee census and the initial premium. Timing depends on underwriting, so we recommend beginning the process several weeks before the date you have in mind.</p>
</> }]} />{" "}<p className="fine">Prefer to talk it through? Call{" "}<a href="tel:+19735247188" data-config="phone-link"><span data-config="phone">(973) 524-7188</span></a>{" "}and we will answer in person.</p>{" "}</aside>{" "}</div>{" "}</section>{" "}</main>
    </>
  )
}
