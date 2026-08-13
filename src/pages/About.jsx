import AboutSection from '../components/AboutSection.jsx';
import GallerySection from '../components/GallerySection.jsx';
import { GALLERY } from '../data/siteData.js';

function About({ onImageClick }) {
  return (
    <>
      <AboutSection />
      <GallerySection images={GALLERY} onImageClick={onImageClick} />
    </>
  );
}

export default About;
