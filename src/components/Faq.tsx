import { useState, type ReactNode } from 'react'

export type FaqItem = { qid: string; aid: string; open: boolean; q: ReactNode; a: ReactNode; level?: 'h2' | 'h3' | 'h4' }

/* Accordion of questions. Each question is a real button that controls its answer region. */
export function Faq({ className, items }: { className: string; items: FaqItem[] }) {
  const [open, setOpen] = useState<Record<string, boolean>>(() => Object.fromEntries(items.map((i) => [i.qid, i.open])))
  return (
    <ul className={className} data-faq>
      {items.map((it) => {
        const isOpen = !!open[it.qid]
        const H = it.level ?? 'h3'
        return (
          <li key={it.qid}>
            <H>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={it.aid}
                id={it.qid}
                onClick={() => setOpen((s) => ({ ...s, [it.qid]: !isOpen }))}
              >
                {it.q}
                <span className="pm" aria-hidden="true" />
              </button>
            </H>
            <div className="ans" id={it.aid} role="region" aria-labelledby={it.qid} hidden={!isOpen}>
              {it.a}
            </div>
          </li>
        )
      })}
    </ul>
  )
}
