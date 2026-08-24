import { useEffect, useRef } from 'react'
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
  const spineFillRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    const items = itemRefs.current.filter(Boolean) as HTMLLIElement[]
    if (!items.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('timeline__step--revealed')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.35, rootMargin: '0px 0px -8% 0px' },
    )

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const track = trackRef.current
    const spineFill = spineFillRef.current
    const items = itemRefs.current.filter(Boolean) as HTMLLIElement[]
    if (!track || !spineFill) return

    let frame = 0
    let previousActive = -2

    const update = () => {
      const rect = track.getBoundingClientRect()
      const viewport = window.innerHeight
      const start = viewport * 0.72
      const end = viewport * 0.28
      const raw = (start - rect.top) / (rect.height + (start - end))
      const next = Math.min(1, Math.max(0, raw))
      spineFill.style.transform = `scaleY(${next})`

      const active = Math.min(
        timeline.length - 1,
        Math.max(-1, Math.floor(next * timeline.length - 0.05)),
      )
      if (active === previousActive) return

      items.forEach((item, index) => {
        item.classList.toggle('timeline__step--active', index <= active)
        item.classList.toggle('timeline__step--current', index === active)
      })
      previousActive = active
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
        </div>

        <div className="timeline" ref={trackRef}>
          <div className="timeline__spine" aria-hidden="true">
            <div className="timeline__spine-fill" ref={spineFillRef} />
          </div>

          <ol className="timeline__steps">
            {timeline.map((step, index) => (
              <li
                key={step.title}
                ref={(node) => {
                  itemRefs.current[index] = node
                }}
                data-index={index}
                className="timeline__step"
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
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
