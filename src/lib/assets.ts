/* Where photos, logos, icons, the reviews feed and the contact card load from.

   Website builders that import this code (GoHighLevel included) take the React source but not the binary files
   in public/, so root relative paths like /media/hero.jpg lead nowhere there. Every asset therefore loads from
   jsDelivr, which serves this public GitHub repository's public/ folder over a global CDN. The address is pinned
   to one commit, so the files behind it never change; after adding or replacing a photo in public/, push it and
   move ASSET_COMMIT to that new commit.

   To serve the files from public/ on the same host instead (Cloudflare Pages, for example), build with
   VITE_ASSET_BASE set to an empty string. The repository must stay public for the CDN address to work. */

export const ASSET_COMMIT = 'd4d8c8111df15ed78af579a222164d24206fd168'
const CDN_BASE = `https://cdn.jsdelivr.net/gh/tealapexgroupjh/king-health-react@${ASSET_COMMIT}/public`

const envBase = import.meta.env.VITE_ASSET_BASE as string | undefined
export const ASSET_BASE: string = envBase ?? CDN_BASE

/* asset('/media/hero/01.jpg') -> full URL of that file */
export function asset(path: string): string {
  return ASSET_BASE + path
}

/* assetSet('/media/a-800.jpg 800w, /media/a-1600.jpg 1600w') -> the same srcset with full URLs */
export function assetSet(srcset: string): string {
  return srcset
    .split(',')
    .map((candidate) => {
      const [url, ...descriptor] = candidate.trim().split(/\s+/)
      return [asset(url), ...descriptor].join(' ')
    })
    .join(', ')
}

/* Page heads reference the social preview image and the logo on kinghealthdirect.com; point them at the same
   asset host so link previews and search results show the images wherever the site is hosted. */
const SITE_ASSET = /https:\/\/kinghealthdirect\.com(?=\/(?:assets|brand|media)\/)/g
export function cdnHead<T>(head: T): T {
  if (!ASSET_BASE) return head
  return JSON.parse(JSON.stringify(head).replace(SITE_ASSET, ASSET_BASE)) as T
}
