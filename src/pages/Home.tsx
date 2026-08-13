import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { Stats } from '../components/Stats'
import { Footer } from '../components/Footer'
import './Home.css'

export function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <section className="invite" aria-labelledby="invite-heading">
          <div className="invite__inner">
            <div className="invite__content">
              <h2 id="invite-heading">Join the next cohort.</h2>
              <p>
                Applications open each semester. No consulting experience is necessary. We look for
                intellectual drive and a willingness to try something new.
              </p>
              <a
                className="invite__btn"
                href="https://forms.gle/LJv3Xh1SJyj2xp3e8"
                target="_blank"
                rel="noreferrer"
              >
                Apply now
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
