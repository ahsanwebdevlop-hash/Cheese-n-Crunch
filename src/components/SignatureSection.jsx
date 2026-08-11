function SignatureSection({ onAdd, onShowToast }) {
  const tiers = [
    {
      name: "C'n Signature - Regular",
      price: 1295,
      label: 'Regular',
      img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: "C'n Signature - Large",
      price: 1695,
      label: 'Large',
      img: 'https://images.unsplash.com/photo-1600628421066-f6bda6a7b976?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: "C'n Signature - X-Large",
      price: 2395,
      label: 'X-Large',
      img: 'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?q=80&w=800&auto=format&fit=crop',
    },
  ];

  const handleAdd = (item) => {
    onAdd({ name: item.name, price: item.price, qty: 1, img: item.img });
    onShowToast(`Added ${item.label} to cart`);
  };

  return (
    <section className="section-pad" id="signature" style={{ background: 'var(--green-950)' }}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Kring Crust</span>
          <h2>C'n <em>Signature</em></h2>
          <p>Our house-original ring-crust pizza — golden, cheesy edge, every slice.</p>
        </div>
        <div className="panel-grid stagger">
          {tiers.map((tier) => (
            <article key={tier.name} className="tier-card">
              <img src={tier.img} alt={`${tier.label} Kring Crust pizza`} />
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

export default SignatureSection;
