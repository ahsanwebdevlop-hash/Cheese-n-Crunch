import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DEALS } from '../data/siteData.js';
import DealsModal from './DealsModal.jsx';

function HotDealsPreviewSection({ onAdd, onBuyNow, onShowToast }) {
  const featuredDeals = DEALS.slice(0, 3);
  const [openDealId, setOpenDealId] = useState(null);
  const handleAdd = onAdd || (() => {});
  const handleBuyNow = onBuyNow || (() => {});
  const handleShowToast = onShowToast || (() => {});

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

  return (
    <>
      <section className="section-pad section-surface" id="home-hot-deals">
        <div className="container">
          <div className="preview-split">
            <div className="preview-split__copy reveal">
              <div className="section-head section-head--left reveal">
                <h2>hot deals</h2>
              </div>
              <p className="text-lead">
                Check out our special offers and save on your favorite food.
              </p>
              <div className="section-ctas section-ctas--start">
                <Link to="/deals" className="btn btn-gold">
                  Explore All Deals
                </Link>
              </div>
            </div>

            <div className="preview-cards-row stagger">
              {featuredDeals.map((deal) => (
                <article key={deal.n} className="card card-compact reveal">
                  <div className="card-img-wrap">
                    <img src={deal.img} alt={deal.title} />
                    <div className="deal-num">Deal {deal.n}</div>
                  </div>
                  <div className="card-body">
                    <h3>{deal.title}</h3>
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
