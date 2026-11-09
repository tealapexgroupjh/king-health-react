import { Link, useRouterState } from '@tanstack/react-router'
import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react'
import { trapTab } from '~/lib/a11y'
import { categoryFor, DARK_THEMES, KH_CONFIG, NAV, PHONE_HREF, type CatKey, type NavCategory } from '~/lib/config'
import { themeLabel, useTheme } from '~/lib/theme'
import { useHydrated } from '~/lib/useHydrated'

function useCurrentCategory(): CatKey | null {
  const loc = useRouterState({ select: (s) => s.location })
  const hydrated = useHydrated()
  const from = hydrated ? (loc.search as Record<string, unknown>)?.from : undefined
  return categoryFor(loc.pathname, typeof from === 'string' ? from : undefined)
}

function BrandLock() {
  const { theme } = useTheme()
  const dark = DARK_THEMES.includes(theme)
  return (
    <Link to="/" className="brand-lock">
      <img className="logo logo-light" src="/brand/king-health-wordmark.png" alt={dark ? '' : 'King Health, home'} width="945" height="557" />
      <img className="logo logo-dark" src="/brand/king-health-wordmark-reverse.png" alt={dark ? 'King Health, home' : ''} width="945" height="557" />
      <span className="kh-leaves" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>
    </Link>
  )
}

function ThemeButton() {
  const { theme, drawerOpen, openDrawer } = useTheme()
  return (
    <button
      type="button"
      className="theme-btn"
      data-theme-open
      aria-haspopup="dialog"
      aria-controls="themeDrawer"
      aria-expanded={drawerOpen}
      aria-label={themeLabel(theme)}
      onClick={(e) => openDrawer(e.currentTarget)}
    >
      <span className="sw" aria-hidden="true" />
      <span className="tb-v">Theme</span>
    </button>
  )
}

/* One category dropdown: hover and click, arrow keys, Home and End, Escape. */
function NavDrop({
  cat,
  current,
  open,
  setOpen,
}: {
  cat: NavCategory
  current: boolean
  open: boolean
  setOpen: (key: CatKey | null) => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)
  const hoverOpened = useRef(false)
  const leaveTimer = useRef<number | undefined>(undefined)
  const [hoverCapable, setHoverCapable] = useState(false)
  useEffect(() => setHoverCapable(window.matchMedia('(hover: hover)').matches), [])

  const items = () => Array.from(ref.current?.querySelectorAll<HTMLAnchorElement>('.drop-menu a') ?? [])
  const openWith = (focus: 'first' | 'last' | null) => {
    setOpen(cat.key)
    if (focus)
      requestAnimationFrame(() => {
        const l = items()
        ;(focus === 'first' ? l[0] : l[l.length - 1])?.focus()
      })
  }
  const close = (refocus: boolean) => {
    hoverOpened.current = false
    setOpen(null)
    if (refocus) btnRef.current?.focus()
  }
  const keyOpen = (e: ReactKeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      openWith('first')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      openWith('last')
    }
  }

  return (
    <div
      ref={ref}
      className={'drop' + (open ? ' open' : '')}
      data-drop
      data-cat={cat.key}
      onBlur={(e) => {
        if (open && !ref.current?.contains(e.relatedTarget as Node | null)) close(false)
      }}
      onMouseEnter={() => {
        if (!hoverCapable) return
        window.clearTimeout(leaveTimer.current)
        if (!open) {
          setOpen(cat.key)
          hoverOpened.current = true
        }
      }}
      onMouseLeave={() => {
        if (!hoverCapable) return
        leaveTimer.current = window.setTimeout(() => close(false), 180)
      }}
    >
      <Link className="drop-link" to={cat.to} aria-current={current ? 'page' : undefined} onKeyDown={keyOpen}>
        {cat.label}
      </Link>
      <button
        ref={btnRef}
        type="button"
        className="drop-btn"
        aria-expanded={open}
        aria-controls={`menu-${cat.key}`}
        aria-label={`Show ${cat.label} pages`}
        onKeyDown={keyOpen}
        onClick={() => {
          if (open && hoverOpened.current) {
            hoverOpened.current = false
            return
          }
          if (open) close(false)
          else setOpen(cat.key)
        }}
      >
        <span className="chev" aria-hidden="true" />
      </button>
      <div
        className="drop-menu"
        id={`menu-${cat.key}`}
        hidden={!open}
        onKeyDown={(e) => {
          const l = items()
          const i = l.indexOf(document.activeElement as HTMLAnchorElement)
          if (e.key === 'ArrowDown') {
            e.preventDefault()
            l[(i + 1) % l.length]?.focus()
          } else if (e.key === 'ArrowUp') {
            e.preventDefault()
            l[(i - 1 + l.length) % l.length]?.focus()
          } else if (e.key === 'Home') {
            e.preventDefault()
            l[0]?.focus()
          } else if (e.key === 'End') {
            e.preventDefault()
            l[l.length - 1]?.focus()
          } else if (e.key === 'Escape') {
            e.preventDefault()
            e.stopPropagation()
            close(true)
          }
        }}
      >
        {cat.items.map((it) => (
          <Link key={it.label + it.to} to={it.to} search={it.search} onClick={() => close(false)}>
            {it.label}
          </Link>
        ))}
        <Link className="all" to={cat.to} onClick={() => close(false)}>
          All {cat.label}
        </Link>
      </div>
    </div>
  )
}

export function Header({ menuOpen, onOpenMenu }: { menuOpen: boolean; onOpenMenu: () => void }) {
  const current = useCurrentCategory()
  const [openKey, setOpenKey] = useState<CatKey | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    if (!openKey) return
    const onDoc = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpenKey(null)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenKey(null)
        document.querySelector<HTMLElement>(`[aria-controls="menu-${openKey}"]`)?.focus()
      }
    }
    document.addEventListener('click', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [openKey])

  return (
    <header className={'site-header' + (scrolled ? ' scrolled' : '')} id="siteHeader">
      <div className="container hd">
        <BrandLock />
        <nav className="nav" aria-label="Primary" ref={navRef}>
          {NAV.map((cat) => (
            <NavDrop key={cat.key} cat={cat} current={current === cat.key} open={openKey === cat.key} setOpen={setOpenKey} />
          ))}
          <Link className="nav-link" to="/about">
            About Us
          </Link>
        </nav>
        <div className="hd-right">
          <a className="hd-phone" href={PHONE_HREF} data-config="phone-link">
            <span data-config="phone">{KH_CONFIG.phone}</span>
          </a>
          <ThemeButton />
          <Link className="btn btn-accent hd-cta" to="/contact">
            Contact Us
          </Link>
          <button type="button" className="menu-btn" id="menuBtn" aria-expanded={menuOpen} aria-controls="menuPanel" onClick={onOpenMenu}>
            <span className="burger" aria-hidden="true" />
            Menu
          </button>
        </div>
      </div>
    </header>
  )
}

export function MenuPanel({ open, onClose }: { open: boolean; onClose: (refocus: boolean) => void }) {
  const current = useCurrentCategory()
  const ref = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose(true)
    }
    const onResize = () => {
      if (window.innerWidth >= 1000) onClose(false)
    }
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open, onClose])

  const close = () => onClose(false)
  return (
    <div
      ref={ref}
      className={'menu-panel' + (open ? ' open' : '')}
      id="menuPanel"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      onKeyDown={(e) => ref.current && trapTab(ref.current, e)}
    >
      <div className="container mp-top">
        <BrandLock />
        <button ref={closeRef} type="button" className="menu-btn menu-close" id="menuClose" onClick={() => onClose(true)}>
          Close
        </button>
      </div>
      <nav className="container mp-body" aria-label="Mobile">
        {NAV.map((cat) => (
          <MenuGroup key={cat.key} cat={cat} current={current === cat.key} onNavigate={close} />
        ))}
        <Link className="mp-link" to="/" onClick={close}>
          King Health
        </Link>
        <div className="mp-sub">
          <Link to="/about" onClick={close}>
            About Us
          </Link>
          <Link to="/faq" onClick={close}>
            FAQ
          </Link>
          <Link to="/carriers" onClick={close}>
            Carriers
          </Link>
          <Link to="/reviews" onClick={close}>
            Client Reviews
          </Link>
        </div>
        <Link className="mp-link" to="/contact" onClick={close}>
          Contact Us
        </Link>
        <div className="mp-foot">
          <ThemeButton />
          <Link className="btn btn-accent" to="/contact" onClick={close}>
            Request a consultation
          </Link>
          <a className="tlink" href={PHONE_HREF} data-config="phone-link">
            <span>
              Call <span data-config="phone">{KH_CONFIG.phone}</span>
            </span>
          </a>
        </div>
      </nav>
    </div>
  )
}

function MenuGroup({ cat, current, onNavigate }: { cat: NavCategory; current: boolean; onNavigate: () => void }) {
  return (
    <>
      <Link className="mp-link" to={cat.to} data-cat-link={cat.key} aria-current={current ? 'page' : undefined} onClick={onNavigate}>
        {cat.label}
      </Link>
      <div className="mp-sub">
        {cat.items.map((it) => (
          <Link key={it.label + it.to} to={it.to} search={it.search} onClick={onNavigate}>
            {it.label}
          </Link>
        ))}
      </div>
    </>
  )
}
