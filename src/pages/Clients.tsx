import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { ProjectTimeline } from '../components/ProjectTimeline'
import './Clients.css'

const partners: { name: string; website: string; logo?: string }[] = [
  {
    name: 'Dominion Energy',
    website: 'https://www.dominionenergy.com/',
    logo: '/logos/dominion-energy.png',
  },
  { name: 'Cvent', website: 'https://www.cvent.com/', logo: '/logos/cvent.png' },
  {
    name: 'Ellucian',
    website: 'https://www.ellucian.com/',
    logo: '/logos/ellucian.png',
  },
  { name: 'Rhoback', website: 'https://rhoback.com/', logo: '/logos/rhoback.png' },
  {
    name: 'Apex Clean Energy',
    website: 'https://www.apexcleanenergy.com/',
    logo: '/logos/apex-clean-energy.png',
  },
  {
    name: 'Blue Ridge Bank',
    website: 'https://www.mybrb.bank/',
    logo: '/logos/blue-ridge-bank.png',
  },
  { name: 'IESC', website: 'https://iesc.org/', logo: '/logos/iesc.png' },
  { name: 'Bluetext', website: 'https://bluetext.com/', logo: '/logos/bluetext.png' },
  {
    name: 'Neurobiologix',
    website: 'https://neurobiologix.com/',
    logo: '/logos/neurobiologix.png',
  },
  { name: 'PalCare', website: 'https://palcare.com/', logo: '/logos/palcare.png' },
  {
    name: 'ClearForce',
    website: 'https://www.clearforce.com/',
    logo: '/logos/clearforce.png',
  },
  { name: 'Rho Impact', website: 'https://rhoimpact.com/', logo: '/logos/rho-impact.png' },
  { name: 'Ourobio', website: 'https://www.ourobio.com/', logo: '/logos/ourobio.png' },
  {
    name: 'Executive Presence',
    website: 'https://www.executivepresence.com/',
    logo: '/logos/executive-presence.png',
  },
]

export function Clients() {
  return (
    <>
      <Navbar />
      <main className="clients">
        <section className="clients__hero" aria-labelledby="clients-heading">
          <div className="clients__hero-inner">
            <h1 id="clients-heading">Client Services</h1>
          </div>
        </section>

        <ProjectTimeline />

        <section className="clients__quote" aria-labelledby="quote-heading">
          <div className="clients__section-inner clients__quote-inner">
            <h2 id="quote-heading">What Our Clients Say</h2>
            <blockquote>
              <p>
                “They screen for dedicated students who enjoy the challenge of real-world client
                work. By letting them pick an interesting project (HiiBo in our case), they had
                genuine motivation to deliver.
              </p>
              <p>
                If you’re a startup founder with a thousand bucks to spare, a more established
                entrepreneur who needs fresh perspectives, or even a larger corporation that could
                use some Gen Z talent, I’d strongly recommend tapping into Virginia Consulting
                Group.”
              </p>
              <footer>
                <cite>Sam Hilsman</cite>
                <span>CEO, HiiBo</span>
                <a
                  href="https://www.linkedin.com/pulse/working-virginia-consulting-group-sam-hilsman-yptle/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View the full review on LinkedIn →
                </a>
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

            <div className="clients__partner-marquee">
              <ul className="clients__partner-list">
                {[...partners, ...partners].map((partner, index) => (
                  <li key={`${partner.name}-${index}`} aria-hidden={index >= partners.length}>
                    <a
                      className={`clients__partner-logo${partner.logo ? ' has-logo' : ''}`}
                      href={partner.website}
                      target="_blank"
                      rel="noreferrer"
                      tabIndex={index >= partners.length ? -1 : undefined}
                      aria-label={`Visit ${partner.name} website`}
                    >
                      {partner.logo ? (
                        <img src={partner.logo} alt={`${partner.name} logo`} />
                      ) : (
                        <span>Logo TBD</span>
                      )}
                    </a>
                    <div className="clients__partner-details">
                      <h3>{partner.name}</h3>
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noreferrer"
                        tabIndex={index >= partners.length ? -1 : undefined}
                      >
                        Visit website
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
