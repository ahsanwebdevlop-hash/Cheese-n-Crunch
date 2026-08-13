import { Link } from 'react-router-dom';

function DeliveryCTA() {
  return (
    <section className="section-pad">
      <div className="container">
        <div className="delivery-cta reveal">
          <h2>Craving Something Delicious?</h2>
          <h3>Free Delivery Across Chiniot</h3>
          <a href="#deals" className="btn btn-gold">Order Now</a>
        </div>
      </div>
    </section>
  );
}

export default DeliveryCTA;
