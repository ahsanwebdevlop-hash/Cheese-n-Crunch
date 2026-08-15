import { Link } from 'react-router-dom';

function OurMissionSection() {
  return (
    <section className="section-pad our-mission-section" id="our-mission" style={{ background: 'var(--green-950)' }}>
      <div className="container">
        <div className="our-mission-wrap">
          <div className="our-mission-line our-mission-line-top" />

          <span className="eyebrow our-mission-eyebrow">Our Mission</span>

          <h2 className="our-mission-title">
            Good Food. Bold Flavors. Happy People.
          </h2>

          <p className="our-mission-copy">
            At Cheese 'n Crunch, we believe great food starts with fresh ingredients and bold flavors. We craft every pizza, every dish, and every drink to satisfy real cravings. With generous portions, affordable prices, and food made to order, we're here to make every meal memorable.
          </p>

          <div className="our-mission-cta-wrap">
            <Link 
              to="/menu" 
              className="btn btn-gold our-mission-cta"
            >
              Explore Our Menu <span style={{ fontSize: '1.2em' }}>→</span>
            </Link>
          </div>

          <div className="our-mission-line our-mission-line-bottom" />
        </div>
      </div>
    </section>
  );
}

export default OurMissionSection;
