import { createFileRoute, Link } from '@tanstack/react-router'
import { ConsultPanel } from '~/components/ConsultPanel'
import { Faq } from '~/components/Faq'
import { usePageEnhancements } from '~/lib/usePageEnhancements'
import { asset, cdnHead } from '~/lib/assets'

/* Converted from final-expense.html (King Health, Summit). Page copy and markup are unchanged. */
const head = {
  "meta": [
    {
      "title": "Final Expense Insurance in NJ and NC | King Health"
    },
    {
      "name": "description",
      "content": "Final expense insurance in Newark and across New Jersey, a modest whole life policy that eases final arrangements for your family. Call King Health to talk."
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
      "content": "Final Expense Insurance in NJ and NC | King Health"
    },
    {
      "property": "og:description",
      "content": "Final expense insurance in Newark and across New Jersey, a modest whole life policy that eases final arrangements for your family. Call King Health to talk."
    },
    {
      "property": "og:url",
      "content": "https://kinghealthdirect.com/final-expense"
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
      "content": "Final Expense Insurance in NJ and NC | King Health"
    },
    {
      "name": "twitter:description",
      "content": "Final expense insurance in Newark and across New Jersey, a modest whole life policy that eases final arrangements for your family. Call King Health to talk."
    },
    {
      "name": "twitter:image",
      "content": "https://kinghealthdirect.com/assets/og/king-health-og.jpg"
    }
  ],
  "links": [
    {
      "rel": "canonical",
      "href": "https://kinghealthdirect.com/final-expense"
    }
  ],
  "scripts": [
    {
      "type": "application/ld+json",
      "children": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"https://kinghealthdirect.com/#organization\",\"name\":\"King Health\",\"legalName\":\"King Health LLC\",\"url\":\"https://kinghealthdirect.com/\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://kinghealthdirect.com/brand/king-health-lockup.png\",\"width\":1000,\"height\":659},\"sameAs\":[\"https://www.facebook.com/kinghealthdirect\",\"https://www.instagram.com/kinghealthdirect\",\"https://wa.me/19735247188?text=Hello%20Javon%2C%20I%20found%20King%20Health%20online%20and%20would%20like%20to%20talk%20about%20my%20coverage.\",\"https://www.google.com/maps?cid=9265971853131828090\"],\"contactPoint\":{\"@type\":\"ContactPoint\",\"telephone\":\"+1-973-524-7188\",\"contactType\":\"customer service\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}],\"availableLanguage\":\"en\",\"email\":\"Javon@kinghealthdirect.com\"}},{\"@type\":\"WebSite\",\"@id\":\"https://kinghealthdirect.com/#website\",\"url\":\"https://kinghealthdirect.com/\",\"name\":\"King Health\",\"inLanguage\":\"en-US\",\"publisher\":{\"@id\":\"https://kinghealthdirect.com/#organization\"}},{\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://kinghealthdirect.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Senior Benefits\",\"item\":\"https://kinghealthdirect.com/senior-benefits\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Final Expense\",\"item\":\"https://kinghealthdirect.com/final-expense\"}]},{\"@type\":\"Service\",\"name\":\"Final Expense\",\"serviceType\":\"Final Expense\",\"url\":\"https://kinghealthdirect.com/final-expense\",\"provider\":{\"@type\":\"InsuranceAgency\",\"@id\":\"https://kinghealthdirect.com/#agency\",\"name\":\"King Health\",\"url\":\"https://kinghealthdirect.com/\",\"telephone\":\"+1-973-524-7188\"},\"description\":\"Final expense insurance is a modest whole life policy designed to provide for final arrangements and related costs, giving your loved ones room to gather and remember together.\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}]},{\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Will we need a medical examination?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Usually not. Most final expense policies rely on health questions alone, and guaranteed acceptance options ask no health questions at all, although those policies generally include a waiting period before the full benefit is available.\"}},{\"@type\":\"Question\",\"name\":\"How do we decide on the right benefit amount?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"We consider the arrangements you envision, any other coverage or savings you already have and the premium that fits your budget. Our aim is to provide meaningful provision without asking more of your monthly income than is comfortable.\"}},{\"@type\":\"Question\",\"name\":\"Can the benefit be used for expenses other than a funeral?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. The benefit is paid to your beneficiaries, who may use it for funeral costs, remaining medical bills, travel for family members or any other need that arises.\"}}]}]}"
    }
  ]
}

export const Route = createFileRoute('/final-expense')({
  head: () => cdnHead(head),
  component: FinalExpensePage,
})

function FinalExpensePage() {
  usePageEnhancements()
  return (
    <>
<nav className="subnav" aria-label="Senior Benefits pages" data-from="senior"><div className="container sn"><ul className="sn-list"><li className="sn-label-item"><Link to="/senior-benefits" className="sn-label">Senior Benefits</Link></li><li><Link to="/medicare">Medicare</Link></li><li><Link to="/final-expense" aria-current="page">Final Expense</Link></li><li><Link to="/ancillary" search={{ from: "senior" }}>Ancillary</Link></li></ul>
</div>
</nav>{" "}
<main id="main" tabIndex={-1}>{" "}<section className="banner" aria-labelledby="page-title">{" "}<div className="hero-media hero-wide"><div className="hero-photo"><img src={asset('/media/photos/family-lawn-walk.jpg')} alt="" width="1800" height="1200" loading="eager" fetchPriority="high" style={{ "objectPosition": "50% 46%" }} /></div>
</div>{" "}<div className="container">{" "}<div className="hero-band band">{" "}<p className="kicker"><Link to="/senior-benefits">Senior Benefits</Link></p>
<h1 id="page-title" tabIndex={-1}>Final Expense</h1>{" "}<p className="band-lede">Final expense coverage that lets your family focus on what matters.</p>{" "}</div>{" "}</div>{" "}</section>{" "}<section className="section after-band" aria-labelledby="glance-title">{" "}<div className="container prow">{" "}<div className="prow-body reveal">{" "}<p className="kicker">Final Expense</p>{" "}<h2 className="h2" id="glance-title">Coverage at a glance</h2>{" "}<div className="copy"><p>Final expense insurance is a form of whole life insurance with a smaller benefit amount, intended to help with funeral and burial costs, outstanding medical bills and other final arrangements. Because it is permanent coverage, it remains in force for life as long as premiums are paid, and premiums generally stay level for the life of the policy.</p>
<p>The benefit is paid directly to the beneficiaries you name, who may use it in whatever way serves the family best. Many policies also build a modest cash value over time, and benefit amounts, underwriting and features vary by carrier and by state.</p>
</div>{" "}</div>{" "}<div className="prow-media reveal"><img src={asset('/media/photos/advisor-seniors-review.jpg')} alt="An advisor reviewing documents with an older couple at home" width="1800" height="1202" decoding="async" style={{ "objectPosition": "45% 30%" }} /></div>{" "}</div>{" "}</section>{" "}<section className="section tint" aria-labelledby="suits-title">{" "}<div className="container sec-head sec-copy reveal">{" "}<h2 className="h2" id="suits-title">Who it is designed for</h2>{" "}<div className="copy"><p>Final expense coverage is designed for older adults who would like to make thoughtful provision for their families without purchasing a large life insurance policy. It is often a good fit for people on a fixed income, people whose earlier coverage has ended, and people who simply want the reassurance of knowing that final arrangements are already provided for.</p>
</div>{" "}</div>{" "}</section>{" "}<section className="section" aria-labelledby="how-title">{" "}<div className="container sec-head sec-copy reveal">{" "}<h2 className="h2" id="how-title">How the plan works</h2>{" "}<div className="copy"><p>Many final expense policies use simplified underwriting, which means acceptance is based on a short set of health questions rather than a medical examination. For applicants with more significant health history, guaranteed acceptance policies are also available, and these typically include a waiting period before the full benefit applies.</p>
<p>We help you choose a benefit amount that reflects your wishes and fits comfortably within your monthly budget, compare carriers whose underwriting suits your health profile, and complete the application with you. Once your policy is in place, we remain available to your family to help them file a claim when the time comes.</p>
</div>{" "}</div>{" "}</section>{" "}<section className="section tint consult" id="consult" tabIndex={-1} aria-labelledby="consult-title">{" "}<div className="container consult-faq">{" "}<ConsultPanel kicker={<>Request a consultation</>} title={<>Speak with us about Final Expense</>} lede={<>Share a few details, and we will reach out personally to arrange a conversation at a time that suits you. There is never any cost or obligation for our guidance.</>} category="Senior Benefits" coverage="Final Expense" />{" "}<aside className="consult-faq-aside" aria-labelledby="cfaq-title">{" "}<p className="kicker">Common questions</p>{" "}<h2 id="cfaq-title">Final Expense, answered</h2>{" "}<Faq className="faq cfaq" items={[{ qid: "cfaq-q1", aid: "cfaq-a1", open: true, q: <>Will we need a medical examination?</>, a: <><p>Usually not. Most final expense policies rely on health questions alone, and guaranteed acceptance options ask no health questions at all, although those policies generally include a waiting period before the full benefit is available.</p>
</> }, { qid: "cfaq-q2", aid: "cfaq-a2", open: false, q: <>How do we decide on the right benefit amount?</>, a: <><p>We consider the arrangements you envision, any other coverage or savings you already have and the premium that fits your budget. Our aim is to provide meaningful provision without asking more of your monthly income than is comfortable.</p>
</> }, { qid: "cfaq-q3", aid: "cfaq-a3", open: false, q: <>Can the benefit be used for expenses other than a funeral?</>, a: <><p>Yes. The benefit is paid to your beneficiaries, who may use it for funeral costs, remaining medical bills, travel for family members or any other need that arises.</p>
</> }]} />{" "}<p className="fine">Prefer to talk it through? Call{" "}<a href="tel:+19735247188" data-config="phone-link"><span data-config="phone">(973) 524-7188</span></a>{" "}and we will answer in person.</p>{" "}</aside>{" "}</div>{" "}</section>{" "}</main>
    </>
  )
}
