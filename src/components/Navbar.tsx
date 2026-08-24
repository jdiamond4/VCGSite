import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [teamOpen, setTeamOpen] = useState(false)
  const teamMenuRef = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  useEffect(() => {
    setTeamOpen(false)
  }, [pathname])

  useEffect(() => {
    const closeMenu = (event: PointerEvent) => {
      if (!teamMenuRef.current?.contains(event.target as Node)) setTeamOpen(false)
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setTeamOpen(false)
    }

    document.addEventListener('pointerdown', closeMenu)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeMenu)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [])

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
          <div className="nav__dropdown" ref={teamMenuRef}>
            <button
              className="nav__dropdown-trigger"
              type="button"
              aria-expanded={teamOpen}
              aria-haspopup="true"
              onClick={() => setTeamOpen((open) => !open)}
            >
              Team
              <svg viewBox="0 0 12 8" width="10" height="7" aria-hidden="true">
                <path d="m1 1.5 5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            <div className={`nav__dropdown-menu ${teamOpen ? 'nav__dropdown-menu--open' : ''}`}>
              <Link to="/exec">Executive Board</Link>
              <Link to="/project-teams">Project Teams</Link>
              <Link to="/alumni">Alumni</Link>
            </div>
          </div>
          <Link to="/clients">Clients</Link>
          <Link className="nav__cta" to="/apply">
            Application Details
          </Link>
        </nav>
      </div>
    </header>
  )
}
