import { Link } from 'react-router-dom';
// import Hero from '../components/Hero.jsx';
import CinematicHero from '../components/CinematicHero.jsx';
import { SAMPLE_REVIEWS } from '../data/siteData.js';
import HotDealsPreviewSection from '../components/CustomerFavoritesSection.jsx';
import LunchMidnightDealsSection from '../components/LunchMidnightDealsSection.jsx';
import MenuCategoriesSection from '../components/MenuCategoriesSection.jsx';
import BarFeaturedItemsSection from '../components/BarFeaturedItemsSection.jsx';
import WhyChooseUsSection from '../components/WhyChooseUsSection.jsx';
import HomeFAQPreview from '../components/HomeFAQPreview.jsx';
import LocationCTASection from '../components/LocationCTASection.jsx';
import ReviewsSection from '../components/ReviewsSection.jsx';

function Home({ onFlavorClick, onAdd, onBuyNow, onShowToast }) {
  const handleAdd = onAdd || (() => { });
  const handleBuyNow = onBuyNow || (() => { });
  const handleShowToast = onShowToast || (() => { });

  return (
    <>
      <CinematicHero />
      {/* <Hero /> */}
      <MenuCategoriesSection />
      <HotDealsPreviewSection
        onAdd={handleAdd}
        onBuyNow={handleBuyNow}
        onShowToast={handleShowToast}
      />
      <LunchMidnightDealsSection />
      <BarFeaturedItemsSection />
      <WhyChooseUsSection />
      <ReviewsSection reviews={SAMPLE_REVIEWS} />
      <HomeFAQPreview />
      <LocationCTASection />
    </>
  );
}

export default Home;
