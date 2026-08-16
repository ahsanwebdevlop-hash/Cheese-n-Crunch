import { Link } from 'react-router-dom';
import { LUNCH_MIDNIGHT_DEALS } from '../pages/LunchMidNightDeals.jsx';

function LunchMidnightDealsSection() {
  const previewDeals = LUNCH_MIDNIGHT_DEALS.slice(0, 3);
  const lnmdealpreview = (items) => {
    if (!items || items.length === 0) return '';
    return items.slice(0, 2).map((item) => item.name).join(', ') + (items.length > 2 ? '...' : '');
  };
  return (
    <section className="section-pad section-surface" id="home-lunch-midnight-deals">
      <div className="container">
        <span className='eyebrow' style={{ marginBottom: '20px',maxWidth: 'fit-content',padding:'12px',display:'block',marginInline:'auto' }}>Lunch &amp; Midnight Deals</span>
        <div className="preview-split preview-split--reverse">
          <div className="preview-cards-row stagger">
            {previewDeals.map((deal) => (
              <article key={deal.n} className="card card-compact reveal">
                <div className="card-img-wrap">
                  <img src={deal.img} alt={deal.title} />
                  <div className="deal-num">Deal {deal.n}</div>
                </div>
                <div className="card-body">
                  <h3>{deal.title}</h3>
                  <p className="desc">{lnmdealpreview(deal.items)}</p>
                  <p className="desc">Rs. {deal.price}</p>
                  <Link to="/lunch-mid-night-deals" className="add-btn">
                    View Deal
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="preview-split__copy reveal">
            <div className="section-head section-head--left reveal dis-block">
              <h2 className='text-left'>Lunch &amp; Midnight Deals</h2>
            </div>
            <p className="text-lead">
              Enjoy our special deals at lunch and late night. Available from 1 PM to 4 PM and 11 PM to 3 AM.
            </p>
            <div className="section-ctas section-ctas--start">
              <Link to="/lunch-mid-night-deals" className="btn btn-gold">
                Explore Lunch &amp; Midnight Deals
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LunchMidnightDealsSection;
