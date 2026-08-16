import { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import DealsModal from './DealsModal.jsx';
import { PIZZA_TOPPINGS } from '../data/siteData.js';

// Helper functions for pizza topping system
function isPizzaItem(itemType) {
  return itemType === 'pizza';
}

function extractPizzaSize(itemName) {
  if (itemName.includes('Small')) return 'Small';
  if (itemName.includes('Regular')) return 'Medium';
  if (itemName.includes('Large')) return 'Large';
  if (itemName.includes('XL') || itemName.includes('X-Large')) return 'X-Large';
  if (itemName.includes('Grand')) return 'Large';
  return 'Medium'; // default
}

function DealsSection({
  deals,
  onAdd,
  onBuyNow,
  onShowToast,
  eyebrow = 'Limited Time',
  title = 'Food Deals in Chiniot',
  accentTitle = '',
  tagline = 'Big cravings deserve bigger deals.',
  sectionId = 'deals',
}) {
  const [openDealId, setOpenDealId] = useState(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dealIdParam = searchParams.get('dealId');

  const handleOpenModal = (dealId) => {
    setOpenDealId(dealId);
  };

  const handleViewDeal = (dealId) => {
    setOpenDealId(dealId);
  };

  useEffect(() => {
    if (dealIdParam) {
      const dealElement = document.getElementById(`deal-${dealIdParam}`);
      if (dealElement) {
        setTimeout(() => {
          dealElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          dealElement.style.boxShadow = '0 0 0 3px rgba(234, 184, 72, 0.4)';
          setTimeout(() => {
            dealElement.style.boxShadow = '';
          }, 2000);
        }, 300);
      }
    }
  }, [dealIdParam]);

  const handleCloseModal = () => {
    setOpenDealId(null);
  };

  const getDealDisplayName = (deal, selectedFlavors, selectedToppings = {}) => {
    const unitFlavors = selectedFlavors && selectedFlavors.unit1 ? selectedFlavors.unit1 : selectedFlavors;
    const displayItems = deal.items.map((item, index) => {
      const chosenFlavor = unitFlavors && unitFlavors[index];
      const chosenTopping = selectedToppings && selectedToppings[index];
      
      let itemDisplay = item.name;
      if (item.hasFlavorOption && chosenFlavor) {
        itemDisplay = `${item.name} ${chosenFlavor}`;
      }
      if (isPizzaItem(item.type) && chosenTopping) {
        itemDisplay += ` + ${chosenTopping}`;
      }
      
      return itemDisplay;
    });

    return displayItems.join(', ');
  };

  const calculateDealPrice = (deal, selectedFlavors, selectedToppings = {}) => {
    let price = deal.price;
    
    deal.items.forEach((item, idx) => {
      if (isPizzaItem(item.type) && selectedToppings[idx]) {
        const toppingSize = extractPizzaSize(item.name);
        const topping = PIZZA_TOPPINGS.find((t) => t.name === selectedToppings[idx]);
        if (topping) {
          price += topping.prices[toppingSize] || 0;
        }
      }
    });
    
    return price;
  };

  const handleAddDeal = (deal, qty, selectedFlavors, selectedToppings = {}) => {
    const cartItem = {
      name: getDealDisplayName(deal, selectedFlavors, selectedToppings),
      price: calculateDealPrice(deal, selectedFlavors, selectedToppings),
      qty: qty,
      img: deal.img,
      is_deal: true,
      dealId: deal.n,
      items: deal.items,
      selectedFlavors: selectedFlavors,
      selectedToppings: selectedToppings,
    };
    onAdd(cartItem);
    onShowToast(`Added ${deal.title} (x${qty}) to cart`);
    handleCloseModal();
  };

  const handleBuyNow = (deal, qty, selectedFlavors, selectedToppings = {}) => {
    const cartItem = {
      name: getDealDisplayName(deal, selectedFlavors, selectedToppings),
      price: calculateDealPrice(deal, selectedFlavors, selectedToppings),
      qty: qty,
      img: deal.img,
      is_deal: true,
      dealId: deal.n,
      items: deal.items,
      selectedFlavors: selectedFlavors,
      selectedToppings: selectedToppings,
    };
    onBuyNow?.(cartItem);
    onShowToast(`Buy Now for ${deal.title}`);
    handleCloseModal();
  };

  const getItemsPreview = (items) => {
    if (!items || items.length === 0) return '';
    return items.slice(0, 2).map((item) => item.name).join(', ') + (items.length > 2 ? '...' : '');
  };

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            sectionObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -15% 0px' }
    );

    const section = document.getElementById(sectionId);
    if (section) {
      sectionObserver.observe(section);
    }

    return () => sectionObserver.disconnect();
  }, [sectionId]);

  return (
    <section className="section-pad deals-animate-section" id={sectionId}>
      <div className="container">
        <div className="section-head reveal">
          {/* <span className="eyebrow">{eyebrow}</span> */}
          <h2>
            {title}
            {accentTitle ? <em>{accentTitle}</em> : null}
          </h2>
          <p>{tagline}</p>
        </div>
        <div className="deals-grid stagger">
          {deals.map((deal, index) => (
            <article
              key={deal.n}
              id={`deal-${deal.n}`}
              className="card deal-card-item"
              data-index={index}
              onClick={() => handleViewDeal(deal.n)}
              style={{ cursor: 'pointer' }}
            >
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
                    onClick={(event) => {
                      event.stopPropagation();
                      handleViewDeal(deal.n);
                    }}
                    style={{ cursor: 'pointer', marginRight: '0.5rem' }}
                  >
                    VIEW DEAL
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

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
