function ContactSection() {
  return (
    <section className="section-pad" id="contact" style={{ background: 'var(--green-950)' }}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Get In Touch</span>
          <h2>Location <em>&amp;</em> Contact</h2>
          <p>Order directly on WhatsApp or reach out with any questions.</p>
        </div>
        <div className="contact-grid stagger">
          <div className="contact-card">
            <div className="contact-row">
              <div className="ic">🍕</div>
              <div className="t">
                <small>Restaurant</small>
                <strong>Cheese 'n Crunch — Fast Food & Juices</strong>
              </div>
            </div>
            <div className="contact-row">
              <div className="ic">💬</div>
              <div className="t">
                <small>WhatsApp</small>
                <strong>0311-0992288</strong>
              </div>
            </div>
            <div className="contact-row">
              <div className="ic">🚚</div>
              <div className="t">
                <small>Delivery</small>
                <strong>Free delivery, all of Chiniot</strong>
              </div>
            </div>
            <div className="contact-row">
              <div className="ic">🕒</div>
              <div className="t">
                <small>Opening Hours</small>
                <strong>Coming soon</strong>
              </div>
            </div>
            <a href="https://wa.me/923110992288" target="_blank" rel="noopener" className="btn btn-gold" style={{ marginTop: '18px', width: '100%' }}>
              Chat on WhatsApp
            </a>
          </div>
          <div className="map-placeholder">
            <div className="ic">📍</div>
            <p>Map location will be added once the exact address is confirmed.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
