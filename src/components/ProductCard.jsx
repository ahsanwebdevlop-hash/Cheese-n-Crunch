function ProductCard({ product, onFlavorClick }) {
  return (
    <button
      type="button"
      className="flavor-card"
      onClick={() => onFlavorClick(product.name, product.desc, product.img)}
      data-placeholder={product.isPlaceholder ? 'true' : 'false'}
    >
      <img src={product.img} alt={product.name} />
      <div className="info">
        <h4>{product.name}</h4>
        <p>{product.desc}</p>
        <div className="from">From Rs. {product.price ?? 595}</div>
      </div>
    </button>
  );
}

export default ProductCard;
