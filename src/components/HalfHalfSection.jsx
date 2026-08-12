import { useMemo, useState } from 'react';

function HalfHalfSection({ onAdd, onShowToast }) {
  const flavors = [
    'CnC Special',
    'Behari Kabab',
    'Peri Peri',
    'Malai Boti',
    'Steak Supreme',
    'Mayo Garlic',
    'Mughlai',
    'Chicken Tikka',
    'Chicken Fajita',
    'Chicken Supreme',
    'Euro',
    'Fajita Sicilian',
    'Bonefire',
    'Cheese Lover',
    'Veggie Lover',
  ];
  const [half1, setHalf1] = useState(flavors[0]);
  const [half2, setHalf2] = useState(flavors[1]);
  const [size, setSize] = useState(595);

  const total = useMemo(() => size + 150, [size]);

  const handleAdd = () => {
    const label = `${half1} / ${half2} (Half & Half)`;
    onAdd({ name: label, price: total, qty: 1, img: 'https://images.unsplash.com/photo-1548365328-9f547fb0953b?q=80&w=800&auto=format&fit=crop' });
    onShowToast('Added Half & Half pizza to cart');
  };

  return (
    <section className="section-pad" id="half-half">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Can't Decide?</span>
          <h2>Half <em>&amp;</em> Half</h2>
          <p>Available in all flavors — add on Rs. 150/-</p>
        </div>
        <div className="hh-box reveal">
          <span className="hh-note">🔥 Any two flavors, one pizza — +Rs. 150</span>
          <div className="hh-row">
            <div className="field">
              <label htmlFor="half1">Half 1 Flavor</label>
              <select id="half1" value={half1} onChange={(e) => setHalf1(e.target.value)}>
                {flavors.map((flavor) => (
                  <option key={flavor} value={flavor}>{flavor}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="half2">Half 2 Flavor</label>
              <select id="half2" value={half2} onChange={(e) => setHalf2(e.target.value)}>
                {flavors.map((flavor) => (
                  <option key={flavor} value={flavor}>{flavor}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="hhSize">Size</label>
              <select id="hhSize" value={size} onChange={(e) => setSize(Number(e.target.value))}>
                {[
                  { label: 'Small', price: 495 },
                  { label: 'Medium', price: 1095 },
                  { label: 'Large', price: 1545 },
                  { label: 'X-Large', price: 1995 },
                ].map((option) => (
                  <option key={option.price} value={option.price}>
                    {option.label} — Rs. {option.price}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px', marginTop: '26px' }}>
            <div className="hh-total">
              <div className="lbl">Total (incl. +Rs.150)</div>
              <div className="amt" id="hhTotal">Rs. {total}</div>
            </div>
            <button className="btn btn-gold" onClick={handleAdd}>Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HalfHalfSection;
