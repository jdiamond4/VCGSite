import { placements } from '../data/placements'
import './LogoTicker.css'

export function LogoTicker() {
  const loop = [...placements, ...placements]

  return (
    <section className="ticker" aria-label="Where our members go">
      <div className="ticker__band">
        <div className="ticker__label">
          <span>Member Placement</span>
        </div>
        <div className="ticker__viewport">
          <div className="ticker__track" aria-hidden="true">
            {loop.map((company, i) => (
              <div className="ticker__item" key={`${company.name}-${i}`}>
                <img src={company.src} alt="" loading="lazy" />
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
