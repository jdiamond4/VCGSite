import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { ProjectTimeline } from '../components/ProjectTimeline'
import './Clients.css'

const services = [
  {
    title: 'Entry & Expansion',
    description: 'Help organizations evaluate new markets and scale with intention.',
    items: ['Market entry', 'Growth strategy', 'Pricing analysis'],
  },
  {
    title: 'Data & Research',
    description: 'Turn primary research and messy data into decisions clients can use.',
    items: ['Surveys', 'Focus groups', 'Data visualization'],
  },
  {
    title: 'Sales & Marketing',
    description: 'Clarify positioning, acquisition, and go-to-market priorities.',
    items: ['Publicity & branding', 'Sales strategy', 'Customer acquisition'],
  },
  {
    title: 'Development',
    description: 'Pressure-test products, competitors, and strategic pivots.',
    items: ['New features', 'Competitor analysis', 'Product pivots'],
  },
]

const partners = [
  'Dominion Energy',
  'Blue Ridge Bank',
  'Culinary Institute of America',
  'Roots Natural Kitchen',
  'Mito Material Solutions',
  'Rho Impact',
  'PARCO',
  'Devorto',
  'Movius Consulting',
  'Ellucian',
  'Endowment Project',
  'M&A Leadership Council',
]

export function Clients() {
  return (
    <>
      <Navbar />
      <main className="clients">
        <section className="clients__hero" aria-labelledby="clients-heading">
          <div className="clients__hero-inner">
            <p className="eyebrow">Client services</p>
            <h1 id="clients-heading">Semester-long teams. Real recommendations.</h1>
            <p>
              A dedicated VCG consulting team works with you for a semester to clarify the problem,
              pressure-test options, and deliver actionable recommendations.
            </p>
          </div>
        </section>

        <section className="clients__services" aria-labelledby="services-heading">
          <div className="clients__section-inner">
            <div className="clients__section-head">
              <h2 id="services-heading">Our services</h2>
              <p>Engagements span strategy, research, go-to-market, and product development.</p>
            </div>

            <ul className="clients__service-grid">
              {services.map((service, index) => (
                <li key={service.title}>
                  <span className="clients__index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ProjectTimeline />

        <section className="clients__quote" aria-labelledby="quote-heading">
          <div className="clients__section-inner clients__quote-inner">
            <h2 id="quote-heading" className="visually-hidden">
              What clients say
            </h2>
            <blockquote>
              <p>
                “They screen for dedicated students who enjoy the challenge of real-world client
                work. By letting them pick an interesting project, they had genuine motivation to
                deliver. If you’re a startup founder, a more established entrepreneur who needs fresh
                perspectives, or a larger organization that could use Gen Z talent, I’d strongly
                recommend tapping into Virginia Consulting Group.”
              </p>
              <footer>
                <cite>Sam Hilsman</cite>
                <span>CEO, HiiBo</span>
              </footer>
            </blockquote>
          </div>
        </section>

        <section className="clients__partners" aria-labelledby="partners-heading">
          <div className="clients__section-inner">
            <div className="clients__section-head">
              <h2 id="partners-heading">Partners & clients</h2>
              <p>We’ve worked with industry leaders and ambitious organizations across sectors.</p>
            </div>

            <ul className="clients__partner-list">
              {partners.map((partner) => (
                <li key={partner}>{partner}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
