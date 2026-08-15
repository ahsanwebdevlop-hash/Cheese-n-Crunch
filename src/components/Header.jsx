import { Link, NavLink } from 'react-router-dom';
import logoImg from '../assets/logo.jpeg';

function Header({ onBurgerClick, onCartClick, cartCount, isHeaderScrolled, isMobileNavOpen }) {
  return (
    <header className={`site-header${isHeaderScrolled ? ' scrolled' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Cheese 'n Crunch home">
          <img
            src={logoImg}
            alt="Cheese 'n Crunch logo"
          />
          <span className="brand-text">
            <span className="name">Cheese 'n Crunch</span>
            <span className="tag">Fast Food & Juices</span>
          </span>
        </Link>
        <nav className="primary-nav" aria-label="Primary">
          <ul>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/deals">Hot Deals</NavLink></li>
            <li><NavLink to="/menu">Menu</NavLink></li>
            <li><NavLink to="/reviews">Reviews</NavLink></li>
            <li><NavLink to="/faq">FAQ</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button className="cart-icon-btn" onClick={onCartClick} aria-label="Open cart">
            🛒<span className="badge">{cartCount}</span>
          </button>
          <Link to="/deals" className="btn btn-gold header-cta">Order Now</Link>
          <button
            className={`burger${isMobileNavOpen ? ' open' : ''}`}
            onClick={onBurgerClick}
            aria-label="Toggle menu"
            aria-expanded={isMobileNavOpen}
            aria-controls="mobile-navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
