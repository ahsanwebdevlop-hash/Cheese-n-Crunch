import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DEALS } from '../data/siteData.js';
import DealsModal from './DealsModal.jsx';

function HotDealsPreviewSection({ onAdd, onBuyNow, onShowToast }) {
    // Show only first 3 deals
    const featuredDeals = DEALS.slice(0, 3);
    const [openDealId, setOpenDealId] = useState(null);
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

    return (
        <>
            <section className="section-pad" id="home-hot-deals">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '3fr 7fr', gap: '3rem', alignItems: 'start' }}>
                        {/* Left: Heading, subheading, and buttons */}
                        <div className="reveal">
                            <div className="section-head reveal">
                                <h2 style={{ textAlign: 'left' }}>hot deals</h2>
                            </div>
                            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem', color: 'var(--text-light)' }}>
                                Check out our special offers and save on your favorite food.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <Link to="/deals" className="btn btn-gold">
                                    Explore All Deals
                                </Link>
                            </div>
                        </div>

                        {/* Right: 3 deal cards in one horizontal row */}
                        <div className="stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', width: '100%' }}>
                            {featuredDeals.map((deal) => (
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
                                        <button className="add-btn" onClick={() => handleOpenModal(deal.n)} style={{ width: '100%', justifyContent: 'center' }}>
                                            View Deal
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile responsiveness */}
                <style>{`
        @media (max-width: 768px) {
          #home-hot-deals .container > div {
            grid-template-columns: 1fr !important;
          }
          #home-hot-deals .stagger {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
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
