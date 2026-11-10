/// <reference types="vite/client" />
import { HeadContent, Outlet, Scripts, createRootRoute, useRouterState } from '@tanstack/react-router'
import { useCallback, useEffect, useState, type ReactNode } from 'react'
import { Footer } from '~/components/Footer'
import { GoogleBadge } from '~/components/GoogleBadge'
import { Header, MenuPanel } from '~/components/Header'
import { IconSprites } from '~/components/IconSprites'
import { NotFoundPage } from '~/components/NotFoundPage'
import { ThemeDrawer } from '~/components/ThemeDrawer'
import { asset } from '~/lib/assets'
import { THEME_BOOT_SCRIPT, ThemeProvider, useTheme } from '~/lib/theme'
import siteCss from '~/styles/site.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [{ charSet: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    links: [
      { rel: 'icon', href: asset('/brand/favicon.ico'), sizes: 'any' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: asset('/brand/favicon-32.png') },
      { rel: 'apple-touch-icon', href: asset('/brand/favicon-180.png') },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@500;600;700;800&display=swap' },
      { rel: 'stylesheet', href: siteCss },
    ],
    scripts: [{ children: THEME_BOOT_SCRIPT }],
  }),
  shellComponent: RootDocument,
  component: () => (
    <SiteChrome>
      <Outlet />
    </SiteChrome>
  ),
  notFoundComponent: NotFoundPage,
})

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en-US" data-theme="ivory" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

/* Shared layout: sprites, skip link, header, mobile menu, the page, footer, theme drawer, Google badge. */
function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <ChromeInner>{children}</ChromeInner>
    </ThemeProvider>
  )
}

function ChromeInner({ children }: { children: ReactNode }) {
  const routeKey = useRouterState({ select: (s) => s.location.pathname + s.location.searchStr })
  const { drawerOpen } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = useCallback((refocus: boolean) => {
    setMenuOpen(false)
    if (refocus) document.getElementById('menuBtn')?.focus()
  }, [])

  /* Each route change closes the menu. Page enhancements run from inside each page (usePageEnhancements). */
  useEffect(() => {
    setMenuOpen(false)
  }, [routeKey])

  /* Opening the theme drawer from the mobile menu closes the menu first, as the original did. */
  useEffect(() => {
    if (drawerOpen) setMenuOpen(false)
  }, [drawerOpen])

  return (
    <>
      <IconSprites />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header menuOpen={menuOpen} onOpenMenu={() => setMenuOpen(true)} />
      <MenuPanel open={menuOpen} onClose={closeMenu} />
      {children}
      <Footer />
      <ThemeDrawer />
      <GoogleBadge />
    </>
  )
}
