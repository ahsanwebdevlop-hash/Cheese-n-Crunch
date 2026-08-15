import { Link } from 'react-router-dom';
import DealsSection from '../components/DealsSection.jsx';
import HotDealsPreviewSection from '../components/CustomerFavoritesSection.jsx';

export const LUNCH_MIDNIGHT_DEALS = [
    {
      n: 1,
      title: 'Deal 1',
      price: 595,
      img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop',
      items: [
        { name: '1 Small Pizza', type: 'pizza', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=600&auto=format&fit=crop' },
        { name: '1 Regular Drink', type: 'drink', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1554866585-cd4628902094?q=80&w=600&auto=format&fit=crop' },
      ],
    },
    {
      n: 2,
      title: 'Deal 2',
      price: 1095,
      img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop',
      items: [
        { name: '1 Wrap', type: 'wrap', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop' },
        { name: '1 Small Pizza', type: 'pizza', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=600&auto=format&fit=crop' },
        { name: 'Half Liter Drink', type: 'drink', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1554866585-cd4628902094?q=80&w=600&auto=format&fit=crop' },
      ],
    },
    {
      n: 3,
      title: 'Deal 3',
      price: 1195,
      img: 'https://images.unsplash.com/photo-1548365328-9f547fb0953b?q=80&w=800&auto=format&fit=crop',
      items: [
        { name: '1 Zinger Burger', type: 'burger', hasFlavorOption: false, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop' },
        { name: '12pcs Hot Wings', type: 'burger', hasFlavorOption: false, img: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=600&auto=format&fit=crop' },
        { name: 'Half Liter Drink', type: 'drink', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1554866585-cd4628902094?q=80&w=600&auto=format&fit=crop' },
      ],
    },
    {
      n: 4,
      title: 'Deal 4',
      price: 1595,
      img: 'https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=800&auto=format&fit=crop',
      items: [
        { name: '1 Regular Pizza', type: 'pizza', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=600&auto=format&fit=crop' },
        { name: 'Salad Bowl', type: 'burger', hasFlavorOption: false, img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=600&auto=format&fit=crop' },
        { name: 'Half Liter Drink', type: 'drink', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1554866585-cd4628902094?q=80&w=600&auto=format&fit=crop' },
      ],
    },
    {
      n: 5,
      title: 'Deal 5',
      price: 1745,
      img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=800&auto=format&fit=crop',
      items: [
        { name: '1 Large Pizza', type: 'pizza', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=600&auto=format&fit=crop' },
        { name: '1 Liter Drink', type: 'drink', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1554866585-cd4628902094?q=80&w=600&auto=format&fit=crop' },
      ],
    },
    {
      n: 6,
      title: 'Deal 6',
      price: 2395,
      img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=800&auto=format&fit=crop',
      items: [
        { name: '1 Grand Square', type: 'pizza', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=600&auto=format&fit=crop' },
        { name: 'Salad Bowl', type: 'burger', hasFlavorOption: false, img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=600&auto=format&fit=crop' },
        { name: '1 Liter Drink', type: 'drink', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1554866585-cd4628902094?q=80&w=600&auto=format&fit=crop' },
      ],
    },
    {
      n: 7,
      title: 'Deal 7',
      price: 2295,
      img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop',
      items: [
        { name: '1 X-Large Pizza', type: 'pizza', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=600&auto=format&fit=crop' },
        { name: '1.5 Liter Drink', type: 'drink', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1554866585-cd4628902094?q=80&w=600&auto=format&fit=crop' },
      ],
    },
    {
      n: 8,
      title: 'Deal 8',
      price: 2695,
      img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800&auto=format&fit=crop',
      items: [
        { name: '1 Large Pizza', type: 'pizza', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=600&auto=format&fit=crop' },
        { name: 'CnC Pasta', type: 'pasta', hasFlavorOption: false, img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=600&auto=format&fit=crop' },
        { name: 'Brownie', type: 'brownie', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=600&auto=format&fit=crop' },
        { name: '1.5 Liter Drink', type: 'drink', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1554866585-cd4628902094?q=80&w=600&auto=format&fit=crop' },
      ],
    },
  ];

function LunchMidNightDeals({ onAdd, onBuyNow, onShowToast }) {
  const lunchDeals = LUNCH_MIDNIGHT_DEALS;

  return (
    <>
      <section className="hero" id="lunch-midnight-hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow hero-badge">Lunch &amp; Midnight Specials</span>
            <h1>
              <span className="brand-cheese">Lunch &amp; Midnight</span>
              <span className="brand-n">Deals</span>
            </h1>
            <p className="desc">Enjoy our signature lunch and late-night value packs with pizza, burgers, wraps, and more. These special deals are available during both of our most popular time windows.</p>
            <div style={{ display: 'grid', gap: '10px', marginTop: '18px', maxWidth: '420px' }}>
              <div className="eyebrow" style={{ width: 'fit-content', background: 'rgba(232,183,63,0.06)' }}>Lunch: 1 PM – 4 PM</div>
              <div className="eyebrow" style={{ width: 'fit-content', background: 'rgba(232,183,63,0.06)' }}>Midnight: 11 PM – 3 AM</div>
            </div>
            <div className="hero-ctas">
              <Link to="/menu" className="btn btn-gold">View All Menu →</Link>
              <Link to="/deals" className="btn btn-outline">Explore Hot Deals →</Link>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="plate-glow" />
            <img
              className="food-img"
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=900&auto=format&fit=crop"
              alt="Lunch and midnight deal pizza and fast food spread"
            />
            <div className="crumb" />
            <div className="crumb" />
            <div className="crumb" />
          </div>
        </div>
      </section>

      <DealsSection
        deals={lunchDeals}
        onAdd={onAdd}
        onBuyNow={onBuyNow}
        onShowToast={onShowToast}
        eyebrow="Available 24/7"
        title="Lunch & Mid Night Deals"
        accentTitle=""
        tagline="Late-night cravings and lunch breaks call for special deals. Order your favorite pizza, burgers, and fast food from Cheese 'n Crunch in Chiniot."
        sectionId="lunch-mid-night-deals"
      />

      <HotDealsPreviewSection
        onAdd={onAdd}
        onBuyNow={onBuyNow}
        onShowToast={onShowToast}
      />
    </>
  );
}

export default LunchMidNightDeals;
