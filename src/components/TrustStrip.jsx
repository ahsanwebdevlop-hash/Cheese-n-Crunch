function TrustStrip() {
  const items = [
    { icon: '🍕', label: 'Pizza & Fast Food in Chiniot' },
    { icon: '🔥', label: 'Hot Deals' },
    { icon: '🚚', label: 'Free Delivery in Chiniot' },
    { icon: '💬', label: 'Order on WhatsApp' },
  ];

  return (
    <section className="trust-strip reveal" aria-label="Highlights">
      <div className="container">
        {items.map((item) => (
          <div key={item.label} className="trust-item">
            <span className="ic">{item.icon}</span>
            {item.label}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustStrip;
