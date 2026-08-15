import { useState } from 'react';

function VisitCheeseNCrunchSection() {
  const [formData, setFormData] = useState({ name: '', phone: '', note: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello Cheese 'n Crunch,
I would like to contact you.

Name: ${formData.name}
Phone: ${formData.phone}
Note: ${formData.note}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/923110992288?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', phone: '', note: '' });
  };

  return (
    <section className="section-pad section-surface" id="visit-us">
      <div className="container">
        <div className="section-head reveal">
          <h2>Visit Cheese &apos;n Crunch</h2>
        </div>

        <div className="visit-panel reveal">
          <div>
            <form onSubmit={handleSubmit} className="visit-form">
              <div>
                <label htmlFor="visit-name" className="form-label-accent">Name</label>
                <input
                  id="visit-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="visit-phone" className="form-label-accent">Phone</label>
                <input
                  id="visit-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  pattern="03\d{9}"
                  title="Please enter a valid Pakistani mobile number (e.g., 03110992288)"
                  required
                  placeholder="03XXXXXXXXX (11 digits)"
                />
              </div>

              <div>
                <label htmlFor="visit-note" className="form-label-accent">Message/Note</label>
                <textarea
                  id="visit-note"
                  name="note"
                  value={formData.note}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Tell us about your event, feedback, or any special requests..."
                />
              </div>

              <button type="submit" className="btn btn-gold" style={{ alignSelf: 'flex-start' }}>
                Send Message
              </button>
            </form>
          </div>

          <div className="visit-info-grid">
            <div>
              <div style={{ marginBottom: 'var(--space-xl)' }}>
                <h3 className="info-block-title">Visit Us</h3>
                <p className="info-block-text">
                  Yasir Plaza<br />
                  Near DHQ Hospital<br />
                  Sargodha Road, Chiniot
                </p>
              </div>

              <div>
                <h3 className="info-block-title">Contact</h3>
                <a href="tel:03110992288" className="info-link">
                  +92 311 0992288
                </a>
              </div>
            </div>

            <div>
              <h3 className="info-block-title">Opening Hours</h3>
              <p className="info-block-text">
                Monday - Sunday<br />
                11:00 AM - 3:00 AM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisitCheeseNCrunchSection;
