import { useEffect, useState } from 'react';
import FinalCTASection from '../components/FinalCTASection.jsx';

function FAQ() {
  const categoryBackgrounds = {
    'Food & Menu': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1600&q=80',
    'Deals & Offers': 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1600&q=80',
    Delivery: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1600&q=80',
    'Custom Cakes & Bookings': 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=1600&q=80',
    'Location & Restaurant': 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=80',
  };

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

    document.querySelectorAll('.faq-reveal').forEach((el) => observer.observe(el));

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

    setTimeout(() => {
      document.querySelectorAll('.faq-item').forEach((item) => itemObserver.observe(item));
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
    <div className="faq-page page-shell faq-reveal">
      <section className="faq-page-hero" aria-labelledby="faq-page-title">
        <div className="container">
          <div className="section-head faq-page-hero__content reveal faq-reveal">
            <h1 id="faq-page-title"><span>Frequently Asked</span> <em>Questions</em></h1>
            <p>
              Find answers to common questions about Cheese &apos;n Crunch&apos;s menu, delivery, deals, custom cakes, bookings, and more. If you don&apos;t find what you&apos;re looking for, feel free to contact us at 0311 0992288 or reach out via WhatsApp.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad" id="faq-section">
        <div className="container">
          <div className="faq-stack">
            {faqData.map((section, sectionIdx) => {
              const backgroundImage = categoryBackgrounds[section.category] || categoryBackgrounds['Food & Menu'];

              return (
                <div
                  key={sectionIdx}
                  className="faq-category faq-reveal reveal"
                  style={{
                    backgroundImage: `linear-gradient(rgba(10, 31, 24, 0.7), rgba(10, 31, 24, 0.8)), url('${backgroundImage}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: '20px',
                    padding: '1.5rem 1.5rem 1.25rem 1.5rem',
                    border: '1px solid rgba(241, 199, 33, 0.28)',
                    boxShadow: '0 18px 40px rgba(0, 0, 0, 0.18)'
                  }}
                >
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
              );
            })}
          </div>

          <div className="section-divider-top reveal faq-reveal">
            <p className="text-lead section-intro--center" style={{ marginBottom: 'var(--space-lg)' }}>
              Still have questions? Reach out to us anytime.
            </p>
            <div className="section-ctas">
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
      <FinalCTASection />
    </div>
  );
}

export default FAQ;
