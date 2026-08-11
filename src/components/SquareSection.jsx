function SquareSection({ onAdd, onShowToast }) {
  const tiers = [
    {
      name: 'Special Square - Personal',
      price: 595,
      label: 'Personal',
      img: 'https://images.unsplash.com/photo-1548365328-9f547fb0953b?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Special Square - Premium',
      price: 1295,
      label: 'Premium',
      img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Special Square - Grand',
      price: 1895,
      label: 'Grand',
      img: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=800&auto=format&fit=crop',
    },
  ];

  const handleAdd = (item) => {
    onAdd({ name: item.name, price: item.price, qty: 1, img: item.img });
    onShowToast(`Added ${item.label} to cart`);
  };

  return (
    <section className="section-pad" id="special-square" style={{ background: 'var(--green-950)' }}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Square Cut</span>
          <h2>Special <em>Square</em></h2>
          <p>Golden-edged square pizza, loaded corner to corner.</p>
        </div>
        <div className="panel-grid stagger">
          {tiers.map((tier) => (
            <article key={tier.name} className="tier-card">
              <img src={tier.img} alt={`${tier.label} special square pizza`} />
              <div className="tier-name">{tier.label}</div>
              <div className="tier-price">Rs. {tier.price}</div>
              <button className="btn add-btn" onClick={() => handleAdd(tier)}>
                Add to Cart
              </button>
            </article>
          ))}
        </div>

        <div className="flavor-group-title reveal" style={{ marginTop: 60 }} id="traditional-square">
          <h3>Traditional Square</h3>
          <div className="line" />
        </div>
        <div className="panel-grid stagger">
          {[
            {
              name: 'Traditional Square - Personal',
              price: 595,
              label: 'Personal',
              img: 'https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?q=80&w=800&auto=format&fit=crop',
            },
            {
              name: 'Traditional Square - Premium',
              price: 1295,
              label: 'Premium',
              img: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?q=80&w=800&auto=format&fit=crop',
            },
            {
              name: 'Traditional Square - Grand',
              price: 1795,
              label: 'Grand',
              img: 'https://images.unsplash.com/photo-1590534247854-e97d5e3feef6?q=80&w=800&auto=format&fit=crop',
            },
          ].map((tier) => (
            <article key={tier.name} className="tier-card">
              <img src={tier.img} alt={`${tier.label} traditional square pizza`} />
              <div className="tier-name">{tier.label}</div>
              <div className="tier-price">Rs. {tier.price}</div>
              <button className="btn add-btn" onClick={() => handleAdd(tier)}>
                Add to Cart
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SquareSection;
