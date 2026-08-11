import { Link } from 'react-router-dom';

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container reveal">
        <h2>Ready To <span>Say Yes</span> To Pizza?</h2>
        <div className="ctas">
          <Link to="/deals" className="btn btn-gold">Reviews</Link>
          <a href="https://wa.me/923110992288" target="_blank" rel="noopener" className="btn btn-outline">WhatsApp Us</a>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
