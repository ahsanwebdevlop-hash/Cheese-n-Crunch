import MenuSection from '../components/MenuSection.jsx';
import SquareSection from '../components/SquareSection.jsx';
import HalfHalfSection from '../components/HalfHalfSection.jsx';
import SignatureSection from '../components/SignatureSection.jsx';
import { SPECIAL_FLAVORS, REGULAR_FLAVORS } from '../data/siteData.js';

function Menu({ specialFlavors, regularFlavors, onFlavorClick, onAdd, onShowToast }) {
  const special = specialFlavors || SPECIAL_FLAVORS;
  const regular = regularFlavors || REGULAR_FLAVORS;

  return (
    <>
      <MenuSection specialFlavors={special} regularFlavors={regular} onFlavorClick={onFlavorClick} />
      <SquareSection onAdd={onAdd} onShowToast={onShowToast} />
      <HalfHalfSection onAdd={onAdd} onShowToast={onShowToast} />
      <SignatureSection onAdd={onAdd} onShowToast={onShowToast} />
    </>
  );
}

export default Menu;
