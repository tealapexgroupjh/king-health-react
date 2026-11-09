/* King Health site configuration. The single place to change contact details and the GoHighLevel connection. */

export const KH_CONFIG = {
  /* GHL workflow: Website Lead, King Health site form. Leave empty for demo mode. */
  ghlWebhookUrl:
    'https://services.leadconnectorhq.com/hooks/3EReOYEGztjvr04Cu0rd/webhook-trigger/c4e7bd00-d5a0-4e2d-99f4-ce3ba448a8e6',
  /* Optional: the src URL of a GoHighLevel form iframe (Sites > Forms > Integrate). When set, every consult
     panel shows the GoHighLevel form instead of the native one, with the page preset appended as
     ?category=&coverage= so the form opens with the same selections. See GHL_FORM_SETUP.md. */
  ghlFormEmbedSrc: '',
  reviewsJson: '/assets/reviews.json',
  phone: '(973) 524-7188',
  email: 'Javon@kinghealthdirect.com',
} as const

export const PHONE_HREF = 'tel:' + KH_CONFIG.phone.replace(/[^\d+]/g, '').replace(/^(\d{10})$/, '+1$1')
export const EMAIL_HREF = 'mailto:' + KH_CONFIG.email

export const COVERAGE: Record<string, string[]> = {
  'Senior Benefits': ['Medicare', 'Final Expense', 'Ancillary', 'All or unsure'],
  'Individual Benefits': ['Individual Health', 'Whole Life', 'Term Life', 'Ancillary', 'Dental and Vision', 'All or unsure'],
  'Group Benefits': ['Group Health', 'Group Life', 'Group Ancillary', 'Group Dental and Vision', 'All or unsure'],
  Retirement: ['Annuities', 'Indexed Universal Life', 'All or unsure'],
}
export const CATEGORIES = [...Object.keys(COVERAGE), 'General Inquiry']

export type FromKey = 'senior' | 'individual' | 'group'
export const FROM: Record<FromKey, string> = { senior: 'Senior Benefits', individual: 'Individual Benefits', group: 'Group Benefits' }
export const FROM_SLUG: Record<FromKey, '/senior-benefits' | '/individual-benefits' | '/group-benefits'> = {
  senior: '/senior-benefits',
  individual: '/individual-benefits',
  group: '/group-benefits',
}

export type CatKey = 'senior' | 'individual' | 'group' | 'retirement'
export type NavItem = { label: string; to: string; search?: { from: FromKey } }
export type NavCategory = { key: CatKey; label: string; to: string; items: NavItem[] }

export const NAV: NavCategory[] = [
  {
    key: 'senior',
    label: 'Senior Benefits',
    to: '/senior-benefits',
    items: [
      { label: 'Medicare', to: '/medicare' },
      { label: 'Final Expense', to: '/final-expense' },
      { label: 'Ancillary', to: '/ancillary', search: { from: 'senior' } },
    ],
  },
  {
    key: 'individual',
    label: 'Individual Benefits',
    to: '/individual-benefits',
    items: [
      { label: 'Individual Health', to: '/individual-health' },
      { label: 'Whole Life', to: '/whole-life' },
      { label: 'Term Life', to: '/term-life' },
      { label: 'Ancillary', to: '/ancillary', search: { from: 'individual' } },
      { label: 'Dental and Vision', to: '/dental-vision' },
    ],
  },
  {
    key: 'group',
    label: 'Group Benefits',
    to: '/group-benefits',
    items: [
      { label: 'Group Health', to: '/group-health' },
      { label: 'Group Life', to: '/group-life' },
      { label: 'Group Ancillary', to: '/group-ancillary' },
      { label: 'Group Dental and Vision', to: '/group-dental-vision' },
    ],
  },
  {
    key: 'retirement',
    label: 'Retirement',
    to: '/retirement',
    items: [
      { label: 'Annuities', to: '/annuities' },
      { label: 'Indexed Universal Life', to: '/indexed-universal-life' },
    ],
  },
]

/* Which top level category a pathname belongs to; drives aria-current on the header and the mobile menu. */
export function categoryFor(pathname: string, from?: string): CatKey | null {
  const path = pathname.replace(/\/+$/, '') || '/'
  if (path === '/ancillary') return (from === 'individual' ? 'individual' : 'senior') as CatKey
  for (const c of NAV) {
    if (c.to === path) return c.key
    if (c.items.some((i) => i.to === path && !i.search)) return c.key
  }
  return null
}

export const THEMES = {
  ivory: { name: 'Ivory Crown', mode: 'Light, signature' },
  onyx: { name: 'Onyx Crown', mode: 'Dark' },
  forest: { name: 'Forest Hall', mode: 'Deep green' },
  linen: { name: 'Linen Estate', mode: 'Warm light' },
  fairway: { name: 'Fairway', mode: 'Fresh light' },
} as const
export type ThemeName = keyof typeof THEMES
export const THEME_KEYS = Object.keys(THEMES) as ThemeName[]
export const DARK_THEMES: ThemeName[] = ['onyx', 'forest']
export const SIGNATURE_THEME: ThemeName = 'ivory'
export const THEME_STORAGE_KEY = 'kh-theme'
