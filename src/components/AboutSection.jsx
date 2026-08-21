function AboutSection() {
  return (
    <section className="section-pad about-story-section section-surface" id="about">
      <div className="container about-grid">
        <div className="about-img reveal about-visual">
          <img
            src="https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=1000&auto=format&fit=crop"
            alt="Fresh pizza being prepared at Cheese 'n Crunch"
          />
        </div>
        <div className="reveal about-copy">
          {/* <span className="eyebrow about-eyebrow">Our Story</span> */}
          <h1 className="about-title">
            <span>About Cheese 'n</span> <em>Crunch</em>
          </h1>
          <p className="body-text about-body">
            Cheese 'n Crunch is built around one simple idea — fresh ingredients, bold flavors and food that's made to order. From loaded pizzas to crunchy fried chicken and refreshing juices, every item on our menu is crafted to satisfy real cravings, fast.
          </p>
          <p className="body-text about-body about-body-secondary">
            We keep our deals generous, our delivery quick, and our process simple — so saying yes to pizza is always easy.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
