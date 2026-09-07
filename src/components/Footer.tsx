import { intro } from '../data/portfolio'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <p>{new Date().getFullYear()} - {intro.name}</p>
      <a href="https://github.com/tyler-bartschi/portfolio-page-v1">View this page's repo on GitHub</a>
      <a href="#top">Back to top ↑</a>
    </footer>
  )
}

export default Footer
