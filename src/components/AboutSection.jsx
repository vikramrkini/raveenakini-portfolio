import portrait from '../assets/ravi-portfolio-pic.png'
import { aboutParagraphs, highlightPoints, milestones, aboutStats } from '../data/portfolioData'

export default function AboutSection() {
  return (
    <section id="about" className="section-grid about">
      <div className="about-card">
        <figure className="about-figure">
          <img src={portrait} alt="Dr Raveena Kini portrait" />
        </figure>
        <div className="about-content">
          <p className="section-label">About Dr Raveena Kini (PT)</p>
          <h2>Physiotherapist championing empowered movement</h2>
          <div className="about-stats">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="about-stat">
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
                <p className="stat-detail">{stat.detail}</p>
              </div>
            ))}
          </div>
          <div className="about-summary">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="highlight-list">
            {highlightPoints.map((point) => (
              <li key={point} className="highlight-pill">
                {point}
              </li>
            ))}
          </ul>
          <div className="milestones">
            {milestones.map((item) => (
              <article key={item.year} className="milestone">
                <span className="milestone-year">{item.year}</span>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
