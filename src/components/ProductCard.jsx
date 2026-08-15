function ProductCard({ product, onFlavorClick }) {
  const hasVariants = product.variants && product.variants.length > 0;
  const fromPrice = hasVariants ? product.displayPrice : product.price ?? 595;

  return (
    <article className="product-card-item" data-placeholder={product.isPlaceholder ? 'true' : 'false'}>
      <button
        type="button"
        className="flavor-card"
        onClick={() => onFlavorClick(product)}
        aria-label={`View details for ${product.name}`}
      >
        <img src={product.img} alt={product.name} />
        <div className="info">
          <h3>{product.name}</h3>
          <p>{product.desc}</p>
          <div className="from">{hasVariants ? `From Rs. ${fromPrice}` : `Rs. ${fromPrice}`}</div>
        </div>
      </button>
    </article>
  );
}

export default ProductCard;
