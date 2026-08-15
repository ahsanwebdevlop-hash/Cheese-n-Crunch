function CartDrawer({
  isOpen,
  onClose,
  items,
  subtotal,
  deliveryFee,
  total,
  onRemove,
  onChangeQty,
  onCheckout,
  onStartCheckout,
  checkoutMode,
  checkoutData,
  onCheckoutFieldChange,
  deliveryAreas = [],
}) {
  return (
    <>
      <div className={`overlay${isOpen ? ' open' : ''}`} onClick={onClose} />
      <aside className={`drawer${isOpen ? ' open' : ''}`} aria-label="Shopping cart">
        <div className="drawer-head">
          <h3>{checkoutMode ? 'Your Details' : 'Your Cart'}</h3>
          <button className="icon-close" onClick={onClose} aria-label="Close cart">✕</button>
        </div>
        <div className="drawer-body">
          {items.length === 0 ? (
            <div className="empty-cart">
              <div className="ic">🛒</div>
              <p>Your cart is empty. Add something tasty.</p>
            </div>
          ) : checkoutMode ? (
            <div className="checkout-form">
              <div className="field">
                <label htmlFor="custName">Full Name</label>
                <input
                  id="custName"
                  type="text"
                  value={checkoutData.name}
                  onChange={(e) => onCheckoutFieldChange('name', e.target.value)}
                  placeholder="Your name"
                />
              </div>
              <div className="field">
                <label htmlFor="custPhone">Phone Number</label>
                <input
                  id="custPhone"
                  type="tel"
                  value={checkoutData.phone}
                  onChange={(e) => onCheckoutFieldChange('phone', e.target.value)}
                  placeholder="03XXXXXXXXX"
                  inputMode="numeric"
                  pattern="03\\d{9}"
                  title="Please enter a valid Pakistani mobile number (e.g., 03110992288)"
                />
              </div>
              <div className="field">
                <label htmlFor="custArea">Area</label>
                <select
                  id="custArea"
                  value={checkoutData.area}
                  onChange={(e) => onCheckoutFieldChange('area', e.target.value)}
                >
                  <option value="">Select area</option>
                  {deliveryAreas.map((area) => (
                    <option key={area.name} value={area.name}>{area.name}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="custAddress">Delivery Address</label>
                <textarea
                  id="custAddress"
                  rows="3"
                  value={checkoutData.address}
                  onChange={(e) => onCheckoutFieldChange('address', e.target.value)}
                  placeholder="House / Street / Area, Chiniot"
                  disabled={!checkoutData.area}
                />
              </div>
              <div className="field">
                <label htmlFor="custNotes">Order Notes (optional)</label>
                <textarea
                  id="custNotes"
                  rows="2"
                  value={checkoutData.notes}
                  onChange={(e) => onCheckoutFieldChange('notes', e.target.value)}
                  placeholder="Any special instructions"
                />
              </div>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.key} className="cart-line">
                <img src={item.img} alt={item.name} />
                <div className="info">
                  <h5>{item.is_deal ? `Deal ${item.dealId || ''}`.trim() : item.name}</h5>
                  {item.is_deal ? (
                    <div className="meta">{item.name} x {item.qty}</div>
                  ) : (
                    <div className="meta">Rs. {item.price} x {item.qty}</div>
                  )}
                  <div className="qty-ctrl">
                    <button type="button" onClick={() => onChangeQty(item.key, -1)}>-</button>
                    <span>{item.qty}</span>
                    <button type="button" onClick={() => onChangeQty(item.key, 1)}>+</button>
                  </div>
                </div>
                <div className="price-col">
                  <div className="p">Rs. {item.price * item.qty}</div>
                  <button type="button" className="remove" onClick={() => onRemove(item.key)}>
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="drawer-foot">
          <div className="sum-row">
            <span>Subtotal</span>
            <span className="amt">Rs. {subtotal}</span>
          </div>
          <div className="sum-row free-tag">
            <span>Delivery</span>
            <span>{checkoutData.area ? `Rs. ${deliveryFee}` : 'FREE'}</span>
          </div>
          <div className="sum-row total">
            <span>Total</span>
            <span className="amt">Rs. {total}</span>
          </div>
          {checkoutMode ? (
            <button className="btn btn-gold" disabled={!checkoutData.area} onClick={() => onCheckout(checkoutData)}>
              Place Order on WhatsApp
            </button>
          ) : (
            <button className="btn btn-gold" onClick={onStartCheckout}>
              Proceed to Checkout
            </button>
          )}
        </div>
      </aside>
    </>
  );
}

export default CartDrawer;
