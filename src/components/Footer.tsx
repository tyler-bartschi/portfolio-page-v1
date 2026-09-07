import { intro } from '../data/portfolio'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} {intro.name}</p>
      <p>Designed and built with care.</p>
      <a href="#top">Back to top ↑</a>
    </footer>
  )
}

export default Footer
