import { Link } from 'react-router-dom';

function BookingAreaSection() {
  return (
    <section className="section-pad" id="booking-area">
      <div className="container">
        <div className="section-head reveal">
          <h2>Book Your Table</h2>
          <p>Cheese 'n Crunch offers a comfortable booking area suitable for gatherings and celebrations.</p>
        </div>
        <div className="booking-info reveal" style={{ maxWidth: '600px', margin: '2rem auto', textAlign: 'center' }}>
          <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-light)' }}>
            <p><strong>Capacity:</strong> Up to 10 people</p>
            <p><strong>Perfect for:</strong> Family gatherings, birthday celebrations, and special occasions</p>
            <p><strong>Location:</strong> Yasir Plaza, Sargodha Road, Chiniot</p>
          </div>
          <div className="ctas" style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/923110992288" target="_blank" rel="noopener" className="btn btn-gold">
              Book Now on WhatsApp
            </a>
            <Link to="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingAreaSection;
