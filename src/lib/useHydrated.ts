import { useSyncExternalStore } from 'react'

const subscribe = () => () => {}

/* False while React hydrates server HTML, true afterwards (and on client side navigations).
   Values that depend on the query string (?from=) wait for this, because a prerendered page
   was built without a query string and React does not repair attribute differences on hydration. */
export function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  )
}
