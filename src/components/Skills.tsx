import { skillGroups } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import './Skills.css'

function Skills() {
  return (
    <section className="section skills" id="skills" aria-labelledby="skills-title">
      <SectionHeading id="skills-title" index="03" title="Skills & tools" description="The technologies I use and the fundamentals behind them." />
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.category}>
            <h3>{group.category}</h3>
            <div className="skill-grid">
              {group.skills.map((skill) =>
                skill.description ? (
                  <details className="skill-card" key={skill.name}>
                    <summary>
                      <span>{skill.name}</span>
                      <span className="skill-plus" aria-hidden="true">+</span>
                    </summary>
                    <p>{skill.description}</p>
                  </details>
                ) : (
                  <div className="skill-card skill-card-static" key={skill.name}>
                    {skill.name}
                  </div>
                ),
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
