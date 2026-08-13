import BarSection from '../components/BarSection.jsx';
import DessertsSection from '../components/DessertsSection.jsx';

function Bar({ onFlavorClick }) {
  return (
    <>
      <BarSection onFlavorClick={onFlavorClick} />
      <DessertsSection onFlavorClick={onFlavorClick} />
    </>
  );
}

export default Bar;
