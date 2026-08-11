function OtherCategoriesSection({ categories }) {
  return (
    <section className="section-pad">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Full Menu</span>
          <h2>More From The <em>Kitchen</em></h2>
          <p>Full pricing for these categories is being finalized — check back soon or ask us on WhatsApp.</p>
        </div>
        {categories.map((category) => (
          <div key={category.id} id={category.id} style={{ marginBottom: '40px' }}>
            <div className="flavor-group-title reveal">
              <h3>{category.title}</h3>
              <div className="line" />
            </div>
            <div className="other-cats-grid stagger">
              {category.items.map((item) => (
                <article key={item.name} className="coming-card">
                  <img className="food-thumb" src={item.img} alt={item.name} />
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OtherCategoriesSection;
