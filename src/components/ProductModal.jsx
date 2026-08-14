function ProductModal({ isOpen, state, onClose, onFlavorChange, onVariantChange, onQtyChange, onAdd, onBuyNow, onToppingChange, variantTitle = 'Choose size' }) {
  const variants = (state.variants || []).map((v) => ({
    ...v,
    name: v.name || v.flavor || state.name || 'Default',
    size: v.size || v.label || v.variant || '',
    price: Number(v.price ?? v.amount ?? 0),
  }));
  const hasVariants = variants.length > 0;
  
  // Detect if this is a pound-based product (cakes)
  const isPoundVariant = hasVariants && variants.every((v) => v.size.includes('Pound'));
  const displayTitle = isPoundVariant ? 'Choose pound' : variantTitle;
  
  const flavorOptions = Array.isArray(state.flavorOptions) ? state.flavorOptions : [];
  const toppings = Array.isArray(state.toppings) ? state.toppings : [];
  const toppingPrices = Array.isArray(state.toppingPrices) ? state.toppingPrices : [];

  const sizesForFlavor = variants.length ? variants : [];

  const selectedVariant = state.selectedVariant || (sizesForFlavor[0] ?? null);
  
  // Calculate topping price based on selected size and topping
  let toppingPrice = 0;
  if (state.selectedTopping) {
    const topping = toppingPrices.find((t) => t.name === state.selectedTopping);
    // Priority: tierSize (for CnC Signature) > variant size (for pizzas with sizes) > default
    let sizeKey = state.toppingDefaultSize || 'Medium';
    if (state.tierSize) {
      // CnC Signature - use tierSize (Medium, Large, X-Large)
      sizeKey = state.tierSize;
    } else if (hasVariants && selectedVariant?.size) {
      // Regular pizzas with size variants - use variant size
      sizeKey = selectedVariant.size;
    }
    toppingPrice = Number(topping?.prices?.[sizeKey] ?? 0);
  }
  
  // Determine base price
  let basePrice = Number(state.price ?? 0);
  if (hasVariants && Number(selectedVariant?.price ?? 0) > 0) {
    // Use variant price only if it's greater than 0
    basePrice = Number(selectedVariant.price);
  }
  
  const displayPrice = basePrice + toppingPrice;

  return (
    <>
      <div className={`modal-overlay${isOpen ? ' open' : ''}`} onClick={onClose} />
      <div className={`product-modal${isOpen ? ' open' : ''}`}>
        <button className="icon-close-modal" onClick={onClose} aria-label="Close">✕</button>
        {state.img ? <img className="pm-img" src={state.img} alt={state.name} /> : null}
        <div className="pm-body">
          <h3>{state.name}</h3>
          <p className="desc">{state.desc}</p>
          {hasVariants ? (
            <div className="pm-group">
              <label>{displayTitle}</label>
              <div className="opt-row">
                {sizesForFlavor.map((v) => (
                  <button
                    type="button"
                    key={`${v.name}-${v.size}`}
                    className={`opt-chip${selectedVariant && selectedVariant.size === v.size ? ' active' : ''}`}
                    onClick={() => onVariantChange(v)}
                  >
                    {v.size}
                  </button>
                ))}
              </div>
            </div>
          ) : null}
          {flavorOptions.length > 0 ? (
            <div className="pm-group">
              <label>Choose flavor</label>
              <select
                className="pm-select"
                value={state.selectedFlavor ?? flavorOptions[0]}
                onChange={(e) => onFlavorChange?.(e.target.value)}
              >
                {flavorOptions.map((flavor) => (
                  <option key={flavor} value={flavor}>{flavor}</option>
                ))}
              </select>
            </div>
          ) : null}
          {toppings.length > 0 ? (
            <div className="pm-group">
              <label>Choose topping (optional)</label>
              <select
                className="pm-select"
                value={state.selectedTopping ?? ''}
                onChange={(e) => onToppingChange?.(e.target.value || null)}
              >
                <option value="">No Topping</option>
                {toppings.map((topping) => (
                  <option key={topping} value={topping}>{topping}</option>
                ))}
              </select>
            </div>
          ) : null}
          <div className="pm-group pm-qty">
            <label>Quantity</label>
            <div className="pm-qty">
              <button type="button" onClick={() => onQtyChange(state.qty - 1)}>-</button>
              <span>{state.qty}</span>
              <button type="button" onClick={() => onQtyChange(state.qty + 1)}>+</button>
            </div>
          </div>
          <div className="pm-foot">
            <div className="price">Rs. {displayPrice * state.qty}</div>
            <div className="pm-actions">
              <button className="btn btn-gold" onClick={onAdd}>Add to Cart</button>
              <button className="btn btn-outline" onClick={onBuyNow}>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductModal;
