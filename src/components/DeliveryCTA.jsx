import { Link } from 'react-router-dom';

function DeliveryCTA() {
  return (
    <section className="section-pad" aria-labelledby="home-delivery-heading">
      <div className="container">
        <div className="delivery-cta reveal">
          <h2 id="home-delivery-heading">Fast Food, Pizza & Desserts in Chiniot</h2>
          <h3>Free Delivery in Chiniot • Open 11 AM to 3 AM</h3>
          <a href="https://wa.me/923110992288" target="_blank" rel="noopener" className="btn btn-gold">Order on WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

export default DeliveryCTA;
