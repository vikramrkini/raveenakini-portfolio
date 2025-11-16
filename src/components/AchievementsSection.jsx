import { achievementList } from '../data/portfolioData'

export default function AchievementsSection() {
  return (
    <section id="achievements" className="section-grid achievements-page">
      <div className="achievements-hero">
        <div>
          <p className="section-label">Achievements</p>
          <h2>Honours, publications & leadership</h2>
          <p>
            Dr. Raveena Kini blends academic excellence with community leadership, spanning scholarship-winning
            research, national presentations, and a growing private practice that uplifts underserved voices.
          </p>
        </div>
        <div className="hero-pill-grid">
          <span>Gold Medalist</span>
          <span>Scholarship Recipient</span>
          <span>Speaker • Author</span>
        </div>
      </div>
      <div className="achievements-grid">
        {achievementList.map((highlight) => (
          <article key={highlight.title} className="achievement-card">
            <figure>
              <img src={highlight.image} alt={highlight.title} />
            </figure>
            <div className="achievement-body">
              <div className="year-badge">{highlight.year}</div>
              <h3>{highlight.title}</h3>
              <p>{highlight.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
