import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { Home } from './pages/Home'
import { Clients } from './pages/Clients'
import { Exec } from './pages/Exec'
import { ProjectTeams } from './pages/ProjectTeams'
import { Alumni } from './pages/Alumni'
import { Apply } from './pages/Apply'
import { NotFound } from './pages/NotFound'
import { normalizeLegacyPath } from './legacyPaths'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      })
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

/** Catch leftover `*.html` / old Mobirise paths and send them to clean routes. */
function LegacyOrNotFound() {
  const location = useLocation()
  const target = normalizeLegacyPath(location.pathname + location.search + location.hash)
  const current = location.pathname + location.search + location.hash

  if (target !== current) {
    return <Navigate to={target} replace />
  }

  return <NotFound />
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/exec" element={<Exec />} />
        <Route path="/project-teams" element={<ProjectTeams />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="*" element={<LegacyOrNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
