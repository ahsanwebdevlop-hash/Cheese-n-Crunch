import MenuSection from '../components/MenuSection.jsx';
import SquareSection from '../components/SquareSection.jsx';
import HalfHalfSection from '../components/HalfHalfSection.jsx';
import SignatureSection from '../components/SignatureSection.jsx';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SPECIAL_FLAVORS, REGULAR_FLAVORS } from '../data/siteData.js';

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
      <MenuSection specialFlavors={special} regularFlavors={regular} onFlavorClick={onFlavorClick} />
      <SquareSection onAdd={onAdd} onBuyNow={onBuyNow} onShowToast={onShowToast} />
      <HalfHalfSection onAdd={onAdd} onShowToast={onShowToast} />
      <SignatureSection onAdd={onAdd} onBuyNow={onBuyNow} onShowToast={onShowToast} />
    </>
  );
}

export default Menu;
