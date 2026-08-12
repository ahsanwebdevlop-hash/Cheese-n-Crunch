import ProductCard from './ProductCard.jsx';
import { normalizeProduct } from '../data/siteData.js';

function OtherCategoriesSection({ categories, onFlavorClick }) {
  const categoryCards = (category) => category.items.map(normalizeProduct).slice(0, 5);

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
