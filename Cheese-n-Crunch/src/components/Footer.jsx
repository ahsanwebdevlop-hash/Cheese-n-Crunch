import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.jpeg';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img
                src={logoImg}
                alt="Cheese 'n Crunch logo"
              />
              <div>
                <div className="name">Cheese 'n Crunch</div>
                <div className="tag">Say yes to pizza...</div>
              </div>
            </div>
            <p style={{ color: 'var(--white-faint)', fontSize: '13.5px', marginTop: '16px', maxWidth: '320px', lineHeight: '1.6' }}>
              Fresh flavors, loaded pizzas and fast food made to satisfy every craving — delivered free across Chiniot.
            </p>
          </div>
          <div>
            <h5>Quick Links</h5>
            <ul>
              {['Home', 'Hot Deals', 'Menu', 'Reviews', 'About', 'Contact'].map((label) => {
                const to = label === 'Home' ? '/' : label === 'Hot Deals' ? '/deals' : label === 'Menu' ? '/menu' : `/${label.toLowerCase()}`;
                return (
                  <li key={label}>
                    <Link to={to}>{label}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h5>Order</h5>
            <ul>
              <li><Link to="/deals">Order Now</Link></li>
              <li><a href="https://wa.me/923110992288" target="_blank" rel="noopener">WhatsApp</a></li>
            </ul>
            <h5 style={{ marginTop: '22px' }}>Contact</h5>
            <ul>
              <li><a href="tel:03110992288">0311-0992288</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Cheese 'n Crunch. All rights reserved.</span>
          <div className="social-icons" aria-label="Social links (coming soon)">
            <span title="Facebook (coming soon)" style={{ opacity: '.35' }}>f</span>
            <span title="Instagram (coming soon)" style={{ opacity: '.35' }}>ig</span>
            <span title="TikTok (coming soon)" style={{ opacity: '.35' }}>tt</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
