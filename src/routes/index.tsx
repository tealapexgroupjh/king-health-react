import { createFileRoute, Link } from '@tanstack/react-router'
import { ConsultPanel } from '~/components/ConsultPanel'
import { Faq } from '~/components/Faq'
import { usePageEnhancements } from '~/lib/usePageEnhancements'
import { asset, assetSet, cdnHead } from '~/lib/assets'

/* Converted from index.html (King Health, Summit). Page copy and markup are unchanged. */
const head = {
  "meta": [
    {
      "title": "King Health | Independent Insurance Advisor in Newark, NJ"
    },
    {
      "name": "description",
      "content": "King Health is an independent insurance advisor in Newark, New Jersey, comparing Medicare, life, health and group plans across carriers. Call us today."
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
      "content": "King Health | Independent Insurance Advisor in Newark, NJ"
    },
    {
      "property": "og:description",
      "content": "King Health is an independent insurance advisor in Newark, New Jersey, comparing Medicare, life, health and group plans across carriers. Call us today."
    },
    {
      "property": "og:url",
      "content": "https://kinghealthdirect.com/"
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
      "content": "King Health | Independent Insurance Advisor in Newark, NJ"
    },
    {
      "name": "twitter:description",
      "content": "King Health is an independent insurance advisor in Newark, New Jersey, comparing Medicare, life, health and group plans across carriers. Call us today."
    },
    {
      "name": "twitter:image",
      "content": "https://kinghealthdirect.com/assets/og/king-health-og.jpg"
    }
  ],
  "links": [
    {
      "rel": "canonical",
      "href": "https://kinghealthdirect.com/"
    }
  ],
  "scripts": [
    {
      "type": "application/ld+json",
      "children": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"https://kinghealthdirect.com/#organization\",\"name\":\"King Health\",\"legalName\":\"King Health LLC\",\"url\":\"https://kinghealthdirect.com/\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://kinghealthdirect.com/brand/king-health-lockup.png\",\"width\":1000,\"height\":659},\"sameAs\":[\"https://www.facebook.com/kinghealthdirect\",\"https://www.instagram.com/kinghealthdirect\",\"https://wa.me/19735247188?text=Hello%20Javon%2C%20I%20found%20King%20Health%20online%20and%20would%20like%20to%20talk%20about%20my%20coverage.\",\"https://www.google.com/maps?cid=9265971853131828090\"],\"contactPoint\":{\"@type\":\"ContactPoint\",\"telephone\":\"+1-973-524-7188\",\"contactType\":\"customer service\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}],\"availableLanguage\":\"en\",\"email\":\"Javon@kinghealthdirect.com\"}},{\"@type\":\"WebSite\",\"@id\":\"https://kinghealthdirect.com/#website\",\"url\":\"https://kinghealthdirect.com/\",\"name\":\"King Health\",\"inLanguage\":\"en-US\",\"publisher\":{\"@id\":\"https://kinghealthdirect.com/#organization\"}},{\"@type\":\"InsuranceAgency\",\"@id\":\"https://kinghealthdirect.com/#agency\",\"name\":\"King Health\",\"legalName\":\"King Health LLC\",\"url\":\"https://kinghealthdirect.com/\",\"logo\":\"https://kinghealthdirect.com/brand/king-health-lockup.png\",\"image\":\"https://kinghealthdirect.com/assets/og/king-health-og.jpg\",\"telephone\":\"+1-973-524-7188\",\"email\":\"Javon@kinghealthdirect.com\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"801 Elizabeth Avenue\",\"addressLocality\":\"Newark\",\"addressRegion\":\"NJ\",\"postalCode\":\"07112\",\"addressCountry\":\"US\"},\"geo\":{\"@type\":\"GeoCoordinates\",\"latitude\":40.7072735,\"longitude\":-74.2028628},\"hasMap\":\"https://www.google.com/maps?cid=9265971853131828090\",\"openingHoursSpecification\":[{\"@type\":\"OpeningHoursSpecification\",\"dayOfWeek\":[\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\"],\"opens\":\"08:30\",\"closes\":\"18:00\"},{\"@type\":\"OpeningHoursSpecification\",\"dayOfWeek\":[\"Saturday\"],\"opens\":\"08:30\",\"closes\":\"17:00\"}],\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}],\"founder\":{\"@type\":\"Person\",\"name\":\"Javon King\",\"jobTitle\":\"Independent Insurance Advisor\"},\"sameAs\":[\"https://www.facebook.com/kinghealthdirect\",\"https://www.instagram.com/kinghealthdirect\",\"https://wa.me/19735247188?text=Hello%20Javon%2C%20I%20found%20King%20Health%20online%20and%20would%20like%20to%20talk%20about%20my%20coverage.\",\"https://www.google.com/maps?cid=9265971853131828090\"]}]}"
    }
  ]
}

export const Route = createFileRoute('/')({
  head: () => cdnHead(head),
  component: HomePage,
})

function HomePage() {
  usePageEnhancements()
  return (
    <>

<main id="main" tabIndex={-1}>{" "}<section className="hero hero-has-slides" aria-labelledby="page-title">{" "}<div className="hero-media hero-slides" data-hero-slides data-interval="7000"><div className="hero-slide is-on"><div className="hero-photo"><img src={asset('/media/hero/01-family-of-five-sofa-1800.jpg')} srcSet={assetSet('/media/hero/01-family-of-five-sofa-900.jpg 900w, /media/hero/01-family-of-five-sofa-1800.jpg 1800w')} sizes="(max-width: 760px) 100vw, 64vw" alt="A mother, a father and their three children sitting close together on a sofa at home" width="1800" height="1200" loading="eager" fetchPriority="high" decoding="async" style={{ "objectPosition": "50% 24%" }} /></div>
</div>
<div className="hero-slide" aria-hidden="true"><div className="hero-photo"><img data-src={asset('/media/hero/02-three-generations-porch-1800.jpg')} data-srcset={assetSet('/media/hero/02-three-generations-porch-900.jpg 900w, /media/hero/02-three-generations-porch-1800.jpg 1800w')} sizes="(max-width: 760px) 100vw, 64vw" alt="Three generations of a family laughing together on a garden porch" width="1800" height="1200" decoding="async" style={{ "objectPosition": "50% 30%" }} /></div>
</div>
<div className="hero-slide" aria-hidden="true"><div className="hero-photo"><img data-src={asset('/media/hero/03-grandparents-photo-album-1800.jpg')} data-srcset={assetSet('/media/hero/03-grandparents-photo-album-900.jpg 900w, /media/hero/03-grandparents-photo-album-1800.jpg 1800w')} sizes="(max-width: 760px) 100vw, 64vw" alt="Grandparents looking through a family photo album with their granddaughter" width="1800" height="1200" decoding="async" style={{ "objectPosition": "55% 30%" }} /></div>
</div>
<div className="hero-slide" aria-hidden="true"><div className="hero-photo"><img data-src={asset('/media/hero/04-generations-of-women-1800.jpg')} data-srcset={assetSet('/media/hero/04-generations-of-women-900.jpg 900w, /media/hero/04-generations-of-women-1800.jpg 1800w')} sizes="(max-width: 760px) 100vw, 64vw" alt="Four women from three generations of one family sitting together on a sofa" width="1800" height="1200" decoding="async" style={{ "objectPosition": "50% 36%" }} /></div>
</div>
</div>
<button type="button" className="hero-pause" data-hero-pause aria-pressed="false" data-label-pause="Pause the photo slideshow" data-label-play="Play the photo slideshow" aria-label="Pause the photo slideshow" hidden><span className="hp-ic" aria-hidden="true"></span></button>{" "}<div className="container">{" "}<div className="hero-band band">{" "}<p className="kicker">Independent insurance advisory</p>
<h1 id="page-title" tabIndex={-1}>Protection for the people you love, chosen together and priced within reach.</h1>{" "}<p className="band-lede">We take the time to understand what matters most to you, compare options across multiple carriers, and help you choose coverage that feels right for your family and your budget. And when questions come up later, we are always just a call away.</p>
<div className="hero-acts"><a className="btn btn-band" href="#consult">Request a consultation</a><a className="tlink" href="#categories"><span>Explore coverage</span></a></div>{" "}</div>{" "}</div>{" "}</section>{" "}<section className="section after-band" id="categories" tabIndex={-1} aria-labelledby="cat-title">{" "}<div className="container">{" "}<div className="sec-head reveal"><h2 className="h2" id="cat-title">Coverage for every season of life</h2>
<p>Whether you are approaching Medicare, providing for a growing household, caring for a team of employees or preparing for a comfortable retirement, we bring the same patience and the same careful comparison to every conversation.</p>
</div>{" "}<div className="cards cards-4"><article className="card card-photo has-ic reveal">{" "}<div className="card-media"><img src={asset('/media/photos/senior-caregiver-visit.jpg')} alt="A caregiver checking in with an older woman in her living room" width="1800" height="1200" loading="lazy" decoding="async" style={{ "objectPosition": "50% 32%" }} /></div>{" "}<div className="card-body"><span className="card-ic" aria-hidden="true"><svg className="ic" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><use href="#i-senior-benefits" /></svg></span><h3><Link to="/senior-benefits">Senior Benefits</Link></h3>
<p>Medicare guidance, final expense coverage and supplemental benefits arranged with patience and explained in plain language.</p>
<span className="tlink" aria-hidden="true"><span>Explore coverage</span></span></div>{" "}</article>
<article className="card card-photo has-ic reveal">{" "}<div className="card-media"><img src={asset('/media/photos/parents-baby-dusk.jpg')} alt="Young parents holding their baby outdoors at dusk" width="1800" height="1200" loading="lazy" decoding="async" style={{ "objectPosition": "45% 30%" }} /></div>{" "}<div className="card-body"><span className="card-ic" aria-hidden="true"><svg className="ic" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><use href="#i-individual-benefits" /></svg></span><h3><Link to="/individual-benefits">Individual Benefits</Link></h3>
<p>Health, life, dental and vision coverage for individuals and families, compared carefully so that it fits the household budget.</p>
<span className="tlink" aria-hidden="true"><span>Explore coverage</span></span></div>{" "}</article>
<article className="card card-photo has-ic reveal">{" "}<div className="card-media"><img src={asset('/media/photos/group-team-table.jpg')} alt="A small team working together around a shared table" width="1800" height="1200" loading="lazy" decoding="async" style={{ "objectPosition": "50% 38%" }} /></div>{" "}<div className="card-body"><span className="card-ic" aria-hidden="true"><svg className="ic" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><use href="#i-group-benefits" /></svg></span><h3><Link to="/group-benefits">Group Benefits</Link></h3>
<p>Health, life, dental and vision benefits for employers, designed to support your team and respect your budget.</p>
<span className="tlink" aria-hidden="true"><span>Explore coverage</span></span></div>{" "}</article>
<article className="card card-photo has-ic reveal">{" "}<div className="card-media"><img src={asset('/media/photos/advisor-seniors-review.jpg')} alt="An advisor reviewing documents with an older couple at home" width="1800" height="1202" loading="lazy" decoding="async" style={{ "objectPosition": "45% 30%" }} /></div>{" "}<div className="card-body"><span className="card-ic" aria-hidden="true"><svg className="ic" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><use href="#i-retirement" /></svg></span><h3><Link to="/retirement">Retirement</Link></h3>
<p>Annuities and indexed universal life explained clearly, so that your retirement plan supports dependable income and lasting provision.</p>
<span className="tlink" aria-hidden="true"><span>Explore coverage</span></span></div>{" "}</article>
</div>{" "}</div>{" "}</section>{" "}<section className="cstrip cstrip-home" aria-labelledby="cstrip-title" data-cstrip-section>{" "}<div className="container">{" "}<div className="cstrip-in">{" "}<div className="cstrip-head">{" "}<p className="kicker" id="cstrip-title">Appointed carriers</p>{" "}<p className="cstrip-note">We are appointed with each carrier shown, which allows us to compare their plans side by side on your behalf.</p>{" "}</div>{" "}<div className="cstrip-viewport" data-cstrip>{" "}<ul className="cstrip-track" aria-label="Carriers King Health is appointed with">{/* GHL: carrier logo images go here, one <li class="cstrip-item"><img ...></li> per carrier. Use transparent PNG or SVG files, never JPG, so the logo works on every theme. Alt text is the carrier's name exactly as the carrier writes it, for example alt="Carrier name". Logos are reference only and are never links. Or list them under carriers.logos in content.json and rebuild. */}<li className="cstrip-item"><img src={asset('/media/carriers/aetna.png')} alt="Aetna" width="900" height="185" style={{ "--lh": "30px" }} loading="lazy" decoding="async" /></li><li className="cstrip-item"><img src={asset('/media/carriers/ambetter.png')} alt="Ambetter" width="201" height="200" style={{ "--lh": "46px" }} loading="lazy" decoding="async" /></li><li className="cstrip-item"><img src={asset('/media/carriers/amerihealth.png')} alt="AmeriHealth" width="798" height="200" style={{ "--lh": "33px" }} loading="lazy" decoding="async" /></li><li className="cstrip-item"><img src={asset('/media/carriers/ameritas.png')} alt="Ameritas" width="540" height="148" style={{ "--lh": "35px" }} loading="lazy" decoding="async" /></li><li className="cstrip-item"><img src={asset('/media/carriers/blue-cross-blue-shield.png')} alt="Blue Cross Blue Shield" width="243" height="200" style={{ "--lh": "46px" }} loading="lazy" decoding="async" /></li><li className="cstrip-item"><img src={asset('/media/carriers/cigna.png')} alt="Cigna Healthcare" width="297" height="157" style={{ "--lh": "46px" }} loading="lazy" decoding="async" /></li><li className="cstrip-item"><img src={asset('/media/carriers/clover-health.png')} alt="Clover Health" width="900" height="100" style={{ "--lh": "22px" }} loading="lazy" decoding="async" /></li><li className="cstrip-item"><img src={asset('/media/carriers/combined-insurance.png')} alt="Combined Insurance" width="775" height="200" style={{ "--lh": "34px" }} loading="lazy" decoding="async" /></li><li className="cstrip-item"><img src={asset('/media/carriers/corebridge-financial.png')} alt="Corebridge Financial" width="271" height="89" style={{ "--lh": "38px" }} loading="lazy" decoding="async" /></li><li className="cstrip-item"><img src={asset('/media/carriers/delta-dental.png')} alt="Delta Dental" width="540" height="61" style={{ "--lh": "22px" }} loading="lazy" decoding="async" /></li><li className="cstrip-item"><img src={asset('/media/carriers/devoted-health.png')} alt="Devoted Health" width="863" height="100" style={{ "--lh": "23px" }} loading="lazy" decoding="async" /></li><li className="cstrip-item"><img src={asset('/media/carriers/foresters-financial.png')} alt="Foresters Financial" width="527" height="200" style={{ "--lh": "41px" }} loading="lazy" decoding="async" /></li><li className="cstrip-item"><img src={asset('/media/carriers/guarantee-trust-life.png')} alt="Guarantee Trust Life" width="600" height="129" style={{ "--lh": "31px" }} loading="lazy" decoding="async" /></li><li className="cstrip-item carrier-name" title="Horizon Blue Cross Blue Shield of New Jersey"><span>Horizon BCBSNJ</span></li><li className="cstrip-item"><img src={asset('/media/carriers/humana.png')} alt="Humana" width="520" height="102" style={{ "--lh": "29px" }} loading="lazy" decoding="async" /></li><li className="cstrip-item"><img src={asset('/media/carriers/massmutual.png')} alt="MassMutual" width="744" height="89" style={{ "--lh": "23px" }} loading="lazy" decoding="async" /></li><li className="cstrip-item"><img src={asset('/media/carriers/mutual-of-omaha.png')} alt="Mutual of Omaha" width="900" height="162" style={{ "--lh": "28px" }} loading="lazy" decoding="async" /></li><li className="cstrip-item"><img src={asset('/media/carriers/nationwide.png')} alt="Nationwide" width="410" height="120" style={{ "--lh": "36px" }} loading="lazy" decoding="async" /></li><li className="cstrip-item"><img src={asset('/media/carriers/oscar.png')} alt="Oscar Health" width="568" height="131" style={{ "--lh": "32px" }} loading="lazy" decoding="async" /></li><li className="cstrip-item"><img src={asset('/media/carriers/royal-neighbors-of-america.png')} alt="Royal Neighbors of America" width="603" height="152" style={{ "--lh": "33px" }} loading="lazy" decoding="async" /></li><li className="cstrip-item"><img src={asset('/media/carriers/transamerica.png')} alt="Transamerica" width="900" height="170" style={{ "--lh": "29px" }} loading="lazy" decoding="async" /></li><li className="cstrip-item"><img src={asset('/media/carriers/unitedhealthcare.png')} alt="UnitedHealthcare" width="637" height="200" style={{ "--lh": "37px" }} loading="lazy" decoding="async" /></li><li className="cstrip-item carrier-name" title="Wellpoint"><span>Wellpoint</span></li></ul>{" "}</div>{" "}<button type="button" className="cstrip-toggle" aria-pressed="false" data-pause="Pause carrier logos" data-play="Play carrier logos" hidden>Pause carrier logos</button>{" "}<div className="cstrip-foot"><Link to="/carriers" className="tlink"><span>View carriers by coverage</span></Link></div>{" "}</div>{" "}</div>{" "}</section>{" "}<section className="section band why-band" aria-labelledby="why-title">{" "}<div className="container">{" "}<div className="why-head reveal">{" "}<div><p className="kicker">The King Health standard</p>
<h2 className="h2" id="why-title">Why families and businesses choose King Health</h2>
</div>{" "}<p className="band-lede">We take the time to listen, we explain every option in plain language, and we stay close long after you enroll. These are the promises we keep with every family and every business we serve.</p>{" "}</div>{" "}<div className="why-grid reveal"><article className="why-card"><span className="why-ic" aria-hidden="true"><svg className="ic" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><use href="#i-why-counsel" /></svg></span><h3>Independent counsel</h3>
<p>Because we are not bound to any carrier, our recommendations are shaped by your circumstances and your budget rather than by a sales quota.</p>
</article>
<article className="why-card"><span className="why-ic" aria-hidden="true"><svg className="ic" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><use href="#i-why-affordability" /></svg></span><h3>Affordability as a discipline</h3>
<p>We compare plans side by side and explain the tradeoffs plainly, so that the coverage you choose protects your family without straining your monthly finances.</p>
</article>
<article className="why-card"><span className="why-ic" aria-hidden="true"><svg className="ic" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><use href="#i-why-relationship" /></svg></span><h3>A relationship that endures</h3>
<p>We remain beside you after enrollment, reviewing your coverage as your life changes and helping with questions whenever they arise.</p>
</article>
</div>{" "}</div>{" "}</section>{" "}<section className="section tint" aria-labelledby="strip-title">{" "}<div className="container split strip">{" "}<div className="split-media reveal"><img src={asset('/media/photos/advisor-family-table.jpg')} alt="An advisor reviewing plans with a family around a table in a sunny home" width="1800" height="1202" loading="lazy" decoding="async" style={{ "objectPosition": "50% 38%" }} /></div>{" "}<div className="split-body reveal">{" "}<p className="kicker">About King Health</p>{" "}<h2 id="strip-title">Advice offered the way we would offer it to our own family</h2>{" "}<p>Javon King founded King Health on the conviction that people deserve an advisor who cares about their loved ones as deeply as they do. That conviction shapes how we listen, how we compare and how we stay in touch for years to come.</p>{" "}<Link to="/about" className="tlink"><span>Meet King Health</span></Link>{" "}</div>{" "}</div>{" "}</section>{" "}<section className="section" aria-labelledby="plan-title">{" "}<div className="container split chart-split">{" "}<div className="split-body reveal"><p className="kicker">Coordinated coverage</p>
<h2 className="h2" id="plan-title">How a thoughtful plan fits together</h2>
<p>Health coverage, life insurance and retirement income each protect a different part of family life, and a well designed plan lets them work in concert so that your household remains secure through every stage.</p>
</div>{" "}<div className="reveal"><figure className="chart chart-ring chart-plan">{" "}<p className="chart-title">How a thoughtful plan fits together</p>{" "}<div className="chart-stage"><svg viewBox="0 0 200 200" role="img" aria-label="Illustration: a ring that sweeps to full in three parts, health coverage, life insurance and retirement income, held together by an outer gold line that represents one coordinated plan for the household."><circle className="track" cx="100" cy="100" r="76" pathLength="100" /><circle className="seg seg-p1" cx="100" cy="100" r="76" pathLength="100" /><circle className="seg seg-p2" cx="100" cy="100" r="76" pathLength="100" /><circle className="seg seg-p3" cx="100" cy="100" r="76" pathLength="100" /><circle className="seg seg-gold seg-gold-full" cx="100" cy="100" r="89" pathLength="100" /></svg><span className="ring-center" aria-hidden="true">Your<br />household</span><ul className="chart-legend"><li><span className="key key-b" aria-hidden="true"></span>Health coverage</li><li><span className="key key-mid" aria-hidden="true"></span>Life insurance</li><li><span className="key key-light" aria-hidden="true"></span>Retirement income</li><li><span className="key key-gold-line" aria-hidden="true"></span>One coordinated plan</li></ul>
</div>{" "}<figcaption><span className="chart-note">Illustration only. Actual results depend on the policy and carrier.</span></figcaption>{" "}</figure>
</div>{" "}</div>{" "}</section>{" "}<section className="section home-reviews" aria-labelledby="home-rv-title">{" "}<div className="container rv-layout">{" "}<h2 className="vh" id="home-rv-title">Client reviews</h2>{" "}<aside className="rv-summary rv-summary-g" aria-labelledby="rv-sum-title">{" "}<p className="kicker g-kicker" id="rv-sum-title"><svg className="g-ic g-kicker-ic" viewBox="0 0 256 262" aria-hidden="true" focusable="false"><use href="#kh-g" /></svg><span>Google rating</span></p>{" "}<div className="rv-score" data-review-score data-rv-static data-lint-exempt="rating"><p className="rv-avg-row"><span className="rv-avg">4.9</span><span className="rv-stars" role="img" aria-label="Rated 4.9 out of five"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path className="s-full" d="M12 3.6l2.5 5.3 5.8.7-4.3 4 1.1 5.7L12 16.5l-5.1 2.8 1.1-5.7-4.3-4 5.8-.7z" /></svg><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path className="s-full" d="M12 3.6l2.5 5.3 5.8.7-4.3 4 1.1 5.7L12 16.5l-5.1 2.8 1.1-5.7-4.3-4 5.8-.7z" /></svg><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path className="s-full" d="M12 3.6l2.5 5.3 5.8.7-4.3 4 1.1 5.7L12 16.5l-5.1 2.8 1.1-5.7-4.3-4 5.8-.7z" /></svg><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path className="s-full" d="M12 3.6l2.5 5.3 5.8.7-4.3 4 1.1 5.7L12 16.5l-5.1 2.8 1.1-5.7-4.3-4 5.8-.7z" /></svg><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path className="s-full" d="M12 3.6l2.5 5.3 5.8.7-4.3 4 1.1 5.7L12 16.5l-5.1 2.8 1.1-5.7-4.3-4 5.8-.7z" /></svg></span></p>
<p className="rv-total">based on 41 Google reviews</p>
</div>{" "}<p className="rv-attrib">Reviews from Google</p>{" "}<a className="tlink rv-all" href="https://www.google.com/maps?cid=9265971853131828090" target="_blank" rel="noopener" data-rv-profile>Read all reviews on Google<span className="vh">{" "}(opens in a new tab)</span></a>{" "}<a className="btn btn-line rv-write" href="https://g.page/r/CXrLsKROWJeAEAI/review" target="_blank" rel="noopener" data-rv-write>Share your experience<span className="vh">{" "}(opens in a new tab)</span></a>{" "}</aside>{" "}<div className="rv-main">{" "}<div className="kh-review-slot" data-ghl-reviews="" data-rv-context="home" data-reviews-src={asset('/assets/reviews.json')} data-rv-strings={"{\"based_on\": \"based on {total} Google reviews\", \"rated\": \"Rated {value} out of five\", \"read_full\": \"Read the full review on Google\", \"reply_summary\": \"Response from King Health\", \"google_label\": \"Google review\", \"label\": \"Client reviews from Google\", \"prev\": \"Previous reviews\", \"next\": \"Next reviews\", \"dots_label\": \"Choose a set of reviews\", \"dot\": \"Show reviews {from} to {to}\", \"dot_one\": \"Show review {from}\", \"status\": \"Showing reviews {from} to {to} of {total}\", \"status_one\": \"Showing review {from} of {total}\"}"}>{" "}{/* GOHIGHLEVEL REPUTATION WIDGET SLOT Paste the GHL review widget embed (its div and script) directly below this comment. When the widget is present, the placeholders and the JSON renderer hide themselves. If the widget is removed, assets/reviews.json (owner authorized Google Business Profile feed) is rendered instead. */}{" "}<div className="rv-grid rv-grid-home" data-rv-grid></div>{" "}<div className="rv-ctrl" data-rv-ctrl hidden><button type="button" className="rv-arrow rv-prev" data-rv-prev aria-label="Previous reviews"><span className="rv-chev" aria-hidden="true"></span></button><div className="rv-dots" data-rv-dots role="group" aria-label="Choose a set of reviews"></div>
<button type="button" className="rv-arrow rv-next" data-rv-next aria-label="Next reviews"><span className="rv-chev" aria-hidden="true"></span></button><p className="vh" aria-live="polite" data-rv-status></p>
</div>{" "}</div>{" "}<Link to="/reviews" className="tlink rv-page-link"><span>Read all client reviews</span></Link>{" "}</div>{" "}</div>{" "}</section>{" "}<section className="section tint consult" id="consult" tabIndex={-1} aria-labelledby="consult-title">{" "}<div className="container consult-faq">{" "}<ConsultPanel kicker={<>Request a consultation</>} title={<>Begin a conversation with King Health</>} lede={<>Share a few details about what you would like to protect, and we will reach out personally to arrange a conversation at a time that suits you. There is never any cost or obligation for our guidance.</>} category="" coverage="" />{" "}<aside className="consult-faq-aside" aria-labelledby="cfaq-title">{" "}<p className="kicker">Common questions</p>{" "}<h2 id="cfaq-title">Working with King Health, answered</h2>{" "}<Faq className="faq cfaq" items={[{ qid: "cfaq-q1", aid: "cfaq-a1", open: true, q: <>Is there a cost for your guidance?</>, a: <><p>There is no fee for our guidance. We are compensated by the carriers whose plans we place, and the premium for a given plan is the same whether you enroll through us or directly.</p>
</> }, { qid: "cfaq-q2", aid: "cfaq-a2", open: false, q: <>What does it mean that King Health is independent?</>, a: <><p>We are not employed by a single insurance company. We represent multiple carriers, which allows us to compare plans side by side and recommend the one that fits your circumstances and your budget rather than a sales quota.</p>
</> }, { qid: "cfaq-q3", aid: "cfaq-a3", open: false, q: <>Which states do you serve?</>, a: <><p>King Health is licensed in New Jersey and North Carolina, so we can advise and place coverage for residents of either state. Conversations can take place by phone or at our office in Newark.</p>
</> }, { qid: "cfaq-q4", aid: "cfaq-a4", open: false, q: <>What happens after we submit this form?</>, a: <><p>We review your request and reach out personally to arrange a conversation at a time that suits you. Submitting the form is a request to be contacted rather than an application for coverage, and it carries no obligation.</p>
</> }]} />{" "}<p className="fine">Prefer to talk it through? Call{" "}<a href="tel:+19735247188" data-config="phone-link"><span data-config="phone">(973) 524-7188</span></a>{" "}and we will answer in person.</p>{" "}</aside>{" "}</div>{" "}</section>{" "}</main>
    </>
  )
}
