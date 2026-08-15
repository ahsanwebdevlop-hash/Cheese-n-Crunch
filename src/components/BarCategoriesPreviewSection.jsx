import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';

function BarCategoriesPreviewSection() {
    const barCategories = useMemo(() => [
        { id: 'brownie', title: 'Brownies' },
        { id: 'cold-coffee', title: 'Cold Coffee' },
        { id: 'ice-cream', title: 'Ice Cream' },
        { id: 'coffee-tea', title: 'Coffee & Tea' },
        { id: 'shakes', title: 'Shakes' },
        { id: 'chillers', title: 'Chillers' },
        { id: 'fresh-juice', title: 'Fresh Juice' },
    ], []);

    const [activeCategory] = useState(barCategories[0]?.title || 'Brownies');

    return (
        <section className="section-pad" id="bar-preview" style={{ background: 'var(--green-950)' }}>
            <div className="container">
                <div className="section-head reveal">
                    <span className="eyebrow">Sweet & Refreshing</span>
                    <h2>Bar <em>(Desserts & Beverages)</em></h2>
                    <p>Cool drinks, sweet treats, and perfect refreshment. Explore our full collection of beverages and desserts.</p>
                </div>

                {/* Category Strip */}
                <div className="cat-nav-wrap reveal">
                    <div className="cat-nav">
                        {barCategories.map((category) => (
                            <Link
                                key={category.id}
                                to="/bar"
                                className={`btn ${activeCategory === category.title ? 'active' : ''}`}
                                onClick={() => {
                                    // Optional: Store selected category for Bar page
                                    localStorage.setItem('selectedBarCategory', category.id);
                                }}
                            >
                                {category.title}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="section-ctas reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
                    <Link to="/bar" className="btn btn-gold">Explore Bar & Desserts →</Link>
                </div>
            </div>
        </section>
    );
}

export default BarCategoriesPreviewSection;
