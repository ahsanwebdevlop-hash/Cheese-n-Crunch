import { useNavigate } from 'react-router-dom';

function BarFeaturedItemsSection() {
  const navigate = useNavigate();

  const featuredItems = [
    {
      title: 'Cake Collection',
      description: 'Soft, rich cakes for every sweet craving and celebration.',
      img: 'https://images.unsplash.com/photo-1555547665-7d6f1f5d4c3c?q=80&w=800&auto=format&fit=crop',
      actions: [
        { label: 'View Cakes', target: 'cakes' },
        { label: 'Custom Cake', target: 'custom-cakes' },
      ],
    },
    {
      title: 'Brownies',
      description: 'Warm chocolate brownies with a fudgy center and irresistible finish.',
      img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop',
      target: 'brownie',
    },
    {
      title: 'Brownie & Ice Cream',
      description: 'A perfect mix of warm brownie and your favorite chilled flavor.',
      img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop',
      target: 'brownie-ice-cream',
    },
  ];

  const handleViewItem = (target) => {
    const normalizedTarget = target || 'custom-cakes';

    if (normalizedTarget === 'brownie' || normalizedTarget === 'ice-cream') {
      navigate(`/bar?category=${normalizedTarget}`);
      return;
    }

    if (normalizedTarget === 'cakes') {
      navigate('/bar?section=cakes');
      return;
    }

    navigate(`/bar?section=${normalizedTarget}`);
  };

  return (
    <section className="section-pad section-surface" id="bar-featured-items">
      <div className="container">
        <span className='eyebrow' style={{ marginBottom: '20px', maxWidth: 'fit-content', padding: '12px', display: 'block', marginInline: 'auto' }}>Bar & Deseart</span>
        <div className="preview-split">
          <div className="preview-split__copy reveal-left">
            <div className="section-head section-head--left reveal dis-block">
              <h2 className="text-left">Bar favorites</h2>
            </div>
            <p className="text-lead">
              Sweet treats, chilled desserts, and custom cake moments made for your cravings.
            </p>
            <div className="section-ctas section-ctas--start">
              <button type="button" className="btn btn-gold" onClick={() => navigate('/bar')}>
                Explore Bar Menu
              </button>
            </div>
          </div>

          <div className="preview-cards-row stagger reveal-right">
            {featuredItems.map((item) => (
              <article key={item.title} className="card card-compact reveal">
                <div className="card-img-wrap">
                  <img src={item.img} alt={item.title} />
                  <div className="deal-num">{item.title}</div>
                </div>
                <div className="card-body">
                  <h3>{item.title}</h3>
                  <p className="desc">{item.description}</p>
                  {item.actions ? (
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {item.actions.map((action) => (
                        <button
                          key={action.label}
                          type="button"
                          className="add-btn"
                          onClick={() => handleViewItem(action.target)}
                          style={{ flex: '1 1 120px' }}
                        >
                          {action.label}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <button type="button" className="add-btn" onClick={() => handleViewItem(item.target)}>
                      View Item
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BarFeaturedItemsSection;
