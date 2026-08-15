import { Link } from 'react-router-dom';

function FinalCTASection() {
  return (
    <section className="section-pad about-final-cta-section" id="final-cta" style={{ background: 'var(--green-950)' }}>
      <div className="container">
        <div className="about-final-cta-box">
          <div className="about-final-cta-line about-final-cta-line-top" />

          <span className="eyebrow about-final-cta-eyebrow">Ready for Your Next Craving?</span>

          <h2 className="about-final-cta-title">
            Good Food Is Just a Click Away.
          </h2>

          <p className="about-final-cta-copy">
            Explore our menu, discover your favorites, and order something delicious from Cheese 'n Crunch.
          </p>

          <div className="about-final-cta-actions">
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
              View Our Menu <span style={{ fontSize: '1.1em' }}>→</span>
            </Link>

            <Link 
              to="/contact" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.85rem 2.2rem',
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
              Contact Us <span style={{ fontSize: '1.1em' }}>→</span>
            </Link>
          </div>

          <div className="about-final-cta-line about-final-cta-line-bottom" />
        </div>
      </div>
    </section>
  );
}

export default FinalCTASection;
