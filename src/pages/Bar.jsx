import { Link, useSearchParams } from 'react-router-dom';
import BarSection from '../components/BarSection.jsx';
import BrownieIceCreamSection from '../components/BrownieIceCreamSection.jsx';
import CustomCakesSection from '../components/CustomCakesSection.jsx';
import DessertsSection from '../components/DessertsSection.jsx';
import HotDealsPreviewSection from '../components/CustomerFavoritesSection.jsx';
import LunchMidnightDealsSection from '../components/LunchMidnightDealsSection.jsx';
import { useEffect } from 'react';

function Bar({ onFlavorClick, onAdd, onShowToast, onBuyNow }) {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const sectionParam = searchParams.get('section');

    const mappedSectionTargets = {
      cakes: 'cakes',
      'custom-cakes': 'custom-cakes',
      'brownie-ice-cream': 'brownie-ice-cream',
    };

    const mappedCategoryTargets = {
      brownie: 'bar-nav',
      'cold-coffee': 'bar-nav',
      'ice-cream': 'bar-nav',
      'coffee-tea': 'bar-nav',
      shakes: 'bar-nav',
      chillers: 'bar-nav',
      'fresh-juice': 'bar-nav',
    };

    const targetId = sectionParam
      ? mappedSectionTargets[sectionParam] || sectionParam
      : categoryParam
        ? mappedCategoryTargets[categoryParam] || 'bar-nav'
        : null;

    if (!targetId) return undefined;

    const timer = setTimeout(() => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 120);

    return () => clearTimeout(timer);
  }, [searchParams]);

  return (
    <>
      <BarSection onFlavorClick={onFlavorClick} />
      <CustomCakesSection onBuyNow={onBuyNow} onShowToast={onShowToast} />
      <BrownieIceCreamSection onAdd={onAdd} onShowToast={onShowToast} />
      <DessertsSection onFlavorClick={onFlavorClick} />
      <HotDealsPreviewSection onAdd={onAdd} onBuyNow={onBuyNow} onShowToast={onShowToast} />
      <LunchMidnightDealsSection />
      <section className="section-surface-flat reveal" style={{ marginBottom: '50px', marginTop: '-60px' }}>
        <div className="container">
          <div className="section-ctas reveal">
            <a href="https://wa.me/923110992288" target="_blank" rel="noopener" className="btn btn-gold">Order on WhatsApp</a>
            <Link to="/menu" className="btn btn-outline">View Full Menu</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Bar;
