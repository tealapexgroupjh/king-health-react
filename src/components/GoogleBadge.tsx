import { Link } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'

/* Floating Google rating badge. It steps aside while the footer (which has its own Google Reviews link) is on screen. */
export function GoogleBadge() {
  const ref = useRef<HTMLAnchorElement>(null)
  useEffect(() => {
    const badge = ref.current
    const foot = document.querySelector('.site-footer')
    if (!badge || !foot || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => badge.classList.toggle('is-tucked', e.isIntersecting)),
      { threshold: 0.15 },
    )
    io.observe(foot)
    return () => io.disconnect()
  }, [])
  return (
    <Link
      ref={ref}
      to="/reviews"
      className="g-badge g-badge-float"
      data-lint-exempt="rating"
      aria-label="Rated 4.9 out of five on Google, 41 reviews"
    >
<svg className="g-ic gb-g" viewBox="0 0 256 262" aria-hidden="true" focusable="false"><use href="#kh-g" /></svg><b className="gb-val" aria-hidden="true">4.9</b><i className="gb-stars rv-stars" aria-hidden="true"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path className="s-full" d="M12 3.6l2.5 5.3 5.8.7-4.3 4 1.1 5.7L12 16.5l-5.1 2.8 1.1-5.7-4.3-4 5.8-.7z" /></svg><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path className="s-full" d="M12 3.6l2.5 5.3 5.8.7-4.3 4 1.1 5.7L12 16.5l-5.1 2.8 1.1-5.7-4.3-4 5.8-.7z" /></svg><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path className="s-full" d="M12 3.6l2.5 5.3 5.8.7-4.3 4 1.1 5.7L12 16.5l-5.1 2.8 1.1-5.7-4.3-4 5.8-.7z" /></svg><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path className="s-full" d="M12 3.6l2.5 5.3 5.8.7-4.3 4 1.1 5.7L12 16.5l-5.1 2.8 1.1-5.7-4.3-4 5.8-.7z" /></svg><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path className="s-full" d="M12 3.6l2.5 5.3 5.8.7-4.3 4 1.1 5.7L12 16.5l-5.1 2.8 1.1-5.7-4.3-4 5.8-.7z" /></svg></i><i className="gb-count" aria-hidden="true">41 reviews</i>
    </Link>
  )
}
