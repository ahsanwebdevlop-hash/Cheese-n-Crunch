import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero reveal" id="home">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow hero-badge">Fast Food & Juices</span>
          <h1>
            <span className="brand-cheese">Cheese</span> <span className="brand-n">'n</span>
            <br />
            <span className="brand-crunch">Crunch</span>
          </h1>
          <div className="sub">"Say yes to pizza..."</div>
          <p className="desc">Cheese 'n Crunch serves fast food, pizza, juices and desserts in Chiniot, with dine-in, takeaway, delivery and booking area for up to 10 people. Open daily from 11 AM to 3 AM.</p>
          <div className="hero-ctas">
            <Link to="/deals" className="btn btn-gold">Hot Deals</Link>
            <Link to="/menu" className="btn btn-outline">View Menu</Link>
          </div>
          <div className="hero-free"><span className="dot" /> Free Delivery in Chiniot</div>
        </div>
        <div className="hero-visual">
          <div className="plate-glow" aria-hidden="true" />
          <img
            className="food-img"
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=900&auto=format&fit=crop"
            alt="Loaded Cheese 'n Crunch pizza fresh from the oven"
          />
          <div className="crumb" />
          <div className="crumb" />
          <div className="crumb" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
