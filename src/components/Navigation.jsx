import AppLink from './AppLink'

const links = [
  { label: 'Home', to: 'home' },
  { label: 'Projects', to: 'projects' },
  { label: 'About', to: 'about' },
]

function Navigation({ currentSection, navigate }) {
  return (
    <header className="site-header">
      <AppLink to="home" navigate={navigate} className="brand-link">
        <span className="brand-dot"></span>
        <div className="brand-text">
          <strong>Portfolio</strong>
          <small>Excellent Developer</small>
        </div>
      </AppLink>

      <nav className="top-nav" aria-label="Main navigation">
        {links.map((link) => {
          const isActive = currentSection === link.to

          return (
            <AppLink
              key={link.to}
              to={link.to}
              navigate={navigate}
              className={`nav-link ${isActive ? 'is-active' : ''}`}
              aria-current={isActive ? 'page' : undefined}
            >
              {link.label}
            </AppLink>
          )
        })}
      </nav>
    </header>
  )
}

export default Navigation
