import { Link, useSearchParams } from 'react-router-dom';
import BarSection from '../components/BarSection.jsx';
import BrownieIceCreamSection from '../components/BrownieIceCreamSection.jsx';
import CustomCakesSection from '../components/CustomCakesSection.jsx';
import DessertsSection from '../components/DessertsSection.jsx';
import { useEffect } from 'react';

function Bar({ onFlavorClick, onAdd, onShowToast, onBuyNow }) {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Check if there's a category parameter and scroll to bar section
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      // Give a small delay to ensure the component is rendered
      const timer = setTimeout(() => {
        const barNavElement = document.getElementById('bar-nav');
        if (barNavElement) {
          barNavElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  return (
    <>
      <BarSection onFlavorClick={onFlavorClick} />
      <CustomCakesSection onBuyNow={onBuyNow} onShowToast={onShowToast} />
      <BrownieIceCreamSection onAdd={onAdd} onShowToast={onShowToast} />
      <DessertsSection onFlavorClick={onFlavorClick} />
      <section className="section-pad section-surface-flat">
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
