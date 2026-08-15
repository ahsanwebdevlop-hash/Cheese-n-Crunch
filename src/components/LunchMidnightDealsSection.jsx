import { Link } from 'react-router-dom';
import { LUNCH_MIDNIGHT_DEALS } from '../pages/LunchMidNightDeals.jsx';

function LunchMidnightDealsSection() {
    const previewDeals = LUNCH_MIDNIGHT_DEALS.slice(0, 3);

    return (
        <section className="section-pad" id="home-lunch-midnight-deals">
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '7fr 3fr', gap: '3rem', alignItems: 'start' }}>
                    <div className="stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', width: '100%', order: 1 }}>
                        {previewDeals.map((deal) => (
                            <article key={deal.n} className="card reveal" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div className="card-img-wrap" style={{ width: '100%', height: '140px', overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
                                    <img src={deal.img} alt={deal.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div className="deal-num" style={{ maxWidth: 'fit-content', position: 'absolute', top: '8px', right: '8px', fontSize: '0.85rem' }}>
                                        Deal {deal.n}
                                    </div>
                                </div>
                                <div className="card-body" style={{ flex: 1, display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <h3 style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>{deal.title}</h3>
                                    <p className="desc" style={{ fontSize: '0.9rem', marginBottom: '1rem', flex: 1 }}>Rs. {deal.price}</p>
                                    <Link to="/lunch-mid-night-deals" className="add-btn" style={{ width: '100%', justifyContent: 'center' }}>
                                        View Deal
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="reveal" style={{ order: 2 }}>
                        <div className="section-head reveal">
                            <h2 style={{ textAlign: 'left' }}>Lunch &amp; Midnight Deals</h2>
                        </div>
                        <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem', color: 'var(--text-light)' }}>
                            Enjoy a premium mix of lunch and late-night value combos designed for every craving.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <Link to="/lunch-mid-night-deals" className="btn btn-gold">
                                Explore Lunch &amp; Midnight Deals
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          #home-lunch-midnight-deals .container > div {
            grid-template-columns: 1fr !important;
          }
          #home-lunch-midnight-deals .stagger {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}

export default LunchMidnightDealsSection;
