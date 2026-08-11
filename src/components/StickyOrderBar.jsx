function StickyOrderBar({ count, onClick }) {
  return (
    <div className="sticky-order-bar">
      <button className="cart-btn" type="button" onClick={onClick}>
        🛒 View Cart <span className="cart-count">{count}</span>
      </button>
    </div>
  );
}

export default StickyOrderBar;
