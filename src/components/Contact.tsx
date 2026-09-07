import { intro } from '../data/portfolio'
import './Contact.css'

function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <p className="section-index">/06</p>
      <div>
        <p className="contact-kicker">Have an opportunity or an idea?</p>
        <h2 id="contact-title">Let&apos;s build something useful.</h2>
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
            Résumé
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
