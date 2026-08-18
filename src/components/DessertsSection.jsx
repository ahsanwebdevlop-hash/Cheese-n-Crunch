import { useMemo } from 'react';
import { normalizeProduct } from '../data/siteData.js';

function DessertsSection({ onFlavorClick }) {
  const cakeItems = useMemo(() => [
    {
      name: 'Cadbury Cake (2 pound)',
      description: 'Rich cadbury chocolate cake',
      price: 0,
      variants: [
        { size: '2 Pound', price: 2400 },
      ],
      img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop',
    },
    {
      name: 'Caramel Cake',
      description: 'Delicious caramel cake',
      price: 0,
      variants: [
        { size: '1 Pound', price: 1300 },
        { size: '2 Pound', price: 2400 },
      ],
      img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop',
    },
    {
      name: 'Fudge Cake',
      description: 'Decadent fudge cake',
      price: 0,
      variants: [
        { size: '1 Pound', price: 1300 },
        { size: '2 Pound', price: 2400 },
      ],
      img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop',
    },
    {
      name: 'Fresh Cream Cake',
      description: 'Fresh cream cake delight',
      price: 0,
      variants: [
        { size: '1 Pound', price: 1200 },
        { size: '2 Pound', price: 2000 },
      ],
      img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop',
    },
  ], []);

  const itemsForCategory = useMemo(() => {
    return cakeItems.map(normalizeProduct);
  }, [cakeItems]);

  return (
    <section className="section-pad" id="cakes" style={{ background: 'var(--green-950)' }}>
      <div className="container">
        <div className="section-head reveal">
          <h2>Cakes</h2>
        </div>

        <div className="deals-grid stagger">
          {itemsForCategory.map((product) => (
            <article key={product.name} className="card">
              <div className="card-img-wrap">
                <img src={product.img} alt={product.name} />
              </div>
              <div className="card-body">
                <h3>{product.name}</h3>
                <p className="desc">{product.desc}</p>
                <div className="card-foot">
                  <div className="price">
                    {product.variants && product.variants.length > 0
                      ? `From Rs. ${product.displayPrice}`
                      : `Rs. ${product.price}`}
                  </div>
                  <button
                    className="add-btn"
                    onClick={() => onFlavorClick(product)}
                  >
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

export default DessertsSection;
