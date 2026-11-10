import { createFileRoute, Link } from '@tanstack/react-router'
import { usePageEnhancements } from '~/lib/usePageEnhancements'
import { asset, cdnHead } from '~/lib/assets'

/* Converted from reviews.html (King Health, Summit). Page copy and markup are unchanged. */
const head = {
  "meta": [
    {
      "title": "Client Reviews | King Health"
    },
    {
      "name": "description",
      "content": "Read the reviews that families and employers in Newark and across New Jersey have published about King Health on Google, shown unedited. Call to speak with us."
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
      "content": "Client Reviews | King Health"
    },
    {
      "property": "og:description",
      "content": "Read the reviews that families and employers in Newark and across New Jersey have published about King Health on Google, shown unedited. Call to speak with us."
    },
    {
      "property": "og:url",
      "content": "https://kinghealthdirect.com/reviews"
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
      "content": "Client Reviews | King Health"
    },
    {
      "name": "twitter:description",
      "content": "Read the reviews that families and employers in Newark and across New Jersey have published about King Health on Google, shown unedited. Call to speak with us."
    },
    {
      "name": "twitter:image",
      "content": "https://kinghealthdirect.com/assets/og/king-health-og.jpg"
    }
  ],
  "links": [
    {
      "rel": "canonical",
      "href": "https://kinghealthdirect.com/reviews"
    }
  ],
  "scripts": [
    {
      "type": "application/ld+json",
      "children": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"https://kinghealthdirect.com/#organization\",\"name\":\"King Health\",\"legalName\":\"King Health LLC\",\"url\":\"https://kinghealthdirect.com/\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://kinghealthdirect.com/brand/king-health-lockup.png\",\"width\":1000,\"height\":659},\"sameAs\":[\"https://www.facebook.com/kinghealthdirect\",\"https://www.instagram.com/kinghealthdirect\",\"https://wa.me/19735247188?text=Hello%20Javon%2C%20I%20found%20King%20Health%20online%20and%20would%20like%20to%20talk%20about%20my%20coverage.\",\"https://www.google.com/maps?cid=9265971853131828090\"],\"contactPoint\":{\"@type\":\"ContactPoint\",\"telephone\":\"+1-973-524-7188\",\"contactType\":\"customer service\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}],\"availableLanguage\":\"en\",\"email\":\"Javon@kinghealthdirect.com\"}},{\"@type\":\"WebSite\",\"@id\":\"https://kinghealthdirect.com/#website\",\"url\":\"https://kinghealthdirect.com/\",\"name\":\"King Health\",\"inLanguage\":\"en-US\",\"publisher\":{\"@id\":\"https://kinghealthdirect.com/#organization\"}},{\"@type\":\"CollectionPage\",\"@id\":\"https://kinghealthdirect.com/reviews\",\"url\":\"https://kinghealthdirect.com/reviews\",\"name\":\"Client Reviews | King Health\",\"description\":\"Read the reviews that families and employers in Newark and across New Jersey have published about King Health on Google, shown unedited. Call to speak with us.\",\"isPartOf\":{\"@id\":\"https://kinghealthdirect.com/#website\"},\"about\":{\"@id\":\"https://kinghealthdirect.com/#organization\"}}]}"
    }
  ]
}

export const Route = createFileRoute('/reviews')({
  head: () => cdnHead(head),
  component: ReviewsPage,
})

function ReviewsPage() {
  usePageEnhancements()
  return (
    <>
<nav className="subnav" aria-label="King Health pages" data-site-nav><div className="container sn"><ul className="sn-list"><li className="sn-label-item"><Link to="/" className="sn-label">King Health</Link></li><li><Link to="/about">About Us</Link></li><li><Link to="/faq">FAQ</Link></li><li><Link to="/carriers">Carriers</Link></li><li><Link to="/reviews" aria-current="page">Client Reviews</Link></li></ul>
</div>
</nav>{" "}
<main id="main" tabIndex={-1}>{" "}<section className="banner" aria-labelledby="page-title">{" "}<div className="hero-media hero-wide"><div className="hero-photo"><img src={asset('/media/photos/senior-family-table.jpg')} alt="" width="1800" height="1200" loading="eager" fetchPriority="high" style={{ "objectPosition": "62% 30%" }} /></div>
</div>{" "}<div className="container">{" "}<div className="hero-band band">{" "}<p className="kicker">Client reviews</p>
<h1 id="page-title" tabIndex={-1}>In our clients' own words</h1>{" "}<p className="band-lede">These reviews are published by our clients on Google, and we show them here unedited so that you can hear from the families and employers we serve before you speak with us.</p>{" "}</div>{" "}</div>{" "}</section>{" "}{/* Live Google reviews only. Nothing here is ever written to look like a review: no name, rating, quote, date or count is typed by us. Paste the GoHighLevel Reputation widget into the slot, or supply assets/reviews.json from an owner authorized Google Business Profile feed. */}{" "}<section className="section after-band reviews-body" aria-label="Client reviews">{" "}<div className="container rv-layout rv-layout-page">{" "}<aside className="rv-band rv-summary-g" aria-labelledby="rv-sum-title" data-rv-band>{" "}<div className="rvb-main">{" "}<p className="kicker g-kicker" id="rv-sum-title"><svg className="g-ic g-kicker-ic" viewBox="0 0 256 262" aria-hidden="true" focusable="false"><use href="#kh-g" /></svg><span>Google rating</span></p>{" "}<div className="rv-score" data-review-score data-rv-static data-lint-exempt="rating"><p className="rv-avg-row"><span className="rv-avg">4.9</span><span className="rv-stars" role="img" aria-label="Rated 4.9 out of five"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path className="s-full" d="M12 3.6l2.5 5.3 5.8.7-4.3 4 1.1 5.7L12 16.5l-5.1 2.8 1.1-5.7-4.3-4 5.8-.7z" /></svg><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path className="s-full" d="M12 3.6l2.5 5.3 5.8.7-4.3 4 1.1 5.7L12 16.5l-5.1 2.8 1.1-5.7-4.3-4 5.8-.7z" /></svg><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path className="s-full" d="M12 3.6l2.5 5.3 5.8.7-4.3 4 1.1 5.7L12 16.5l-5.1 2.8 1.1-5.7-4.3-4 5.8-.7z" /></svg><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path className="s-full" d="M12 3.6l2.5 5.3 5.8.7-4.3 4 1.1 5.7L12 16.5l-5.1 2.8 1.1-5.7-4.3-4 5.8-.7z" /></svg><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path className="s-full" d="M12 3.6l2.5 5.3 5.8.7-4.3 4 1.1 5.7L12 16.5l-5.1 2.8 1.1-5.7-4.3-4 5.8-.7z" /></svg></span></p>
<p className="rv-total">based on 41 Google reviews</p>
</div>{" "}<p className="rvb-count" data-lint-exempt="rating">41 reviews on Google</p>{" "}</div>{" "}<div className="rvb-side">{" "}<p className="rvb-verified">Verified reviews from King Health's Google Business Profile</p>{" "}<p className="rv-attrib">Reviews from Google</p>{" "}<div className="rvb-acts">{" "}<a className="btn btn-line rv-write" href="https://g.page/r/CXrLsKROWJeAEAI/review" target="_blank" rel="noopener" data-rv-write>Share your experience<span className="vh">{" "}(opens in a new tab)</span></a>{" "}<a className="tlink rv-all" href="https://www.google.com/maps?cid=9265971853131828090" target="_blank" rel="noopener" data-rv-profile>Read all reviews on Google<span className="vh">{" "}(opens in a new tab)</span></a>{" "}</div>{" "}</div>{" "}</aside>{" "}<div className="rv-main">{" "}<div className="kh-review-slot" data-ghl-reviews="" data-rv-context="page" data-reviews-src={asset('/assets/reviews.json')} data-rv-strings={"{\"based_on\": \"based on {total} Google reviews\", \"rated\": \"Rated {value} out of five\", \"read_full\": \"Read the full review on Google\", \"reply_summary\": \"Response from King Health\", \"google_label\": \"Google review\"}"}>{" "}{/* GOHIGHLEVEL REPUTATION WIDGET SLOT Paste the GHL review widget embed (its div and script) directly below this comment. When the widget is present, the placeholders and the JSON renderer hide themselves. If the widget is removed, assets/reviews.json (owner authorized Google Business Profile feed) is rendered instead. */}{" "}<div className="rv-grid rv-grid-page" data-rv-grid></div>{" "}<button type="button" className="btn btn-line rv-more" data-rv-more hidden>Show more reviews</button>{" "}</div>{" "}</div>{" "}</div>{" "}</section>{" "}<section className="qband-sec" aria-labelledby="qb-title">{" "}<div className="container">{" "}<div className="qband band reveal">{" "}<div className="qb-text">{" "}<p className="kicker">Still have questions?</p>{" "}<h2 id="qb-title">Speak with Javon King directly about the coverage you are weighing.</h2>{" "}<p className="band-lede">Whether you are comparing plans, reviewing a policy you already hold or simply unsure where to begin, we will walk you through your options at no cost and without obligation.</p>{" "}</div>{" "}<ul className="qb-routes"><li><span className="qb-label">Request a consultation</span><Link to="/contact" hash="consult" className="btn btn-band">Send a message</Link></li><li><span className="qb-label">Call our office</span><a href="tel:+19735247188" className="qb-tel" data-config="phone-link"><span data-config="phone">(973) 524-7188</span></a></li><li><span className="qb-label">Explore coverage</span><Link to="/" hash="categories" className="tlink"><span>View every coverage category</span></Link></li></ul>{" "}</div>{" "}</div>{" "}</section>{" "}</main>
    </>
  )
}
