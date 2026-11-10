import { createFileRoute, Link } from '@tanstack/react-router'
import { ConsultPanel } from '~/components/ConsultPanel'
import { Faq } from '~/components/Faq'
import { usePageEnhancements } from '~/lib/usePageEnhancements'
import { asset, cdnHead } from '~/lib/assets'

/* Converted from contact.html (King Health, Summit). Page copy and markup are unchanged. */
const head = {
  "meta": [
    {
      "title": "Contact King Health | Insurance Advisor in Newark, NJ"
    },
    {
      "name": "description",
      "content": "Contact King Health in Newark, New Jersey by phone or through our short request form, and we will arrange a conversation at a time that suits you. Call today."
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
      "content": "Contact King Health | Insurance Advisor in Newark, NJ"
    },
    {
      "property": "og:description",
      "content": "Contact King Health in Newark, New Jersey by phone or through our short request form, and we will arrange a conversation at a time that suits you. Call today."
    },
    {
      "property": "og:url",
      "content": "https://kinghealthdirect.com/contact"
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
      "content": "Contact King Health | Insurance Advisor in Newark, NJ"
    },
    {
      "name": "twitter:description",
      "content": "Contact King Health in Newark, New Jersey by phone or through our short request form, and we will arrange a conversation at a time that suits you. Call today."
    },
    {
      "name": "twitter:image",
      "content": "https://kinghealthdirect.com/assets/og/king-health-og.jpg"
    }
  ],
  "links": [
    {
      "rel": "canonical",
      "href": "https://kinghealthdirect.com/contact"
    }
  ],
  "scripts": [
    {
      "type": "application/ld+json",
      "children": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"https://kinghealthdirect.com/#organization\",\"name\":\"King Health\",\"legalName\":\"King Health LLC\",\"url\":\"https://kinghealthdirect.com/\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://kinghealthdirect.com/brand/king-health-lockup.png\",\"width\":1000,\"height\":659},\"sameAs\":[\"https://www.facebook.com/kinghealthdirect\",\"https://www.instagram.com/kinghealthdirect\",\"https://wa.me/19735247188?text=Hello%20Javon%2C%20I%20found%20King%20Health%20online%20and%20would%20like%20to%20talk%20about%20my%20coverage.\",\"https://www.google.com/maps?cid=9265971853131828090\"],\"contactPoint\":{\"@type\":\"ContactPoint\",\"telephone\":\"+1-973-524-7188\",\"contactType\":\"customer service\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}],\"availableLanguage\":\"en\",\"email\":\"Javon@kinghealthdirect.com\"}},{\"@type\":\"WebSite\",\"@id\":\"https://kinghealthdirect.com/#website\",\"url\":\"https://kinghealthdirect.com/\",\"name\":\"King Health\",\"inLanguage\":\"en-US\",\"publisher\":{\"@id\":\"https://kinghealthdirect.com/#organization\"}},{\"@type\":\"InsuranceAgency\",\"@id\":\"https://kinghealthdirect.com/#agency\",\"name\":\"King Health\",\"legalName\":\"King Health LLC\",\"url\":\"https://kinghealthdirect.com/\",\"logo\":\"https://kinghealthdirect.com/brand/king-health-lockup.png\",\"image\":\"https://kinghealthdirect.com/assets/og/king-health-og.jpg\",\"telephone\":\"+1-973-524-7188\",\"email\":\"Javon@kinghealthdirect.com\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"801 Elizabeth Avenue\",\"addressLocality\":\"Newark\",\"addressRegion\":\"NJ\",\"postalCode\":\"07112\",\"addressCountry\":\"US\"},\"geo\":{\"@type\":\"GeoCoordinates\",\"latitude\":40.7072735,\"longitude\":-74.2028628},\"hasMap\":\"https://www.google.com/maps?cid=9265971853131828090\",\"openingHoursSpecification\":[{\"@type\":\"OpeningHoursSpecification\",\"dayOfWeek\":[\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\"],\"opens\":\"08:30\",\"closes\":\"18:00\"},{\"@type\":\"OpeningHoursSpecification\",\"dayOfWeek\":[\"Saturday\"],\"opens\":\"08:30\",\"closes\":\"17:00\"}],\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}],\"founder\":{\"@type\":\"Person\",\"name\":\"Javon King\",\"jobTitle\":\"Independent Insurance Advisor\"},\"sameAs\":[\"https://www.facebook.com/kinghealthdirect\",\"https://www.instagram.com/kinghealthdirect\",\"https://wa.me/19735247188?text=Hello%20Javon%2C%20I%20found%20King%20Health%20online%20and%20would%20like%20to%20talk%20about%20my%20coverage.\",\"https://www.google.com/maps?cid=9265971853131828090\"]}]}"
    }
  ]
}

export const Route = createFileRoute('/contact')({
  head: () => cdnHead(head),
  component: ContactPage,
})

function ContactPage() {
  usePageEnhancements()
  return (
    <>
<nav className="subnav" aria-label="King Health pages" data-site-nav><div className="container sn"><ul className="sn-list"><li className="sn-label-item"><Link to="/" className="sn-label">King Health</Link></li><li><Link to="/about">About Us</Link></li><li><Link to="/faq">FAQ</Link></li><li><Link to="/carriers">Carriers</Link></li><li><Link to="/reviews">Client Reviews</Link></li></ul>
</div>
</nav>{" "}
<main id="main" tabIndex={-1}>{" "}<section className="banner" aria-labelledby="page-title">{" "}<div className="hero-media hero-wide"><div className="hero-photo"><img src={asset('/media/photos/advisor-lounge-meeting.jpg')} alt="" width="1800" height="1202" loading="eager" fetchPriority="high" style={{ "objectPosition": "55% 40%" }} /></div>
</div>{" "}<div className="container">{" "}<div className="hero-band band">{" "}<p className="kicker">Contact Us</p>
<h1 id="page-title" tabIndex={-1}>Contact King Health</h1>{" "}<p className="band-lede">We would be glad to hear from you, whether you have a specific question or would simply like to begin a conversation about protecting the people you love.</p>{" "}</div>{" "}</div>{" "}</section>{" "}<section className="section tint consult after-band" id="consult" tabIndex={-1} aria-labelledby="consult-title">{" "}<div className="container contact-grid">{" "}<ConsultPanel kicker={<>Request a consultation</>} title={<>Tell us how we can help</>} lede={<>Required fields help us prepare before we call, and everything else is optional.</>} category="" coverage="" />{" "}<aside className="consult-aside" aria-label="Direct contact">{" "}<p className="kicker">Speak with us directly</p>{" "}<ul className="directs"><li><span className="k">Phone</span><a href="tel:+19735247188" data-config="phone-link"><span data-config="phone">(973) 524-7188</span></a></li><li><span className="k">Email</span><a href="mailto:Javon@kinghealthdirect.com" data-config="email-link"><span data-config="email">Javon@kinghealthdirect.com</span></a></li><li><span className="k">Hours</span><span>Monday through Friday from half past eight in the morning until six in the evening, and Saturday from half past eight until five. Closed on Sunday.</span></li><li className="directs-areas"><span className="k">Areas</span><ul className="area-list"><li>Newark, NJ</li><li>New Jersey</li><li>North Carolina</li></ul>
</li></ul>{" "}<div className="aside-links"><Link to="/reviews" className="tlink"><span>Read client reviews</span></Link></div>
<div className="contact-faq" aria-labelledby="cfaq-title">{" "}<p className="kicker">Common questions</p>{" "}<h2 id="cfaq-title" className="cfaq-sub">Working with King Health, answered</h2>{" "}<Faq className="faq cfaq" items={[{ qid: "cfaq-q1", aid: "cfaq-a1", open: true, q: <>Is there a cost for your guidance?</>, a: <><p>There is no fee for our guidance. We are compensated by the carriers whose plans we place, and the premium for a given plan is the same whether you enroll through us or directly.</p>
</> }, { qid: "cfaq-q2", aid: "cfaq-a2", open: false, q: <>What does it mean that King Health is independent?</>, a: <><p>We are not employed by a single insurance company. We represent multiple carriers, which allows us to compare plans side by side and recommend the one that fits your circumstances and your budget rather than a sales quota.</p>
</> }, { qid: "cfaq-q3", aid: "cfaq-a3", open: false, q: <>Which states do you serve?</>, a: <><p>King Health is licensed in New Jersey and North Carolina, so we can advise and place coverage for residents of either state. Conversations can take place by phone or at our office in Newark.</p>
</> }, { qid: "cfaq-q4", aid: "cfaq-a4", open: false, q: <>What happens after we submit this form?</>, a: <><p>We review your request and reach out personally to arrange a conversation at a time that suits you. Submitting the form is a request to be contacted rather than an application for coverage, and it carries no obligation.</p>
</> }]} />{" "}<p className="fine">Prefer to talk it through? Call{" "}<a href="tel:+19735247188" data-config="phone-link"><span data-config="phone">(973) 524-7188</span></a>{" "}and we will answer in person.</p>{" "}</div>{" "}<p className="fine">Coverage is subject to underwriting and carrier approval. Every application is placed through King Health.</p>{" "}</aside>{" "}</div>{" "}</section>{" "}<section className="section" aria-labelledby="next-title">{" "}<div className="container stages-wrap">{" "}<div className="stages-intro reveal"><h2 className="h2" id="next-title">What happens after you reach out</h2>
</div>{" "}<div className="stages reveal" data-draw><div className="stage"><h3>A personal conversation</h3>
<p>We contact you at a convenient time to learn about your family or business, the coverage you have today and what you would like to accomplish.</p>
</div>
<div className="stage"><h3>A careful comparison</h3>
<p>We compare options across carriers and present our recommendations clearly, explaining the protection, the costs and the tradeoffs of each choice.</p>
</div>
<div className="stage"><h3>Enrollment and lasting support</h3>
<p>When you are ready, we complete the application with you and remain your advisor for reviews, questions and claims for as long as you hold your coverage.</p>
</div>
</div>{" "}</div>{" "}</section>{" "}</main>
    </>
  )
}
