import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  server: { port: 3000 },
  resolve: { tsconfigPaths: true },
  plugins: [
    tanstackStart({
      /* Every page is also written out as static HTML (dist/client/<page>/index.html) so the build can be
         served by any static host, Cloudflare Pages included, with full markup for search engines. */
      prerender: {
        enabled: true,
        crawlLinks: true,
        failOnError: true,
        /* Only real pages: skip query and hash variants (they share their page's HTML) and downloadable files. */
        filter: ({ path }) => !/[?#]/.test(path) && !/\.[a-z0-9]+$/i.test(path),
      },
      pages: [{ path: '/' }],
    }),
    viteReact(),
  ],
})
