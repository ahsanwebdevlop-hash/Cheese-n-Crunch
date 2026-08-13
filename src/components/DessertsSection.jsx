import { useMemo, useState } from 'react';
import { normalizeProduct } from '../data/siteData.js';
import ProductCard from './ProductCard.jsx';

function DessertsSection({ onFlavorClick }) {
  const dessertCategories = useMemo(() => [
    {
      id: 'pastry',
      title: 'Pastries',
      items: [
        {
          name: 'Chocolate Croissant',
          description: 'Flaky pastry with rich chocolate filling',
          price: 145,
          img: 'https://images.unsplash.com/photo-1560080876-daf2d34e00a1?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Butter Croissant',
          description: 'Classic French butter croissant, crispy and golden',
          price: 125,
          img: 'https://images.unsplash.com/photo-1585518119820-8f71d1de1da3?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Almond Pastry',
          description: 'Delicate pastry with roasted almonds',
          price: 155,
          img: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd86b83?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Danish Pastry',
          description: 'Sweet Danish with fruit and cream',
          price: 165,
          img: 'https://images.unsplash.com/photo-1560080876-daf2d34e00a1?q=80&w=600&auto=format&fit=crop',
        },
      ],
    },
    {
      id: 'cakes',
      title: 'Cakes',
      items: [
        {
          name: 'Chocolate Cake',
          description: 'Moist chocolate cake with smooth frosting',
          price: 295,
          img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Red Velvet Cake',
          description: 'Classic red velvet with cream cheese frosting',
          price: 325,
          img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Vanilla Cheesecake',
          description: 'Rich and creamy cheesecake with vanilla flavor',
          price: 345,
          img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Carrot Cake',
          description: 'Moist carrot cake with cream cheese icing',
          price: 285,
          img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop',
        },
      ],
    },
  ], []);

  const categoryList = useMemo(() => {
    return dessertCategories.map((c) => ({
      label: c.title,
      kind: 'category',
    }));
  }, [dessertCategories]);

  const [activeCategory, setActiveCategory] = useState(() => {
    return dessertCategories[0]?.title || 'Pastries';
  });

  const handleCategoryClick = (label) => {
    setActiveCategory(label);
  };

  const itemsForCategory = useMemo(() => {
    const category = dessertCategories.find((c) => c.title === activeCategory);
    if (!category) {
      return [];
    }
    return category.items.map(normalizeProduct);
  }, [activeCategory, dessertCategories]);

  return (
    <section className="section-pad" id="desserts-nav" style={{ background: 'var(--green-950)' }}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Sweet Indulgence</span>
          <h2>Desserts</h2>
          <p>Pastries, cakes, and delicious sweet treats.</p>
        </div>

        {/* Category Strip */}
        <div className="cat-nav-wrap reveal">
          <div className="cat-nav">
            {categoryList.map((item) => (
              <button
                key={item.label}
                type="button"
                className={`btn ${activeCategory === item.label ? 'active' : ''}`}
                onClick={() => handleCategoryClick(item.label)}
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

export default DessertsSection;
