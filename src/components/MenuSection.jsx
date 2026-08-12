import { useMemo, useState } from 'react';
import { OTHER_CATEGORIES, normalizeProduct } from '../data/siteData.js';
import ProductCard from './ProductCard.jsx';

function MenuSection({ specialFlavors, regularFlavors, onFlavorClick }) {
  const special = (specialFlavors || []).map(normalizeProduct);
  const regular = (regularFlavors || []).map(normalizeProduct);
  const otherCats = OTHER_CATEGORIES || [];

  const categoryList = useMemo(() => {
    const scrollButtons = [
      { label: 'Special Square', targetId: 'special-square', kind: 'scroll' },
      { label: 'Traditional Square', targetId: 'traditional-square', kind: 'scroll' },
      { label: 'CnC Signature', targetId: 'signature', kind: 'scroll' },
    ];

    const categoryButtons = otherCats.reduce((acc, c) => {
      if (!acc.some((item) => item.label === c.title)) {
        acc.push({ label: c.title, kind: 'category' });
      }
      return acc;
    }, []);

    return [...scrollButtons, ...categoryButtons];
  }, [otherCats]);

  const [activeCategory, setActiveCategory] = useState(() => {
    return otherCats[0]?.title || 'Burgers';
  });

  const handleNavClick = (item) => {
    if (item.kind === 'scroll' && item.targetId) {
      const target = document.getElementById(item.targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    setActiveCategory(item.label);
  };

  const itemsForCategory = useMemo(() => {
    const category = otherCats.find((c) => c.title === activeCategory || c.id === activeCategory);
    if (!category) {
      return [];
    }

    return category.items.map(normalizeProduct);
  }, [activeCategory, otherCats]);

  return (
    <section className="section-pad" id="menu-nav">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">The Main Event</span>
          <h2>Cheese 'n Crunch <em>Pizza</em></h2>
          <p>Fresh dough. Bold flavors. Serious cravings.</p>
        </div>

        {/* Per-product variants are defined in `siteData.js` on each product. */}

        <div className="cat-nav-wrap reveal">
          <div className="cat-nav">
            {categoryList.map((item) => (
              <button
                key={item.label}
                type="button"
                className={`btn ${item.kind === 'category' && activeCategory === item.label ? 'active' : ''}`}
                onClick={() => handleNavClick(item)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flavor-group-title reveal" style={{ marginTop: 18 }}>
          <h3>{activeCategory}</h3>
          <div className="line" />
        </div>

        <div className="flavor-grid stagger">
          {itemsForCategory.map((product) => (
            <ProductCard key={product.name} product={product} onFlavorClick={onFlavorClick} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MenuSection;
