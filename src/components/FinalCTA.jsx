import { Link } from 'react-router-dom';

function FinalCTA() {
  return (
    <section className="final-cta" aria-labelledby="home-cta-heading">
      <div className="container reveal">
        <h2 id="home-cta-heading">Pizza, Juices & Desserts in Chiniot</h2>
        <div className="ctas">
          <a href="https://wa.me/923110992288" target="_blank" rel="noopener" className="btn btn-gold">Order on WhatsApp</a>
          <Link to="/menu" className="btn btn-outline">View Menu</Link>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
