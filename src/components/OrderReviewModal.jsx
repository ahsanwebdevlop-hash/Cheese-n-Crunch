function OrderReviewModal({ isOpen, onClose, onConfirm, order }) {
  if (!isOpen || !order) return null;

  return (
    <>
      <div className={`modal-overlay${isOpen ? ' open' : ''}`} onClick={onClose} />
      <div className={`product-modal order-review-modal${isOpen ? ' open' : ''}`} role="dialog" aria-modal="true" aria-label="Review your order">
        <button className="icon-close-modal" onClick={onClose} aria-label="Close review">✕</button>
        <div className="pm-body">
          <h3>Review Your Order</h3>

          <div className="review-order-list">
            {order.items.map((item) => {
              const unitTotal = item.price * item.qty;
              return (
                <div key={item.key || `${item.name}-${item.qty}`} className="review-order-item">
                  <div className="review-item-head">
                    <span className="review-item-name">{item.name}</span>
                    <span className="review-item-total">Rs. {unitTotal.toLocaleString()}</span>
                  </div>
                  <div className="review-item-meta">
                    <span>Rs. {item.price.toLocaleString()} × {item.qty}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="review-totals">
            <div className="sum-row">
              <span>Subtotal</span>
              <span className="amt">Rs. {order.subtotal.toLocaleString()}</span>
            </div>
            <div className="sum-row">
              <span>Delivery Fee</span>
              <span className="amt">Rs. {order.deliveryFee.toLocaleString()}</span>
            </div>
            <div className="sum-row total">
              <span>Total</span>
              <span className="amt">Rs. {order.total.toLocaleString()}</span>
            </div>
          </div>

          <div className="review-customer-box">
            <h4>Customer Details</h4>
            <div className="review-customer-row"><span>Name</span><strong>{order.customer.name}</strong></div>
            <div className="review-customer-row"><span>Phone</span><strong>{order.customer.phone}</strong></div>
            <div className="review-customer-row"><span>Area</span><strong>{order.customer.area}</strong></div>
            <div className="review-customer-row"><span>Address</span><strong>{order.customer.address}</strong></div>
            {order.customer.notes && (
              <div className="review-customer-row"><span>Notes</span><strong>{order.customer.notes}</strong></div>
            )}
          </div>

          {order.isCustomCake && order.customCake && (
            <div className="custom-cake-review-box">
              <h4>Custom Cake</h4>
              <div className="custom-cake-details">
                <div>
                  <span>Weight</span>
                  <strong>{order.customCake.cakeWeight} Pound{order.customCake.cakeWeight > 1 ? 's' : ''}</strong>
                </div>
                <div>
                  <span>Price</span>
                  <strong>Rs. {order.customCake.price.toLocaleString()}</strong>
                </div>
              </div>
              {order.customCake.img && (
                <div className="custom-cake-preview-wrap">
                  <img src={order.customCake.img} alt="Custom cake design preview" className="custom-cake-preview" />
                </div>
              )}
              <p className="custom-cake-warning">Please select and attach your cake design image on WhatsApp after WhatsApp opens.</p>
            </div>
          )}

          <div className="pm-actions review-actions">
            <button type="button" className="btn btn-outline" onClick={onClose}>Back / Edit Order</button>
            <button type="button" className="btn btn-gold" onClick={onConfirm}>Confirm &amp; Send to WhatsApp</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderReviewModal;
