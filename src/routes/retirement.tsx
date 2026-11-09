import { createFileRoute, Link } from '@tanstack/react-router'
import { ConsultPanel } from '~/components/ConsultPanel'
import { Faq } from '~/components/Faq'
import { usePageEnhancements } from '~/lib/usePageEnhancements'

/* Converted from retirement.html (King Health, Summit). Page copy and markup are unchanged. */
const head = {
  "meta": [
    {
      "title": "Retirement Planning in NJ and North Carolina | King Health"
    },
    {
      "name": "description",
      "content": "Retirement income planning in Newark and across New Jersey with annuities and indexed universal life, chosen for steady income. Call King Health to begin."
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
      "content": "Retirement Planning in NJ and North Carolina | King Health"
    },
    {
      "property": "og:description",
      "content": "Retirement income planning in Newark and across New Jersey with annuities and indexed universal life, chosen for steady income. Call King Health to begin."
    },
    {
      "property": "og:url",
      "content": "https://kinghealthdirect.com/retirement"
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
      "content": "Retirement Planning in NJ and North Carolina | King Health"
    },
    {
      "name": "twitter:description",
      "content": "Retirement income planning in Newark and across New Jersey with annuities and indexed universal life, chosen for steady income. Call King Health to begin."
    },
    {
      "name": "twitter:image",
      "content": "https://kinghealthdirect.com/assets/og/king-health-og.jpg"
    }
  ],
  "links": [
    {
      "rel": "canonical",
      "href": "https://kinghealthdirect.com/retirement"
    }
  ],
  "scripts": [
    {
      "type": "application/ld+json",
      "children": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"https://kinghealthdirect.com/#organization\",\"name\":\"King Health\",\"legalName\":\"King Health LLC\",\"url\":\"https://kinghealthdirect.com/\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://kinghealthdirect.com/brand/king-health-lockup.png\",\"width\":1000,\"height\":659},\"sameAs\":[\"https://www.facebook.com/kinghealthdirect\",\"https://www.instagram.com/kinghealthdirect\",\"https://wa.me/19735247188?text=Hello%20Javon%2C%20I%20found%20King%20Health%20online%20and%20would%20like%20to%20talk%20about%20my%20coverage.\",\"https://www.google.com/maps?cid=9265971853131828090\"],\"contactPoint\":{\"@type\":\"ContactPoint\",\"telephone\":\"+1-973-524-7188\",\"contactType\":\"customer service\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}],\"availableLanguage\":\"en\",\"email\":\"Javon@kinghealthdirect.com\"}},{\"@type\":\"WebSite\",\"@id\":\"https://kinghealthdirect.com/#website\",\"url\":\"https://kinghealthdirect.com/\",\"name\":\"King Health\",\"inLanguage\":\"en-US\",\"publisher\":{\"@id\":\"https://kinghealthdirect.com/#organization\"}},{\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://kinghealthdirect.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Retirement\",\"item\":\"https://kinghealthdirect.com/retirement\"}]},{\"@type\":\"Service\",\"name\":\"Retirement\",\"serviceType\":\"Retirement\",\"url\":\"https://kinghealthdirect.com/retirement\",\"provider\":{\"@type\":\"InsuranceAgency\",\"@id\":\"https://kinghealthdirect.com/#agency\",\"name\":\"King Health\",\"url\":\"https://kinghealthdirect.com/\",\"telephone\":\"+1-973-524-7188\"},\"description\":\"We help you consider annuities and indexed universal life as part of a retirement plan built for steady income, careful growth and lasting provision for your family.\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}]},{\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"How does an annuity differ from indexed universal life?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"An annuity is designed primarily to accumulate savings and convert them into dependable income, while indexed universal life is permanent life insurance that provides a death benefit and builds cash value linked to the performance of a market index. Each serves a different purpose, and some plans use both.\"}},{\"@type\":\"Question\",\"name\":\"Can we lose money in an indexed product?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Index crediting in fixed indexed annuities and indexed universal life is protected from index declines. Surrender charges, rider fees, policy charges or withdrawals beyond the contract allowance can still reduce the value, so we review those terms carefully before you commit.\"}},{\"@type\":\"Question\",\"name\":\"When should we begin planning for retirement income?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Earlier planning allows more time for growth and more flexibility in how income is structured. A review in the years immediately before retirement remains valuable, because it can clarify how guaranteed income, savings and coverage will work together.\"}},{\"@type\":\"Question\",\"name\":\"Do you replace our financial advisor or tax professional?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"We do not. Our role is the insurance and annuity side of your plan, and we coordinate with your financial advisor and tax professional so that each recommendation fits the strategy you already have in place.\"}}]}]}"
    }
  ]
}

export const Route = createFileRoute('/retirement')({
  head: () => head,
  component: RetirementPage,
})

function RetirementPage() {
  usePageEnhancements()
  return (
    <>
<nav className="subnav" aria-label="Retirement pages" data-from="retirement"><div className="container sn"><ul className="sn-list"><li className="sn-label-item"><Link to="/retirement" className="sn-label" aria-current="page">Retirement</Link></li><li><Link to="/annuities">Annuities</Link></li><li><Link to="/indexed-universal-life">Indexed Universal Life</Link></li></ul>
</div>
</nav>{" "}
<main id="main" tabIndex={-1}>{" "}<section className="banner" aria-labelledby="page-title">{" "}<div className="hero-media hero-wide"><div className="hero-photo"><img src="/media/photos/advisor-seniors-review.jpg" alt="" width="1800" height="1202" loading="eager" fetchPriority="high" style={{ "objectPosition": "50% 28%" }} /></div>
</div>{" "}<div className="container">{" "}<div className="hero-band band">{" "}<p className="kicker">Coverage category</p>
<h1 id="page-title" tabIndex={-1}>Retirement</h1>{" "}<p className="band-lede">Retirement strategies that bring confidence to the years you have worked toward.</p>{" "}</div>{" "}</div>{" "}</section>{" "}<section className="section after-band" aria-labelledby="ov-title">{" "}<div className="container overview reveal">{" "}<div><p className="kicker">Overview</p>
<h2 className="vh" id="ov-title">Retirement overview</h2>
</div>{" "}<div><p className="statement">Retirement is a season to enjoy, and it rests most comfortably on a plan that provides dependable income and preserves what you have built. We help you understand how fixed, fixed indexed and income annuities work, and how indexed universal life can combine permanent protection with the potential for cash value accumulation.</p>
<p>These are long term commitments, so we take care to explain each feature, cost and limitation before you decide. Our role is to help you see how an insurance based strategy may complement your savings, your pension or your other retirement resources, and to recommend only what suits your goals and your comfort.</p>
</div>{" "}</div>{" "}</section>{" "}<section className="section tint" aria-labelledby="opts-title">{" "}<div className="container">{" "}<div className="sec-head reveal"><h2 className="h2" id="opts-title">Coverage within Retirement</h2>
</div>{" "}<div className="cards cards-2"><article className="card card-text has-ic reveal">{" "}<div className="card-body"><span className="card-ic" aria-hidden="true"><svg className="ic" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><use href="#i-annuities" /></svg></span><h3><Link to="/annuities">Annuities</Link></h3>
<p>Fixed, fixed indexed and income annuities designed to protect savings and provide dependable retirement income.</p>
<span className="tlink" aria-hidden="true"><span>Explore Annuities</span></span></div>{" "}</article>
<article className="card card-text has-ic reveal">{" "}<div className="card-body"><span className="card-ic" aria-hidden="true"><svg className="ic" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><use href="#i-indexed-universal-life" /></svg></span><h3><Link to="/indexed-universal-life">Indexed Universal Life</Link></h3>
<p>Permanent life insurance with flexible premiums and cash value credited from a market index, protected by a floor.</p>
<span className="tlink" aria-hidden="true"><span>Explore Indexed Universal Life</span></span></div>{" "}</article>
</div>{" "}</div>{" "}</section>{" "}<section className="section" aria-labelledby="help-title">{" "}<div className="container">{" "}<h2 className="h2 trio-title reveal" id="help-title">How we guide your retirement planning</h2>{" "}<div className="trio reveal"><div className="trio-item"><h3>Clarity before commitment</h3>
<p>We explain how crediting, surrender periods, income options and policy charges work, so that you understand every product before you choose it.</p>
</div>
<div className="trio-item"><h3>Income you can plan around</h3>
<p>We focus on strategies that can provide steady, predictable income and protect your savings from the swings of the market.</p>
</div>
<div className="trio-item"><h3>Provision for those who follow</h3>
<p>We help you consider how your retirement plan can also leave a meaningful legacy for your spouse, your children or the causes you care about.</p>
</div>
</div>{" "}</div>{" "}</section>{" "}<section className="section tint consult" id="consult" tabIndex={-1} aria-labelledby="consult-title">{" "}<div className="container consult-faq">{" "}<ConsultPanel kicker={<>Request a consultation</>} title={<>Speak with us about your retirement plan</>} lede={<>Share a few details about your goals for retirement, and we will arrange a conversation to explore the strategies that may suit you.</>} category="Retirement" coverage="All or unsure" />{" "}<aside className="consult-faq-aside" aria-labelledby="cfaq-title">{" "}<p className="kicker">Common questions</p>{" "}<h2 id="cfaq-title">Retirement planning, answered</h2>{" "}<Faq className="faq cfaq" items={[{ qid: "cfaq-q1", aid: "cfaq-a1", open: true, q: <>How does an annuity differ from indexed universal life?</>, a: <><p>An annuity is designed primarily to accumulate savings and convert them into dependable income, while indexed universal life is permanent life insurance that provides a death benefit and builds cash value linked to the performance of a market index. Each serves a different purpose, and some plans use both.</p>
</> }, { qid: "cfaq-q2", aid: "cfaq-a2", open: false, q: <>Can we lose money in an indexed product?</>, a: <><p>Index crediting in fixed indexed annuities and indexed universal life is protected from index declines. Surrender charges, rider fees, policy charges or withdrawals beyond the contract allowance can still reduce the value, so we review those terms carefully before you commit.</p>
</> }, { qid: "cfaq-q3", aid: "cfaq-a3", open: false, q: <>When should we begin planning for retirement income?</>, a: <><p>Earlier planning allows more time for growth and more flexibility in how income is structured. A review in the years immediately before retirement remains valuable, because it can clarify how guaranteed income, savings and coverage will work together.</p>
</> }, { qid: "cfaq-q4", aid: "cfaq-a4", open: false, q: <>Do you replace our financial advisor or tax professional?</>, a: <><p>We do not. Our role is the insurance and annuity side of your plan, and we coordinate with your financial advisor and tax professional so that each recommendation fits the strategy you already have in place.</p>
</> }]} />{" "}<p className="fine">Prefer to talk it through? Call{" "}<a href="tel:+19735247188" data-config="phone-link"><span data-config="phone">(973) 524-7188</span></a>{" "}and we will answer in person.</p>{" "}</aside>{" "}</div>{" "}</section>{" "}</main>
    </>
  )
}
