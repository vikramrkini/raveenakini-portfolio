import { certifications } from '../data/portfolioData'

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section-grid alt certifications-page">
      <div className="section-heading">
        <p className="section-label">Certifications</p>
        <h2>Evidence-backed training</h2>
      </div>
      <div className="certifications-grid">
        {certifications.map((cert) => (
          <article key={cert.name} className="cert-card">
            <div className="cert-mark">
              <span>✔</span>
            </div>
            <div className="cert-body">
              <strong>{cert.name}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
