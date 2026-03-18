import { useEffect, useRef, useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'

const sectionOrder = ['home', 'projects', 'about']

function App() {
  const [splashState, setSplashState] = useState('visible')
  const [currentSection, setCurrentSection] = useState('home')
  const [showScrollTop, setShowScrollTop] = useState(false)
  const sectionRefs = useRef({})
  const scrollAnimFrameRef = useRef(null)

  useEffect(() => {
    const hashSection = window.location.hash.replace('#', '')
    if (!sectionOrder.includes(hashSection)) {
      return
    }

    requestAnimationFrame(() => {
      const target = sectionRefs.current[hashSection]
      if (!target) {
        return
      }

      target.scrollIntoView({ behavior: 'auto', block: 'start' })
      setCurrentSection(hashSection)
    })
  }, [])

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => {
      setSplashState('fading')
    }, 1200)

    const hideTimer = window.setTimeout(() => {
      setSplashState('hidden')
    }, 1950)

    return () => {
      window.clearTimeout(fadeTimer)
      window.clearTimeout(hideTimer)
    }
  }, [])

  useEffect(() => {
    return () => {
      if (scrollAnimFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollAnimFrameRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const sections = sectionOrder
      .map((id) => sectionRefs.current[id])
      .filter(Boolean)

    if (sections.length === 0) {
      return
    }

    let frameId = null

    const updateActiveSection = () => {
      frameId = null
      const anchorOffset = 150
      const doc = document.documentElement
      const remainingScroll =
        doc.scrollHeight - (window.scrollY + window.innerHeight)
      const shouldShowTop =
        remainingScroll <= Math.max(window.innerHeight * 0.6, 220)
      setShowScrollTop(shouldShowTop)

      const best = sections
        .map((section) => ({
          id: section.id,
          distance: Math.abs(section.getBoundingClientRect().top - anchorOffset),
        }))
        .sort((a, b) => a.distance - b.distance)[0]

      if (!best || !sectionOrder.includes(best.id)) {
        return
      }

      setCurrentSection((prev) => {
        if (prev !== best.id) {
          window.history.replaceState({}, '', `#${best.id}`)
        }

        return best.id
      })
    }

    const requestUpdate = () => {
      if (frameId !== null) {
        return
      }

      frameId = window.requestAnimationFrame(updateActiveSection)
    }

    requestUpdate()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [])

  const navigate = (sectionId, behavior = 'smooth') => {
    if (!sectionOrder.includes(sectionId)) {
      return
    }

    const target = sectionRefs.current[sectionId]
    if (!target) {
      return
    }

    target.scrollIntoView({ behavior, block: 'start' })
    setCurrentSection(sectionId)
    window.history.replaceState({}, '', `#${sectionId}`)
  }

  const registerSection = (id) => (element) => {
    if (element) {
      sectionRefs.current[id] = element
    }
  }

  const scrollToTop = () => {
    const startY = window.scrollY
    if (startY <= 0) {
      return
    }

    if (scrollAnimFrameRef.current !== null) {
      window.cancelAnimationFrame(scrollAnimFrameRef.current)
      scrollAnimFrameRef.current = null
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.scrollTo({ top: 0, behavior: 'auto' })
      setCurrentSection('home')
      window.history.replaceState({}, '', '#home')
      return
    }

    const durationMs = 420
    const easeOutCubic = (t) => 1 - (1 - t) ** 3
    let startTime = null

    const animate = (timestamp) => {
      if (startTime === null) {
        startTime = timestamp
      }

      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / durationMs, 1)
      const eased = easeOutCubic(progress)
      const nextY = Math.round(startY * (1 - eased))

      window.scrollTo(0, nextY)

      if (progress < 1) {
        scrollAnimFrameRef.current = window.requestAnimationFrame(animate)
      } else {
        scrollAnimFrameRef.current = null
      }
    }

    scrollAnimFrameRef.current = window.requestAnimationFrame(animate)
    setCurrentSection('home')
    window.history.replaceState({}, '', '#home')
  }

  return (
    <>
      {splashState !== 'hidden' ? (
        <div
          className={`splash-screen ${splashState === 'fading' ? 'is-fading' : ''}`}
          aria-live="polite"
        >
          <div className="splash-card">
            <div className="splash-mark" aria-hidden="true">
              <span className="splash-ring"></span>
              <span className="splash-dot"></span>
            </div>
            <p className="splash-eyebrow">Booting Experience</p>
            <h1>Portfolio Site is Working</h1>
            <p>Loading animations, projects, and interactive sections...</p>
            <div className="splash-progress" aria-hidden="true">
              <span></span>
            </div>
          </div>
        </div>
      ) : null}

      <div className="app">
        <div className="atmosphere" aria-hidden="true">
          <span className="orb orb-1"></span>
          <span className="orb orb-2"></span>
          <span className="orb orb-3"></span>
          <span className="orb orb-4"></span>
        </div>

        <Navigation currentSection={currentSection} navigate={navigate} />

        <main className="onepage-shell">
          <section
            id="home"
            ref={registerSection('home')}
            className="onepage-section"
            aria-label="Home section"
          >
            <div className="page-stage">
              <HomePage navigate={navigate} />
            </div>
          </section>

          <section
            id="projects"
            ref={registerSection('projects')}
            className="onepage-section"
            aria-label="Projects section"
          >
            <div className="page-stage">
              <ProjectsPage navigate={navigate} />
            </div>
          </section>

          <section
            id="about"
            ref={registerSection('about')}
            className="onepage-section"
            aria-label="About section"
          >
            <div className="page-stage">
              <AboutPage />
            </div>
          </section>
        </main>

        {showScrollTop ? (
          <button
            type="button"
            className="scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Go to top of page"
          >
            <span aria-hidden="true">&uarr;</span>
          </button>
        ) : null}
      </div>
    </>
  )
}

export default App
