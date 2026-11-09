import { createFileRoute, Link } from '@tanstack/react-router'
import { ConsultPanel } from '~/components/ConsultPanel'
import { Faq } from '~/components/Faq'
import { usePageEnhancements } from '~/lib/usePageEnhancements'

/* Converted from individual-benefits.html (King Health, Summit). Page copy and markup are unchanged. */
const head = {
  "meta": [
    {
      "title": "Individual Insurance in NJ and North Carolina | King Health"
    },
    {
      "name": "description",
      "content": "Health, life, dental and vision coverage for individuals and families in Newark and across New Jersey, compared across carriers. Call King Health to start."
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
      "content": "Individual Insurance in NJ and North Carolina | King Health"
    },
    {
      "property": "og:description",
      "content": "Health, life, dental and vision coverage for individuals and families in Newark and across New Jersey, compared across carriers. Call King Health to start."
    },
    {
      "property": "og:url",
      "content": "https://kinghealthdirect.com/individual-benefits"
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
      "content": "Individual Insurance in NJ and North Carolina | King Health"
    },
    {
      "name": "twitter:description",
      "content": "Health, life, dental and vision coverage for individuals and families in Newark and across New Jersey, compared across carriers. Call King Health to start."
    },
    {
      "name": "twitter:image",
      "content": "https://kinghealthdirect.com/assets/og/king-health-og.jpg"
    }
  ],
  "links": [
    {
      "rel": "canonical",
      "href": "https://kinghealthdirect.com/individual-benefits"
    }
  ],
  "scripts": [
    {
      "type": "application/ld+json",
      "children": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"https://kinghealthdirect.com/#organization\",\"name\":\"King Health\",\"legalName\":\"King Health LLC\",\"url\":\"https://kinghealthdirect.com/\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://kinghealthdirect.com/brand/king-health-lockup.png\",\"width\":1000,\"height\":659},\"sameAs\":[\"https://www.facebook.com/kinghealthdirect\",\"https://www.instagram.com/kinghealthdirect\",\"https://wa.me/19735247188?text=Hello%20Javon%2C%20I%20found%20King%20Health%20online%20and%20would%20like%20to%20talk%20about%20my%20coverage.\",\"https://www.google.com/maps?cid=9265971853131828090\"],\"contactPoint\":{\"@type\":\"ContactPoint\",\"telephone\":\"+1-973-524-7188\",\"contactType\":\"customer service\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}],\"availableLanguage\":\"en\",\"email\":\"Javon@kinghealthdirect.com\"}},{\"@type\":\"WebSite\",\"@id\":\"https://kinghealthdirect.com/#website\",\"url\":\"https://kinghealthdirect.com/\",\"name\":\"King Health\",\"inLanguage\":\"en-US\",\"publisher\":{\"@id\":\"https://kinghealthdirect.com/#organization\"}},{\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://kinghealthdirect.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Individual Benefits\",\"item\":\"https://kinghealthdirect.com/individual-benefits\"}]},{\"@type\":\"Service\",\"name\":\"Individual Benefits\",\"serviceType\":\"Individual Benefits\",\"url\":\"https://kinghealthdirect.com/individual-benefits\",\"provider\":{\"@type\":\"InsuranceAgency\",\"@id\":\"https://kinghealthdirect.com/#agency\",\"name\":\"King Health\",\"url\":\"https://kinghealthdirect.com/\",\"telephone\":\"+1-973-524-7188\"},\"description\":\"From health insurance to life insurance and everyday dental and vision care, we help individuals and families assemble protection that is sound, sensible and affordable.\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}]},{\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"When can we enroll in an individual health plan?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Individual health plans generally enroll during the annual Open Enrollment Period each fall. Outside that window, a qualifying life event such as losing employer coverage, marriage, the birth of a child or a move can open a Special Enrollment Period, which is typically limited to sixty days from the event.\"}},{\"@type\":\"Question\",\"name\":\"Should we choose term or whole life insurance?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Term life insurance covers a defined period, such as the years a mortgage remains outstanding or children live at home, at a lower premium. Whole life insurance lasts for your lifetime and builds cash value at a higher premium. Many households combine the two, and we model both against your goals before recommending either.\"}},{\"@type\":\"Question\",\"name\":\"How much life insurance does our family need?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"The right amount depends on the income your household would need to replace, outstanding debts, future obligations such as education, and the savings and coverage you already hold. We work through each of those figures with you rather than relying on a single rule of thumb.\"}},{\"@type\":\"Question\",\"name\":\"Is dedicated dental and vision coverage worth adding?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"For households that expect regular cleanings, fillings, eye examinations or new lenses, a dedicated dental and vision plan can reduce out of pocket costs considerably. Waiting periods often apply to major dental work, so enrolling before the need arises tends to matter.\"}}]}]}"
    }
  ]
}

export const Route = createFileRoute('/individual-benefits')({
  head: () => head,
  component: IndividualBenefitsPage,
})

function IndividualBenefitsPage() {
  usePageEnhancements()
  return (
    <>
<nav className="subnav" aria-label="Individual Benefits pages" data-from="individual"><div className="container sn"><ul className="sn-list"><li className="sn-label-item"><Link to="/individual-benefits" className="sn-label" aria-current="page">Individual Benefits</Link></li><li><Link to="/individual-health">Individual Health</Link></li><li><Link to="/whole-life">Whole Life</Link></li><li><Link to="/term-life">Term Life</Link></li><li><Link to="/ancillary" search={{ from: "individual" }}>Ancillary</Link></li><li><Link to="/dental-vision">Dental and Vision</Link></li></ul>
</div>
</nav>{" "}
<main id="main" tabIndex={-1}>{" "}<section className="banner" aria-labelledby="page-title">{" "}<div className="hero-media hero-wide"><div className="hero-photo"><img src="/media/photos/father-baby-garden.jpg" alt="" width="1800" height="1200" loading="eager" fetchPriority="high" style={{ "objectPosition": "50% 30%" }} /></div>
</div>{" "}<div className="container">{" "}<div className="hero-band band">{" "}<p className="kicker">Coverage category</p>
<h1 id="page-title" tabIndex={-1}>Individual Benefits</h1>{" "}<p className="band-lede">Individual and family coverage designed around your life.</p>{" "}</div>{" "}</div>{" "}</section>{" "}<section className="section after-band" aria-labelledby="ov-title">{" "}<div className="container overview reveal">{" "}<div><p className="kicker">Overview</p>
<h2 className="vh" id="ov-title">Individual Benefits overview</h2>
</div>{" "}<div><p className="statement">Every household carries its own priorities, and the coverage that protects it should reflect them. We help individuals, couples and families compare health plans, select life insurance that provides for the people who depend on them, and add dental, vision and supplemental benefits that make everyday care more manageable.</p>
<p>Our approach begins with listening. Once we understand your family, your income and your goals, we compare options across carriers and present them clearly, so that you can see how each choice affects both your protection and your monthly budget.</p>
</div>{" "}</div>{" "}</section>{" "}<section className="section tint" aria-labelledby="opts-title">{" "}<div className="container">{" "}<div className="sec-head reveal"><h2 className="h2" id="opts-title">Coverage within Individual Benefits</h2>
</div>{" "}<div className="cards cards-5"><article className="card card-text has-ic reveal">{" "}<div className="card-body"><span className="card-ic" aria-hidden="true"><svg className="ic" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><use href="#i-individual-health" /></svg></span><h3><Link to="/individual-health">Individual Health</Link></h3>
<p>Marketplace and private health plans for individuals and families, compared carefully for value and fit.</p>
<span className="tlink" aria-hidden="true"><span>Explore Individual Health</span></span></div>{" "}</article>
<article className="card card-text has-ic reveal">{" "}<div className="card-body"><span className="card-ic" aria-hidden="true"><svg className="ic" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><use href="#i-whole-life" /></svg></span><h3><Link to="/whole-life">Whole Life</Link></h3>
<p>Permanent protection with level premiums and guaranteed cash value growth, built to last a lifetime.</p>
<span className="tlink" aria-hidden="true"><span>Explore Whole Life</span></span></div>{" "}</article>
<article className="card card-text has-ic reveal">{" "}<div className="card-body"><span className="card-ic" aria-hidden="true"><svg className="ic" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><use href="#i-term-life" /></svg></span><h3><Link to="/term-life">Term Life</Link></h3>
<p>Substantial, affordable protection for the years when your family depends most on your income.</p>
<span className="tlink" aria-hidden="true"><span>Explore Term Life</span></span></div>{" "}</article>
<article className="card card-text has-ic reveal">{" "}<div className="card-body"><span className="card-ic" aria-hidden="true"><svg className="ic" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><use href="#i-ancillary" /></svg></span><h3><Link to="/ancillary" search={{ from: "individual" }}>Ancillary</Link></h3>
<p>Supplemental dental, vision, hearing, accident, critical illness, hospital indemnity and cancer coverage that strengthens your primary plan.</p>
<span className="tlink" aria-hidden="true"><span>Explore Ancillary</span></span></div>{" "}</article>
<article className="card card-text has-ic reveal">{" "}<div className="card-body"><span className="card-ic" aria-hidden="true"><svg className="ic" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><use href="#i-dental-vision" /></svg></span><h3><Link to="/dental-vision">Dental and Vision</Link></h3>
<p>Individual and family dental and vision plans that make routine care predictable and affordable.</p>
<span className="tlink" aria-hidden="true"><span>Explore Dental and Vision</span></span></div>{" "}</article>
</div>{" "}</div>{" "}</section>{" "}<section className="section" aria-labelledby="help-title">{" "}<div className="container">{" "}<h2 className="h2 trio-title reveal" id="help-title">How we help individuals and families</h2>{" "}<div className="trio reveal"><div className="trio-item"><h3>A complete picture</h3>
<p>We consider your health coverage, life insurance and supplemental benefits together, so that each part of your plan complements the others.</p>
</div>
<div className="trio-item"><h3>Budget conscious guidance</h3>
<p>We look for the combination of coverage and cost that protects your household without asking more of your finances than is comfortable.</p>
</div>
<div className="trio-item"><h3>Support as life changes</h3>
<p>Marriage, a new child, a new home or a new career can all call for a fresh look, and we are glad to review your plan whenever your circumstances shift.</p>
</div>
</div>{" "}</div>{" "}</section>{" "}<section className="section tint consult" id="consult" tabIndex={-1} aria-labelledby="consult-title">{" "}<div className="container consult-faq">{" "}<ConsultPanel kicker={<>Request a consultation</>} title={<>Speak with us about coverage for your household</>} lede={<>Share a few details about your family and your goals, and we will prepare a thoughtful comparison of the options that suit you.</>} category="Individual Benefits" coverage="All or unsure" />{" "}<aside className="consult-faq-aside" aria-labelledby="cfaq-title">{" "}<p className="kicker">Common questions</p>{" "}<h2 id="cfaq-title">Individual and family coverage, answered</h2>{" "}<Faq className="faq cfaq" items={[{ qid: "cfaq-q1", aid: "cfaq-a1", open: true, q: <>When can we enroll in an individual health plan?</>, a: <><p>Individual health plans generally enroll during the annual Open Enrollment Period each fall. Outside that window, a qualifying life event such as losing employer coverage, marriage, the birth of a child or a move can open a Special Enrollment Period, which is typically limited to sixty days from the event.</p>
</> }, { qid: "cfaq-q2", aid: "cfaq-a2", open: false, q: <>Should we choose term or whole life insurance?</>, a: <><p>Term life insurance covers a defined period, such as the years a mortgage remains outstanding or children live at home, at a lower premium. Whole life insurance lasts for your lifetime and builds cash value at a higher premium. Many households combine the two, and we model both against your goals before recommending either.</p>
</> }, { qid: "cfaq-q3", aid: "cfaq-a3", open: false, q: <>How much life insurance does our family need?</>, a: <><p>The right amount depends on the income your household would need to replace, outstanding debts, future obligations such as education, and the savings and coverage you already hold. We work through each of those figures with you rather than relying on a single rule of thumb.</p>
</> }, { qid: "cfaq-q4", aid: "cfaq-a4", open: false, q: <>Is dedicated dental and vision coverage worth adding?</>, a: <><p>For households that expect regular cleanings, fillings, eye examinations or new lenses, a dedicated dental and vision plan can reduce out of pocket costs considerably. Waiting periods often apply to major dental work, so enrolling before the need arises tends to matter.</p>
</> }]} />{" "}<p className="fine">Prefer to talk it through? Call{" "}<a href="tel:+19735247188" data-config="phone-link"><span data-config="phone">(973) 524-7188</span></a>{" "}and we will answer in person.</p>{" "}</aside>{" "}</div>{" "}</section>{" "}</main>
    </>
  )
}
