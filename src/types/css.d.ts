import 'react'

/* Allow CSS custom properties (for example --lh) in inline style objects. */
declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined
  }
}
