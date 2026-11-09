import { createFileRoute, Link } from '@tanstack/react-router'
import { usePageEnhancements } from '~/lib/usePageEnhancements'

/* Converted from accessibility.html (King Health, Summit). Page copy and markup are unchanged. */
const head = {
  "meta": [
    {
      "title": "Accessibility Statement | King Health"
    },
    {
      "name": "description",
      "content": "King Health in Newark, New Jersey is committed to a website everyone can use. Read our accessibility statement, and call us if anything is hard to reach."
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
      "content": "Accessibility Statement | King Health"
    },
    {
      "property": "og:description",
      "content": "King Health in Newark, New Jersey is committed to a website everyone can use. Read our accessibility statement, and call us if anything is hard to reach."
    },
    {
      "property": "og:url",
      "content": "https://kinghealthdirect.com/accessibility"
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
      "content": "Accessibility Statement | King Health"
    },
    {
      "name": "twitter:description",
      "content": "King Health in Newark, New Jersey is committed to a website everyone can use. Read our accessibility statement, and call us if anything is hard to reach."
    },
    {
      "name": "twitter:image",
      "content": "https://kinghealthdirect.com/assets/og/king-health-og.jpg"
    }
  ],
  "links": [
    {
      "rel": "canonical",
      "href": "https://kinghealthdirect.com/accessibility"
    }
  ],
  "scripts": [
    {
      "type": "application/ld+json",
      "children": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"https://kinghealthdirect.com/#organization\",\"name\":\"King Health\",\"legalName\":\"King Health LLC\",\"url\":\"https://kinghealthdirect.com/\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://kinghealthdirect.com/brand/king-health-lockup.png\",\"width\":1000,\"height\":659},\"sameAs\":[\"https://www.facebook.com/kinghealthdirect\",\"https://www.instagram.com/kinghealthdirect\",\"https://wa.me/19735247188?text=Hello%20Javon%2C%20I%20found%20King%20Health%20online%20and%20would%20like%20to%20talk%20about%20my%20coverage.\",\"https://www.google.com/maps?cid=9265971853131828090\"],\"contactPoint\":{\"@type\":\"ContactPoint\",\"telephone\":\"+1-973-524-7188\",\"contactType\":\"customer service\",\"areaServed\":[{\"@type\":\"City\",\"name\":\"Newark, NJ\"},{\"@type\":\"State\",\"name\":\"New Jersey\"},{\"@type\":\"State\",\"name\":\"North Carolina\"}],\"availableLanguage\":\"en\",\"email\":\"Javon@kinghealthdirect.com\"}},{\"@type\":\"WebSite\",\"@id\":\"https://kinghealthdirect.com/#website\",\"url\":\"https://kinghealthdirect.com/\",\"name\":\"King Health\",\"inLanguage\":\"en-US\",\"publisher\":{\"@id\":\"https://kinghealthdirect.com/#organization\"}}]}"
    }
  ]
}

export const Route = createFileRoute('/accessibility')({
  head: () => head,
  component: AccessibilityPage,
})

function AccessibilityPage() {
  usePageEnhancements()
  return (
    <>
<nav className="subnav" aria-label="King Health pages" data-site-nav><div className="container sn"><ul className="sn-list"><li className="sn-label-item"><Link to="/" className="sn-label">King Health</Link></li><li><Link to="/about">About Us</Link></li><li><Link to="/faq">FAQ</Link></li><li><Link to="/carriers">Carriers</Link></li><li><Link to="/reviews">Client Reviews</Link></li></ul>
</div>
</nav>{" "}
<main id="main" tabIndex={-1}>{" "}<section className="banner" aria-labelledby="page-title">{" "}<div className="hero-media hero-wide"><div className="hero-photo"><img src="/media/photos/family-lawn-walk.jpg" alt="" width="1800" height="1200" loading="eager" fetchPriority="high" style={{ "objectPosition": "50% 46%" }} /></div>
</div>{" "}<div className="container">{" "}<div className="hero-band band">{" "}<p className="kicker">Accessibility</p>
<h1 id="page-title" tabIndex={-1}>Accessibility statement</h1>{" "}<p className="band-lede">Insurance Advisory You Can Trust</p>{" "}</div>{" "}</div>{" "}</section>{" "}<section className="section after-band" aria-label="Accessibility statement">{" "}<div className="container prose reveal"><p>King Health designs this site to meet the Web Content Accessibility Guidelines at level AA, including full keyboard navigation, visible focus indicators, sufficient color contrast in every theme and support for reduced motion preferences.</p>
<p>We review the site regularly as content changes, and we welcome feedback about any barrier you encounter.</p>
<p>If any part of the site is difficult to use, please call or email us. We will help you directly and correct the issue.</p>
</div>{" "}</section>{" "}</main>
    </>
  )
}
