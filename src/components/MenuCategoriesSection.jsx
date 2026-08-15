import { Link } from 'react-router-dom';
import { MENU_BY_CATEGORY } from '../data/siteData.js';

function MenuCategoriesSection() {
  const barCategories = [
    { id: 'brownie', title: 'Brownies' },
    { id: 'cold-coffee', title: 'Cold Coffee' },
    { id: 'ice-cream', title: 'Ice Cream' },
    { id: 'coffee-tea', title: 'Coffee & Tea' },
    { id: 'shakes', title: 'Shakes' },
    { id: 'chillers', title: 'Chillers' },
    { id: 'fresh-juice', title: 'Fresh Juice' },
  ];

  return (
    <section className="section-pad section-surface-flat" id="explore-menu">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Our Full Selection</span>
          <h2>Explore Our Menu</h2>
          <p>Browse all our delicious categories including pizzas, burgers, wraps, and more. Order your favorites on WhatsApp.</p>
        </div>

        <div className="cat-nav-wrap reveal">
          <div className="cat-nav cat-nav-center">
            {MENU_BY_CATEGORY.map((category) => (
              <Link
                key={category.id}
                to={`/menu?category=${category.id}`}
                className="btn"
              >
                {category.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="cat-nav-wrap reveal">
          <div className="cat-nav cat-nav-center">
            {barCategories.map((category) => (
              <Link
                key={category.id}
                to={`/bar?category=${category.id}`}
                className="btn"
              >
                {category.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="section-ctas reveal">
          <Link to="/menu" className="btn btn-gold">
            View Full Menu <span className="btn-arrow" aria-hidden="true">→</span>
          </Link>
          <Link to="/bar" className="btn btn-outline">
            Explore Bar &amp; Desserts <span className="btn-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MenuCategoriesSection;
