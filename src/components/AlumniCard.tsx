import type { AlumniMember } from '../data/alumni'
import './AlumniCard.css'

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0h.01Z" />
    </svg>
  )
}

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export function AlumniCard({ member }: { member: AlumniMember }) {
  return (
    <article className="alumni-card">
      <div className="alumni-card__portrait">
        {member.image ? (
          <img
            src={member.image}
            alt={`${member.name}, VCG Class of ${member.graduationYear}`}
            width={640}
            height={640}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="alumni-card__placeholder" aria-hidden="true">
            <span>{getInitials(member.name)}</span>
          </div>
        )}
        <span className="alumni-card__year">'{String(member.graduationYear).slice(-2)}</span>
      </div>

      <div className="alumni-card__content">
        <div className="alumni-card__heading">
          <div>
            <h3>{member.name}</h3>
            <p>{member.title}</p>
          </div>
          {member.linkedin ? (
            <a
              className="alumni-card__linkedin"
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={`${member.name} on LinkedIn`}
            >
              <LinkedInIcon />
            </a>
          ) : null}
        </div>

        <div className="alumni-card__company">
          {member.companyLogo ? (
            <img src={member.companyLogo} alt={member.company} loading="lazy" />
          ) : (
            <span>{member.company}</span>
          )}
        </div>
      </div>
    </article>
  )
}
