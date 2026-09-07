import { useId, useState } from 'react'
import { education } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import './Education.css'

function Education() {
  const [coursesOpen, setCoursesOpen] = useState(false)
  const coursesPanelId = useId()

  return (
    <section className="section education" id="education" aria-labelledby="education-title">
      <SectionHeading id="education-title" index="04" title="Education" />
      <article className="education-card">
        <div className="education-summary">
          <p className="education-label">Currently studying at</p>
          <h3>{education.university}</h3>
          <p>{education.degree}</p>
        </div>
        <dl className="education-facts">
          <div>
            <dt>Graduation</dt>
            <dd>{education.graduation}</dd>
          </div>
          <div>
            <dt>Academic standing</dt>
            <dd>{education.gpa}</dd>
          </div>
        </dl>
        <div className="courses" data-open={coursesOpen}>
          <button
            className="courses-toggle"
            type="button"
            aria-expanded={coursesOpen}
            aria-controls={coursesPanelId}
            onClick={() => setCoursesOpen((open) => !open)}
          >
            <span>Relevant courses</span>
            <span className="summary-icon" aria-hidden="true" />
          </button>
          <div className="courses-panel" id={coursesPanelId} aria-hidden={!coursesOpen}>
            <div className="courses-panel-inner">
              <ul>
                {education.courses.map((course) => (
                  <li key={course.name}>
                    <strong>{course.name}</strong>
                    <span>{course.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Education
