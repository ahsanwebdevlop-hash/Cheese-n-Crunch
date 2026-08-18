import { Link } from 'react-router-dom';
import ArrowIcon from './ArrowIcon.jsx';

function FinalCTASection() {
  return (
    <section className="section-pad about-final-cta-section section-surface-flat reveal" id="final-cta">
      <div className="container">
        <div className="about-final-cta-box">
          <div className="about-final-cta-line about-final-cta-line-top" />

          <span className="eyebrow about-final-cta-eyebrow">Ready for Your Next Craving?</span>

          <h2 className="about-final-cta-title">
            Good Food Is Just a Click Away.
          </h2>

          <p className="about-final-cta-copy">
            Explore our menu, discover your favorites, and order something delicious from Cheese &apos;n Crunch.
          </p>

          <div className="about-final-cta-actions">
            <Link to="/menu" className="btn btn-gold reveal-left">
              View Our Menu <ArrowIcon className="btn-arrow" size={16} />
            </Link>
            <Link to="/contact" className="btn btn-outline reveal-right">
              Contact Us <ArrowIcon className="btn-arrow" size={16} />
            </Link>
          </div>

          <div className="about-final-cta-line about-final-cta-line-bottom" />
        </div>
      </div>
    </section>
  );
}

export default FinalCTASection;
