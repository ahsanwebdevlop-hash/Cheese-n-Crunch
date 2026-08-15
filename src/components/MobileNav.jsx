import { Link, NavLink } from 'react-router-dom';

function MobileNav({ isOpen, onClose }) {
  return (
    <nav className={`mobile-nav${isOpen ? ' open' : ''}`} id="mobile-navigation" aria-label="Mobile navigation">
      <div className="mobile-nav-top">
        <span className="brand-text" style={{ display: 'flex' }}>
          <span className="name">Cheese 'n Crunch</span>
        </span>
        <button className="icon-close" onClick={onClose} aria-label="Close menu">✕</button>
      </div>
      <ul>
        {['Home', 'Hot Deals', 'Menu', 'Reviews', 'FAQ', 'About', 'Contact'].map((label) => {
          const to = label === 'Home' ? '/' : label === 'Hot Deals' ? '/deals' : label === 'Menu' ? '/menu' : `/${label.toLowerCase()}`;
          const isHome = label === 'Home';
          return (
            <li key={label}>
              <NavLink to={to} className="mnav-link" onClick={onClose} end={isHome}>{label}</NavLink>
            </li>
          );
        })}
      </ul>
      <Link to="/deals" className="btn btn-gold mnav-link" onClick={onClose}>Order Now</Link>
    </nav>
  );
}

export default MobileNav;
