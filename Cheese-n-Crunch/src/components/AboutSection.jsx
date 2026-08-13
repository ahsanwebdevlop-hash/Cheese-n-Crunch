function AboutSection() {
  return (
    <section className="section-pad" id="about" style={{ background: 'var(--green-950)' }}>
      <div className="container about-grid">
        <div className="about-img reveal">
          <img
            src="https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=1000&auto=format&fit=crop"
            alt="Fresh pizza being prepared at Cheese 'n Crunch"
          />
        </div>
        <div className="reveal">
          <span className="eyebrow">Our Story</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,4.5vw,44px)', textTransform: 'uppercase', marginTop: '14px' }}>
            About Cheese <em style={{ color: 'var(--gold)', fontStyle: 'normal' }}>'n</em> Crunch
          </h2>
          <p className="body-text" style={{ marginTop: '18px' }}>
            Cheese 'n Crunch is built around one simple idea — fresh ingredients, bold flavors and food that's made to order. From loaded pizzas to crunchy fried chicken and refreshing juices, every item on our menu is crafted to satisfy real cravings, fast.
          </p>
          <p className="body-text" style={{ marginTop: '14px' }}>
            We keep our deals generous, our delivery quick, and our process simple — so saying yes to pizza is always easy.
          </p>
          <div className="about-stats">
            <div>
              <div className="n">10+</div>
              <div className="l">Hot Deals</div>
            </div>
            <div>
              <div className="n">15+</div>
              <div className="l">Pizza Flavors</div>
            </div>
            <div>
              <div className="n">Free</div>
              <div className="l">Delivery in Chiniot</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
