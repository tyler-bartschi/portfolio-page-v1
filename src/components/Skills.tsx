import { useId, useState } from 'react'
import { skillGroups } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import './Skills.css'

type ExpandableSkillProps = {
  name: string
  description: string
}

function ExpandableSkill({ name, description }: ExpandableSkillProps) {
  const [isOpen, setIsOpen] = useState(false)
  const panelId = useId()

  return (
    <div className="skill-card" data-open={isOpen}>
      <button
        className="skill-card-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>{name}</span>
        <span className="skill-plus" aria-hidden="true">+</span>
      </button>
      <div className="skill-card-panel" id={panelId} aria-hidden={!isOpen}>
        <div className="skill-card-panel-inner">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

function Skills() {
  return (
    <section className="section skills" id="skills" aria-labelledby="skills-title">
      <SectionHeading id="skills-title" index="03" title="Skills & tools" description="" />
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.category}>
            <h3>{group.category}</h3>
            <div className="skill-grid">
              {group.skills.map((skill) =>
                skill.description ? (
                  <ExpandableSkill key={skill.name} name={skill.name} description={skill.description} />
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
