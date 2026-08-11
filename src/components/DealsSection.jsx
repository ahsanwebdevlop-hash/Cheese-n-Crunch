function DealsSection({ deals, onAdd, onShowToast }) {
  const handleAdd = (deal) => {
    onAdd({ name: deal.title, price: deal.price, qty: 1, img: deal.img });
    onShowToast(`Added ${deal.title} to cart`);
  };

  return (
    <section className="section-pad" id="deals">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Limited Time</span>
          <h2>Hot <em>Deals</em></h2>
          <p>Big cravings deserve bigger deals.</p>
        </div>
        <div className="deals-grid stagger">
          {deals.map((deal) => (
            <article key={deal.n} className="card">
              <div className="card-img-wrap">
                <img src={deal.img} alt={deal.title} />
                <div className="deal-num">Deal {deal.n}</div>
              </div>
              <div className="card-body">
                <h3>{deal.title}</h3>
                <p className="desc">{deal.items}</p>
                <div className="card-foot">
                  <div className="price">Rs. {deal.price}</div>
                  <button className="add-btn" onClick={() => handleAdd(deal)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DealsSection;
