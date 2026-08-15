import { Link } from 'react-router-dom';

function ContactHeroSection() {
  return (
    <section className="section-pad" id="contact-hero" style={{ background: 'var(--green-950)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Left: Content */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            {/* Small Label */}
            <span style={{
              color: 'var(--gold)',
              fontSize: '0.85rem',
              fontWeight: '700',
              letterSpacing: '0.12em',
              textTransform: 'uppercase'
            }}>
              Get In Touch
            </span>

            {/* Main Heading */}
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 5vw, 48px)',
              textTransform: 'uppercase',
              marginTop: '1.5rem',
              marginBottom: '0',
              lineHeight: '1.2',
              fontWeight: '900',
              color: 'white',
              letterSpacing: '-0.01em'
            }}>
              We'd Love to Hear from You.
            </h1>

            {/* Supporting Text */}
            <p style={{
              fontSize: 'clamp(0.95rem, 1.05vw, 1.05rem)',
              lineHeight: '1.8',
              color: 'rgba(255, 255, 255, 0.85)',
              marginTop: '2rem',
              marginBottom: '0',
              maxWidth: '550px'
            }}>
              Have a question, need help with your order, or want to get in touch with Cheese 'n Crunch? We're here to help.
            </p>

            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              gap: '1.2rem',
              marginTop: '2.5rem',
              flexWrap: 'wrap'
            }}>
              {/* Primary Button: Order Now */}
              <Link
                to="/menu"
                className="btn btn-gold"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  textDecoration: 'none'
                }}
              >
                Order Now <span style={{ fontSize: '1.1em' }}>→</span>
              </Link>

              {/* Secondary Button: WhatsApp */}
              <a
                href="https://wa.me/923110992288"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.85rem 2rem',
                  border: '2px solid var(--gold)',
                  color: 'var(--gold)',
                  textDecoration: 'none',
                  borderRadius: '0.5rem',
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  backgroundColor: 'transparent',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(234, 184, 72, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(234, 184, 72, 1)';
                  e.currentTarget.style.boxShadow = '0 0 12px rgba(234, 184, 72, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'var(--gold)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                WhatsApp Us <span style={{ fontSize: '1.1em' }}>→</span>
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              width: '100%',
              maxWidth: '500px',
              borderRadius: '1.5rem',
              overflow: 'hidden',
              border: '2px solid rgba(234, 184, 72, 0.25)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)'
            }}>
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop"
                alt="Cheese 'n Crunch food and service"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  minHeight: '400px'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        #contact-hero {
          background: var(--green-950);
          position: relative;
        }

        @media (max-width: 768px) {
          #contact-hero h1 {
            font-size: 28px !important;
          }

          #contact-hero p {
            font-size: 0.9rem !important;
            margin-top: 1.5rem !important;
          }

          #contact-hero .container > div {
            gap: 2rem !important;
            grid-template-columns: 1fr !important;
          }

          #contact-hero .btn,
          #contact-hero a[style*="display: inline-flex"] {
            font-size: 0.9rem !important;
            padding: 0.75rem 1.8rem !important;
          }

          #contact-hero > div > div > div:last-of-type {
            gap: 0.8rem !important;
          }
        }
      `}</style>
    </section>
  );
}

export default ContactHeroSection;
