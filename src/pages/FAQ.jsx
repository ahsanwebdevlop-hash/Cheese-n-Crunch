import { useEffect, useState } from 'react';

function FAQ() {
  const faqData = [
    {
      category: 'Food & Menu',
      questions: [
        {
          q: 'What types of pizza do you offer?',
          a: 'We offer a wide variety of traditional pizzas and square pizzas with different toppings and flavors. Our menu features options for everyone, from classic combinations to specialty pizzas.'
        },
        {
          q: 'Do you have square pizza?',
          a: 'Yes! We offer square pizza in addition to our traditional round pizzas. Square pizza provides more servings and a unique shape.'
        },
        {
          q: 'What other items are on your menu besides pizza?',
          a: 'Beyond pizza, we serve fast food, fresh juices, and delicious desserts. All items are prepared with quality ingredients to ensure a satisfying experience.'
        }
      ]
    },
    {
      category: 'Deals & Offers',
      questions: [
        {
          q: 'What are your Lunch and Midnight Deals?',
          a: 'Our Lunch and Midnight Deals feature special pricing on select items during those times. Both use the same deal system with featured items at great prices.'
        },
        {
          q: 'How can I order the deals?',
          a: 'You can order through our website by selecting items, or call us directly at 0311 0992288. Our website will guide you to WhatsApp to confirm your order.'
        }
      ]
    },
    {
      category: 'Delivery',
      questions: [
        {
          q: 'Do you offer free delivery in Chiniot?',
          a: 'Yes! We provide free delivery across Chiniot. This makes it convenient to enjoy our pizzas, fast food, juices and desserts from your home.'
        },
        {
          q: 'Do you deliver outside Chiniot? What are the delivery charges?',
          a: 'Yes, we deliver to nearby areas including Chanab Nagar, Deen Garden, GC University, Chanab College, Talab, Iqbal Rice Mill, and Kimz College. Delivery charges typically range from Rs. 100–350 depending on distance, usually around Rs. 200. Exact charges depend on your location.'
        }
      ]
    },
    {
      category: 'Custom Cakes & Bookings',
      questions: [
        {
          q: 'Do you provide custom cake service?',
          a: 'Yes! We offer custom cake service for birthdays, anniversaries and special occasions. You can design your cake according to your preferences.'
        },
        {
          q: 'Do you have a booking area for gatherings?',
          a: 'Yes! Our dedicated booking area can accommodate up to 10 people and is perfect for birthday celebrations, small gatherings, and special events.'
        }
      ]
    },
    {
      category: 'Location & Restaurant',
      questions: [
        {
          q: 'Where are you located and what are your opening hours?',
          a: 'We are located at Yasir Plaza, Near DHQ Hospital, Sargodha Road, Chiniot. We are open Monday to Sunday, 11:00 AM to 3:00 AM. You can dine in, take away, or order for delivery.'
        }
      ]
    }
  ];

  const [expandedItems, setExpandedItems] = useState({});

  useEffect(() => {
    // Observer for faq-reveal sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.faq-reveal');
    animatedElements.forEach((el) => observer.observe(el));

    // Separate observer for individual FAQ items with staggered reveals
    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('faq-item-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    // Small delay to ensure DOM is ready
    setTimeout(() => {
      const faqItems = document.querySelectorAll('.faq-item');
      faqItems.forEach((item) => {
        itemObserver.observe(item);
      });
    }, 100);

    return () => {
      observer.disconnect();
      itemObserver.disconnect();
    };
  }, []);

  const toggleExpanded = (key) => {
    setExpandedItems((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="faq-page faq-reveal" style={{ minHeight: '100vh', paddingTop: '80px' }}>
      <section className="section-pad" id="faq-section">
        <div className="container">
          <div className="section-head reveal faq-reveal" style={{ marginBottom: '2rem' }}>
            <h2>Frequently Asked Questions</h2>
          </div>

          <p className="reveal faq-reveal" style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-light)', marginBottom: '3rem', maxWidth: '900px' }}>
            Find answers to common questions about Cheese 'n Crunch's menu, delivery, deals, custom cakes, bookings, and more. If you don't find what you're looking for, feel free to contact us at 0311 0992288 or reach out via WhatsApp.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
            {faqData.map((section, sectionIdx) => (
              <div key={sectionIdx} className="faq-category faq-reveal reveal">
                <div className="faq-category-header">
                  <h3>{section.category}</h3>
                  <div className="faq-guide-line" aria-hidden="true" />
                </div>

                <div className="faq-items">
                  {section.questions.map((item, itemIdx) => {
                    const itemKey = `${sectionIdx}-${itemIdx}`;
                    const isExpanded = expandedItems[itemKey] || false;

                    return (
                      <div key={itemKey} className="faq-item" data-index={itemIdx}>
                        <button
                          type="button"
                          onClick={() => toggleExpanded(itemKey)}
                          aria-expanded={isExpanded}
                          aria-controls={`answer-${itemKey}`}
                          className="faq-question-btn"
                        >
                          <span className="faq-question-text">{item.q}</span>
                          <span className="faq-toggle" aria-hidden="true">{isExpanded ? '−' : '+'}</span>
                        </button>

                        <div
                          id={`answer-${itemKey}`}
                          className={`faq-answer ${isExpanded ? 'open' : ''}`}
                          aria-hidden={!isExpanded}
                        >
                          <div className="faq-answer-inner">{item.a}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="reveal faq-reveal" style={{ marginTop: '3rem', textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid rgba(212, 175, 55, 0.2)' }}>
            <p style={{ fontSize: '1rem', color: 'var(--text-light)', marginBottom: '1.5rem' }}>
              Still have questions? Reach out to us anytime.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:03110992288" className="btn btn-gold">
                Call Us
              </a>
              <a href="https://wa.me/923110992288" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .faq-page {
          background:
            radial-gradient(circle at top left, rgba(212, 175, 55, 0.08), transparent 30%),
            linear-gradient(180deg, rgba(5, 23, 17, 0.96), rgba(6, 33, 25, 0.92));
          color: var(--text);
        }

        .faq-category {
          position: relative;
          padding-left: 1.5rem;
          margin-top: 0.5rem;
        }

        .faq-category::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.4rem;
          bottom: 0.4rem;
          width: 2px;
          background: linear-gradient(180deg, rgba(255, 165, 0, 0.96), rgba(241, 199, 33, 0.3), rgba(255, 255, 255, 0));
          box-shadow: 0 0 18px rgba(241, 199, 33, 0.22);
        }

        .faq-category-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 1.8rem;
          position: relative;
        }

        .faq-category-header h3 {
          margin: 0;
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text);
          white-space: nowrap;
          position: relative;
          z-index: 1;
          text-shadow: 0 0 12px rgba(241, 199, 33, 0.08);
        }

        .faq-guide-line {
          position: relative;
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, rgba(255,165,0,0.9), rgba(241,199,33,0.55), rgba(241,199,33,0.12), transparent);
          overflow: hidden;
          opacity: 0.9;
        }

        .faq-guide-line::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(255, 165, 0, 0.9) 0 1.2px, transparent 1.6px);
          background-size: 8px 100%;
          background-repeat: repeat-x;
          animation: faqDash 12s linear infinite;
          opacity: 0.85;
        }

        .faq-items {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
        }

        .faq-item {
          position: relative;
        }

        .faq-item {
          opacity: 0;
          transform: scale(0.1);
          transition: opacity 0.8s cubic-bezier(0.35, 0.8, 0.65, 0.94), transform 0.8s cubic-bezier(0.35, 0.8, 0.65, 0.94) !important;
        }

        .faq-item[data-index="0"] { transition-delay: 0s !important; }
        .faq-item[data-index="1"] { transition-delay: 0.12s !important; }
        .faq-item[data-index="2"] { transition-delay: 0.24s !important; }
        .faq-item[data-index="3"] { transition-delay: 0.36s !important; }
        .faq-item[data-index="4"] { transition-delay: 0.48s !important; }
        .faq-item[data-index="5"] { transition-delay: 0.60s !important; }
        .faq-item[data-index="6"] { transition-delay: 0.72s !important; }
        .faq-item[data-index="7"] { transition-delay: 0.84s !important; }
        .faq-item[data-index="8"] { transition-delay: 0.96s !important; }
        .faq-item[data-index="9"] { transition-delay: 1.08s !important; }

        .faq-item.faq-item-visible {
          opacity: 1 !important;
          transform: scale(1) !important;
        }

        .faq-question-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          width: 100%;
          padding: 1.2rem 1.4rem;
          background: rgba(10, 30, 24, 0.72);
          border: 1px solid rgba(212, 175, 55, 0.18);
          border-radius: var(--radius);
          color: var(--text);
          cursor: pointer;
          text-align: left;
          font: inherit;
          transition: all 0.25s ease;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.02);
          position: relative;
          overflow: hidden;
        }

        .faq-question-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(255,165,0,0.08), transparent 35%, transparent 100%);
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .faq-question-btn:hover,
        .faq-question-btn:focus-visible {
          background: rgba(18, 43, 35, 0.86);
          border-color: rgba(212, 175, 55, 0.35);
          transform: translateY(-1px);
          box-shadow: 0 10px 22px rgba(0,0,0,0.14);
          outline: none;
        }

        .faq-question-btn:hover::before,
        .faq-question-btn:focus-visible::before {
          opacity: 1;
        }

        .faq-question-text {
          flex: 1;
          font-size: 1.05rem;
          font-weight: 500;
          color: var(--text);
          line-height: 1.5;
          position: relative;
          z-index: 1;
        }

        .faq-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: rgba(212, 175, 55, 0.12);
          color: var(--gold);
          font-size: 1.75rem;
          line-height: 1;
          font-weight: 300;
          flex-shrink: 0;
          transition: transform 0.25s ease, background 0.25s ease;
          position: relative;
          z-index: 1;
        }

        .faq-question-btn:hover .faq-toggle,
        .faq-question-btn:focus-visible .faq-toggle {
          background: rgba(212, 175, 55, 0.18);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.38s ease, opacity 0.32s ease, padding 0.3s ease;
          padding-top: 0;
          padding-bottom: 0;
        }

        .faq-answer.open {
          max-height: 420px;
          opacity: 1;
          padding-top: 0.65rem;
        }

        .faq-answer-inner {
          padding: 0 1.1rem 0.25rem 1.1rem;
          font-size: 0.96rem;
          line-height: 1.65;
          color: var(--text-light);
          border-left: 1px solid rgba(212, 175, 55, 0.18);
          margin-left: 0.9rem;
        }

        .faq-reveal {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .faq-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes faqDash {
          0% {
            transform: translateX(-10%);
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(10%);
            opacity: 0.5;
          }
        }

        @media (max-width: 768px) {
          .faq-category {
            padding-left: 1rem;
          }

          .faq-category-header {
            gap: 0.75rem;
            margin-bottom: 1.25rem;
          }

          .faq-category-header h3 {
            font-size: 1.15rem;
            white-space: normal;
          }

          .faq-question-btn {
            padding: 1rem 1.1rem;
          }

          .faq-question-text {
            font-size: 0.96rem;
          }

          .faq-answer-inner {
            margin-left: 0.45rem;
            padding-left: 0.7rem;
          }
        }
      `}</style>
    </div>
  );
}

export default FAQ;
