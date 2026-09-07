import { projects } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import './Projects.css'

function Projects() {
  return (
    <section className="section projects" id="projects" aria-labelledby="projects-title">
      <SectionHeading
        id="projects-title"
        index="01"
        title="Selected projects"
        description="A few things I’ve designed, built, and learned from. Open a project for the engineering details."
      />
      <div className="project-list">
        {projects.map((project, index) => {
          const technologies = [...project.importantTechnologies, ...project.otherTechnologies]
          return (
            <article className="project-card" key={project.name}>
              <div className="project-number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="project-content">
                <div className="project-title-row">
                  <h3>{project.name}</h3>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`${project.name} on GitHub`}>
                    GitHub <span aria-hidden="true">↗</span>
                  </a>
                </div>
                <p>{project.description}</p>
                <ul className="tag-list" aria-label="Key technologies">
                  {project.importantTechnologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <details className="project-details">
                  <summary>
                    <span>Explore the build</span>
                    <span className="summary-icon" aria-hidden="true" />
                  </summary>
                  <div className="project-details-content">
                    {project.image && (
                      <img src={project.image} alt={project.imageAlt ?? `${project.name} screenshot`} />
                    )}
                    <div>
                      <p className="detail-label">Engineering highlights</p>
                      <ul className="highlight-list">
                        {project.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                      <p className="detail-label">Full toolkit</p>
                      <ul className="tag-list tag-list-muted" aria-label="All technologies">
                        {technologies.map((technology) => (
                          <li key={technology}>{technology}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </details>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
