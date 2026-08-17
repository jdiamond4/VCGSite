import { Link } from 'react-router-dom'
import { LogoTicker } from './LogoTicker'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-heading">
      <div className="hero__stage">
        <div className="hero__media" aria-hidden="true">
          <img src="/brand/hero.jpg" alt="" className="hero__image" />
          <div className="hero__veil" />
          <div className="hero__grain" />
        </div>

        <div className="hero__content">
          <p className="hero__brand reveal">Virginia Consulting Group</p>
          <h1 id="hero-heading" className="hero__title reveal reveal--delay-1">
            Unique analysts.
            <br />
            Proven success.
          </h1>
          <p className="hero__lede reveal reveal--delay-2">
            Great ideas come from everyone, everywhere. You don't have to be a business student to
            join VCG.
          </p>
          <div className="hero__actions reveal reveal--delay-3">
            <Link className="btn btn--primary" to="/apply">
              Apply now
            </Link>
            <Link className="btn btn--ghost" to="/exec">
              Who we are
            </Link>
            <Link className="btn btn--ghost" to="/clients">
              What we do
            </Link>
          </div>
        </div>
      </div>

      <LogoTicker />
    </section>
  )
}
