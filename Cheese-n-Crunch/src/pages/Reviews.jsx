import ReviewsSection from '../components/ReviewsSection.jsx';
import { SAMPLE_REVIEWS } from '../data/siteData.js';

function Reviews() {
  return <ReviewsSection reviews={SAMPLE_REVIEWS} />;
}

export default Reviews;
