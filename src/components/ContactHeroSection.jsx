import { Link } from 'react-router-dom';

function ContactHeroSection() {
  return (
    <section className="section-pad section-surface-flat" id="contact-hero">
      <div className="container">
        <div className="content-hero-grid">
          <div className="content-hero-copy reveal">
            <span className="eyebrow">Get In Touch</span>
            <h1 className="content-hero-title">We&apos;d Love to Hear from You.</h1>
            <p className="text-lead" style={{ marginTop: 'var(--space-xl)' }}>
              Have a question, need help with your order, or want to get in touch with Cheese &apos;n Crunch? We&apos;re here to help.
            </p>
            <div className="content-hero-actions">
              <Link to="/menu" className="btn btn-gold">
                Order Now <span className="btn-arrow" aria-hidden="true">→</span>
              </Link>
              <a
                href="https://wa.me/923110992288"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                WhatsApp Us <span className="btn-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="reveal">
            <div className="media-frame">
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop"
                alt="Cheese 'n Crunch food and service"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHeroSection;
