# King Health

The King Health website (kinghealthdirect.com), built as a React application on TanStack Start.

Every page is a React component in `src/routes/`, wrapped in one shared layout (`src/routes/__root.tsx`) that holds the header, mobile menu, footer, theme drawer and Google rating badge. Page copy, photography, structure and styling match the live site exactly.

## Stack

TanStack Start (React 19, TanStack Router, Vite), TypeScript strict. No CSS framework: the site's own stylesheet lives at `src/styles/site.css`.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build plus a static HTML copy of every page in dist/client
npm run typecheck
```

## Where things live

| Path | What it holds |
| --- | --- |
| `src/routes/*.tsx` | One file per page. The file name is the URL (`medicare.tsx` serves `/medicare`). Each page sets its own title, description, social tags and structured data in `head`. |
| `src/routes/__root.tsx` | The shared layout and the document head (fonts, favicon, stylesheet). |
| `src/components/` | Header and mobile menu, Footer, ThemeDrawer, ConsultPanel (the consultation form), Faq, GoogleBadge, NotFoundPage. |
| `src/lib/config.ts` | Phone, email, the GoHighLevel webhook URL, the optional GoHighLevel form embed, navigation and coverage lists. |
| `src/lib/enhance.ts` | Scroll reveals, the home hero slideshow, the reviews carousel and the carrier logo strip. |
| `public/` | Photography, logos, the reviews feed, the contact card, robots and sitemap. |

## GoHighLevel connection

The consultation form on every page posts to the GoHighLevel inbound webhook set in `KH_CONFIG.ghlWebhookUrl` (`src/lib/config.ts`). Each page presets the form's category and coverage, and links can override them with `?category=` and `?coverage=` (for example `/contact?category=retirement&coverage=annuities`).

To use a GoHighLevel form instead, paste the form's iframe `src` URL into `KH_CONFIG.ghlFormEmbedSrc`. Every page then shows the GoHighLevel form with its preset passed along. Field keys and option lists are documented in `GHL_FORM_SETUP.md`.

## Deploying

Any host that runs TanStack Start works directly from this repository. For a static host such as Cloudflare Pages, use build command `npm run build` and output directory `dist/client`.

Built by Teal Apex Solutions.
