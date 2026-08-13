import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow hero-badge">Fast Food & Juices</span>
          <h1>CHEESE 'n<span>CRUNCH</span></h1>
          <div className="sub">"Say yes to pizza..."</div>
          <p className="desc">Fresh flavors, loaded pizzas, irresistible deals and fast food made to satisfy every craving.</p>
          <div className="hero-ctas">
            <Link to="/about" className="btn btn-gold">About C'n C</Link>
            <Link to="/menu" className="btn btn-outline">Explore Menu</Link>
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
