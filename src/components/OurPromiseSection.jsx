function OurPromiseSection() {
  const promises = [
    {
      title: 'Quality',
      description: 'Fresh ingredients and carefully prepared food in every order.',
    },
    {
      title: 'Value',
      description: 'Generous portions, satisfying meals, and deals made for real value.',
    },
    {
      title: 'Service',
      description: 'Fast, friendly, and convenient service from order to delivery.',
    },
  ];

  return (
    <section className="section-pad our-promise-section" id="our-promise" style={{ background: 'var(--green-950)' }}>
      <div className="container">
        <div className="our-promise-header">
          <span className="eyebrow our-promise-eyebrow">Our Promise</span>
          <h2 className="our-promise-title">Quality You Can Taste. Value You Can Trust.</h2>
        </div>

        <div className="our-promise-grid">
          {promises.map((promise, idx) => (
            <div
              key={idx}
              className="promise-card"
            >
              <h3 className="promise-card-title">{promise.title}</h3>
              <p className="promise-card-copy">{promise.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurPromiseSection;
