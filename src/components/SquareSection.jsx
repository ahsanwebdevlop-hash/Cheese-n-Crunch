import { useState } from 'react';
import ProductModal from './ProductModal.jsx';
import { SPECIAL_FLAVORS, REGULAR_FLAVORS, PIZZA_TOPPINGS } from '../data/siteData.js';

function SquareSection({ onAdd, onShowToast }) {
  const allFlavors = [...SPECIAL_FLAVORS, ...REGULAR_FLAVORS].map((flavor) => flavor.name);

  const pizzaTiers = [
    {
      name: 'Regular Pizza',
      label: 'Regular',
      flavorOptions: REGULAR_FLAVORS.map((flavor) => flavor.name),
      variants: [
        { size: 'Small', price: 495 },
        { size: 'Medium', price: 1095 },
        { size: 'Large', price: 1545 },
        { size: 'X-Large', price: 1995 },
      ],
      img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Special Pizza',
      label: 'Special',
      flavorOptions: SPECIAL_FLAVORS.map((flavor) => flavor.name),
      variants: [
        { size: 'Small', price: 595 },
        { size: 'Medium', price: 1195 },
        { size: 'Large', price: 1645 },
        { size: 'X-Large', price: 2245 },
      ],
      img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=800&auto=format&fit=crop',
    },
  ];

  const specialTiers = [
    {
      name: 'Special Square - Personal',
      price: 645,
      label: 'Personal',
      img: 'https://images.unsplash.com/photo-1548365328-9f547fb0953b?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Special Square - Premium',
      price: 1295,
      label: 'Premium',
      img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Special Square - Grand',
      price: 1945,
      label: 'Grand',
      img: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=800&auto=format&fit=crop',
    },
  ];

  const traditionalTiers = [
    {
      name: 'Traditional Square - Personal',
      price: 595,
      label: 'Personal',
      img: 'https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Traditional Square - Premium',
      price: 1295,
      label: 'Premium',
      img: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Traditional Square - Grand',
      price: 1845,
      label: 'Grand',
      img: 'https://images.unsplash.com/photo-1590534247854-e97d5e3feef6?q=80&w=800&auto=format&fit=crop',
    },
  ];

  const [modalState, setModalState] = useState(null);

  const openModal = (tier, flavorOptions, category = null) => {
    setModalState({
      tier,
      qty: 1,
      selectedFlavor: flavorOptions[0],
      flavorOptions,
      selectedVariant: tier.variants?.[0] || null,
      selectedTopping: null,
      category,
    });
  };

  const closeModal = () => setModalState(null);

  const handleAdd = (tier, selectedFlavor, selectedVariant, qty = 1, selectedTopping = null) => {
    // For pizzas with variants, use the selected variant price. For pizzas without variants, use tier.price
    const basePrice = tier.variants && tier.variants.length > 0
      ? Number(selectedVariant?.price ?? tier.variants[0]?.price ?? 0)
      : Number(tier.price ?? 0);
    
    let toppingPrice = 0;
    if (selectedTopping) {
      const topping = PIZZA_TOPPINGS.find((t) => t.name === selectedTopping);
      // For pizzas with variants, use the selected size; for pizzas without variants, use 'Medium'
      const sizeLabel = tier.variants && tier.variants.length > 0
        ? selectedVariant?.size || tier.variants[0]?.size
        : 'Medium';
      toppingPrice = topping?.prices?.[sizeLabel] || 0;
    }
    
    const finalPrice = basePrice + toppingPrice;
    const toppingLabel = selectedTopping ? ` + ${selectedTopping} (topping)` : '';
    const itemName = `${tier.name} (${selectedFlavor})${toppingLabel}`;
    onAdd({ name: itemName, price: finalPrice, qty, img: tier.img });
    onShowToast(`Added ${tier.label} pizza to cart`);
  };

  const addSelectedToCart = () => {
    if (!modalState) return;
    const flavor = modalState.selectedFlavor || modalState.flavorOptions[0];
    const chosenVariant = modalState.selectedVariant || modalState.tier.variants?.[0] || null;
    const topping = modalState.selectedTopping || null;
    handleAdd(modalState.tier, flavor, chosenVariant, modalState.qty, topping);
    closeModal();
  };

  const handleBuyNow = () => {
    if (!modalState) return;
    const flavor = modalState.selectedFlavor || modalState.flavorOptions[0];
    const chosenVariant = modalState.selectedVariant || modalState.tier.variants?.[0] || null;
    const topping = modalState.selectedTopping || null;
    handleAdd(modalState.tier, flavor, chosenVariant, modalState.qty, topping);
    closeModal();
  };

  return (
    <>
      <section className="section-pad" id="pizza" style={{ background: 'var(--green-950)' }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Classic</span>
            <h2>Pizzas</h2>
            <p>Choose your flavor and build your perfect pizza.</p>
          </div>
          <div className="panel-grid stagger">
            {pizzaTiers.map((tier) => (
              <article key={tier.name} className="tier-card">
                <img src={tier.img} alt={`${tier.label} pizza`} />
                <div className="tier-name">{tier.name}</div>
                <div className="tier-price">Rs. {tier.variants[0].price}</div>
                <button className="btn add-btn" onClick={() => openModal(tier, tier.flavorOptions)}>
                  Select Flavour
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" id="special-square" style={{ background: 'var(--green-950)' }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Square Cut</span>
            <h2>Special <em>Square</em></h2>
            <p>Golden-edged square pizza, loaded corner to corner.</p>
          </div>
          <div className="panel-grid stagger">
            {specialTiers.map((tier) => (
              <article key={tier.name} className="tier-card">
                <img src={tier.img} alt={`${tier.label} special square pizza`} />
                <div className="tier-name">{tier.label}</div>
                <div className="tier-price">Rs. {tier.price}</div>
                <button className="btn add-btn" onClick={() => openModal(tier, allFlavors, 'special-square')}>
                  Add to Cart
                </button>
              </article>
            ))}
          </div>

          <div className="flavor-group-title reveal" style={{ marginTop: 60 }} id="traditional-square">
            <h3>Traditional Square</h3>
            <div className="line" />
          </div>
          <div className="panel-grid stagger">
            {traditionalTiers.map((tier) => (
              <article key={tier.name} className="tier-card">
                <img src={tier.img} alt={`${tier.label} traditional square pizza`} />
                <div className="tier-name">{tier.label}</div>
                <div className="tier-price">Rs. {tier.price}</div>
                <button className="btn add-btn" onClick={() => openModal(tier, allFlavors, 'traditional-square')}>
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
            desc: modalState.tier.variants && modalState.tier.variants.length > 0 
              ? 'Choose your flavor and size for this pizza.'
              : 'Choose your flavor for this pizza.',
            img: modalState.tier.img,
            price: modalState.tier.price,
            qty: modalState.qty,
            selectedFlavor: modalState.selectedFlavor,
            flavorOptions: modalState.flavorOptions,
            variants: modalState.tier.variants || [],
            selectedVariant: modalState.selectedVariant,
            selectedTopping: modalState.selectedTopping,
            toppings: (modalState.category === 'special-square' || modalState.category === 'traditional-square') ? [] : PIZZA_TOPPINGS.map((t) => t.name),
            toppingPrices: PIZZA_TOPPINGS,
            toppingDefaultSize: 'Medium',
          }}
          onClose={closeModal}
          onFlavorChange={(flavor) => setModalState((prev) => ({ ...prev, selectedFlavor: flavor }))}
          onVariantChange={(variant) => setModalState((prev) => ({ ...prev, selectedVariant: variant }))}
          onQtyChange={(qty) => setModalState((prev) => ({ ...prev, qty: Math.max(1, qty) }))}
          onToppingChange={(topping) => setModalState((prev) => ({ ...prev, selectedTopping: topping }))}
          onAdd={addSelectedToCart}
          onBuyNow={handleBuyNow}
          variantTitle="Choose size"
        />
      )}
    </>
  );
}

export default SquareSection;
