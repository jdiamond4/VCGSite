import { Link } from 'react-router-dom'
import { LogoTicker } from './LogoTicker'
import './Hero.css'

const applicationUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSdf0Xfl3MmzMN2LzY2qcnw75QN3bTuaVvUx3GlwE2UfIsP3hA/viewform?usp=header'
const interestFormUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSfOuMGl2Bxca3v_6F-nPWpYSvxZrcIkzUQneCXOWPbyCrKU-Q/viewform?usp=header'

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-heading">
      <div className="hero__stage">
        <div className="hero__media" aria-hidden="true">
          <img
            src="/brand/hero.jpg"
            alt=""
            className="hero__image"
            width={1024}
            height={682}
            fetchPriority="high"
            decoding="async"
          />
          <div className="hero__veil" />
          <div className="hero__grain" />
        </div>

        <div className="hero__content">
          <h1 id="hero-heading" className="hero__brand reveal">
            Virginia Consulting Group
          </h1>
          <p className="hero__lede reveal reveal--delay-1">
            UVA’s founding consulting club, with over a decade of experience working with
            Fortune 500 and market-leading organizations.
          </p>
          <div className="hero__actions reveal reveal--delay-2">
            <div className="hero__action-row">
              <a className="btn btn--primary" href={applicationUrl} target="_blank" rel="noreferrer">
                Apply Now
              </a>
              <Link className="btn btn--primary" to="/apply">
                Application Details
              </Link>
              <a className="btn btn--primary" href={interestFormUrl} target="_blank" rel="noreferrer">
                Interest Form
              </a>
            </div>
            <div className="hero__action-row">
              <Link className="btn btn--ghost" to="/exec">
                Who we are
              </Link>
              <Link className="btn btn--ghost" to="/clients">
                What we do
              </Link>
            </div>
          </div>
        </div>
      </div>

      <LogoTicker />
    </section>
  )
}
