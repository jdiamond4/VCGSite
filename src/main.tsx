import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { normalizeLegacyPath } from './legacyPaths'

const stored = sessionStorage.getItem('vcg-redirect')
if (stored) {
  sessionStorage.removeItem('vcg-redirect')
}

const incoming = stored ?? location.pathname + location.search + location.hash
const normalized = normalizeLegacyPath(incoming)
if (normalized !== location.pathname + location.search + location.hash) {
  history.replaceState(null, '', normalized)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
