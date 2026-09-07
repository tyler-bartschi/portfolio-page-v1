import { about } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import './About.css'

function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <SectionHeading id="about-title" index="05" title="About me" />
      <div className="about-content">
        <p>{about}</p>
        <p className="about-note">"Thank goodness we don't have only serious problems, but ridiculous ones as well." - Edsger Dijkstra</p>
      </div>
    </section>
  )
}

export default About
