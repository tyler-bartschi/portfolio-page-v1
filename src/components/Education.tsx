import { education } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import './Education.css'

function Education() {
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
        <details className="courses">
          <summary>
            <span>Relevant courses</span>
            <span className="summary-icon" aria-hidden="true" />
          </summary>
          <ul>
            {education.courses.map((course) => (
              <li key={course.name}>
                <strong>{course.name}</strong>
                <span>{course.description}</span>
              </li>
            ))}
          </ul>
        </details>
      </article>
    </section>
  )
}

export default Education
