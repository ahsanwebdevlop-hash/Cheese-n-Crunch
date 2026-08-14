import BarSection from '../components/BarSection.jsx';
import BrownieIceCreamSection from '../components/BrownieIceCreamSection.jsx';
import CustomCakesSection from '../components/CustomCakesSection.jsx';
import DessertsSection from '../components/DessertsSection.jsx';

function Bar({ onFlavorClick, onAdd, onShowToast, onBuyNow }) {
  return (
    <>
      <BarSection onFlavorClick={onFlavorClick} />
      <CustomCakesSection onBuyNow={onBuyNow} onShowToast={onShowToast} />
      <BrownieIceCreamSection onAdd={onAdd} onShowToast={onShowToast} />
      <DessertsSection onFlavorClick={onFlavorClick} />
    </>
  );
}

export default Bar;
