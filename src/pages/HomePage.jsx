import AppLink from '../components/AppLink'

const capabilities = [
  {
    title: 'Web Platforms',
    description:
      'Building fast and scalable experiences in React, WordPress, Shopify, and PHP.',
  },
  {
    title: 'Automation',
    description:
      'Designing n8n workflows that connect forms, CRMs, stores, and reporting systems.',
  },
  {
    title: 'BI & Strategy',
    description:
      'Turning raw data into Power BI dashboards that guide product and growth decisions.',
  },
]

const highlights = [
  { value: '40+', label: 'Projects Delivered' },
  { value: '6', label: 'Core Technologies' },
  { value: '95%', label: 'On-Time Launches' },
]

const stackPreview = ['React', 'WordPress', 'Shopify', 'n8n', 'Power BI', 'PHP']
const flyingStacks = [
  { label: 'React', lane: 'lane-a', delay: '0s' },
  { label: 'WordPress', lane: 'lane-b', delay: '1.4s' },
  { label: 'Shopify', lane: 'lane-c', delay: '2.4s' },
  { label: 'n8n', lane: 'lane-d', delay: '3.1s' },
  { label: 'Power BI', lane: 'lane-e', delay: '4.2s' },
  { label: 'PHP', lane: 'lane-f', delay: '5.1s' },
  { label: 'Python', lane: 'lane-g', delay: '6s' },
  { label: 'Laravel', lane: 'lane-h', delay: '6.9s' },
]

function HomePage({ navigate }) {
  return (
    <div className="content-wrap">
      <section className="hero-panel reveal-item">
        <div className="stack-flight" aria-hidden="true">
          {flyingStacks.map((stack) => (
            <span
              key={stack.label}
              className={`stack-flight-chip ${stack.lane}`}
              style={{ '--stack-delay': stack.delay }}
            >
              {stack.label}
            </span>
          ))}
        </div>

        <div className="hero-panel-content">
          <p className="eyebrow">Portfolio / Full-Stack Builder</p>
          <h1 className="headline">
            Crafting high-impact digital products with code, automation, and data.
          </h1>
          <p className="lead">
            I design websites and systems that look bold, move smoothly, and drive
            measurable outcomes for real businesses.
          </p>
          <div className="hero-stack" aria-label="Core stack">
            {stackPreview.map((item, index) => (
              <span
                key={item}
                className="hero-stack-chip"
                style={{ '--chip-delay': `${index * 0.15}s` }}
              >
                {item}
              </span>
            ))}
          </div>
          <div className="cta-row">
            <AppLink to="projects" navigate={navigate} className="btn btn-primary">
              Explore Projects
            </AppLink>
            <AppLink to="about" navigate={navigate} className="btn btn-secondary">
              About Me
            </AppLink>
          </div>
        </div>
      </section>

      <section className="metrics-grid">
        {highlights.map((item, index) => (
          <article
            key={item.label}
            className="metric-card reveal-item"
            style={{ '--delay': `${index * 0.12}s` }}
          >
            <p className="metric-value">{item.value}</p>
            <p className="metric-label">{item.label}</p>
          </article>
        ))}
      </section>

      <section className="cards-grid">
        {capabilities.map((capability, index) => (
          <article
            key={capability.title}
            className="feature-card reveal-item"
            style={{ '--delay': `${0.2 + index * 0.1}s` }}
          >
            <h3>{capability.title}</h3>
            <p>{capability.description}</p>
          </article>
        ))}
      </section>
    </div>
  )
}

export default HomePage
