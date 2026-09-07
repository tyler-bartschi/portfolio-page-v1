import { about } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import './About.css'

function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <SectionHeading id="about-title" index="05" title="A little more human" />
      <div className="about-content">
        <p>{about}</p>
        <p className="about-note">Curious by default. Intentional in the details.</p>
      </div>
    </section>
  )
}

export default About
