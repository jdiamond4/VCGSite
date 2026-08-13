import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { AlumniCard } from '../components/AlumniCard'
import { alumniByYear } from '../data/alumni'
import './Alumni.css'

export function Alumni() {
  return (
    <>
      <Navbar />
      <main className="alumni">
        <section className="alumni__hero" aria-labelledby="alumni-heading">
          <div className="alumni__hero-inner">
            <p className="eyebrow">Our community</p>
            <h1 id="alumni-heading">Alumni</h1>
            <p className="alumni__intro">
              VCG alumni lead across industries. View some notable recent alumni below.
            </p>
          </div>
        </section>

        <nav className="alumni__year-nav" aria-label="Alumni classes">
          <div>
            <span>Explore by class</span>
            {alumniByYear.map(({ year }) => (
              <a key={year} href={`#class-${year}`}>
                {year}
              </a>
            ))}
          </div>
        </nav>

        <div className="alumni__classes">
          {alumniByYear.map(({ year, members }) => (
            <section
              className="alumni__class"
              id={`class-${year}`}
              aria-labelledby={`class-${year}-heading`}
              key={year}
            >
              <div className="alumni__class-heading">
                <div>
                  <p className="eyebrow">Notable recent alumni</p>
                  <h2 id={`class-${year}-heading`}>Class of {year}</h2>
                </div>
              </div>

              <div className="alumni__grid">
                {members.map((member) => (
                  <AlumniCard key={member.id} member={member} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
