import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  return (
    <header className={`nav ${scrolled || !onHome ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <Link className="nav__brand" to="/" aria-label="Virginia Consulting Group home">
          <img
            className="nav__logo--light"
            src="/brand/vcg-logo-white.png"
            alt=""
            width={28}
            height={28}
          />
          <img
            className="nav__logo--dark"
            src="/brand/vcg-logo-black.png"
            alt=""
            width={28}
            height={28}
          />
          <span>Virginia Consulting Group</span>
        </Link>

        <nav className="nav__links" aria-label="Primary">
          <a href={onHome ? '#glance' : '/#glance'}>About</a>
          <Link to="/exec">Team</Link>
          <Link to="/clients">Clients</Link>
          <a className="nav__cta" href="https://forms.gle/LJv3Xh1SJyj2xp3e8" target="_blank" rel="noreferrer">
            Apply
          </a>
        </nav>
      </div>
    </header>
  )
}
