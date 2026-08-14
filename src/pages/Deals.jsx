import DealsSection from '../components/DealsSection.jsx';
import { DEALS } from '../data/siteData.js';

function Deals({ deals, onAdd, onBuyNow, onShowToast }) {
  const data = deals || DEALS;
  return <DealsSection deals={data} onAdd={onAdd} onBuyNow={onBuyNow} onShowToast={onShowToast} />;
}

export default Deals;
