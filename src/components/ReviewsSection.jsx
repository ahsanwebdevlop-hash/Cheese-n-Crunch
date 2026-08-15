import { useMemo, useState } from 'react';

function ReviewsSection({ reviews }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = reviews.length;

  const positions = useMemo(() => {
    const current = currentIndex;
    return reviews.map((_, index) => {
      const diff = index - current;
      if (diff === 0) return 'pos-center';
      if (diff === -1 || (current === 0 && index === total - 1)) return 'pos-left1';
      if (diff === 1 || (current === total - 1 && index === 0)) return 'pos-right1';
      if (diff === -2 || (current <= 1 && index >= total - 2 && index !== current)) return 'pos-left2';
      if (diff === 2 || (current >= total - 2 && index <= 1 && index !== current)) return 'pos-right2';
      return 'pos-hidden';
    });
  }, [currentIndex, reviews, total]);

  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + total) % total);
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % total);

  return (
    <section className="section-pad" id="reviews">
      <div className="container">
        <div className="section-head reveal" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          <span className="eyebrow">Customer Love</span>
          <h2>Customer Reviews</h2>
          <p style={{ marginLeft: 'auto', marginRight: 'auto' }}>Straight from Chiniot — real cravings, real reactions.</p>
        </div>

        <div className="review-carousel-3d reveal">
          <div className="review-stage" role="region" aria-label="Customer testimonials" aria-roledescription="carousel">
            {reviews.map((review, index) => (
              <article key={review.name} className={`review-card-3d ${positions[index]}`}>
                <div className="rc-avatar">{review.name.charAt(0)}</div>
                <div className="stars">{Array.from({ length: 5 }, (_, idx) => (idx < Math.floor(review.stars) ? '★' : '☆')).join('')}</div>
                <p className="quote">{review.text}</p>
                <div className="author">{review.name}</div>
                {review.loc ? <span className="loc">{review.loc}</span> : null}
              </article>
            ))}
          </div>
          <div className="review-dots">
            {reviews.map((_, index) => (
              <button key={index} type="button" className={currentIndex === index ? 'active' : ''} onClick={() => setCurrentIndex(index)} />
            ))}
          </div>
          <div className="review-nav">
            <button type="button" id="revPrev" onClick={goPrev} aria-label="Previous review">‹</button>
            <button type="button" id="revNext" onClick={goNext} aria-label="Next review">›</button>
          </div>
          <p style={{ textAlign: 'center', fontSize: '11.5px', color: 'var(--white-faint)', marginTop: '16px' }}>
            Sample customer-style testimonials — not verified reviews.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
