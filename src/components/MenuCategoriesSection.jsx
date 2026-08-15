import { Link } from 'react-router-dom';
import { MENU_BY_CATEGORY } from '../data/siteData.js';
import { useEffect, useRef, useState } from 'react';

function MenuCategoriesSection() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const barCategories = [
        { id: 'brownie', title: 'Brownies' },
        { id: 'cold-coffee', title: 'Cold Coffee' },
        { id: 'ice-cream', title: 'Ice Cream' },
        { id: 'coffee-tea', title: 'Coffee & Tea' },
        { id: 'shakes', title: 'Shakes' },
        { id: 'chillers', title: 'Chillers' },
        { id: 'fresh-juice', title: 'Fresh Juice' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    // Calculate delays for sequential animation
    const menuBtnCount = MENU_BY_CATEGORY.length;
    const animationDuration = 1; // in seconds
    const delayBetweenButtons = 0.15; // in seconds
    
    // First strip completes after: (last button delay + animation duration)
    const firstStripCompletionTime = (menuBtnCount - 1) * delayBetweenButtons + animationDuration;
    
    // Second strip starts after first strip completes
    const secondStripStartDelay = firstStripCompletionTime;

    return (
        <section className="section-pad" id="explore-menu" style={{ background: 'var(--green-950)' }} ref={sectionRef}>
            
            <div className="container">
                <div className="section-head reveal">
                    <span className="eyebrow">Our Full Selection</span>
                    <h2>Explore Our Menu</h2>
                    <p>Browse all our delicious categories including pizzas, burgers, wraps, and more. Order your favorites on WhatsApp.</p>
                </div>

                {/* Menu Category Strip */}
                <div className="cat-nav-wrap reveal">
                    <div className="cat-nav" style={{ justifyContent: 'center' }}>
                        {MENU_BY_CATEGORY.map((category) => (
                            <Link
                                key={category.id}
                                to={`/menu?category=${category.id}`}
                                className="btn"
                            >
                                {category.title}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Bar Category Strip */}
                <div className="cat-nav-wrap reveal" style={{ marginTop: '0.7rem' }}>
                    <div className="cat-nav" style={{ justifyContent: 'center' }}>
                        {barCategories.map((category) => (
                            <Link
                                key={category.id}
                                to={`/bar?category=${category.id}`}
                                className="btn"
                            >
                                {category.title}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="section-ctas reveal" style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', gap: '0.8rem', justifyContent: 'center' }}>
                    <Link to="/menu" className="btn btn-gold">View Full Menu →</Link>
                    <Link to="/bar" className="btn btn-outline">Explore Bar & Desserts →</Link>
                </div>
            </div>
        </section>
    );
}

export default MenuCategoriesSection;
