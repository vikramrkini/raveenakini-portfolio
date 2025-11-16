import { researches } from '../data/portfolioData'

export default function ResearchSection() {
  return (
    <section id="published-researches" className="section-grid research-section">
      <div className="section-heading">
        <p className="section-label">Published Researches</p>
        <h2>Evidence fed by rigorous study</h2>
      </div>
      <div className="research-list">
        {researches.map((project) => (
          <article key={project.title} className="research-card">
            <div>
              <h3>{project.title}</h3>
              <p className="venue">{project.venue}</p>
            </div>
            <p>
              {project.summary}
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer">
                  View paper
                </a>
              )}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
