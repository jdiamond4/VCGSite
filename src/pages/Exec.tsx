import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { ExecCard } from '../components/ExecCard'
import { execBoard } from '../data/execBoard'
import './Exec.css'

export function Exec() {
  return (
    <>
      <Navbar />
      <main className="exec">
        <section className="exec__hero" aria-labelledby="exec-heading">
          <div className="exec__hero-inner">
            <p className="eyebrow">About us</p>
            <h1 id="exec-heading">Executive Board</h1>
            <p>
              Our board includes students of various years and majors. We represent diverse
              backgrounds and skills, collaborating to make VCG the best that it can be.
            </p>
          </div>
        </section>

        <section className="exec__grid-section" aria-label="Executive board members">
          <div className="exec__grid">
            {execBoard.map((member) => (
              <ExecCard key={member.name} member={member} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
