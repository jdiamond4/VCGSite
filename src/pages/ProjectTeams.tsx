import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { ProjectCard } from '../components/ProjectCard'
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
            <h1 id="project-teams-heading">Project Team</h1>
          </div>
        </section>

        <div className="team-page__projects">
          {projectTeams.map((team) => {
            const headingId = `team-${team.name.toLowerCase().replace(/\s+/g, '-')}`

            return (
              <section className="team-page__project" key={team.name} aria-labelledby={headingId}>
                <h2 id={headingId}>{team.name}</h2>
                <div className="team-page__member-grid">
                  {team.members.map((member) => (
                    <ProjectCard key={member.name} member={member} />
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </main>
      <Footer />
    </>
  )
}
