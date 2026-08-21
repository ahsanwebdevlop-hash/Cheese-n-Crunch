import ReviewsSection from '../components/ReviewsSection.jsx';
import { SAMPLE_REVIEWS } from '../data/siteData.js';
import FinalCTASection from '../components/FinalCTASection.jsx';

function Reviews() {
  return (      
  <>
    <section className="review-page-hero" aria-labelledby="reviews-page-title">
      <div className="container">
        <div className="section-head review-page-hero__content reveal">
          <h1 id="reviews-page-title"><span>Customer</span> <em>Reviews</em></h1>
          <p>Straight from Chiniot - real cravings, real reactions.</p>
        </div>
      </div>
    </section>
    <ReviewsSection reviews={SAMPLE_REVIEWS} />
    <FinalCTASection />
  </>
  );
}

export default Reviews;
