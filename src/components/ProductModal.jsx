function ProductModal({ isOpen, state, sizes, onClose, onSizeChange, onQtyChange, onAdd, onBuyNow }) {
  return (
    <>
      <div className={`modal-overlay${isOpen ? ' open' : ''}`} onClick={onClose} />
      <div className={`product-modal${isOpen ? ' open' : ''}`}>
        <button className="icon-close-modal" onClick={onClose} aria-label="Close">✕</button>
        {state.img ? <img className="pm-img" src={state.img} alt={state.name} /> : null}
        <div className="pm-body">
          <h3>{state.name}</h3>
          <p className="desc">{state.desc}</p>
          <div className="pm-group">
            <label>Choose size</label>
            <div className="opt-row">
              {sizes.map((size) => (
                <button
                  type="button"
                  key={size.label}
                  className={`opt-chip${state.size.label === size.label ? ' active' : ''}`}
                  onClick={() => onSizeChange(size)}
                >
                  {size.label}
                </button>
              ))}
            </div>
          </div>
          <div className="pm-group pm-qty">
            <label>Quantity</label>
            <div className="pm-qty">
              <button type="button" onClick={() => onQtyChange(state.qty - 1)}>-</button>
              <span>{state.qty}</span>
              <button type="button" onClick={() => onQtyChange(state.qty + 1)}>+</button>
            </div>
          </div>
          <div className="pm-foot">
            <div className="price">Rs. {state.size.price * state.qty}</div>
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
