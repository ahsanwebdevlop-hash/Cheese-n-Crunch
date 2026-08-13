function ProductCard({ product, onFlavorClick }) {
  const hasVariants = product.variants && product.variants.length > 0;
  const fromPrice = hasVariants ? product.displayPrice : product.price ?? 595;

  return (
    <button
      type="button"
      className="flavor-card"
      onClick={() => onFlavorClick(product)}
      data-placeholder={product.isPlaceholder ? 'true' : 'false'}
    >
      <img src={product.img} alt={product.name} />
      <div className="info">
        <h4>{product.name}</h4>
        <p>{product.desc}</p>
        <div className="from">{hasVariants ? `From Rs. ${fromPrice}` : `Rs. ${fromPrice}`}</div>
      </div>
    </button>
  );
}

export default ProductCard;
