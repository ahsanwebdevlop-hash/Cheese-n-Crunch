import { useMemo, useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { OTHER_CATEGORIES, normalizeProduct } from '../data/siteData.js';
import ProductCard from './ProductCard.jsx';

function MenuSection({ specialFlavors, regularFlavors, onFlavorClick }) {
  const special = (specialFlavors || []).map(normalizeProduct);
  const regular = (regularFlavors || []).map(normalizeProduct);
  const otherCats = OTHER_CATEGORIES || [];
  const [searchParams] = useSearchParams();
  const [showAnimation, setShowAnimation] = useState(false);

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
        acc.push({ label: c.title, kind: 'category', id: c.id });
      }
      return acc;
    }, []);
  }, [otherCats]);

  const [activeCategory, setActiveCategory] = useState(() => {
    // Check if category parameter exists in URL
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      const foundCategory = otherCats.find((c) => c.id === categoryParam);
      if (foundCategory) {
        return foundCategory.title;
      }
    }
    // Default to first category
    return otherCats[0]?.title || 'Burgers';
  });

  // Update active category when URL parameter changes
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      const foundCategory = otherCats.find((c) => c.id === categoryParam);
      if (foundCategory) {
        setActiveCategory(foundCategory.title);
      }
    }
  }, [searchParams, otherCats]);

  // Trigger animation when category changes
  useEffect(() => {
    setShowAnimation(false);
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [activeCategory]);

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
      <style>{`
        .flavor-grid.animating > * {
          opacity: 0;
          transform: translateY(20px);
        }

        .flavor-grid.animating-in > * {
          animation: revealItem 0.5s ease-out forwards;
        }

        @keyframes revealItem {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .flavor-grid.animating-in > :nth-child(1) { animation-delay: 0s; }
        .flavor-grid.animating-in > :nth-child(2) { animation-delay: 0.05s; }
        .flavor-grid.animating-in > :nth-child(3) { animation-delay: 0.1s; }
        .flavor-grid.animating-in > :nth-child(4) { animation-delay: 0.15s; }
        .flavor-grid.animating-in > :nth-child(5) { animation-delay: 0.2s; }
        .flavor-grid.animating-in > :nth-child(6) { animation-delay: 0.25s; }
        .flavor-grid.animating-in > :nth-child(7) { animation-delay: 0.3s; }
        .flavor-grid.animating-in > :nth-child(8) { animation-delay: 0.35s; }
        .flavor-grid.animating-in > :nth-child(9) { animation-delay: 0.4s; }
        .flavor-grid.animating-in > :nth-child(10) { animation-delay: 0.45s; }
      `}</style>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">The Main Event</span>
          <div className="section-head reveal">
            <h2>Cheese 'n Crunch Menu</h2>
          </div>
          <p>Explore the Cheese 'n Crunch menu in Chiniot featuring pizza, fast food, juices and desserts for every craving.</p>
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

        <div className={`flavor-grid stagger ${showAnimation ? 'animating-in' : 'animating'}`}>
          {itemsForCategory.map((product) => (
            <ProductCard key={product.name} product={product} onFlavorClick={onFlavorClick} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MenuSection;
