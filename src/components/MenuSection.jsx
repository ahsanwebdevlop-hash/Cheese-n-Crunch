import { useMemo, useState } from 'react';
import { OTHER_CATEGORIES } from '../data/siteData.js';

function MenuSection({ specialFlavors, regularFlavors, onFlavorClick }) {
  const special = specialFlavors || [];
  const regular = regularFlavors || [];
  const otherCats = OTHER_CATEGORIES || [];

  const categoryList = useMemo(() => {
    const cats = ['Popular', 'Pizza'];
    otherCats.forEach((c) => {
      // use the displayed title
      if (!cats.includes(c.title)) cats.push(c.title);
    });
    return cats;
  }, [otherCats]);

  const [activeCategory, setActiveCategory] = useState('Popular');

  const itemsForCategory = useMemo(() => {
    if (activeCategory === 'Popular') {
      // prefer signature/special then regular - pick up to 5
      const combined = [...special, ...regular];
      return combined.slice(0, 5);
    }
    if (activeCategory === 'Pizza') {
      return [...special, ...regular];
    }
    const cat = otherCats.find((c) => c.title === activeCategory || c.id === activeCategory);
    if (cat) return cat.items;
    return [];
  }, [activeCategory, special, regular, otherCats]);

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
            { label: 'Small', price: 595 },
            { label: 'Medium', price: 895 },
            { label: 'Large', price: 1295 },
            { label: 'X-Large', price: 1795 },
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

        {/* Render pizza/popular as flavor-cards to preserve compact 3-column layout */}
        {(activeCategory === 'Popular' || activeCategory === 'Pizza') && (
          <div className="flavor-grid stagger">
            {itemsForCategory.map((flavor) => (
              <button
                type="button"
                key={flavor.name}
                className="flavor-card"
                onClick={() => onFlavorClick(flavor.name, flavor.desc, flavor.img)}
              >
                <img src={flavor.img} alt={flavor.name} />
                <div className="info">
                  <h4>{flavor.name}</h4>
                  <p>{flavor.desc}</p>
                  <div className="from">From Rs. 595</div>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Render other categories using the existing coming-card grid */}
        {!(activeCategory === 'Popular' || activeCategory === 'Pizza') && (
          <div className="other-cats-grid stagger">
            {itemsForCategory.map((item) => (
              <article key={item.name} className="coming-card">
                <img className="food-thumb" src={item.img} alt={item.name} />
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default MenuSection;
