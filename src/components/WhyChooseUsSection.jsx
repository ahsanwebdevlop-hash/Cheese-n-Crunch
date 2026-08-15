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
    const revealEls = document.querySelectorAll('#what-makes-us-different .wmud-reveal');

    revealEls.forEach((el) => revealObserver.observe(el));

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
    <section className="section-pad" id="what-makes-us-different">
      <div className="container">
        <div className="section-head reveal wmud-reveal">
          <h2>What Makes Us Different</h2>
        </div>

        <p className="reveal wmud-reveal" style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-light)', marginBottom: '3rem', maxWidth: '100%', textAlign: 'center' }}>
          Cheese 'n Crunch in Chiniot serves delicious pizza, fast food, juices and desserts, with free delivery across Chiniot and a luxury sitting area for dine-in and gatherings.
        </p>

        <div className="wmud-layout wmud-reveal" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.1fr)', gap: '2.5rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="https://images.unsplash.com/photo-1565958011504-98d6effd2c40?q=80&w=600&auto=format&fit=crop"
              alt="Premium dining at Cheese 'n Crunch restaurant in Chiniot"
              style={{
                width: '100%',
                maxWidth: '530px',
                maxHeight: '390px',
                objectFit: 'cover',
                borderRadius: '1.7rem',
                display: 'block',
              }}
            />
          </div>

          <div className="wmud-timeline" style={{ position: 'relative', display: 'grid', gap: '1.25rem' }}>
            {benefits.map((benefit, idx) => (
              <div key={idx} className="wmud-item wmud-reveal" style={{ display: 'grid', gridTemplateColumns: '52px minmax(0, 1fr)', gap: '1rem', alignItems: 'flex-start', position: 'relative' }}>
                <div className="wmud-marker-wrap" style={{ position: 'relative', height: '100%', display: 'flex', justifyContent: 'center' }}>
                  <span className="wmud-connector" />
                  <div className="wmud-badge" style={{ position: 'relative', zIndex: 1, width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(255, 165, 0, 0.10)', border: '1px solid rgba(241, 199, 33, 0.38)', color: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 0 6px rgba(255,165,0,0.04)', transition: 'all 0.45s ease' }}>
                    <TickIcon />
                  </div>
                </div>

                <div style={{ paddingTop: '0.15rem' }}>
                  {benefit.link ? (
                    <Link to={benefit.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: '700', margin: '0 0 0.5rem', color: 'rgb(232, 183, 63)' }}>
                        {benefit.title}
                      </h3>
                    </Link>
                  ) : (
                    <h3 style={{ fontSize: '1.15rem', fontWeight: '700', margin: '0 0 0.5rem', color: 'rgb(232, 183, 63)' }}>
                      {benefit.title}
                    </h3>
                  )}
                  <p style={{ margin: 0, fontSize: '0.97rem', lineHeight: '1.7', color: 'var(--text-light)' }}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          #what-makes-us-different .section-head h2 {
            background: none !important;
            color: var(--menu-orange) !important;
            -webkit-background-clip: unset !important;
            background-clip: unset !important;
            -webkit-text-fill-color: var(--menu-orange) !important;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.18);
          }

          #what-makes-us-different .wmud-reveal {
            opacity: 0;
            transform: translateY(18px);
            transition: opacity 0.7s ease, transform 0.7s ease;
          }

          #what-makes-us-different .wmud-reveal.is-visible {
            opacity: 1;
            transform: translateY(0);
          }

          #what-makes-us-different .wmud-item {
            opacity: 0.96;
          }

          #what-makes-us-different .wmud-marker-wrap {
            position: relative;
          }

          #what-makes-us-different .wmud-connector {
            position: absolute;
            left: 50%;
            top: 42px;
            width: 2px;
            height: calc(100% - 29px);
            background: rgba(234, 184, 72, 0.12);
            transform: translateX(-50%);
            transition: all 2.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            opacity: 0.12;
            border-radius: 99px;
          }

          #what-makes-us-different .wmud-item:last-child .wmud-connector {
            display: none;
          }

          #what-makes-us-different .wmud-item.is-active .wmud-connector {
            opacity: 0.85;
            background: rgba(234, 184, 72, 0.76);
            box-shadow: 0 0 12px rgba(234, 184, 72, 0.18);
          }

          #what-makes-us-different .wmud-badge {
            transition: all 1.1s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          #what-makes-us-different .wmud-item.is-active .wmud-badge {
            background: rgba(234, 184, 72, 0.22);
            border-color: rgba(234, 184, 72, 1);
            color: #f4d875;
            box-shadow: 0 0 0 6px rgba(234, 184, 72, 0.04), 0 0 14px rgba(234, 184, 72, 0.12);
            transform: translateY(-5px) rotate(6deg) scale(1.06);
          }

          #what-makes-us-different .wmud-item.is-active h3 {
            color: #f1d57a;
          }

          @keyframes wmud-shake {
            0%, 100% {
              transform: translateY(-5px) rotate(6deg) translateX(0);
            }
            25% {
              transform: translateY(-5px) rotate(6deg) translateX(-2px);
            }
            50% {
              transform: translateY(-5px) rotate(6deg) translateX(2px);
            }
            75% {
              transform: translateY(-5px) rotate(6deg) translateX(-1px);
            }
          }

          #what-makes-us-different .wmud-item.is-active .wmud-badge {
            animation: wmud-shake 0.5s ease-in-out;
          }

          @media (max-width: 768px) {
            #what-makes-us-different .wmud-layout {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }

            #what-makes-us-different .wmud-layout > div:first-child {
              max-width: 100%;
            }

            #what-makes-us-different .wmud-item {
              grid-template-columns: 44px minmax(0, 1fr) !important;
              gap: 0.8rem !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}

export default WhatMakesUsDifferentSection;
