import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const previewQuestions = [
    {
        q: 'Do you have square pizza?',
        a: 'Yes! We offer square pizza in addition to our traditional round pizzas. Square pizza provides more servings and a unique shape.',
    },
    {
        q: 'How can I order the deals?',
        a: 'You can order through our website by selecting items, or call us directly at 0311 0992288. Our website will guide you to WhatsApp to confirm your order.',
    },
    {
        q: 'Do you offer free delivery in Chiniot?',
        a: 'Yes! We provide free delivery across Chiniot. This makes it convenient to enjoy our pizzas, fast food, juices and desserts from your home.',
    },
];

function HomeFAQPreview() {
    const [openQuestion, setOpenQuestion] = useState(0);

    const toggleQuestion = (index) => {
        setOpenQuestion((prev) => (prev === index ? -1 : index));
    };

    useEffect(() => {
        const itemObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('home-faq-item-visible');
                        itemObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -15% 0px' }
        );

        setTimeout(() => {
            const faqItems = document.querySelectorAll('.home-faq-item');
            faqItems.forEach((item) => {
                itemObserver.observe(item);
            });
        }, 100);

        return () => itemObserver.disconnect();
    }, []);

    return (
        <section className="section-pad" id="home-faq-preview" style={{ position: 'relative' }}>
            <div className="container">
                <div className="reveal" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <div className="section-head reveal">
                        <h2>Have a Question?</h2>
                    </div>
                    <p style={{ margin: 0, color: 'var(--text-light)', maxWidth: '820px', marginInline: 'auto', lineHeight: '1.7', fontSize: '1.1rem' }}>
                        We answer the most common questions about pizza, deals, and delivery so you can order with confidence.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.9rem', maxWidth: '980px', margin: '0 auto' }}>
                    {previewQuestions.map((item, index) => {
                        const isOpen = openQuestion === index;

                        return (
                            <div key={item.q} className="home-faq-item reveal" data-index={index} style={{ position: 'relative' }}>
                                <div
                                    style={{
                                        position: 'absolute',
                                        left: '0',
                                        top: '0.7rem',
                                        bottom: '0.7rem',
                                        width: '2px',
                                        background: 'linear-gradient(180deg, rgba(255,165,0,0.95), rgba(241,199,33,0.3), rgba(255,255,255,0))',
                                        boxShadow: '0 0 18px rgba(241, 199, 33, 0.18)',
                                    }}
                                />

                                <button
                                    type="button"
                                    onClick={() => toggleQuestion(index)}
                                    aria-expanded={isOpen}
                                    aria-controls={`home-faq-answer-${index}`}
                                    style={{
                                        width: '100%',
                                        background: 'rgba(9, 25, 20, 0.78)',
                                        border: '1px solid rgba(212, 175, 55, 0.18)',
                                        borderLeft: 'none',
                                        borderRadius: 'var(--radius)',
                                        padding: '1.1rem 1.3rem 1.1rem 1.5rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        gap: '1rem',
                                        color: 'var(--text)',
                                        fontFamily: 'inherit',
                                        fontSize: '1rem',
                                        fontWeight: '500',
                                        textAlign: 'left',
                                        cursor: 'pointer',
                                        boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                                        transition: 'all 0.25s ease',
                                    }}
                                >
                                    <span style={{ flex: 1, paddingLeft: '0.75rem' }}>{item.q}</span>
                                    <span
                                        aria-hidden="true"
                                        style={{
                                            width: '28px',
                                            height: '28px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: '50%',
                                            background: 'rgba(212, 175, 55, 0.12)',
                                            color: 'var(--gold)',
                                            fontSize: '1.6rem',
                                            lineHeight: 1,
                                            fontWeight: 300,
                                        }}
                                    >
                                        {isOpen ? '−' : '+'}
                                    </span>
                                </button>

                                <div
                                    id={`home-faq-answer-${index}`}
                                    style={{
                                        maxHeight: isOpen ? '200px' : '0',
                                        overflow: 'hidden',
                                        opacity: isOpen ? 1 : 0,
                                        transition: 'max-height 0.35s ease, opacity 0.28s ease',
                                    }}
                                >
                                    <div
                                        style={{
                                            marginLeft: '1.25rem',
                                            padding: isOpen ? '0.9rem 1.15rem 0.2rem 1.15rem' : '0 1.15rem 0 1.15rem',
                                            color: 'var(--text-light)',
                                            lineHeight: 1.7,
                                            borderLeft: '1px solid rgba(212, 175, 55, 0.18)',
                                        }}
                                    >
                                        {item.a}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                    <a href="https://wa.me/923110992288" target="_blank" rel="noopener noreferrer" className="btn btn-gold">
                        WhatsApp Us
                    </a>
                    <Link to="/faq" className="btn btn-outline">
                        Have More Questions
                    </Link>
                </div>

                <style>{`
                    .home-faq-item {
                        opacity: 0;
                        transform: scale(0.1);
                        transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
                    }

                    .home-faq-item[data-index="0"] { transition-delay: 0s !important; }
                    .home-faq-item[data-index="1"] { transition-delay: 0.12s !important; }
                    .home-faq-item[data-index="2"] { transition-delay: 0.24s !important; }

                    .home-faq-item.home-faq-item-visible {
                        opacity: 1 !important;
                        transform: scale(1) !important;
                    }
                `}</style>
            </div>
        </section>
    );
}

export default HomeFAQPreview;
