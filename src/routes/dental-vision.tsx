import { createFileRoute, Link } from '@tanstack/react-router'
import { ConsultPanel } from '~/components/ConsultPanel'
import { Faq } from '~/components/Faq'
import { usePageEnhancements } from '~/lib/usePageEnhancements'
import { asset, cdnHead } from '~/lib/assets'

/* Converted from dental-vision.html (King Health, Summit). Page copy and markup are unchanged. */
const head = {
  "meta": [
    {
      "title": "Dental and Vision Plans in NJ and NC | King Health"
    },
    {
      "name": "description",
      "content": "Individual dental and vision plans in Newark and across New Jersey, with predictable costs for healthy smiles and clear sight. Call King Health to compare."
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
      "content": "Dental and Vision Plans in NJ and NC | King Health"
    },
    {
      "property": "og:description",
      "content": "Individual dental and vision plans in Newark and across New Jersey, with predictable costs for healthy smiles and clear sight. Call King Health to compare."
    },
    {
      "property": "og:url",
      "content": "https://kinghealthdirect.com/dental-vision"
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
      "content": "Dental and Vision Plans in NJ and NC | King Health"
    },
    {
      "name": "twitter:description",
      "content": "Individual dental and vision plans in Newark and across New Jersey, with predictable costs for healthy smiles and clear sight. Call King Health to compare."
    },
    {
      "name": "twitter:image",
      "content": "https://kinghealthdirect.com/assets/og/king-health-og.jpg"
    }
  ],
  "links": [
    {
      "rel": "canonical",
      "href": "https://kinghealthdirect.com/dental-vision"
    }
  ],
  "scripts": [
    {
      "type": "application/ld+json",
      "children": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"https://kinghealthdirect.com/#organization\",\"name\":\"King Health\",\"legalName\":\"King Health LLC\",\"url\":\"https://kinghealthdirect.com/\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://kinghealthdirect.com/brand/king-health-lockup.png\",\"width\":1000,\"height\":659},\"sameAs\":[\"https://www.facebook.com/kinghealthdirect\",\"https://www.instagram.com/kinghealthdirect\",\"https://wa.me/19735247188?text=Hello%20Javon%2C%20I%20found%20King%20Health%20online%20and%20would%20like%20to%20talk%20about%20my%20coverage.\",\"https://www.google.com/maps?cid=9265971853131828090\"],\"contactPoint\":{\"@type\":\"ContactPoint\",\"telephone\":\"+1-973-524-7188\",\"contactType\":\"customer service\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}],\"availableLanguage\":\"en\",\"email\":\"Javon@kinghealthdirect.com\"}},{\"@type\":\"WebSite\",\"@id\":\"https://kinghealthdirect.com/#website\",\"url\":\"https://kinghealthdirect.com/\",\"name\":\"King Health\",\"inLanguage\":\"en-US\",\"publisher\":{\"@id\":\"https://kinghealthdirect.com/#organization\"}},{\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://kinghealthdirect.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Individual Benefits\",\"item\":\"https://kinghealthdirect.com/individual-benefits\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Dental and Vision\",\"item\":\"https://kinghealthdirect.com/dental-vision\"}]},{\"@type\":\"Service\",\"name\":\"Dental and Vision\",\"serviceType\":\"Dental and Vision\",\"url\":\"https://kinghealthdirect.com/dental-vision\",\"provider\":{\"@type\":\"InsuranceAgency\",\"@id\":\"https://kinghealthdirect.com/#agency\",\"name\":\"King Health\",\"url\":\"https://kinghealthdirect.com/\",\"telephone\":\"+1-973-524-7188\"},\"description\":\"Individual dental and vision plans help you and your family maintain healthy smiles and clear sight with predictable, manageable costs.\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}]},{\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Are there waiting periods before coverage begins?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Preventive care is often covered right away, while basic and major services may carry waiting periods. Some plans waive these waiting periods for applicants with prior dental coverage, and we will point out those options where they are available.\"}},{\"@type\":\"Question\",\"name\":\"Can we keep our current dentist?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"In many cases you can. We check whether your dentist and eye doctor participate in each plan's network, and we also identify plans that allow you to visit any provider.\"}},{\"@type\":\"Question\",\"name\":\"Should we purchase dental and vision together?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Bundling is often convenient and can be cost effective, but it is not required. We compare stand alone and combined plans so that you pay only for the coverage your family will use.\"}}]}]}"
    }
  ]
}

export const Route = createFileRoute('/dental-vision')({
  head: () => cdnHead(head),
  component: DentalVisionPage,
})

function DentalVisionPage() {
  usePageEnhancements()
  return (
    <>
<nav className="subnav" aria-label="Individual Benefits pages" data-from="individual"><div className="container sn"><ul className="sn-list"><li className="sn-label-item"><Link to="/individual-benefits" className="sn-label">Individual Benefits</Link></li><li><Link to="/individual-health">Individual Health</Link></li><li><Link to="/whole-life">Whole Life</Link></li><li><Link to="/term-life">Term Life</Link></li><li><Link to="/ancillary" search={{ from: "individual" }}>Ancillary</Link></li><li><Link to="/dental-vision" aria-current="page">Dental and Vision</Link></li></ul>
</div>
</nav>{" "}
<main id="main" tabIndex={-1}>{" "}<section className="banner" aria-labelledby="page-title">{" "}<div className="hero-media hero-wide"><div className="hero-photo"><img src={asset('/media/photos/vision-fitting-smile.jpg')} alt="" width="1800" height="1200" loading="eager" fetchPriority="high" style={{ "objectPosition": "50% 42%" }} /></div>
</div>{" "}<div className="container">{" "}<div className="hero-band band">{" "}<p className="kicker"><Link to="/individual-benefits">Individual Benefits</Link></p>
<h1 id="page-title" tabIndex={-1}>Dental and Vision</h1>{" "}<p className="band-lede">Dental and vision coverage that keeps everyday care within reach.</p>{" "}</div>{" "}</div>{" "}</section>{" "}<section className="section after-band" aria-labelledby="glance-title">{" "}<div className="container prow">{" "}<div className="prow-body reveal">{" "}<p className="kicker">Dental and Vision</p>{" "}<h2 className="h2" id="glance-title">Coverage at a glance</h2>{" "}<div className="copy"><p>Individual dental insurance generally covers preventive care such as cleanings and examinations most generously, with basic services such as fillings and major services such as crowns or bridges covered at progressively lower levels. Many plans include an annual maximum benefit and a waiting period before major services are covered.</p>
<p>Individual vision insurance typically helps with routine eye examinations and provides an allowance toward eyeglass frames, lenses or contact lenses. Dental and vision plans may be purchased separately or together, and benefits, networks and waiting periods vary by carrier and by state.</p>
</div>{" "}</div>{" "}<div className="prow-media reveal"><img src={asset('/media/photos/dental-visit.jpg')} alt="A dental hygienist standing beside a patient in a bright treatment room" width="1800" height="1200" decoding="async" style={{ "objectPosition": "40% 28%" }} /></div>{" "}</div>{" "}</section>{" "}<section className="section tint" aria-labelledby="suits-title">{" "}<div className="container sec-head sec-copy reveal">{" "}<h2 className="h2" id="suits-title">Who it is designed for</h2>{" "}<div className="copy"><p>These plans are designed for individuals and families who do not have dental or vision benefits through an employer, retirees whose health plan does not include routine dental or vision care, and anyone who would like to budget for these services with greater predictability.</p>
</div>{" "}</div>{" "}</section>{" "}<section className="section" aria-labelledby="how-title">{" "}<div className="container sec-head sec-copy reveal">{" "}<h2 className="h2" id="how-title">How the plan works</h2>{" "}<div className="copy"><p>You pay a monthly premium, and the plan pays a share of the cost of covered services, usually with the greatest savings when you visit providers within the plan's network. Some plans allow you to see any dentist or eye doctor, while others offer lower premiums in exchange for a defined network.</p>
<p>We compare plans by looking at your current dentist and eye doctor, the services you anticipate and the premium that fits your budget. If you are planning significant dental work, we pay close attention to waiting periods and annual maximums so that your plan serves you when you need it.</p>
</div>{" "}</div>{" "}</section>{" "}<section className="section tint consult" id="consult" tabIndex={-1} aria-labelledby="consult-title">{" "}<div className="container consult-faq">{" "}<ConsultPanel kicker={<>Request a consultation</>} title={<>Speak with us about Dental and Vision</>} lede={<>Share a few details, and we will reach out personally to arrange a conversation at a time that suits you. There is never any cost or obligation for our guidance.</>} category="Individual Benefits" coverage="Dental and Vision" />{" "}<aside className="consult-faq-aside" aria-labelledby="cfaq-title">{" "}<p className="kicker">Common questions</p>{" "}<h2 id="cfaq-title">Dental and Vision, answered</h2>{" "}<Faq className="faq cfaq" items={[{ qid: "cfaq-q1", aid: "cfaq-a1", open: true, q: <>Are there waiting periods before coverage begins?</>, a: <><p>Preventive care is often covered right away, while basic and major services may carry waiting periods. Some plans waive these waiting periods for applicants with prior dental coverage, and we will point out those options where they are available.</p>
</> }, { qid: "cfaq-q2", aid: "cfaq-a2", open: false, q: <>Can we keep our current dentist?</>, a: <><p>In many cases you can. We check whether your dentist and eye doctor participate in each plan's network, and we also identify plans that allow you to visit any provider.</p>
</> }, { qid: "cfaq-q3", aid: "cfaq-a3", open: false, q: <>Should we purchase dental and vision together?</>, a: <><p>Bundling is often convenient and can be cost effective, but it is not required. We compare stand alone and combined plans so that you pay only for the coverage your family will use.</p>
</> }]} />{" "}<p className="fine">Prefer to talk it through? Call{" "}<a href="tel:+19735247188" data-config="phone-link"><span data-config="phone">(973) 524-7188</span></a>{" "}and we will answer in person.</p>{" "}</aside>{" "}</div>{" "}</section>{" "}</main>
    </>
  )
}
