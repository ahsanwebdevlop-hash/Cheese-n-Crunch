import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DEALS } from '../data/siteData.js';
import DealsModal from './DealsModal.jsx';

function HotDealsPreviewSection({ onAdd, onBuyNow, onShowToast }) {
  const featuredDeals = [DEALS[1], DEALS[4], DEALS[6]]; const [openDealId, setOpenDealId] = useState(null);
  const handleAdd = onAdd || (() => { });
  const handleBuyNow = onBuyNow || (() => { });
  const handleShowToast = onShowToast || (() => { });

  const handleOpenModal = (dealId) => {
    setOpenDealId(dealId);
  };

  const handleCloseModal = () => {
    setOpenDealId(null);
  };

  const handleAddDeal = (deal, qty, selectedFlavors, selectedToppings) => {
    const cartItem = {
      name: deal.title,
      price: deal.price,
      qty,
      img: deal.img,
      is_deal: true,
      dealId: deal.n,
      items: deal.items,
      selectedFlavors,
      selectedToppings,
    };

    handleAdd(cartItem);
    handleShowToast(`Added ${deal.title} (x${qty}) to cart`);
    handleCloseModal();
  };

  const handleBuyNowDeal = (deal, qty, selectedFlavors, selectedToppings) => {
    const cartItem = {
      name: deal.title,
      price: deal.price,
      qty,
      img: deal.img,
      is_deal: true,
      dealId: deal.n,
      items: deal.items,
      selectedFlavors,
      selectedToppings,
    };

    handleBuyNow(cartItem);
    handleShowToast(`Buy Now for ${deal.title}`);
    handleCloseModal();
  };

  const selectedDeal = featuredDeals.find((deal) => deal.n === openDealId) || null;
  const hotdealpreview = (items) => {
    if (!items || items.length === 0) return '';
    return items.slice(0, 2).map((item) => item.name).join(', ') + (items.length > 2 ? '...' : '');
  };
  return (
    <>
      <section className="section-pad section-surface" id="home-hot-deals">
        <div className="container">
          <span className='eyebrow' style={{ marginBottom: '20px', maxWidth: 'fit-content', padding: '12px', display: 'block', marginInline: 'auto' }}>Hot Deals</span>
          <div className="preview-split">
            <div className="preview-split__copy reveal-left">
              <div className="section-head section-head--left reveal dis-block">
                <h2 className='text-left'>hot deals</h2>
              </div>
              <p className="text-lead">
                Enjoy our best deals on burgers, pizzas, pasta, and more.
              </p>
              <div className="section-ctas section-ctas--start">
                <Link to="/deals" className="btn btn-gold">
                  Explore All Deals
                </Link>
              </div>
            </div>

            <div className="preview-cards-row stagger reveal-right">
              {featuredDeals.map((deal) => (
                <article key={deal.n} className="card card-compact reveal">
                  <div className="card-img-wrap">
                    <img src={deal.img} alt={deal.title} />
                    <div className="deal-num">Deal {deal.n}</div>
                  </div>
                  <div className="card-body">
                    <h3>{deal.title}</h3>
                    <p className="desc">{hotdealpreview(deal.items)}</p>
                    <p className="desc">Rs. {deal.price}</p>
                    <button type="button" className="add-btn" onClick={() => handleOpenModal(deal.n)}>
                      View Deal
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedDeal && (
        <>
          <div className="modal-overlay open" onClick={handleCloseModal} />
          <DealsModal
            isOpen={true}
            deal={selectedDeal}
            onClose={handleCloseModal}
            onAdd={handleAddDeal}
            onBuyNow={handleBuyNowDeal}
          />
        </>
      )}
    </>
  );
}

export default HotDealsPreviewSection;
