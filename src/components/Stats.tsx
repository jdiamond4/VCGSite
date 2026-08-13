import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import './Stats.css'

const stats = [
  {
    value: 'Only paid',
    label: 'Consulting club at UVA',
    detail: "UVA's only paid consulting club.",
  },
  {
    value: 'Founding',
    label: 'Consulting club on Grounds',
    detail: "UVA's founding consulting club.",
  },
  {
    value: '3%',
    label: 'Acceptance rate',
    detail: 'Fall 2025 applicant cycle.',
  },
  {
    value: 'BCG',
    logo: '/logos/bcg.png',
    label: 'Sponsored partner',
    detail: 'Boston Consulting Group partnership, Spring 2026.',
  },
]

const services = [
  {
    title: 'Entry & Expansion',
    items: ['Market entry', 'Growth strategy', 'Pricing analysis'],
  },
  {
    title: 'Data & Research',
    items: ['Surveys', 'Focus groups', 'Data visualization'],
  },
  {
    title: 'Sales & Marketing',
    items: ['Publicity & branding', 'Sales strategy', 'Customer acquisition'],
  },
  {
    title: 'Development',
    items: ['New features', 'Competitor analysis', 'Product pivots'],
  },
]

export function Stats() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.18 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      className={`stats ${visible ? 'stats--visible' : ''}`}
      id="glance"
      ref={ref}
      aria-labelledby="stats-heading"
    >
      <div className="stats__inner">
        <p className="eyebrow stats__eyebrow">VCG at a glance</p>

        <ul className="stats__grid">
          {stats.map((item, index) => (
            <li key={item.value} style={{ transitionDelay: `${index * 90}ms` }}>
              <span className="stats__index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              {'logo' in item && item.logo ? (
                <div className="stats__logo">
                  <img src={item.logo} alt={item.value} />
                </div>
              ) : (
                <p className="stats__value">{item.value}</p>
              )}
              <p className="stats__label">{item.label}</p>
              <p className="stats__detail">{item.detail}</p>
            </li>
          ))}
        </ul>

        <div className="stats__intro">
          <h2 id="stats-heading">Great ideas come from everyone, everywhere.</h2>
          <p className="stats__copy">
            You don't have to be a business student to join VCG. We seek potential members that have
            intellectual drive and are willing to experiment with something new.
          </p>
        </div>

        <div className="stats__work">
          <div className="stats__work-head">
            <div>
              <p className="eyebrow">Client work</p>
              <h3>What our teams take on</h3>
              <p>
                A dedicated VCG consulting team works with you for a semester to achieve your goals,
                from startups to established organizations.
              </p>
            </div>
            <Link className="stats__work-link" to="/clients">
              Learn more about client services
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <ul className="stats__services">
            {services.map((service, index) => (
              <li key={service.title} style={{ transitionDelay: `${280 + index * 70}ms` }}>
                <p className="stats__service-title">{service.title}</p>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
