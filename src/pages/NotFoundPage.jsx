import AppLink from '../components/AppLink'

function NotFoundPage({ navigate }) {
  return (
    <div className="content-wrap">
      <section className="about-panel reveal-item">
        <p className="eyebrow">404</p>
        <h1 className="headline">This page does not exist yet.</h1>
        <p className="lead">
          Use the button below to go back to your portfolio homepage.
        </p>
        <AppLink to="home" navigate={navigate} className="btn btn-primary">
          Back Home
        </AppLink>
      </section>
    </div>
  )
}

export default NotFoundPage
