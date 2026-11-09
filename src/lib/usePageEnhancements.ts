import { useRouterState } from '@tanstack/react-router'
import { useEffect } from 'react'
import { enhancePage } from './enhance'

/* Called at the top of every page component, so the enhancements start only after that page has hydrated
   (pages are code split, so the shared layout mounts before they do). Re-runs when the URL changes. */
export function usePageEnhancements() {
  const routeKey = useRouterState({ select: (s) => s.location.pathname + s.location.searchStr })
  useEffect(() => enhancePage(), [routeKey])
}
