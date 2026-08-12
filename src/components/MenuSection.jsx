import { useMemo, useState } from 'react';
import { OTHER_CATEGORIES, normalizeProduct } from '../data/siteData.js';
import ProductCard from './ProductCard.jsx';

function MenuSection({ specialFlavors, regularFlavors, onFlavorClick }) {
  const special = (specialFlavors || []).map(normalizeProduct);
  const regular = (regularFlavors || []).map(normalizeProduct);
  const otherCats = OTHER_CATEGORIES || [];

  const categoryList = useMemo(() => {
    const cats = ['Popular', 'Pizza'];
    otherCats.forEach((c) => {
      if (!cats.includes(c.title)) cats.push(c.title);
    });
    return cats;
  }, [otherCats]);

  const [activeCategory, setActiveCategory] = useState('Popular');

  const itemsForCategory = useMemo(() => {
    if (activeCategory === 'Popular') {
      return [...special, ...regular].slice(0, 5);
    }

    if (activeCategory === 'Pizza') {
      return [...special, ...regular];
    }

    const category = otherCats.find((c) => c.title === activeCategory || c.id === activeCategory);
    if (!category) {
      return [];
    }

    return category.items.map(normalizeProduct).slice(0, 5);
  }, [activeCategory, otherCats, regular, special]);

  return (
    <section className="section-pad" id="menu-nav">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">The Main Event</span>
          <h2>Cheese 'n Crunch <em>Pizza</em></h2>
          <p>Fresh dough. Bold flavors. Serious cravings.</p>
        </div>

        <div className="menu-sizes reveal">
          {[
            { label: 'Small', price: 495 },
            { label: 'Medium', price: 1095 },
            { label: 'Large', price: 1545 },
            { label: 'X-Large', price: 1995 },
          ].map((size) => (
            <div key={size.label} className="size-pill">
              <div className="lbl">{size.label}</div>
              <div className="val">From Rs. {size.price}</div>
            </div>
          ))}
        </div>

        <div className="cat-nav-wrap reveal">
          <div className="cat-nav">
            {categoryList.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
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
