/* After `vite build`: render an unknown URL with the built server and save it as dist/client/404.html.
   Static hosts (Cloudflare Pages and similar) serve that file for any missing path, and because it is the
   server's own render of an unknown URL, it hydrates cleanly wherever it is served. */
import { writeFile } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const { default: server } = await import(pathToFileURL(path.join(root, 'dist/server/server.js')).href)
const res = await server.fetch(new Request('http://localhost/__page-not-found__'))
if (res.status !== 404) throw new Error(`Expected a 404 render, got ${res.status}`)
const html = await res.text()
if (!html.includes('<main')) throw new Error('404 render has no <main>; refusing to write it')
await writeFile(path.join(root, 'dist/client/404.html'), html)
console.log('wrote dist/client/404.html (' + html.length + ' bytes)')
