import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const redirect = sessionStorage.getItem('vcg-redirect')
if (redirect) {
  sessionStorage.removeItem('vcg-redirect')
  if (redirect !== location.pathname + location.search + location.hash) {
    history.replaceState(null, '', redirect)
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
