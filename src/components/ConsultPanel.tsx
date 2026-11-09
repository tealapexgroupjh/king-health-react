import { Link, useRouterState } from '@tanstack/react-router'
import { useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { CATEGORIES, COVERAGE, FROM, KH_CONFIG, PHONE_HREF, type FromKey } from '~/lib/config'
import { useHydrated } from '~/lib/useHydrated'

type Preset = { category: string; coverage: string }
type Props = {
  kicker: ReactNode
  title: ReactNode
  lede: ReactNode
  category: string
  coverage: string
  titleId?: string
  /* Ancillary only: the category follows ?from=senior|individual. */
  followFrom?: boolean
}
type FieldName = 'first_name' | 'last_name' | 'phone' | 'email' | 'category' | 'coverage' | 'consent_contact'

const GHL_EMBED_SCRIPT = 'https://link.msgsndr.com/js/form_embed.js'
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const

function norm(s: unknown) {
  return String(s ?? '')
    .toLowerCase()
    .replace(/[^a-z]+/g, ' ')
    .trim()
}
function matchOption(list: string[], value: unknown) {
  const v = norm(value)
  return v ? (list.find((o) => norm(o) === v) ?? '') : ''
}

/* Effective preset: URL ?category=&coverage= first, then the Ancillary arrival, then the page's own preset. */
export function resolvePreset(base: Preset, params: URLSearchParams | null, fromKey: FromKey | null): Preset {
  let cat = base.category
  let cov = base.coverage
  if (fromKey) cat = FROM[fromKey]
  if (params) {
    const pc = matchOption(CATEGORIES, params.get('category'))
    if (pc) {
      cat = pc
      cov = ''
    }
  }
  const list = COVERAGE[cat] ?? []
  if (params) {
    const pv = matchOption(list, params.get('coverage'))
    if (pv) cov = pv
  }
  if (cov && !list.includes(cov)) cov = ''
  if (cat && COVERAGE[cat] && !cov) cov = 'All or unsure'
  return { category: cat, coverage: cat === 'General Inquiry' ? '' : cov }
}

function ensureGhlScript() {
  if (document.querySelector(`script[src="${GHL_EMBED_SCRIPT}"]`)) return
  const s = document.createElement('script')
  s.src = GHL_EMBED_SCRIPT
  s.async = true
  document.body.appendChild(s)
}

/* The universal consult form. Posts to the GoHighLevel inbound webhook, or shows a GoHighLevel form embed when one is configured. */
export function ConsultPanel({ kicker, title, lede, category, coverage, titleId = 'consult-title', followFrom }: Props) {
  const search = useRouterState({ select: (s) => s.location.search as Record<string, unknown> })
  const hydrated = useHydrated()
  const fromKey: FromKey | null = followFrom ? (hydrated && search.from === 'individual' ? 'individual' : 'senior') : null
  const basePreset = useMemo(() => resolvePreset({ category, coverage }, null, fromKey), [category, coverage, fromKey])

  const [preset, setPreset] = useState<Preset>(basePreset)
  const [cat, setCat] = useState(basePreset.category)
  const [cov, setCov] = useState(basePreset.coverage)
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({})
  const [status, setStatus] = useState<string>('')
  const [sending, setSending] = useState(false)
  const [done, setDone] = useState<null | { demo: boolean }>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const successTitle = useRef<HTMLHeadingElement>(null)
  const embedSrc = KH_CONFIG.ghlFormEmbedSrc

  const applyPreset = () => {
    const p = resolvePreset({ category, coverage }, new URLSearchParams(window.location.search), fromKey)
    setPreset(p)
    setCat(p.category)
    setCov(p.coverage)
  }
  useEffect(applyPreset, [category, coverage, fromKey]) // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (embedSrc) ensureGhlScript()
  }, [embedSrc])
  useEffect(() => {
    if (done) successTitle.current?.focus()
  }, [done])

  const covList = COVERAGE[cat]
  const iframeSrc = useMemo(() => {
    if (!embedSrc) return ''
    try {
      const u = new URL(embedSrc)
      if (preset.category) u.searchParams.set('category', preset.category)
      if (preset.coverage) u.searchParams.set('coverage', preset.coverage)
      return u.toString()
    } catch {
      return embedSrc
    }
  }, [embedSrc, preset])

  function validate(fd: FormData) {
    const v = (n: string) => String(fd.get(n) ?? '').trim()
    const e: Partial<Record<FieldName, string>> = {}
    if (!v('first_name')) e.first_name = 'Please enter your first name.'
    if (!v('last_name')) e.last_name = 'Please enter your last name.'
    if (v('phone').replace(/\D/g, '').length < 10) e.phone = 'Please enter a phone number with area code.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v('email'))) e.email = 'Please enter a valid email address.'
    if (!cat) e.category = 'Please choose how we can help.'
    if (covList && !cov) e.coverage = 'Please choose the coverage you are interested in.'
    if (!fd.get('consent_contact')) e.consent_contact = 'Please confirm that we may contact you about your request.'
    return e
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault()
    const form = ev.currentTarget
    const fd = new FormData(form)
    setStatus('')
    const e = validate(fd)
    setErrors(e)
    if (Object.keys(e).length) {
      setStatus('Please review the highlighted fields.')
      requestAnimationFrame(() => form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus())
      return
    }
    const v = (n: string) => String(fd.get(n) ?? '').trim()
    if (v('company_website')) {
      setDone({ demo: false }) /* honeypot */
      return
    }
    const params = new URLSearchParams(window.location.search)
    const body: Record<string, unknown> = {
      first_name: v('first_name'),
      last_name: v('last_name'),
      phone: v('phone'),
      email: v('email'),
      category: cat,
      coverage: covList ? cov : '',
      message: v('message'),
      consent_contact: true,
      consent_sms: fd.get('consent_sms') === 'on',
      source: 'king-health-site',
      page: window.location.pathname.split('/').pop() || 'index.html',
      submitted_at: new Date().toISOString(),
    }
    UTM_KEYS.forEach((k) => (body[k] = params.get(k) ?? ''))
    if (!KH_CONFIG.ghlWebhookUrl) {
      setDone({ demo: true })
      return
    }
    setSending(true)
    try {
      const r = await fetch(KH_CONFIG.ghlWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (!r.ok) throw new Error('status ' + r.status)
      setDone({ demo: false })
    } catch {
      setStatus(`We could not send your request just now. Please try again in a moment, or call us directly at ${KH_CONFIG.phone}.`)
    } finally {
      setSending(false)
    }
  }

  function reset() {
    formRef.current?.reset()
    setErrors({})
    setStatus('')
    applyPreset()
    setDone(null)
    requestAnimationFrame(() => formRef.current?.querySelector<HTMLInputElement>('[name="first_name"]')?.focus())
  }

  const err = (n: FieldName) => ({
    'aria-invalid': errors[n] ? (true as const) : undefined,
    'aria-describedby': `err-${n}`,
  })
  const clearErr = (n: FieldName) => errors[n] && setErrors((s) => ({ ...s, [n]: undefined }))

  return (
    <div className="panel">
      <div data-form-wrap hidden={!!done}>
        <p className="kicker">{kicker}</p>
        <h2 id={titleId}>{title}</h2>
        <p className="panel-lede">{lede}</p>
        <div
          className={'kh-form-slot' + (embedSrc ? ' has-ghl' : '')}
          data-ghl-embed=""
          data-kh-category={preset.category}
          data-kh-coverage={preset.coverage}
        >
          {embedSrc ? (
            <iframe
              src={iframeSrc}
              title="Request a consultation"
              style={{ width: '100%', minHeight: 720, border: 'none', borderRadius: 3 }}
              data-kh-bridged={iframeSrc}
            />
          ) : null}
          <form
            ref={formRef}
            className="form kh-native-form"
            data-kh-form
            data-preset-category={category}
            data-preset-coverage={coverage}
            noValidate
            hidden={!!embedSrc}
            onSubmit={onSubmit}
          >
            <div className="field">
              <label htmlFor="first_name">
                First name <span className="req">(required)</span>
              </label>
              <input id="first_name" name="first_name" type="text" autoComplete="given-name" required {...err('first_name')} onInput={() => clearErr('first_name')} />
              <span className="err" id="err-first_name">{errors.first_name}</span>
            </div>
            <div className="field">
              <label htmlFor="last_name">
                Last name <span className="req">(required)</span>
              </label>
              <input id="last_name" name="last_name" type="text" autoComplete="family-name" required {...err('last_name')} onInput={() => clearErr('last_name')} />
              <span className="err" id="err-last_name">{errors.last_name}</span>
            </div>
            <div className="field">
              <label htmlFor="phone">
                Phone <span className="req">(required)</span>
              </label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" required {...err('phone')} onInput={() => clearErr('phone')} />
              <span className="err" id="err-phone">{errors.phone}</span>
            </div>
            <div className="field">
              <label htmlFor="email">
                Email <span className="req">(required)</span>
              </label>
              <input id="email" name="email" type="email" autoComplete="email" inputMode="email" required {...err('email')} onInput={() => clearErr('email')} />
              <span className="err" id="err-email">{errors.email}</span>
            </div>
            <div className="field" data-field="category">
              <label htmlFor="category">
                How can we help? <span className="req">(required)</span>
              </label>
              <select
                id="category"
                name="category"
                required
                {...err('category')}
                value={cat}
                onChange={(e) => {
                  const next = e.target.value
                  setCat(next)
                  setCov(next === category ? 'All or unsure' : '')
                  setErrors((s) => ({ ...s, category: undefined, coverage: undefined }))
                }}
              >
                <option value="">Select a category</option>
                {CATEGORIES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
              <span className="err" id="err-category">{errors.category}</span>
            </div>
            <div className="field" data-field="coverage" hidden={!covList}>
              <label htmlFor="coverage">
                Coverage of interest <span className="req">(required)</span>
              </label>
              <select
                id="coverage"
                name="coverage"
                {...err('coverage')}
                required={!!covList}
                disabled={!covList}
                value={covList ? cov : ''}
                onChange={(e) => {
                  setCov(e.target.value)
                  clearErr('coverage')
                }}
              >
                <option value="">Select coverage</option>
                {(covList ?? []).map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
              <span className="err" id="err-coverage">{errors.coverage}</span>
            </div>
            <div className="field full">
              <label htmlFor="message">
                Anything you would like us to know <span className="req">(optional)</span>
              </label>
              <textarea id="message" name="message" rows={4} />
            </div>
            <div className="hp" aria-hidden="true">
              <label htmlFor="company_website">Company website</label>
              <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <div className="field full">
              <div className="check">
                <input id="consent_contact" name="consent_contact" type="checkbox" required {...err('consent_contact')} onChange={() => clearErr('consent_contact')} />
                <label htmlFor="consent_contact">
                  I agree that King Health may contact me about my request by phone, email or text message. <span className="req">(required)</span>
                </label>
              </div>
              <span className="err" id="err-consent_contact">{errors.consent_contact}</span>
            </div>
            <div className="field full">
              <div className="check">
                <input id="consent_sms" name="consent_sms" type="checkbox" />
                <label htmlFor="consent_sms">
                  By checking this box, I agree to receive text messages from King Health about my inquiry, including follow up and appointment
                  reminders, at the phone number provided. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP
                  for help. Consent to receive text messages is not a condition of purchase. See our <Link to="/privacy">privacy policy</Link>.{' '}
                  <span className="req">(optional)</span>
                </label>
              </div>
            </div>
            <div className="field full">
              <button className="btn btn-accent btn-submit" type="submit" data-submit disabled={sending}>
                {sending ? 'Sending' : 'Send my request'}
              </button>
            </div>
            <div className="field full form-status" data-status role="status" aria-live="polite">
              {status ? <p className="bad">{status}</p> : null}
            </div>
          </form>
        </div>
      </div>
      <div className="success-panel" data-success hidden={!done}>
        <p className="kicker">Request received</p>
        <h2 tabIndex={-1} data-success-title ref={successTitle}>
          Thank you. Your request has reached us.
        </h2>
        <p className="panel-lede">
          We will reach out shortly to arrange a conversation at a time that suits you. If you would like to speak sooner, you are welcome to call
          us at{' '}
          <a href={PHONE_HREF} data-config="phone-link">
            <span data-config="phone">{KH_CONFIG.phone}</span>
          </a>
          .
        </p>
        <p className="fine demo-note" data-demo-note hidden={!done?.demo}>
          This site is in demonstration mode, so your request was not transmitted.
        </p>
        <button className="btn btn-line" type="button" data-reset onClick={reset}>
          Send another request
        </button>
      </div>
    </div>
  )
}
