import { useEffect, useRef } from 'react'
import { placements } from '../data/placements'
import './LogoTicker.css'

export function LogoTicker() {
  const tickerRef = useRef<HTMLElement>(null)
  const loop = [...placements, ...placements]

  useEffect(() => {
    const ticker = tickerRef.current
    if (!ticker) return

    const observer = new IntersectionObserver(([entry]) => {
      ticker.classList.toggle('ticker--paused', !entry.isIntersecting)
    })
    observer.observe(ticker)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="ticker" ref={tickerRef} aria-label="Where our members go">
      <div className="ticker__band">
        <div className="ticker__label">
          <span>Member Placement</span>
        </div>
        <div className="ticker__viewport">
          <div className="ticker__track" aria-hidden="true">
            {loop.map((company, i) => (
              <div className="ticker__item" key={`${company.name}-${i}`}>
                <img src={company.src} alt="" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <ul className="visually-hidden">
        {placements.map((company) => (
          <li key={company.name}>{company.name}</li>
        ))}
      </ul>
    </section>
  )
}
