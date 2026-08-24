import { useState } from 'react'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import './Apply.css'

const applicationUrl = 'https://forms.gle/LJv3Xh1SJyj2xp3e8'

const faqs = [
  {
    question: 'Who can apply?',
    answer:
      'Any UVA student, from any school or year. No prior experience needed.',
  },
  {
    question: 'Do I need a business background?',
    answer:
      'No. Our members come from every major. We care about how you think, not what you study.',
  },
  {
    question: 'What does the application involve?',
    answer:
      'A short written application, followed by two interview rounds and a final social event.',
  },
  {
    question: 'How should I prepare for interviews?',
    answer:
      'Be ready to talk through your experiences and work a case in round two. No memorized frameworks needed.',
  },
  {
    question: 'What’s the time commitment?',
    answer:
      'A semester-long project team, plus general body meetings and socials. It fits around a full course load.',
  },
  {
    question: 'When are applications due?',
    answer:
      'Aug 30. Interview dates are shared with candidates as the process moves forward.',
  },
]

const timeline = [
  {
    date: 'Aug 24',
    title: 'Activities Fair',
    description: 'Meet the team, learn what VCG does, and ask us anything.',
    phase: 'Discover',
  },
  {
    date: 'Aug 25–28',
    title: 'Info Sessions & Coffee Chats',
    description: 'Get a closer look at our projects, culture, and application process.',
    phase: 'Connect',
    sessions: [
      { date: 'Wednesday, Aug 26', time: '7:00–8:00 PM', location: 'Rouss-Robertson Hall, Room 123' },
      { date: 'Thursday, Aug 27', time: '7:00–8:00 PM', location: 'Rouss-Robertson Hall, Room 123' },
    ],
  },
  {
    date: 'Aug 30',
    title: 'Applications Due',
    description: 'Submit your application before the deadline.',
    phase: 'Apply',
    featured: true,
  },
  {
    date: 'Date TBA',
    title: 'Round 1 Interviews',
    description: 'A conversation focused on your experiences, interests, and approach.',
    phase: 'Interview',
  },
  {
    date: 'Date TBA',
    title: 'Round 2 Interviews',
    description: 'Go deeper with the team and work through a case.',
    phase: 'Interview',
  },
  {
    date: 'Date TBA',
    title: 'Final Round Social Event',
    description: 'Meet more of VCG and get a feel for the community behind the work.',
    phase: 'Meet',
  },
  {
    date: 'Date TBA',
    title: 'Decisions Released',
    description: '',
    phase: 'Decision',
  },
]

export function Apply() {
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set())

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <>
      <Navbar />
      <main className="apply">
        <section className="apply__hero" aria-labelledby="apply-heading">
          <div className="apply__hero-inner">
            <div className="apply__hero-copy">
              <p className="eyebrow">Fall recruitment</p>
              <h1 id="apply-heading">Your path to VCG</h1>
              <p>Here’s what to expect throughout the application process.</p>
              <div className="apply__hero-actions">
                <a className="apply__button apply__button--primary" href={applicationUrl} target="_blank" rel="noreferrer">
                  Start your application
                  <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
                    <path d="M3 8h9M8.5 3.5 13 8l-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </a>
                <a className="apply__button apply__button--quiet" href="#timeline">
                  View the timeline
                </a>
              </div>
            </div>

            <aside className="apply__deadline" aria-label="Application deadline">
              <span>Applications due</span>
              <strong>Aug 30</strong>
            </aside>
          </div>
        </section>

        <section className="apply__process" id="timeline" aria-labelledby="timeline-heading">
          <div className="apply__section-inner">
            <div className="apply__section-head">
              <div>
                <h2 id="timeline-heading">Application timeline</h2>
                <p>
                  Dates marked TBA will be shared with candidates as the process moves forward.
                </p>
              </div>
            </div>

            <ol className="apply__timeline">
              {timeline.map((item, index) => (
                <li className={item.featured ? 'apply__step apply__step--featured' : 'apply__step'} key={item.title}>
                  <div className="apply__step-marker" aria-hidden="true">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <time>{item.date}</time>
                  <div className="apply__step-copy">
                    <span className="apply__phase">{item.phase}</span>
                    <h3>{item.title}</h3>
                    {item.description && <p>{item.description}</p>}
                    {item.sessions && (
                      <ul className="apply__session-list" aria-label="Info session schedule">
                        {item.sessions.map((session) => (
                          <li key={session.date}>
                            <strong>{session.date}</strong>
                            <span>{session.time}</span>
                            <span>{session.location}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {item.featured && <span className="apply__due-badge">Deadline</span>}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="apply__faq" id="faq" aria-labelledby="faq-heading">
          <div className="apply__section-inner">
            <div className="apply__section-head">
              <div>
                <h2 id="faq-heading">Frequently asked questions</h2>
                <p>Still curious? Reach out at an info session or coffee chat and we’ll answer anything.</p>
              </div>
            </div>

            <ul className="apply__faq-list">
              {faqs.map((item, index) => {
                const isOpen = openFaqs.has(index)
                const panelId = `faq-panel-${index}`
                const buttonId = `faq-trigger-${index}`
                return (
                  <li className={isOpen ? 'apply__faq-item apply__faq-item--open' : 'apply__faq-item'} key={item.question}>
                    <button
                      type="button"
                      className="apply__faq-trigger"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleFaq(index)}
                    >
                      <span className="apply__faq-question">{item.question}</span>
                      <span className="apply__faq-icon" aria-hidden="true">
                        <svg viewBox="0 0 16 16" width="16" height="16">
                          <path d="M4 6.5 8 10.5 12 6.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>
                    <div
                      className="apply__faq-panel"
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                    >
                      <div className="apply__faq-answer">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        <section className="apply__closing" aria-labelledby="apply-closing-heading">
          <div className="apply__closing-inner">
            <h2 id="apply-closing-heading">Apply Now!</h2>
            <p>
              We’re looking for thoughtful, driven UVA students from every school and field of study.
            </p>
            <a className="apply__button apply__button--primary" href={applicationUrl} target="_blank" rel="noreferrer">
              Apply to VCG
              <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
                <path d="M3 8h9M8.5 3.5 13 8l-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
