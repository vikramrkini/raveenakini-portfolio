import clinicImage from '../assets/clinic.png'

const whyHighlights = [
  'Expertise You Can Trust – Led by a Musculoskeletal Physiotherapist with advanced clinical and teaching experience.',
  'Evidence-Based Practice – Every treatment plan is backed by current research and proven physiotherapy methods.',
  'Comprehensive Care – From degenerative and trauma conditions to rehabilitation and fitness — complete care under one roof.',
  'Personalized Treatment Plans – Each program is tailored to your individual goals, lifestyle, and recovery pace.',
  'Certified and Skilled Professional – Certified Medical Writer trained in Manual Therapy, Dry Needling, Kinesiology Taping, and more.',
  'Commitment to Education & Innovation – Award-winning educator recognized for competency-based training and advanced physiotherapy education.',
  'Patient-Centered Approach – Focused on long-term recovery, prevention, and empowering patients through knowledge.',
  'Easy to take appointment – Request via WhatsApp and receive confirmation within minutes.',
  'Good infection control and hygiene – We maintain robust infection control policies to ensure safe care.',
  'One patient at a time policy – Appointments are private, confidential, and paced to your needs.',
  'Strict adherence to time – Appointments minimize waiting time and are valued equally from both sides.',
]

export default function WhySection() {
  return (
    <section id="why" className="section-grid alt why-section">
      <div className="section-heading">
        <p className="section-label">Why choose us?</p>
        <h2>Precision, compassion, continuity</h2>
      </div>
      <div className="why-image center">
        <img src={clinicImage} alt="Clinic interior" />
      </div>
      <div className="why-content column">
        <ul className="why-list">
          {whyHighlights.map((item) => (
            <li key={item}>
              <span>☑️</span>
              <p>{item}</p>
            </li>
          ))}
        </ul>
        <div className="google-card">
          <h3>What our patients say</h3>
          <blockquote className="google-review">
            “Dr Raveena is not only extremely knowledgeable but genuinely caring and empathetic. She customizes every session, monitors progress closely, and celebrates small victories. The clinic is spotless and appointments always run on time.”
          </blockquote>
          <span className="google-rating">★★★★★ 5.0 on Google</span>
          <a href="https://share.google/DnR1nLTkClYzNM4a2" target="_blank" rel="noreferrer">
            Read all Google reviews ↗
          </a>
        </div>
      </div>
    </section>
  )
}
