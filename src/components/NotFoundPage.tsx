import { Link } from '@tanstack/react-router'
import { useEffect } from 'react'
import { usePageEnhancements } from '~/lib/usePageEnhancements'
import { asset, cdnHead } from '~/lib/assets'

/* Converted from 404.html. Rendered by the root route's notFoundComponent. */
export const notFoundHead = cdnHead( {
  "meta": [
    {
      "title": "Page Not Found | King Health"
    },
    {
      "name": "description",
      "content": "The page you were looking for could not be found on the King Health website. Return home to explore coverage in New Jersey, or call and we will help directly."
    },
    {
      "name": "robots",
      "content": "noindex,follow"
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
      "content": "Page Not Found | King Health"
    },
    {
      "property": "og:description",
      "content": "The page you were looking for could not be found on the King Health website. Return home to explore coverage in New Jersey, or call and we will help directly."
    },
    {
      "property": "og:url",
      "content": "https://kinghealthdirect.com/404"
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
      "content": "Page Not Found | King Health"
    },
    {
      "name": "twitter:description",
      "content": "The page you were looking for could not be found on the King Health website. Return home to explore coverage in New Jersey, or call and we will help directly."
    },
    {
      "name": "twitter:image",
      "content": "https://kinghealthdirect.com/assets/og/king-health-og.jpg"
    }
  ],
  "links": []
})

export function NotFoundPage() {
  usePageEnhancements()
  useEffect(() => {
    const t = notFoundHead.meta.find((m) => 'title' in m) as { title?: string } | undefined
    if (t?.title) document.title = t.title
  }, [])
  return (
    <>
<nav className="subnav" aria-label="King Health pages" data-site-nav><div className="container sn"><ul className="sn-list"><li className="sn-label-item"><Link to="/" className="sn-label">King Health</Link></li><li><Link to="/about">About Us</Link></li><li><Link to="/faq">FAQ</Link></li><li><Link to="/carriers">Carriers</Link></li><li><Link to="/reviews">Client Reviews</Link></li></ul>
</div>
</nav>{" "}
<main id="main" tabIndex={-1}>{" "}<section className="banner" aria-labelledby="page-title">{" "}<div className="hero-media hero-wide"><div className="hero-photo"><img src={asset('/media/photos/advisor-lounge-meeting.jpg')} alt="" width="1800" height="1202" loading="eager" fetchPriority="high" style={{ "objectPosition": "55% 40%" }} /></div>
</div>{" "}<div className="container">{" "}<div className="hero-band band">{" "}<p className="kicker">Page not found</p>
<h1 id="page-title" tabIndex={-1}>We could not find that page</h1>{" "}<p className="band-lede">The page you were looking for may have moved, or the address may be mistyped.</p>{" "}</div>{" "}</div>{" "}</section>{" "}<section className="section after-band" aria-labelledby="nf-title">{" "}<div className="container prose reveal">{" "}<h2 id="nf-title">Where would you like to go?</h2>{" "}<p>You can return to the home page to explore coverage, or contact us and we will help you directly.</p>{" "}<p><Link to="/" className="btn btn-accent">Return to the home page</Link>{" "}<Link to="/contact" className="tlink"><span>Contact King Health</span></Link></p>{" "}</div>{" "}</section>{" "}</main>
    </>
  )
}
