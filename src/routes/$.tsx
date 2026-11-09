import { createFileRoute, notFound } from '@tanstack/react-router'
import { NotFoundPage } from '~/components/NotFoundPage'

/* Catch all for unknown URLs. Throwing notFound() keeps a real 404 status on server rendered hosts,
   and rendering inside a route match keeps the markup identical to the prerendered 404.html,
   so the 404.html written by scripts/write-404.mjs hydrates cleanly under any URL. */
export const Route = createFileRoute('/$')({
  loader: () => {
    throw notFound()
  },
  component: NotFoundPage,
  notFoundComponent: NotFoundPage,
})
