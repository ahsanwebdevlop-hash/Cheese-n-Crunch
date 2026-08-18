import ArrowIcon from './ArrowIcon.jsx';

function ContactSection() {
  const locationAddress = 'Yasir Plaza, Near DHQ Hospital, Sargodha Road, Chiniot';
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationAddress + ', Pakistan')}`;

  return (
    <section className="section-pad find-us-section" id="find-us">
      <div className="container">
        <div className="find-us-grid">
          <div className="find-us-copy">
            <span className="eyebrow">FIND US</span>
            <h2>COME VISIT CHEESE &apos;N CRUNCH</h2>
            <p>
              Looking for us? Find our restaurant in Chiniot and visit us for your favorite food.
            </p>

            <div className="find-us-address" aria-label="Restaurant address">
              <strong>Cheese &apos;n Crunch</strong>
              <span>Yasir Plaza, Near DHQ Hospital</span>
              <span>Sargodha Road, Chiniot</span>
              <span>Punjab, Pakistan</span>
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold find-us-cta"
            >
              GET DIRECTIONS <ArrowIcon className="btn-arrow" size={16} />
            </a>
          </div>

          <div className="find-us-map" aria-label="Map area for Cheese 'n Crunch location">
            <div className="find-us-map-grid" aria-hidden="true" />
            <div className="find-us-map-pin" aria-hidden="true">📍</div>
            <div className="find-us-map-label">Cheese &apos;n Crunch</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
