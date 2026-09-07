import { intro } from '../data/portfolio'
import './Header.css'

const navigation = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'About', href: '#about' },
]

function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label={`${intro.name}, back to top`}>
        <span>{intro.name.charAt(0)}</span>
        {intro.name}
      </a>
      <nav aria-label="Primary navigation">
        <ul>
          {navigation.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <a className="header-contact" href="#contact">
        Let&apos;s talk <span aria-hidden="true">↗</span>
      </a>
    </header>
  )
}

export default Header
