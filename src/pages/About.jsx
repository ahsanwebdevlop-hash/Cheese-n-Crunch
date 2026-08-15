import AboutSection from '../components/AboutSection.jsx';
import OurMissionSection from '../components/OurMissionSection.jsx';
import OurPromiseSection from '../components/OurPromiseSection.jsx';
import FinalCTASection from '../components/FinalCTASection.jsx';
import WhyChooseUsSection from '../components/WhyChooseUsSection.jsx';
import GallerySection from '../components/GallerySection.jsx';
import { GALLERY } from '../data/siteData.js';

function About({ onImageClick }) {
  return (
    <>
      <AboutSection />
      <OurMissionSection />
      <OurPromiseSection />
      <WhyChooseUsSection />
      <FinalCTASection />
      <GallerySection images={GALLERY} onImageClick={onImageClick} />
    </>
  );
}

export default About;
