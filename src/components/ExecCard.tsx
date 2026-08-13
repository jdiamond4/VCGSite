import { useEffect, useRef, useState } from 'react'
import type { ExecMember } from '../data/execBoard'
import './ExecCard.css'

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function ExecCard({ member }: { member: ExecMember }) {
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
    <article className={`exec-card ${visible ? 'exec-card--visible' : ''}`} ref={ref}>
      <div className="exec-card__media">
        <img src={member.image} alt="" loading="lazy" />
        <div className="exec-card__veil" aria-hidden="true" />
        <div className="exec-card__meta">
          <div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
          {member.linkedin ? (
            <a
              className="exec-card__linkedin"
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={`${member.name} on LinkedIn`}
            >
              <LinkedInIcon />
            </a>
          ) : null}
        </div>
      </div>
      <p className="exec-card__bio">{member.bio}</p>
    </article>
  )
}
