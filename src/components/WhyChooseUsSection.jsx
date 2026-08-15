import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function WhatMakesUsDifferentSection() {
  const benefits = [
    {
      title: 'Free Delivery in Chiniot',
      description: 'Enjoy free home delivery across Chiniot, making it easy to enjoy your favourite pizza, fast food, juices and desserts without leaving home.',
      link: null,
    },
    {
      title: 'Menu Loaded with Flavours',
      description: 'Explore a wide variety of pizzas, fast food, juices and desserts prepared to give every visit something delicious to discover.',
      link: null,
    },
    {
      title: 'Custom Cake Service',
      description: 'Celebrate special moments with our custom cake service, created for birthdays and other occasions.',
      link: '/bar#custom-cakes',
    },
    {
      title: 'Booking Area',
      description: 'Our dedicated booking area can accommodate up to 10 people and can also be used for birthday gatherings and small celebrations.',
      link: null,
    },
  ];

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    const timelineItems = [...document.querySelectorAll('#what-makes-us-different .wmud-item')];
    document.querySelectorAll('#what-makes-us-different .wmud-reveal').forEach((el) => revealObserver.observe(el));

    const lineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const index = Number(entry.target.dataset.index || 0);
          timelineItems.forEach((item, itemIndex) => {
            item.classList.toggle('is-active', itemIndex <= index);
          });
        });
      },
      { threshold: 0.45 }
    );

    timelineItems.forEach((item, index) => {
      item.dataset.index = String(index);
      lineObserver.observe(item);
    });

    return () => {
      revealObserver.disconnect();
      lineObserver.disconnect();
    };
  }, []);

  const TickIcon = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5 9.2 16.7 19 6.8" />
    </svg>
  );

  return (
    <section className="section-pad section-surface" id="what-makes-us-different">
      <div className="container">
        <div className="section-head reveal wmud-reveal">
          <h2>What Makes Us Different</h2>
        </div>

        <p className="section-intro section-intro--center reveal wmud-reveal">
          Cheese &apos;n Crunch in Chiniot serves delicious pizza, fast food, juices and desserts, with free delivery across Chiniot and a luxury sitting area for dine-in and gatherings.
        </p>

        <div className="wmud-layout wmud-reveal reveal">
          <div className="wmud-visual">
            <img
              src="https://images.unsplash.com/photo-1565958011504-98d6effd2c40?q=80&w=600&auto=format&fit=crop"
              alt="Premium dining at Cheese 'n Crunch restaurant in Chiniot"
            />
          </div>

          <div className="wmud-timeline">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="wmud-item wmud-reveal">
                <div className="wmud-marker-wrap">
                  <span className="wmud-connector" aria-hidden="true" />
                  <div className="wmud-badge">
                    <TickIcon />
                  </div>
                </div>

                <div className="wmud-copy">
                  {benefit.link ? (
                    <Link to={benefit.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <h3 className="heading-card">{benefit.title}</h3>
                    </Link>
                  ) : (
                    <h3 className="heading-card">{benefit.title}</h3>
                  )}
                  <p className="text-lead" style={{ marginTop: 'var(--space-xs)', maxWidth: 'none' }}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatMakesUsDifferentSection;
