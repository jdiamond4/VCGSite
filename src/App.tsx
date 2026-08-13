import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Home } from './pages/Home'
import { Clients } from './pages/Clients'
import { Exec } from './pages/Exec'
import { ProjectTeams } from './pages/ProjectTeams'
import { Alumni } from './pages/Alumni'

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
      </Routes>
    </BrowserRouter>
  )
}
