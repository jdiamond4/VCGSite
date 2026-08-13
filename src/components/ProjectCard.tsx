import { useEffect, useRef, useState } from 'react'
import type { ProjectTeamMember } from '../data/projectTeams'
import './ProjectCard.css'

export function ProjectCard({ member }: { member: ProjectTeamMember }) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const initials = member.name
    .split(' ')
    .map((part) => part[0])
    .join('')

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
    <article className={`project-card ${visible ? 'project-card--visible' : ''}`} ref={ref}>
      <div className="project-card__media">
        {member.image ? (
          <img src={member.image} alt={member.name} loading="lazy" />
        ) : (
          <div className="project-card__placeholder" aria-hidden="true">
            {initials}
          </div>
        )}
        <div className="project-card__veil" aria-hidden="true" />
        <h3>{member.name}</h3>
      </div>
      {member.isProjectLeader ? <p className="project-card__role">Project Leader</p> : null}
    </article>
  )
}
