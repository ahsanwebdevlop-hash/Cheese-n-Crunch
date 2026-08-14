import { useMemo, useState } from 'react';
import { BROWNIE_FLAVORS, ICE_CREAM_FLAVORS } from '../data/siteData.js';

function BrownieIceCreamSection({ onAdd, onShowToast }) {
  const brownies = BROWNIE_FLAVORS.map((f) => f.name);
  const iceCreamFlavors = ICE_CREAM_FLAVORS.map((f) => f.name);

  const sizeOptions = [
    { label: 'Small', price: 600 },
    { label: 'Medium', price: 850 },
    { label: 'Large', price: 1200 },
  ];

  const [selectedBrownie, setSelectedBrownie] = useState(brownies[0]);
  const [selectedIceCream, setSelectedIceCream] = useState(iceCreamFlavors[0]);
  const [size, setSize] = useState(sizeOptions[0].price);

  const selectedSize = useMemo(
    () => sizeOptions.find((option) => option.price === size) || sizeOptions[0],
    [size]
  );

  const total = useMemo(() => size, [size]);

  const handleAdd = () => {
    const label = `${selectedBrownie} + ${selectedIceCream} (${selectedSize.label})`;
    onAdd({
      name: label,
      price: total,
      qty: 1,
      img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop',
    });
    onShowToast(`Added Brownie & Ice Cream to cart`);
  };

  return (
    <section className="section-pad" id="brownie-ice-cream">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Sweet Combination</span>
          <h2>Brownie <em>&amp;</em> Ice Cream</h2>
          <p>Mix your favorite brownie with ice cream flavor.</p>
        </div>
        <div className="hh-box reveal">
          <span className="hh-note">🍫 Warm brownie with cold ice cream — Pure bliss!</span>
          <div className="hh-row">
            <div className="field">
              <label htmlFor="brownie">Choose Brownie</label>
              <select id="brownie" value={selectedBrownie} onChange={(e) => setSelectedBrownie(e.target.value)}>
                {brownies.map((brownie) => (
                  <option key={brownie} value={brownie}>{brownie}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="iceCream">Choose Ice Cream</label>
              <select id="iceCream" value={selectedIceCream} onChange={(e) => setSelectedIceCream(e.target.value)}>
                {iceCreamFlavors.map((flavor) => (
                  <option key={flavor} value={flavor}>{flavor}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="bieSize">Size</label>
              <select id="bieSize" value={size} onChange={(e) => setSize(Number(e.target.value))}>
                {sizeOptions.map((option) => (
                  <option key={option.price} value={option.price}>
                    {option.label} — Rs. {option.price}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px', marginTop: '26px' }}>
            <div className="hh-total">
              <div className="lbl">Total</div>
              <div className="amt">Rs. {total}</div>
            </div>
            <button className="btn btn-gold" onClick={handleAdd}>Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrownieIceCreamSection;
