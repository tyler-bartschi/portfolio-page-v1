import { useId, useState } from 'react'
import { projects, type Project } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import './Projects.css'

type ProjectCardProps = {
  project: Project
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const detailsPanelId = useId()
  const technologies = [...project.importantTechnologies, ...project.otherTechnologies]

  return (
    <article className="project-card">
      <div className="project-number" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </div>
      <div className="project-content">
        <div className="project-title-row">
          <div className="project-heading">
            <h3>{project.name}</h3>
            <span className={`project-status${project.inProgress ? '' : ' project-status-completed'}`}>
              {project.inProgress ? 'In Progress' : 'Completed'}
            </span>
          </div>
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
        <div className="project-details" data-open={isOpen}>
          <button
            className="project-details-toggle"
            type="button"
            aria-expanded={isOpen}
            aria-controls={detailsPanelId}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span>Explore the build</span>
            <span className="summary-icon" aria-hidden="true" />
          </button>
          <div className="project-details-panel" id={detailsPanelId} aria-hidden={!isOpen}>
            <div className="project-details-panel-inner">
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
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section className="section projects" id="projects" aria-labelledby="projects-title">
      <SectionHeading
        id="projects-title"
        index="01"
        title="Projects"
        description="A few things I’ve designed, built, and learned from."
      />
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.name} />
        ))}
      </div>
    </section>
  )
}

export default Projects
