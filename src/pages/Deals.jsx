import { Link } from 'react-router-dom';
import DealsSection from '../components/DealsSection.jsx';
import LunchMidnightDealsSection from '../components/LunchMidnightDealsSection.jsx';
import BarFeaturedItemsSection from '../components/BarFeaturedItemsSection.jsx';
import ArrowIcon from '../components/ArrowIcon.jsx';
import { DEALS } from '../data/siteData.js';
import FinalCTASection from '../components/FinalCTASection.jsx';

function Deals({ deals, onAdd, onBuyNow, onShowToast }) {
  const data = deals || DEALS;

  return (
    <>
      <section className="hero deals-page-hero reveal" id="hot-deals-hero">
        <div className="container hero-grid deals-hero-grid">
          <div className="deals-hero-copy">
            <h1>
              <span className="brand-cheese">Hot</span> <span className="brand-n">Deals</span>
            </h1>
            <p className="desc">Cheese 'n Crunch offers special food deals featuring pizza, fast food, and more in Chiniot. Browse our deals and order on WhatsApp.</p>
            <div className="hero-ctas">
              <Link to="/menu" className="btn btn-gold">View All Menu <ArrowIcon className="btn-arrow" size={16} /></Link>
              <Link to="/lunch-mid-night-deals" className="btn btn-outline">Explore Lunch &amp; Midnight Deals <ArrowIcon className="btn-arrow" size={16} /></Link>
            </div>
          </div>

          <div className="hero-visual deals-hero-visual" aria-hidden="true">
            <div className="plate-glow" />
            <img
              className="food-img"
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=900&auto=format&fit=crop"
              alt="Hot deals pizza and fast food specials"
            />
            <div className="crumb" />
            <div className="crumb" />
            <div className="crumb" />
          </div>
        </div>
      </section>

      <DealsSection
        deals={data}
        onAdd={onAdd}
        onBuyNow={onBuyNow}
        onShowToast={onShowToast}
        title="Food Deals in Chiniot"
        eyebrow="Special Offers"
        tagline="Cheese 'n Crunch offers special food deals featuring pizza, fast food, and more in Chiniot. Browse our deals and order on WhatsApp."
      />

      <BarFeaturedItemsSection />
      <LunchMidnightDealsSection />
      <FinalCTASection />
    </>
  );
}

export default Deals;
