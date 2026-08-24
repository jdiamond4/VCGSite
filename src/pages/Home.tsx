import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { Stats } from '../components/Stats'
import { Footer } from '../components/Footer'
import './Home.css'

const applicationUrl = 'https://forms.gle/LJv3Xh1SJyj2xp3e8'
const interestFormUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSdiQm9-l910IgsWcjxRuPtHXqsK5IJ7UTEEHbVHxUqlqcynBw/viewform?usp=dialog'

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
              <h2 id="invite-heading">Join the next cohort</h2>
              <p>Applications open each semeseter, no prior consulting experience required.</p>
              <div className="invite__actions">
                <a className="invite__btn" href={applicationUrl} target="_blank" rel="noreferrer">
                  Apply Now
                </a>
                <Link className="invite__btn" to="/apply">
                  Application Details
                </Link>
                <a className="invite__btn" href={interestFormUrl} target="_blank" rel="noreferrer">
                  Interest Form
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
