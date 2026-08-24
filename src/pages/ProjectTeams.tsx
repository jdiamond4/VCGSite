import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { projectTeams } from '../data/projectTeams'
import './TeamPages.css'

export function ProjectTeams() {
  return (
    <>
      <Navbar />
      <main className="team-page">
        <section className="team-page__hero" aria-labelledby="project-teams-heading">
          <div className="team-page__hero-inner">
            <p className="eyebrow">Our Experts</p>
            <h1 id="project-teams-heading">Project Team 2026</h1>
          </div>
        </section>

        <div className="team-page__projects">
          {projectTeams.map((team) => {
            const headingId = `team-${team.name.toLowerCase().replace(/\s+/g, '-')}`
            const projectLeader = team.members.find((member) => member.isProjectLeader)
            const teamMembers = team.members.filter((member) => !member.isProjectLeader)

            return (
              <section className="team-page__project" key={team.name} aria-labelledby={headingId}>
                <h2 id={headingId}>{team.name}</h2>
                {projectLeader ? (
                  <div className="team-page__leader">
                    <p>Project Leader</p>
                    <h3>{projectLeader.name}</h3>
                  </div>
                ) : null}
                <p className="team-page__members-label">Team Members</p>
                <ul className="team-page__member-list" aria-label={`${team.name} team members`}>
                  {teamMembers.map((member) => (
                    <li key={member.name}>{member.name}</li>
                  ))}
                </ul>
              </section>
            )
          })}
        </div>
      </main>
      <Footer />
    </>
  )
}
