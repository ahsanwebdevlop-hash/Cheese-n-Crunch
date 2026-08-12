function ProductModal({ isOpen, state, onClose, onFlavorChange, onVariantChange, onQtyChange, onAdd, onBuyNow }) {
  const variants = state.variants || [];
  const hasVariants = variants.length > 0;

  // derive flavor list preserving order
  const flavorList = [];
  variants.forEach((v) => {
    if (!flavorList.includes(v.name)) flavorList.push(v.name);
  });

  const selectedFlavor = state.selectedFlavor || (flavorList.length ? flavorList[0] : null);
  const sizesForFlavor = selectedFlavor ? variants.filter((v) => v.name === selectedFlavor) : [];

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
            <>
              <div className="pm-group">
                <label>Choose flavor</label>
                <div className="opt-row">
                  {flavorList.map((fl) => (
                    <button
                      type="button"
                      key={fl}
                      className={`opt-chip${selectedFlavor === fl ? ' active' : ''}`}
                      onClick={() => onFlavorChange(fl)}
                    >
                      {fl}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pm-group">
                <label>Choose size</label>
                <div className="opt-row">
                  {sizesForFlavor.map((v) => (
                    <button
                      type="button"
                      key={v.size}
                      className={`opt-chip${state.selectedVariant && state.selectedVariant.size === v.size ? ' active' : ''}`}
                      onClick={() => onVariantChange(v)}
                    >
                      {v.size}
                    </button>
                  ))}
                </div>
              </div>
            </>
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
            <div className="price">Rs. {(state.selectedVariant?.price ?? state.price ?? 0) * state.qty}</div>
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
