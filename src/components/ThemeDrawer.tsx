import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion, trapTab } from '~/lib/a11y'
import { SIGNATURE_THEME, THEME_KEYS, THEMES } from '~/lib/config'
import { useTheme } from '~/lib/theme'

/* Theme chooser drawer: five themes, remembered on this device. */
export function ThemeDrawer() {
  const { theme, setTheme, drawerOpen, closeDrawer } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [shown, setShown] = useState(false)
  const drawerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    let t: number | undefined
    if (drawerOpen) {
      setMounted(true)
      const raf = requestAnimationFrame(() => setShown(true))
      document.body.style.overflow = 'hidden'
      t = window.setTimeout(
        () => {
          const root = drawerRef.current
          const active = root?.querySelector<HTMLElement>('[aria-pressed="true"]') ?? root?.querySelector<HTMLElement>('.tile')
          active?.focus()
        },
        prefersReducedMotion() ? 0 : 60,
      )
      return () => {
        cancelAnimationFrame(raf)
        window.clearTimeout(t)
      }
    }
    setShown(false)
    document.body.style.overflow = ''
    t = window.setTimeout(() => setMounted(false), prefersReducedMotion() ? 0 : 330)
    return () => window.clearTimeout(t)
  }, [drawerOpen])

  useEffect(() => {
    if (!drawerOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeDrawer(true)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [drawerOpen, closeDrawer])

  return (
    <>
      <div className={'drawer-scrim' + (shown ? ' show' : '')} id="drawerScrim" hidden={!mounted} onClick={() => closeDrawer(true)} />
      <aside
        ref={drawerRef}
        className={'drawer' + (shown ? ' show' : '')}
        id="themeDrawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawerTitle"
        hidden={!mounted}
        onKeyDown={(e) => drawerRef.current && trapTab(drawerRef.current, e)}
      >
        <div className="dr-head">
          <h2 id="drawerTitle">Choose a theme</h2>
          <button type="button" className="dr-close" id="drawerClose" onClick={() => closeDrawer(true)}>
            Close
          </button>
        </div>
        <div className="dr-body">
          <p>Every page, chart and form follows the theme you choose, and your choice is remembered on this device.</p>
          <div className="tiles" role="group" aria-label="Themes">
            {THEME_KEYS.map((key) => (
              <button
                key={key}
                type="button"
                className="tile"
                data-set-theme={key}
                aria-pressed={theme === key}
                onClick={() => setTheme(key)}
              >
                <span className="tp" data-theme={key} aria-hidden="true">
                  <span className="tp-card" />
                  <span className="tp-l1" />
                  <span className="tp-l2" />
                  <span className="tp-band" />
                  <span className="tp-bl" />
                  <span className="tp-btn" />
                </span>
                <span className="tile-name">{THEMES[key].name}</span>
                <span className="tile-mode">{THEMES[key].mode}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="dr-foot">
          <button
            type="button"
            className="dr-reset"
            id="themeReset"
            onClick={() => {
              setTheme(SIGNATURE_THEME)
              drawerRef.current?.querySelector<HTMLElement>(`[data-set-theme="${SIGNATURE_THEME}"]`)?.focus()
            }}
          >
            Return to the signature theme
          </button>
        </div>
      </aside>
    </>
  )
}
