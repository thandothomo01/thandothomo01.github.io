import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { projects } from '../data/projects'
import ProjectDetailPage from './ProjectDetailPage'

function ProjectsPage({ navigate }) {
  const [selectedSlug, setSelectedSlug] = useState(null)

  const selectedProject = useMemo(
    () => projects.find((project) => project.slug === selectedSlug) ?? null,
    [selectedSlug],
  )

  useEffect(() => {
    if (!selectedProject) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedSlug(null)
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleEscape)
    }
  }, [selectedProject])

  const closeDetail = () => setSelectedSlug(null)

  const detailModal =
    selectedProject && typeof document !== 'undefined'
      ? createPortal(
          <div
            className="project-detail-overlay"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProject.title} detail`}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeDetail()
              }
            }}
          >
            <section className="project-detail-modal reveal-item">
              <ProjectDetailPage
                project={selectedProject}
                navigate={navigate}
                onClose={closeDetail}
                titleId={`project-title-${selectedProject.slug}`}
              />
            </section>
          </div>,
          document.body,
        )
      : null

  return (
    <div className="content-wrap">
      <section className="projects-hero reveal-item">
        <p className="eyebrow">Projects</p>
        <h1 className="headline">Selected work across web, automation, and BI.</h1>
        <p className="lead">
          Click a project card to show details inside this same section. No page
          switching, just one smooth scroll experience.
        </p>
      </section>

      <section className="project-grid">
        {projects.map((project, index) => {
          const isSelected = selectedSlug === project.slug
          const previewPhotos = [...project.photos, ...project.photos]

          return (
            <article
              key={project.slug}
              className={`project-card reveal-item ${isSelected ? 'is-selected' : ''}`}
              style={{
                '--delay': `${index * 0.08}s`,
                '--rail-speed': `${28 + index * 2}s`,
              }}
            >
              <div className="project-preview" aria-hidden="true">
                <div className="project-preview-track project-preview-track-primary">
                  {previewPhotos.map((photo, photoIndex) => (
                    <img
                      key={`${project.slug}-primary-${photo}-${photoIndex}`}
                      src={photo}
                      className="project-preview-image"
                      alt=""
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
              <div className="project-overlay-content">
                <p className="project-stack">{project.stack}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-chip">
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  className={`btn btn-secondary project-open-btn ${isSelected ? 'is-selected' : ''}`}
                  onClick={() => setSelectedSlug(project.slug)}
                >
                  {isSelected ? 'Detail Selected' : 'Show Project Detail'}
                </button>
              </div>
            </article>
          )
        })}
      </section>

      {detailModal}
    </div>
  )
}

export default ProjectsPage
