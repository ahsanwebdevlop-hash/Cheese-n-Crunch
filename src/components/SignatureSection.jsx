import { useState } from 'react';
import ProductModal from './ProductModal.jsx';
import { PIZZA_TOPPINGS } from '../data/siteData.js';

function SignatureSection({ onAdd, onShowToast }) {
  const tiers = [
    {
      name: "C'n C Signature - Med",
      price: 1345,
      label: 'Med',
      img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: "C'n C Signature - Large",
      price: 1945,
      label: 'Large',
      img: 'https://images.unsplash.com/photo-1600628421066-f6bda6a7b976?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: "C'n C Signature - X-Large",
      price: 2445,
      label: 'X-Large',
      img: 'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?q=80&w=800&auto=format&fit=crop',
    },
  ];

  const crustOptions = [
    { name: 'King Crust', size: 'King Crust', price: 0 },
    { name: 'Kabab Crust', size: 'Kabab Crust', price: 0 },
    { name: 'Cheese Crust', size: 'Cheese Crust', price: 0 },
  ];

  const [modalState, setModalState] = useState(null);

  const openModal = (tier) => {
    setModalState({
      tier,
      qty: 1,
      selectedCrust: crustOptions[0].name,
      selectedTopping: null,
    });
  };

  const closeModal = () => setModalState(null);

  const handleAdd = (tier, crustName, qty = 1, selectedTopping = null) => {
    const crustLabel = crustName || crustOptions[0].name;
    
    // Calculate topping price based on size
    let toppingPrice = 0;
    if (selectedTopping) {
      const topping = PIZZA_TOPPINGS.find((t) => t.name === selectedTopping);
      // Map tier names to size labels for topping pricing
      let sizeLabel = 'Medium';
      if (tier.label === 'Large') sizeLabel = 'Large';
      else if (tier.label === 'X-Large') sizeLabel = 'X-Large';
      
      toppingPrice = topping?.prices?.[sizeLabel] || 0;
    }
    
    const toppingLabel = selectedTopping ? ` + ${selectedTopping}` : '';
    const itemName = `${tier.name} (${crustLabel})${toppingLabel}`;
    const finalPrice = tier.price + toppingPrice;
    onAdd({ name: itemName, price: finalPrice, qty, img: tier.img });
    onShowToast(`Added ${itemName} to cart`);
  };

  const addSelectedToCart = () => {
    if (!modalState) return;
    const crustName = modalState.selectedCrust || crustOptions[0].name;
    const topping = modalState.selectedTopping || null;
    handleAdd(modalState.tier, crustName, modalState.qty, topping);
    closeModal();
  };

  const handleBuyNow = () => {
    if (!modalState) return;
    const crustName = modalState.selectedCrust || crustOptions[0].name;
    const topping = modalState.selectedTopping || null;
    handleAdd(modalState.tier, crustName, modalState.qty, topping);
    closeModal();
  };

  return (
    <>
      <section className="section-pad" id="signature" style={{ background: 'var(--green-950)' }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">King Crust</span>
            <h2>C'n C <em>Signature</em></h2>
            <p>Our house-original king-crust pizza — golden, cheesy edge, every slice.</p>
          </div>
          <div className="panel-grid stagger">
            {tiers.map((tier) => (
              <article key={tier.name} className="tier-card">
                <img src={tier.img} alt={`${tier.label} King Crust pizza`} />
                <div className="tier-name">{tier.label}</div>
                <div className="tier-price">Rs. {tier.price}</div>
                <button className="btn add-btn" onClick={() => openModal(tier)}>
                  Add to Cart
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {modalState && (
        <ProductModal
          isOpen={true}
          state={{
            name: modalState.tier.name,
            desc: 'Choose your crust style and add optional toppings for this signature pizza.',
            img: modalState.tier.img,
            variants: crustOptions.map((option) => ({ ...option, price: 0 })),
            selectedVariant: crustOptions.find((option) => option.name === modalState.selectedCrust) || crustOptions[0],
            price: modalState.tier.price,
            qty: modalState.qty,
            selectedTopping: modalState.selectedTopping,
            toppings: PIZZA_TOPPINGS.map((t) => t.name),
            toppingPrices: PIZZA_TOPPINGS,
            tierSize: modalState.tier.label === 'Large' ? 'Large' : modalState.tier.label === 'X-Large' ? 'X-Large' : 'Medium',
          }}
          onClose={closeModal}
          onVariantChange={(variant) => setModalState((prev) => ({ ...prev, selectedCrust: variant.name || variant.size }))}
          onQtyChange={(qty) => setModalState((prev) => ({ ...prev, qty: Math.max(1, qty) }))}
          onToppingChange={(topping) => setModalState((prev) => ({ ...prev, selectedTopping: topping }))}
          onAdd={addSelectedToCart}
          onBuyNow={handleBuyNow}
          variantTitle="Choose crust"
        />
      )}
    </>
  );
}

export default SignatureSection;
