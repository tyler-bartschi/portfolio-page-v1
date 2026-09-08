import { intro } from '../data/portfolio'
import './Contact.css'

function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <p className="section-index">/06</p>
      <div>
        <h2 id="contact-title">Want to reach out? Here's my contact info</h2>
        <a className="contact-email" href={`mailto:${intro.email}`}>
          {intro.email} <span aria-hidden="true">↗</span>
        </a>
        <div className="contact-links">
          {intro.socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
          <a href={intro.resumeUrl} download>
            Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
