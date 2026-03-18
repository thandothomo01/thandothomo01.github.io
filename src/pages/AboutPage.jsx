const timeline = [
  {
    year: '2020',
    title: 'Started WordPress + PHP Builds + Python',
    text: 'Built custom themes and plugins for small businesses, learning the importance of clean code and maintainable systems.',
  },
  {
    year: '2022',
    title: 'Expanded into Shopify + React',
    text: 'Launched conversion-ready storefronts and interactive front-ends for campaign teams.',
  },
  {
    year: '2023',
    title: 'Automation and BI Leadership',
    text: 'Built n8n systems and Power BI dashboards to unify product, sales, and operations data.',
  },
  {
    year: '2024',
    title: 'CRM and Data Platform Development',
    text: 'Leading a team to build a custom CRM and data platform for a high-growth startup.',
  },
  {
    year: 'Recent',
    title: 'Open Source Contributions',
    text: 'Contributed to several open source projects, focusing on improving developer experience and performance.',
 }
]

const principles = [
  'Design with business intent, not visual noise.',
  'Automate repetitive workflow before scaling people.',
  'Measure what matters and keep teams aligned around one dashboard.',
]

const stackSigns = [
  {
    name: 'WordPress',
    sign: '/stack-signs/wordpress-sign.svg',
    details: 'Custom themes, plugin logic, and editorial workflow.',
  },
  {
    name: 'Python',
    sign: '/stack-signs/python-sign.svg',
    details: 'Automation scripts, data processing, and backend utilities.',
  },
  {
    name: 'Shopify',
    sign: '/stack-signs/shopify-sign.svg',
    details: 'Storefront builds, campaign pages, and checkout flow tuning.',
  },
  {
    name: 'n8n',
    sign: '/stack-signs/n8n-sign.svg',
    details: 'Automation pipelines that connect forms, CRM, and reports.',
  },
  {
    name: 'Power BI',
    sign: '/stack-signs/powerbi-sign.svg',
    details: 'Executive dashboards, KPI tracking, and forecasting views.',
  },
  {
    name: 'React',
    sign: '/stack-signs/react-sign.svg',
    details: 'Interactive, animated interfaces with reusable components.',
  },
  {
    name: 'PHP',
    sign: '/stack-signs/php-sign.svg',
    details: 'Reliable backend services and custom business logic.',
  },
  {
    name: 'Laravel',
    sign: '/stack-signs/laravel-sign.svg',
    details: 'Structured APIs, queues, and scalable business applications.',
  },
]

function AboutPage() {
  return (
    <div className="content-wrap">
      <section className="about-panel reveal-item">
        <p className="eyebrow">About Me</p>
        <h1 className="headline">Builder mindset with product-level ownership.</h1>
        <p className="lead">
          I partner with founders and teams to turn ideas into clean digital
          systems. My work blends frontend craft, backend reliability, and data
          visibility, so every launch is both beautiful and useful.
        </p>
      </section>

      <section className="stack-sign-panel reveal-item">
        <p className="eyebrow">Core Stack</p>
        <h2>Signed Skills by Technology</h2>
        <div className="stack-sign-grid">
          {stackSigns.map((stack, index) => (
            <article
              key={stack.name}
              className="stack-sign-card reveal-item"
              style={{ '--delay': `${0.08 + index * 0.07}s` }}
            >
              <img
                src={stack.sign}
                alt={`${stack.name} sign`}
                className="stack-sign-image"
                loading="lazy"
              />
              <div className="stack-sign-text">
                <h3>{stack.name}</h3>
                <p>{stack.details}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="timeline-grid">
        {timeline.map((step, index) => (
          <article
            key={step.year}
            className="timeline-card reveal-item"
            style={{ '--delay': `${index * 0.1}s` }}
          >
            <span>{step.year}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </section>

      <section className="principles-card reveal-item">
        <h2>How I Work</h2>
        <ul>
          {principles.map((principle) => (
            <li key={principle}>{principle}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default AboutPage
