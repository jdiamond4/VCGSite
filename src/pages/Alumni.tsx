import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import './TeamPages.css'

export function Alumni() {
  return (
    <>
      <Navbar />
      <main className="team-page team-page--empty">
        <section className="team-page__hero" aria-labelledby="alumni-heading">
          <div className="team-page__hero-inner">
            <p className="eyebrow">Our community</p>
            <h1 id="alumni-heading">Alumni</h1>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
