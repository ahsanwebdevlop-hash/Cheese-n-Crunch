import ProductCard from './ProductCard.jsx';
import { PLACEHOLDER_CATALOG, normalizeProduct } from '../data/siteData.js';

function OtherCategoriesSection({ categories, onFlavorClick }) {
  const categoryCards = (category) => {
    const actual = category.items.map(normalizeProduct).slice(0, 5);
    const placeholders = PLACEHOLDER_CATALOG[category.title] || [];
    const needed = Math.max(0, 5 - actual.length);
    return [...actual, ...placeholders.slice(0, needed)];
  };

  return (
    <section className="section-pad">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Full Menu</span>
          <h2>More From The <em>Kitchen</em></h2>
          <p>Full pricing for these categories is being finalized — check back soon or ask us on WhatsApp.</p>
        </div>
        {categories.map((category) => (
          <div key={category.id} id={category.id} style={{ marginBottom: '40px' }}>
            <div className="flavor-group-title reveal">
              <h3>{category.title}</h3>
              <div className="line" />
            </div>
            <div className="flavor-grid stagger">
              {categoryCards(category).map((item) => (
                <ProductCard key={item.name} product={item} onFlavorClick={onFlavorClick} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OtherCategoriesSection;
