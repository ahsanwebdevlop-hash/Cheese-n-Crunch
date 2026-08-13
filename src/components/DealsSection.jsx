import { useState } from 'react';
import DealsModal from './DealsModal.jsx';

function DealsSection({
  deals,
  onAdd,
  onShowToast,
  eyebrow = 'Limited Time',
  title = 'Hot',
  accentTitle = 'Deals',
  tagline = 'Big cravings deserve bigger deals.',
  sectionId = 'deals',
}) {
  const [openDealId, setOpenDealId] = useState(null);

  const handleOpenModal = (dealId) => {
    setOpenDealId(dealId);
  };

  const handleCloseModal = () => {
    setOpenDealId(null);
  };

  const getDealDisplayName = (deal, selectedFlavors) => {
    const unitFlavors = selectedFlavors && selectedFlavors.unit1 ? selectedFlavors.unit1 : selectedFlavors;
    const displayItems = deal.items.map((item, index) => {
      const chosenFlavor = unitFlavors && unitFlavors[index];
      if (item.hasFlavorOption && chosenFlavor) {
        return `${item.name} ${chosenFlavor}`;
      }
      return item.name;
    });

    return displayItems.join(', ');
  };

  const handleAddDeal = (deal, qty, selectedFlavors) => {
    const cartItem = {
      name: getDealDisplayName(deal, selectedFlavors),
      price: deal.price,
      qty: qty,
      img: deal.img,
      is_deal: true,
      dealId: deal.n,
      items: deal.items,
      selectedFlavors: selectedFlavors,
    };
    onAdd(cartItem);
    onShowToast(`Added ${deal.title} (x${qty}) to cart`);
    handleCloseModal();
  };

  const handleBuyNow = (deal) => {
    // Placeholder for future "Buy Now" functionality
    onShowToast(`Buy Now for ${deal.title}`);
  };

  const getItemsPreview = (items) => {
    if (!items || items.length === 0) return '';
    return items.slice(0, 2).map((item) => item.name).join(', ') + (items.length > 2 ? '...' : '');
  };

  return (
    <section className="section-pad" id={sectionId}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h2>
            {title} <em>{accentTitle}</em>
          </h2>
          <p>{tagline}</p>
        </div>
        <div className="deals-grid stagger">
          {deals.map((deal) => (
            <article key={deal.n} className="card">
              <div className="card-img-wrap">
                <img src={deal.img} alt={deal.title} />
                <div className="deal-num">Deal {deal.n}</div>
              </div>
              <div className="card-body">
                <h3>{deal.title}</h3>
                <p className="desc">{getItemsPreview(deal.items)}</p>
                <div className="card-foot">
                  <div className="price">Rs. {deal.price}</div>
                  <button
                    className="add-btn"
                    onClick={() => handleOpenModal(deal.n)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Render DealsModal for the open deal */}
      {openDealId && (
        <>
          <div className="modal-overlay open" onClick={handleCloseModal} />
          <DealsModal
            isOpen={true}
            deal={deals.find((d) => d.n === openDealId)}
            onClose={handleCloseModal}
            onAdd={handleAddDeal}
            onBuyNow={handleBuyNow}
          />
        </>
      )}
    </section>
  );
}

export default DealsSection;
