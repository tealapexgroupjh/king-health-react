import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { SIGNATURE_THEME, THEME_KEYS, THEME_STORAGE_KEY, THEMES, type ThemeName } from './config'

type ThemeCtx = {
  theme: ThemeName
  setTheme: (t: ThemeName) => void
  drawerOpen: boolean
  openDrawer: (trigger?: HTMLElement | null) => void
  closeDrawer: (refocus?: boolean) => void
}

const Ctx = createContext<ThemeCtx | null>(null)

function isTheme(v: unknown): v is ThemeName {
  return typeof v === 'string' && (THEME_KEYS as string[]).includes(v)
}

/* The inline script in the document head applies the saved theme before first paint; this provider takes over after hydration. */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(SIGNATURE_THEME)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const returnFocus = useRef<HTMLElement | null>(null)
  const animTimer = useRef<number | undefined>(undefined)

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme')
    if (isTheme(current)) setThemeState(current)
  }, [])

  const setTheme = useCallback((t: ThemeName) => {
    const doc = document.documentElement
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      doc.classList.add('theme-anim')
      window.clearTimeout(animTimer.current)
      animTimer.current = window.setTimeout(() => doc.classList.remove('theme-anim'), 320)
    }
    doc.setAttribute('data-theme', t)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, t)
    } catch {
      /* storage unavailable: the choice lasts for this page view */
    }
    setThemeState(t)
  }, [])

  const openDrawer = useCallback((trigger?: HTMLElement | null) => {
    returnFocus.current = trigger ?? null
    setDrawerOpen(true)
  }, [])
  const closeDrawer = useCallback((refocus = true) => {
    setDrawerOpen(false)
    if (refocus && returnFocus.current) returnFocus.current.focus()
  }, [])

  const value = useMemo(
    () => ({ theme, setTheme, drawerOpen, openDrawer, closeDrawer }),
    [theme, setTheme, drawerOpen, openDrawer, closeDrawer],
  )
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useTheme() {
  const c = useContext(Ctx)
  if (!c) throw new Error('useTheme must be used inside ThemeProvider')
  return c
}

export function themeLabel(t: ThemeName) {
  return 'Theme, currently ' + THEMES[t].name
}

/* Exact text of the original pre paint script; its sha256 is allowlisted in public/_headers. */
export const THEME_BOOT_SCRIPT = `
  (function () {
    var T = ["ivory", "onyx", "forest", "linen", "fairway"];
    try { var t = localStorage.getItem('kh-theme'); if (t && T.indexOf(t) > -1) document.documentElement.setAttribute('data-theme', t); } catch (e) {}
    document.documentElement.classList.add('js');
  })();
`
