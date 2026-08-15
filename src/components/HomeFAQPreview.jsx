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
      document.querySelectorAll('.home-faq-item').forEach((item) => itemObserver.observe(item));
    }, 100);

    return () => itemObserver.disconnect();
  }, []);

  return (
    <section className="section-pad section-surface" id="home-faq-preview">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
          <div className="section-head reveal">
            <h2>Have a Question?</h2>
          </div>
          <p className="section-intro section-intro--center" style={{ marginBottom: 0, fontSize: '1.1rem' }}>
            We answer the most common questions about pizza, deals, and delivery so you can order with confidence.
          </p>
        </div>

        <div className="home-faq-list">
          {previewQuestions.map((item, index) => {
            const isOpen = openQuestion === index;

            return (
              <div key={item.q} className="home-faq-item faq-item reveal" data-index={index}>
                <div className="home-faq-accent" aria-hidden="true" />

                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`home-faq-answer-${index}`}
                  className="faq-question-btn"
                >
                  <span className="faq-question-text">{item.q}</span>
                  <span className="faq-toggle" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>

                <div
                  id={`home-faq-answer-${index}`}
                  className={`faq-answer ${isOpen ? 'open' : ''}`}
                  aria-hidden={!isOpen}
                >
                  <div className="faq-answer-inner">{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="section-ctas">
          <a href="https://wa.me/923110992288" target="_blank" rel="noopener noreferrer" className="btn btn-gold">
            WhatsApp Us
          </a>
          <Link to="/faq" className="btn btn-outline">
            Have More Questions
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeFAQPreview;
