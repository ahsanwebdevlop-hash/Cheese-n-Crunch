import { Link, useSearchParams } from 'react-router-dom';
import MenuSection from '../components/MenuSection.jsx';
import SquareSection from '../components/SquareSection.jsx';
import HalfHalfSection from '../components/HalfHalfSection.jsx';
import SignatureSection from '../components/SignatureSection.jsx';
import ArrowIcon from '../components/ArrowIcon.jsx';
import { useEffect } from 'react';
import { SPECIAL_FLAVORS, REGULAR_FLAVORS } from '../data/siteData.js';
import FinalCTASection from '../components/FinalCTASection.jsx';

function Menu({ specialFlavors, regularFlavors, onFlavorClick, onAdd, onBuyNow, onShowToast }) {
  const special = specialFlavors || SPECIAL_FLAVORS;
  const regular = regularFlavors || REGULAR_FLAVORS;
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Check if there's a category parameter and scroll to menu section
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      // Give a small delay to ensure the component is rendered
      const timer = setTimeout(() => {
        const menuNavElement = document.getElementById('menu-nav');
        if (menuNavElement) {
          menuNavElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  return (
    <>
      <section className="section-pad section-surface menu-page-hero" id="menu-page-hero">
        <div className="container preview-split">
          <div className="preview-split__copy reveal-left">
            <div className="section-head section-head--left reveal">
              <h1>Menu</h1>
            </div>
            <p className="text-lead">Fresh pizza, fast food favorites, juices, and desserts made for every craving.</p>
            <div className="hero-ctas">
              <Link to="/deals" className="btn btn-gold">Explore Deals <ArrowIcon className="btn-arrow" size={16} /></Link>
              <Link to="/bar" className="btn btn-outline">View Bar Menu <ArrowIcon className="btn-arrow" size={16} /></Link>
            </div>
          </div>
          <div className="menu-page-hero__visual reveal-right">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=85&w=1200&auto=format&fit=crop"
              alt="Cheese 'n Crunch menu favorites"
            />
          </div>
        </div>
      </section>
      <MenuSection specialFlavors={special} regularFlavors={regular} onFlavorClick={onFlavorClick} />
      <SquareSection onAdd={onAdd} onBuyNow={onBuyNow} onShowToast={onShowToast} />
      <HalfHalfSection onAdd={onAdd} onShowToast={onShowToast} />
      <SignatureSection onAdd={onAdd} onBuyNow={onBuyNow} onShowToast={onShowToast} />
      <FinalCTASection />
    </>
  );
}

export default Menu;
