export default function ContactSection() {
  return (
    <section id="contact" className="section-grid contact">
      <div className="section-heading">
        <p className="section-label">Contact us</p>
        <h2>Let’s begin a brave conversation</h2>
      </div>
      <div className="contact-card contact-layout">
        <div className="contact-info">
          <p>
            Address:
            <br />
            Ground Floor, Hiramani Enclave,
            <br />
            Tilak Mandir Road, Vile Parle East,
            <br />
            Mumbai 400057
          </p>
          <p>Mobile: +91 81086 66145</p>
          <p>On prior appointment basis only</p>
        </div>
        <div className="contact-map">
          <iframe
            title="clinic-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.806667748815!2d72.84521141508518!3d19.09893538706989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b586da6c21%3A0xf7b8ff56bf63bdd9!2sDr%20Raveena%20Kini%20(PT)!5e0!3m2!1sen!2sin!4v1731437100000!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
