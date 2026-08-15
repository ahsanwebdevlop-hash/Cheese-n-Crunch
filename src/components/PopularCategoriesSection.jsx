import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { OTHER_CATEGORIES } from '../data/siteData.js';

function PopularCategoriesSection() {
    // Use the exact same category data as MenuSection
    const categories = OTHER_CATEGORIES || [];

    useEffect(() => {
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        sectionObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -15% 0px' }
        );

        const section = document.getElementById('explore-menu');
        if (section) {
            sectionObserver.observe(section);
        }

        return () => sectionObserver.disconnect();
    }, []);

    return (
        <section className="section-pad" id="explore-menu">
            <div className="container">
                <div className="section-head reveal">
                    <h2>Explore Our Menu</h2>
                </div>
                <div className="cat-nav-wrap reveal">
                    <div className="cat-nav" style={{ justifyContent: 'center', overflowX: 'auto', overflowY: 'hidden', paddingBottom: '1rem', paddingTop: '1rem', gap: '20px', display: 'flex', flexWrap: 'wrap' }}>
                        {categories.map((category, index) => (
                            <Link
                                key={category.id}
                                to={`/menu?category=${category.id}`}
                                className="btn cat-link-item"
                                data-index={index}
                            >
                                {category.title}
                            </Link>
                        ))}
                    </div>
                </div>
                <div style={{ marginTop: '1rem ', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem' }}>
                    <Link to="/menu" className="btn btn-gold" style={{ marginTop: '1rem ', width: 'fit-content', alignSelf: 'center' }}>
                        Explore Full Menu
                    </Link>
                </div>

                <style>{`
                    #explore-menu .cat-link-item {
                        opacity: 0;
                        transform: scale(0.1);
                        transition: opacity 0.9s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
                    }

                    #explore-menu .cat-link-item[data-index="0"] {
                        transition-delay: 0s;
                    }

                    #explore-menu .cat-link-item[data-index="1"] {
                        transition-delay: 0.2s;
                    }

                    #explore-menu .cat-link-item[data-index="2"] {
                        transition-delay: 0.4s;
                    }

                    #explore-menu .cat-link-item[data-index="3"] {
                        transition-delay: 0.6s;
                    }

                    #explore-menu .cat-link-item[data-index="4"] {
                        transition-delay: 0.8s;
                    }

                    #explore-menu .cat-link-item[data-index="5"] {
                        transition-delay: 1.0s;
                    }

                    #explore-menu .cat-link-item[data-index="6"] {
                        transition-delay: 1.2s;
                    }

                    #explore-menu .cat-link-item[data-index="7"] {
                        transition-delay: 1.4s;
                    }

                    #explore-menu .cat-link-item[data-index="8"] {
                        transition-delay: 1.6s;
                    }

                    #explore-menu .cat-link-item[data-index="9"] {
                        transition-delay: 1.8s;
                    }

                    #explore-menu.is-visible .cat-link-item {
                        opacity: 1;
                        transform: scale(1);
                    }
                `}</style>
            </div>
        </section>
    );
}

export default PopularCategoriesSection;
