import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { OTHER_CATEGORIES, normalizeProduct } from '../data/siteData.js';
import ProductCard from './ProductCard.jsx';

function MenuSection({ specialFlavors, regularFlavors, onFlavorClick }) {
  const special = (specialFlavors || []).map(normalizeProduct);
  const regular = (regularFlavors || []).map(normalizeProduct);
  const otherCats = OTHER_CATEGORIES || [];

  const premiumStrip = useMemo(() => [
    { label: 'Hot Deals', to: '/deals', kind: 'link' },
    { label: 'Lunch & Mid Night Deals', to: '/lunch-mid-night-deals', kind: 'link' },
    { label: 'Bar (Desserts & Beverages)', to: '/bar', kind: 'link' },
    { label: 'Pizza', targetId: 'pizza', kind: 'scroll' },
    { label: 'Special Square', targetId: 'special-square', kind: 'scroll' },
    { label: 'Traditional Square', targetId: 'traditional-square', kind: 'scroll' },
    { label: 'CnC Signature', targetId: 'signature', kind: 'scroll' },
  ], []);

  const categoryList = useMemo(() => {
    return otherCats.reduce((acc, c) => {
      if (!acc.some((item) => item.label === c.title)) {
        acc.push({ label: c.title, kind: 'category' });
      }
      return acc;
    }, []);
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

    if (item.kind === 'category') {
      setActiveCategory(item.label);
    }
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

        {/* Premium Strips */}
        <div className="cat-nav-wrap reveal">
          <div className="cat-nav premium-nav">
            {premiumStrip.map((item) => (
              item.kind === 'link' ? (
                <Link
                  key={item.label}
                  to={item.to}
                  className="btn"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  type="button"
                  className="btn"
                  onClick={() => handleNavClick(item)}
                >
                  {item.label}
                </button>
              )
            ))}
          </div>
        </div>

        {/* Main Category Strip */}
        <div className="cat-nav-wrap reveal">
          <div className="cat-nav">
            {categoryList.map((item) => (
              <button
                key={item.label}
                type="button"
                className={`btn ${activeCategory === item.label ? 'active' : ''}`}
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
