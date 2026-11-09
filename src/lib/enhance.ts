/* Progressive enhancements for page content, ported from the Summit site.js.
   enhancePage() runs after every route change and returns a cleanup that removes every listener, observer and
   timer it created. Page markup stays server rendered and readable without JavaScript; these add motion,
   the reviews feed, the carrier strip and the coverage tips on top. */

import { prefersReducedMotion } from './a11y'

type Cleanup = () => void

function $all<T extends Element = HTMLElement>(sel: string, root: ParentNode = document): T[] {
  return Array.from(root.querySelectorAll<T>(sel))
}

function listen<K extends keyof WindowEventMap>(
  target: Window | Document | HTMLElement,
  type: K | string,
  fn: (e: Event) => void,
  opts: AddEventListenerOptions | undefined,
  bag: Cleanup[],
) {
  target.addEventListener(type, fn, opts)
  bag.push(() => target.removeEventListener(type, fn, opts))
}

/* ---------- Coverage pills with explainers: hover and focus open through CSS; a tap toggles ---------- */
function initTips(bag: Cleanup[]) {
  const tips = $all<HTMLButtonElement>('[data-tip]')
  if (!tips.length) return
  const closeTips = (except: HTMLElement | null) =>
    tips.forEach((b) => {
      if (b !== except) {
        b.setAttribute('aria-expanded', 'false')
        b.parentElement?.classList.remove('open')
      }
    })
  tips.forEach((b) =>
    listen(
      b,
      'click',
      (e) => {
        e.stopPropagation()
        const open = b.getAttribute('aria-expanded') !== 'true'
        closeTips(b)
        b.setAttribute('aria-expanded', String(open))
        b.parentElement?.classList.toggle('open', open)
      },
      undefined,
      bag,
    ),
  )
  listen(document, 'click', () => closeTips(null), undefined, bag)
  listen(document, 'keydown', (e) => (e as KeyboardEvent).key === 'Escape' && closeTips(null), undefined, bag)
}

/* ---------- --sn-h follows the docked second bar's real height (it can wrap) ---------- */
function initSecondBar(bag: Cleanup[]) {
  const update = () => {
    const bar = $all('.subnav').find((n) => !n.hidden)
    if (bar && getComputedStyle(bar).position === 'sticky') document.documentElement.style.setProperty('--sn-h', bar.offsetHeight + 'px')
    else document.documentElement.style.removeProperty('--sn-h')
  }
  listen(window, 'resize', update, { passive: true }, bag)
  update()
}

/* ---------- Reveals and charts, once on entering view ---------- */
function initReveals(bag: Cleanup[]) {
  const reveals = $all('.reveal, [data-draw]')
  const charts = $all('.chart')
  if ('IntersectionObserver' in window && !prefersReducedMotion()) {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in')
            io.unobserve(en.target)
          }
        }),
      { rootMargin: '0px 0px -6% 0px', threshold: 0.08 },
    )
    const cio = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in')
            cio.unobserve(en.target)
          }
        }),
      { rootMargin: '0px 0px -10% 0px', threshold: 0.3 },
    )
    reveals.forEach((el) => io.observe(el))
    charts.forEach((el) => cio.observe(el))
    bag.push(() => {
      io.disconnect()
      cio.disconnect()
    })
  } else {
    reveals.concat(charts).forEach((el) => el.classList.add('in'))
  }
}

/* ---------- Appointed carriers strip: moves only when real logos overflow; pause persists in kh-motion ---------- */
const MOTION_KEY = 'kh-motion'
function motionPaused() {
  try {
    return localStorage.getItem(MOTION_KEY) === 'paused'
  } catch {
    return false
  }
}
function saveMotion(paused: boolean) {
  try {
    localStorage.setItem(MOTION_KEY, paused ? 'paused' : 'playing')
  } catch {
    /* storage unavailable */
  }
}
function initStrip(sec: HTMLElement) {
  const vp = sec.querySelector<HTMLElement>('[data-cstrip]')
  const btn = sec.querySelector<HTMLButtonElement>('.cstrip-toggle')
  if (!vp || !btn) return
  const run = vp.querySelector('.cstrip-run')
  if (run) {
    const orig = run.querySelector('.cstrip-track:not([aria-hidden])')
    if (orig) vp.insertBefore(orig, run)
    run.remove()
  }
  vp.classList.remove('is-moving')
  sec.classList.remove('is-paused')
  btn.hidden = true
  const track = vp.querySelector<HTMLElement>('.cstrip-track')
  if (!track || !track.querySelector('.cstrip-item') || track.querySelector('[data-placeholder]')) return
  if (prefersReducedMotion()) return
  vp.classList.add('is-moving')
  track.style.flexWrap = 'nowrap'
  track.style.justifyContent = 'flex-start'
  const fits = track.scrollWidth <= vp.clientWidth
  track.style.flexWrap = ''
  track.style.justifyContent = ''
  vp.classList.remove('is-moving')
  if (fits) return
  const setBtn = (paused: boolean) => {
    btn.setAttribute('aria-pressed', String(paused))
    btn.textContent = btn.getAttribute(paused ? 'data-play' : 'data-pause')
  }
  const start = () => {
    const r = document.createElement('div')
    r.className = 'cstrip-run'
    vp.insertBefore(r, track)
    r.appendChild(track)
    const clone = track.cloneNode(true) as HTMLElement
    clone.setAttribute('aria-hidden', 'true')
    clone.removeAttribute('aria-label')
    $all('img', clone).forEach((i) => i.setAttribute('alt', ''))
    r.appendChild(clone)
    vp.classList.add('is-moving')
    const speed = window.matchMedia('(max-width: 760px)').matches ? 16 : 32
    vp.style.setProperty('--cstrip-dur', (track.getBoundingClientRect().width / speed).toFixed(1) + 's')
  }
  btn.hidden = false
  if (motionPaused()) setBtn(true)
  else {
    start()
    setBtn(false)
  }
  btn.onclick = () => {
    const paused = btn.getAttribute('aria-pressed') === 'true'
    if (paused) {
      if (!vp.classList.contains('is-moving')) start()
      sec.classList.remove('is-paused')
    } else sec.classList.add('is-paused')
    setBtn(!paused)
    saveMotion(!paused)
  }
}
function initStrips(bag: Cleanup[]) {
  const all = () => $all('[data-cstrip-section]').forEach(initStrip)
  all()
  let w = window.innerWidth
  let t: number | undefined
  listen(
    window,
    'resize',
    () => {
      if (window.innerWidth === w) return
      w = window.innerWidth
      window.clearTimeout(t)
      t = window.setTimeout(all, 200)
    },
    undefined,
    bag,
  )
  bag.push(() => window.clearTimeout(t))
}

/* ---------- Reviews: GHL widget first, then the owner authorized Google feed (assets/reviews.json) ---------- */
type Review = { author?: string; author_url?: string; rating?: number; text?: string; reply?: string; relative_time?: string }
type ReviewData = { average?: number; total?: number; profile_url?: string; write_review_url?: string; reviews?: Review[] }
type Strings = Record<string, string>

const STAR = 'M12 3.6l2.5 5.3 5.8.7-4.3 4 1.1 5.7L12 16.5l-5.1 2.8 1.1-5.7-4.3-4 5.8-.7z'
let starUid = 0
function starRow(value: number, label: string) {
  const v = Math.round(Number(value) * 2) / 2
  let html = ''
  for (let i = 1; i <= 5; i++) {
    if (v >= i) html += `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path class="s-full" d="${STAR}"/></svg>`
    else if (v >= i - 0.5) {
      const id = 'khs' + ++starUid
      html += `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><defs><clipPath id="${id}"><rect x="0" y="0" width="12" height="24"/></clipPath></defs><path class="s-empty" d="${STAR}"/><path class="s-full" clip-path="url(#${id})" d="${STAR}"/></svg>`
    } else html += `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path class="s-empty" d="${STAR}"/></svg>`
  }
  const s = document.createElement('span')
  s.className = 'rv-stars'
  s.setAttribute('role', 'img')
  s.setAttribute('aria-label', label)
  s.innerHTML = html
  return s
}
function el<K extends keyof HTMLElementTagNameMap>(tag: K, cls?: string, text?: string | null) {
  const n = document.createElement(tag)
  if (cls) n.className = cls
  if (text != null) n.textContent = text
  return n
}
function widgetPresent(slot: HTMLElement) {
  return Array.from(slot.children).some((c) => !c.matches('[data-rv-grid], [data-rv-more], [data-rv-ctrl]'))
}
function hidePlaceholders(slot: HTMLElement) {
  ;['[data-rv-grid]', '[data-rv-more]', '[data-rv-ctrl]'].forEach((s) => {
    const n = slot.querySelector<HTMLElement>(s)
    if (n) n.hidden = true
  })
  const sec = slot.closest('section')
  if (sec) $all('.rv-score-ph', sec).forEach((p) => (p.hidden = true))
  $all('[data-rv-static], .rvb-count').forEach((p) => (p.hidden = true))
}
function renderReviews(slot: HTMLElement, data: ReviewData, bag: Cleanup[]) {
  let S: Strings = {}
  try {
    S = JSON.parse(slot.getAttribute('data-rv-strings') || '{}')
  } catch {
    /* keep defaults */
  }
  const sec = slot.closest('section')
  const score = sec?.querySelector<HTMLElement>('[data-review-score]')
  if (score && data.average != null && !score.hasAttribute('data-rv-static')) {
    score.innerHTML = ''
    const row = el('div', 'rv-avg-row')
    row.appendChild(el('span', 'rv-avg', String(data.average)))
    row.appendChild(starRow(data.average, (S.rated || '').replace('{value}', String(data.average))))
    score.appendChild(row)
    if (data.total != null) score.appendChild(el('p', 'rv-total', (S.based_on || '').replace('{total}', String(data.total))))
  }
  if (sec && data.profile_url)
    $all<HTMLAnchorElement>('[data-rv-profile]', sec).forEach((a) => {
      a.href = data.profile_url!
      a.target = '_blank'
      a.rel = 'noopener'
      a.removeAttribute('data-placeholder')
    })
  if (sec && data.write_review_url)
    $all<HTMLAnchorElement>('[data-rv-write]', sec).forEach((a) => {
      a.href = data.write_review_url!
      a.target = '_blank'
      a.rel = 'noopener'
      a.removeAttribute('data-placeholder')
    })
  const grid = slot.querySelector<HTMLElement>('[data-rv-grid]')
  const more = slot.querySelector<HTMLButtonElement>('[data-rv-more]')
  if (!grid) return
  grid.innerHTML = ''
  const list = (data.reviews || []).slice()
  const isHome = slot.getAttribute('data-rv-context') === 'home'
  const page = isHome ? list.length : 12
  let shown = 0
  const card = (r: Review) => {
    const a = el('article', 'rv-card')
    a.tabIndex = -1
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    g.setAttribute('class', 'g-ic rv-g')
    g.setAttribute('viewBox', '0 0 256 262')
    g.setAttribute('aria-hidden', 'true')
    g.setAttribute('focusable', 'false')
    const u = document.createElementNS('http://www.w3.org/2000/svg', 'use')
    u.setAttribute('href', '#kh-g')
    g.appendChild(u)
    a.appendChild(g)
    const head = el('div', 'rv-head')
    head.appendChild(el('span', 'rv-mono', (String(r.author || '').trim().charAt(0) || '').toUpperCase()))
    const who = el('div')
    let au: HTMLElement
    if (r.author_url) {
      const link = el('a', 'rv-author', r.author ?? '')
      link.href = r.author_url
      link.target = '_blank'
      link.rel = 'noopener'
      au = link
    } else au = el('span', 'rv-author', r.author ?? '')
    who.appendChild(au)
    who.appendChild(el('span', 'rv-time', r.relative_time || S.google_label || ''))
    head.appendChild(who)
    a.appendChild(head)
    if (r.rating != null) a.appendChild(starRow(r.rating, (S.rated || '').replace('{value}', String(r.rating))))
    if (r.text) a.appendChild(el('p', 'rv-text', r.text))
    if (r.reply) {
      const d = el('details')
      d.appendChild(el('summary', '', S.reply_summary || ''))
      d.appendChild(el('p', 'rv-reply', r.reply))
      a.appendChild(d)
    }
    return a
  }
  const reveal = () => {
    let first: HTMLElement | null = null
    list.slice(shown, shown + page).forEach((r) => {
      const c = card(r)
      grid.appendChild(c)
      if (!first) first = c
      const t = c.querySelector<HTMLElement>('.rv-text')
      if (t && t.scrollHeight > t.clientHeight + 2 && (r.author_url || data.profile_url)) {
        const l = el('a', 'tlink')
        l.href = data.profile_url || r.author_url || ''
        l.target = '_blank'
        l.rel = 'noopener'
        l.appendChild(el('span', '', S.read_full || ''))
        t.parentNode?.insertBefore(l, t.nextSibling)
      }
    })
    shown += page
    if (more) more.hidden = isHome || shown >= list.length
    return first as HTMLElement | null
  }
  reveal()
  if (more)
    more.onclick = () => {
      reveal()?.focus()
    }
  if (isHome) carousel(slot, grid, S, bag)
}
/* Home carousel: native scroll snap (swipe), real buttons, dots, arrow keys, a polite status line. No autoplay. */
function carousel(slot: HTMLElement, track: HTMLElement, S: Strings, bag: Cleanup[]) {
  const ctrl = slot.querySelector<HTMLElement>('[data-rv-ctrl]')
  if (!ctrl) return
  const prev = ctrl.querySelector<HTMLButtonElement>('[data-rv-prev]')!
  const next = ctrl.querySelector<HTMLButtonElement>('[data-rv-next]')!
  const dots = ctrl.querySelector<HTMLElement>('[data-rv-dots]')!
  const status = ctrl.querySelector<HTMLElement>('[data-rv-status]')!
  const cards = Array.from(track.children) as HTMLElement[]
  const total = cards.length
  if (!total) return
  const reduce = prefersReducedMotion()
  track.classList.add('rv-track')
  track.setAttribute('role', 'region')
  track.setAttribute('aria-roledescription', 'carousel')
  track.setAttribute('aria-label', S.label || '')
  track.tabIndex = 0
  ctrl.hidden = false
  const fmt = (t: string | undefined, a: number, b: number) =>
    String(t || '')
      .replace('{from}', String(a))
      .replace('{to}', String(b))
      .replace('{total}', String(total))
  const step = () => (cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft : track.clientWidth)
  const visible = () => Math.max(1, Math.round((track.clientWidth + 24) / step()))
  const first = () => Math.min(total - 1, Math.max(0, Math.round(track.scrollLeft / step())))
  const maxStart = () => Math.max(0, total - visible())
  const go = (i: number) => {
    i = Math.max(0, Math.min(maxStart(), i))
    track.scrollTo({ left: cards[i].offsetLeft - cards[0].offsetLeft, behavior: reduce ? 'auto' : 'smooth' })
  }
  let built = -1
  let lastMsg = ''
  const buildDots = () => {
    const v = visible()
    const pages = Math.ceil(total / v)
    if (pages === built) return
    built = pages
    dots.innerHTML = ''
    for (let p = 0; p < pages; p++) {
      const from = Math.min(p * v, maxStart()) + 1
      const to = Math.min(from + v - 1, total)
      const b = el('button', 'rv-dot')
      b.type = 'button'
      b.setAttribute('aria-label', v === 1 ? fmt(S.dot_one, from, to) : fmt(S.dot, from, to))
      b.onclick = () => go(from - 1)
      dots.appendChild(b)
    }
  }
  const update = () => {
    buildDots()
    const v = visible()
    let f = first()
    const atEnd = f >= maxStart()
    if (atEnd) f = maxStart()
    const to = Math.min(f + v, total)
    prev.disabled = f <= 0
    next.disabled = atEnd
    const active = atEnd ? built - 1 : Math.floor(f / v)
    Array.from(dots.children).forEach((d, i) => (i === active ? d.setAttribute('aria-current', 'true') : d.removeAttribute('aria-current')))
    const msg = v === 1 ? fmt(S.status_one, f + 1, to) : fmt(S.status, f + 1, to)
    if (msg !== lastMsg) {
      status.textContent = msg
      lastMsg = msg
    }
  }
  prev.onclick = () => go(first() - visible())
  next.onclick = () => go(first() + visible())
  listen(
    track,
    'keydown',
    (ev) => {
      const e = ev as KeyboardEvent
      if (e.target !== track) return
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        go(first() + 1)
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        go(first() - 1)
      } else if (e.key === 'Home') {
        e.preventDefault()
        go(0)
      } else if (e.key === 'End') {
        e.preventDefault()
        go(total)
      }
    },
    undefined,
    bag,
  )
  let t: number | undefined
  listen(track, 'scroll', () => {
    window.clearTimeout(t)
    t = window.setTimeout(update, 80)
  }, { passive: true }, bag)
  listen(window, 'resize', () => {
    window.clearTimeout(t)
    t = window.setTimeout(update, 120)
  }, undefined, bag)
  bag.push(() => window.clearTimeout(t))
  update()
}
function initReviews(bag: Cleanup[]) {
  let alive = true
  bag.push(() => (alive = false))
  $all('.kh-review-slot').forEach((slot) => {
    if (widgetPresent(slot)) {
      hidePlaceholders(slot)
      return
    }
    const src = slot.getAttribute('data-reviews-src')
    if (src) {
      fetch(src)
        .then((r) => {
          if (!r.ok) throw new Error('status ' + r.status)
          return r.json() as Promise<ReviewData>
        })
        .then((data) => alive && renderReviews(slot, data, bag))
        .catch(() => undefined)
    }
    if ('MutationObserver' in window) {
      const obs = new MutationObserver(() => widgetPresent(slot) && hidePlaceholders(slot))
      obs.observe(slot, { childList: true })
      bag.push(() => obs.disconnect())
    }
  })
}

/* ---------- Home hero slideshow: rotates after load, pauses while hidden, never runs for reduced motion ---------- */
function initHeroSlides(bag: Cleanup[]) {
  const box = document.querySelector<HTMLElement>('[data-hero-slides]')
  if (!box) return
  const slides = $all('.hero-slide', box)
  const btn = document.querySelector<HTMLButtonElement>('[data-hero-pause]')
  if (slides.length < 2 || prefersReducedMotion()) return
  let i = Math.max(0, slides.findIndex((s) => s.classList.contains('is-on')))
  let paused = false
  const every = parseInt(box.getAttribute('data-interval') || '', 10) || 7000
  const ready = (s: HTMLElement) => {
    $all<HTMLImageElement>('img[data-src]', s).forEach((im) => {
      const ss = im.getAttribute('data-srcset')
      if (ss) im.setAttribute('srcset', ss)
      im.setAttribute('src', im.getAttribute('data-src')!)
      im.removeAttribute('data-src')
      im.removeAttribute('data-srcset')
    })
    return s.querySelector<HTMLImageElement>('.hero-photo img')
  }
  const show = (n: number) => {
    const nextSlide = slides[n]
    const img = ready(nextSlide)
    const go = () => {
      slides[i].classList.remove('is-on')
      slides[i].setAttribute('aria-hidden', 'true')
      nextSlide.classList.add('is-on')
      nextSlide.removeAttribute('aria-hidden')
      i = n
      ready(slides[(n + 1) % slides.length])
    }
    if (img && !img.complete) img.addEventListener('load', go, { once: true })
    else go()
  }
  const tick = () => {
    if (!paused && !document.hidden) show((i + 1) % slides.length)
  }
  let timer: number | undefined
  const start = () => {
    ready(slides[(i + 1) % slides.length])
    window.clearInterval(timer)
    timer = window.setInterval(tick, every)
  }
  if (document.readyState === 'complete') start()
  else listen(window, 'load', start, { once: true }, bag)
  bag.push(() => window.clearInterval(timer))
  if (btn) {
    btn.hidden = false
    const onClick = () => {
      paused = !paused
      btn.setAttribute('aria-pressed', paused ? 'true' : 'false')
      btn.setAttribute('aria-label', btn.getAttribute(paused ? 'data-label-play' : 'data-label-pause') || '')
    }
    listen(btn, 'click', onClick, undefined, bag)
  }
}

export function enhancePage(): Cleanup {
  const bag: Cleanup[] = []
  initTips(bag)
  initSecondBar(bag)
  initReveals(bag)
  initStrips(bag)
  initReviews(bag)
  initHeroSlides(bag)
  return () => bag.splice(0).reverse().forEach((fn) => fn())
}
