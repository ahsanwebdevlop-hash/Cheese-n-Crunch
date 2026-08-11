function TrustStrip() {
  const items = [
    { icon: '🍕', label: 'Fresh & Delicious' },
    { icon: '🔥', label: 'Hot Deals' },
    { icon: '🚚', label: 'Free Delivery in Chiniot' },
    { icon: '💬', label: 'Easy WhatsApp Ordering' },
  ];

  return (
    <section className="trust-strip" aria-label="Highlights">
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
