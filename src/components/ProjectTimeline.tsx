import { useEffect, useRef, useState } from 'react'
import './ProjectTimeline.css'

const timeline = [
  {
    phase: 'Week 1',
    title: 'Kickoff & training',
    detail:
      'Meet your team, learn client expectations, and get grounded in research and communication fundamentals.',
  },
  {
    phase: 'Ongoing',
    title: 'Workshops & work sessions',
    detail:
      'Weekly progress, internal work sessions, and firm-led workshops — including partners like Bain.',
  },
  {
    phase: 'Bi-weekly',
    title: 'Client meetings',
    detail:
      'Share progress with your client, align on priorities, and leave with clear next-phase assignments.',
  },
  {
    phase: 'End of term',
    title: 'Final deliverables',
    detail:
      'Present findings to analysts, the executive board, and the client — plus a written recommendation package.',
  },
]

export function ProjectTimeline() {
  const trackRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])
  const [progress, setProgress] = useState(0)
  const [activeIndex, setActiveIndex] = useState(-1)
  const [revealed, setRevealed] = useState<boolean[]>(() => timeline.map(() => false))

  useEffect(() => {
    const items = itemRefs.current.filter(Boolean) as HTMLLIElement[]
    if (!items.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        setRevealed((prev) => {
          const next = [...prev]
          for (const entry of entries) {
            const index = Number((entry.target as HTMLElement).dataset.index)
            if (entry.isIntersecting) next[index] = true
          }
          return next
        })
      },
      { threshold: 0.35, rootMargin: '0px 0px -8% 0px' },
    )

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let frame = 0

    const update = () => {
      const rect = track.getBoundingClientRect()
      const viewport = window.innerHeight
      const start = viewport * 0.72
      const end = viewport * 0.28
      const raw = (start - rect.top) / (rect.height + (start - end))
      const next = Math.min(1, Math.max(0, raw))
      setProgress(next)

      const active = Math.min(
        timeline.length - 1,
        Math.max(-1, Math.floor(next * timeline.length - 0.05)),
      )
      setActiveIndex(active)
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section className="clients__timeline" aria-labelledby="timeline-heading">
      <div className="clients__section-inner">
        <div className="clients__section-head clients__timeline-head">
          <p className="eyebrow">From kickoff to delivery</p>
          <h2 id="timeline-heading">Sample project timeline</h2>
          <p>One semester. One team. A clear arc from first meeting to final recommendations.</p>
        </div>

        <div className="timeline" ref={trackRef}>
          <div className="timeline__spine" aria-hidden="true">
            <div className="timeline__spine-fill" style={{ transform: `scaleY(${progress})` }} />
          </div>

          <ol className="timeline__steps">
            {timeline.map((step, index) => {
              const isActive = index <= activeIndex
              const isCurrent = index === activeIndex
              return (
                <li
                  key={step.title}
                  ref={(node) => {
                    itemRefs.current[index] = node
                  }}
                  data-index={index}
                  className={[
                    'timeline__step',
                    revealed[index] ? 'timeline__step--revealed' : '',
                    isActive ? 'timeline__step--active' : '',
                    isCurrent ? 'timeline__step--current' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  <div className="timeline__marker" aria-hidden="true">
                    <span className="timeline__dot" />
                  </div>
                  <div className="timeline__content">
                    <p className="timeline__phase">{step.phase}</p>
                    <h3>{step.title}</h3>
                    <p>{step.detail}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
