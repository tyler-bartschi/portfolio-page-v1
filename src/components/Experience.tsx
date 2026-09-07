import { experience } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import './Experience.css'

function Experience() {
  return (
    <section className="section experience" id="experience" aria-labelledby="experience-title">
      <SectionHeading id="experience-title" index="02" title="Experience" description="Learning by contributing, collaborating, and shipping." />
      <div className="experience-list">
        {experience.map((item) => (
          <article className="experience-card" key={`${item.role}-${item.organization}`}>
            <div className="experience-meta">
              <p>{item.dates}</p>
              <p>{item.organization}</p>
            </div>
            <div className="experience-body">
              <h3>{item.role}</h3>
              <ul>
                {item.accomplishments.map((accomplishment) => (
                  <li key={accomplishment}>{accomplishment}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
