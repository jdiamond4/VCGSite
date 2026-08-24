import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import './NotFound.css'

export function NotFound() {
  return (
    <>
      <Navbar />
      <main className="not-found">
        <section className="not-found__content" aria-labelledby="not-found-heading">
          <p className="eyebrow">404 error</p>
          <h1 id="not-found-heading">Page not found</h1>
          <p>The page you’re looking for doesn’t exist or may have moved.</p>
          <Link className="not-found__link" to="/">
            Return home
            <span aria-hidden="true">→</span>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
