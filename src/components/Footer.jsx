import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img
                src="data:image/jpeg;base64,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..."
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
