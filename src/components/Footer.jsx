import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.jpeg';

function Footer() {
  return (
    <footer>

      {/* Social & Location Stripe */}
      <div className="footer-social-strip">
        <div className="container">
          <div className="footer-social-links" >

            <a
              href="https://web.facebook.com/cheesencrunch/?_rdc=1&_rdr#"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Facebook"
            >
              <img
                src="https://cdn.simpleicons.org/facebook"
                alt=""
              />
              <span>Facebook</span>
            </a>

            <a
              href="https://www.instagram.com/cheese_n_crunch/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Instagram"
            >
              <img
                src="https://cdn.simpleicons.org/instagram"
                alt=""
              />
              <span>Instagram</span>
            </a>

            <a
              href="https://www.tiktok.com/discover/cheese-and-crunch-chiniot-menu"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="TikTok"
            >
              <img
                src="https://cdn.simpleicons.org/tiktok"
                alt=""
              />
              <span>TikTok</span>
            </a>

            <a
              href="https://maps.app.goo.gl/FgrNfpwHDT2Kc7Hh9"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Google Maps"
            >
              <img
                src="https://cdn.simpleicons.org/googlemaps"
                alt=""
              />
              <span>Google Maps</span>
            </a>

          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer-grid" style={{paddingTop: 'clamp(30px, 4vw, 50px)'}}>

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

            <p
              style={{
                color: 'var(--white-faint)',
                fontSize: '13.5px',
                marginTop: '16px',
                maxWidth: '320px',
                lineHeight: '1.6'
              }}
            >
              Fresh flavors, loaded pizzas and fast food made to satisfy every craving — delivered free across Chiniot.
            </p>
          </div>

          <div>
            <h5 style={{ fontSize: '18px' }}>Quick Links</h5>

            <ul>
              {['Home', 'Hot Deals', 'Menu', 'Reviews', 'About', 'Contact'].map((label) => {
                const to =
                  label === 'Home'
                    ? '/'
                    : label === 'Hot Deals'
                    ? '/deals'
                    : label === 'Menu'
                    ? '/menu'
                    : `/${label.toLowerCase()}`;

                return (
                  <li key={label}>
                    <Link to={to}>{label}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h5 style={{ fontSize: '18px' }}>Order</h5>

            <ul>
              <li>
                <Link to="/deals">Order Now</Link>
              </li>

              <li>
                <a
                  href="https://wa.me/923110992288"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
            </ul>

            <h5 style={{ marginTop: '22px' }}>Contact</h5>

            <ul>
              <li>
                <a href="tel:03110992288">0311-0992288</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Cheese 'n Crunch. All rights reserved.
          </span>
        </div>
      </div>

    </footer>
  );
}

export default Footer;