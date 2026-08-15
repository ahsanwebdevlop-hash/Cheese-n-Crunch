import { useState } from 'react';

function VisitCheeseNCrunchSection() {
  const [formData, setFormData] = useState({ name: '', phone: '', note: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build WhatsApp message for general contact
    const message = `Hello Cheese 'n Crunch,
I would like to contact you.

Name: ${formData.name}
Phone: ${formData.phone}
Note: ${formData.note}`;

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/923110992288?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Reset form
    setFormData({ name: '', phone: '', note: '' });
  };

  return (
    <section className="section-pad" id="visit-us" style={{ background: 'radial-gradient(circle at top right, rgba(232,183,63,0.08), transparent 60%), rgba(3, 30, 20, 0.5)' }}>
      <div className="container">
        <div className="section-head reveal">
          <h2>Visit Cheese 'n Crunch</h2>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '3rem', 
          marginTop: '2rem',
          background: 'linear-gradient(135deg, rgba(11, 31, 22, 0.9), rgba(16, 42, 30, 0.8))',
          padding: '2.5rem', 
          borderRadius: 'var(--radius)',
          border: '1px solid rgba(232, 183, 63, 0.22)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(232, 183, 63, 0.08)'
        }}>
          {/* Left: Contact Form */}
          <div className="reveal">
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '0' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.6rem', fontWeight: '600', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(232, 183, 63, 0.9)' }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    border: '1px solid rgba(232, 183, 63, 0.3)',
                    borderRadius: 'var(--radius)',
                    fontSize: '0.95rem',
                    background: 'rgba(8, 24, 18, 0.6)',
                    color: 'var(--text)',
                    fontFamily: 'inherit',
                    transition: 'all 0.3s ease',
                  }}
                  placeholder="Your name"
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(232, 183, 63, 0.7)';
                    e.target.style.background = 'rgba(8, 24, 18, 0.9)';
                    e.target.style.boxShadow = '0 0 0 1px rgba(232, 183, 63, 0.2), 0 0 12px rgba(232, 183, 63, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(232, 183, 63, 0.3)';
                    e.target.style.background = 'rgba(8, 24, 18, 0.6)';
                    e.target.style.boxShadow = '';
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.6rem', fontWeight: '600', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(232, 183, 63, 0.9)' }}>
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  pattern="03\d{9}"
                  title="Please enter a valid Pakistani mobile number (e.g., 03110992288)"
                  required
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    border: '1px solid rgba(232, 183, 63, 0.3)',
                    borderRadius: 'var(--radius)',
                    fontSize: '0.95rem',
                    background: 'rgba(8, 24, 18, 0.6)',
                    color: 'var(--text)',
                    fontFamily: 'inherit',
                    transition: 'all 0.3s ease',
                  }}
                  placeholder="03XXXXXXXXX (11 digits)"
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(232, 183, 63, 0.7)';
                    e.target.style.background = 'rgba(8, 24, 18, 0.9)';
                    e.target.style.boxShadow = '0 0 0 1px rgba(232, 183, 63, 0.2), 0 0 12px rgba(232, 183, 63, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(232, 183, 63, 0.3)';
                    e.target.style.background = 'rgba(8, 24, 18, 0.6)';
                    e.target.style.boxShadow = '';
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.6rem', fontWeight: '600', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(232, 183, 63, 0.9)' }}>
                  Message/Note
                </label>
                <textarea
                  name="note"
                  value={formData.note}
                  onChange={handleInputChange}
                  rows="4"
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    border: '1px solid rgba(232, 183, 63, 0.3)',
                    borderRadius: 'var(--radius)',
                    fontSize: '0.95rem',
                    background: 'rgba(8, 24, 18, 0.6)',
                    color: 'var(--text)',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                    transition: 'all 0.3s ease',
                  }}
                  placeholder="Tell us about your event, feedback, or any special requests..."
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(232, 183, 63, 0.7)';
                    e.target.style.background = 'rgba(8, 24, 18, 0.9)';
                    e.target.style.boxShadow = '0 0 0 1px rgba(232, 183, 63, 0.2), 0 0 12px rgba(232, 183, 63, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(232, 183, 63, 0.3)';
                    e.target.style.background = 'rgba(8, 24, 18, 0.6)';
                    e.target.style.boxShadow = '';
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-gold"
                style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Contact Info - Two Column Layout */}
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
            {/* Left Sub-Column: Visit Us & Contact */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {/* Visit Us */}
              <div>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(232, 183, 63, 1)', textShadow: '0 2px 8px rgba(232, 183, 63, 0.15)' }}>
                  Visit Us
                </h3>
                <p style={{ lineHeight: '1.8', color: 'rgba(245, 235, 208, 0.85)', fontSize: '0.95rem' }}>
                  Yasir Plaza<br />
                  Near DHQ Hospital<br />
                  Sargodha Road, Chiniot
                </p>
              </div>

              {/* Contact */}
              <div>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(232, 183, 63, 1)', textShadow: '0 2px 8px rgba(232, 183, 63, 0.15)' }}>
                  Contact
                </h3>
                <a
                  href="tel:03110992288"
                  style={{ color: 'rgba(245, 235, 208, 0.9)', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem', transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'rgba(232, 183, 63, 1)';
                    e.target.style.textShadow = '0 0 12px rgba(232, 183, 63, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'rgba(245, 235, 208, 0.9)';
                    e.target.style.textShadow = '';
                  }}
                >
                  +92 311 0992288
                </a>
              </div>
            </div>

            {/* Right Sub-Column: Opening Hours */}
            <div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(232, 183, 63, 1)', textShadow: '0 2px 8px rgba(232, 183, 63, 0.15)' }}>
                Opening Hours
              </h3>
              <p style={{ lineHeight: '1.8', color: 'rgba(245, 235, 208, 0.85)', fontSize: '0.95rem' }}>
                Monday - Sunday<br />
                11:00 AM - 3:00 AM
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #visit-us > .container > div {
            grid-template-columns: 1fr !important;
          }
          
          #visit-us .reveal:last-child {
            display: grid !important;
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}

export default VisitCheeseNCrunchSection;
