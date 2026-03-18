function ProjectDetailPage({ project, navigate, onClose, titleId }) {
  const flowingImages = [...project.photos, ...project.photos]

  const handleBackToProjects = () => {
    onClose?.()
    requestAnimationFrame(() => navigate('projects'))
  }

  const handleGoToAbout = () => {
    onClose?.()
    requestAnimationFrame(() => navigate('about'))
  }

  return (
    <article className="content-wrap project-detail-content">
      <section className="detail-hero reveal-item">
        <div className="detail-hero-flow" aria-hidden="true">
          <div className="detail-hero-track detail-hero-track-a">
            {flowingImages.map((image, index) => (
              <img
                key={`a-${project.slug}-${image}-${index}`}
                src={image}
                className="detail-hero-image"
                alt=""
                loading="lazy"
              />
            ))}
          </div>
        </div>

        <div className="detail-hero-content">
          <p className="project-stack">{project.stack}</p>
          <h1 id={titleId} className="headline">
            {project.title}
          </h1>
          <p className="lead">{project.summary}</p>
          <div className="cta-row">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleBackToProjects}
            >
              Back to Project Cards
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleGoToAbout}
            >
              Go to About Section
            </button>
          </div>
        </div>
      </section>

      <section className="detail-grid">
        <div className="detail-card reveal-item">
          <h2>Challenge</h2>
          <p>{project.challenge}</p>
        </div>

        <div className="detail-card reveal-item">
          <h2>Solution</h2>
          <ul>
            {project.solution.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>

        <div className="detail-card reveal-item">
          <h2>Results</h2>
          <ul>
            {project.results.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  )
}

export default ProjectDetailPage
