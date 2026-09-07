import { intro } from '../data/portfolio'
import './Intro.css'

function Intro() {
  return (
    <section className="intro" id="top" aria-labelledby="intro-title">
      <div className="intro-copy">
        <p className="eyebrow">
          <span className="status-dot" aria-hidden="true" />
          {intro.eyebrow}
        </p>
        <h1 id="intro-title">
          Hi, I&apos;m {intro.name}.<br />
        </h1>
        <p className="intro-description">{intro.description}</p>
        <div className="intro-actions">
          <a className="button button-primary" href={intro.resumeUrl} download>
            Download resume <span aria-hidden="true">↓</span>
          </a>
          <a className="button button-secondary" href={`mailto:${intro.email}`}>
            {intro.email}
          </a>
        </div>
        <div className="intro-links" aria-label="Social links">
          {intro.socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
      <figure className="profile-frame">
        <img src={intro.profileImage} alt={`${intro.name} profile placeholder`} />
        <figcaption>
          <span>{intro.title}</span>
          <span>Based in the United States</span>
        </figcaption>
      </figure>
    </section>
  )
}

export default Intro
