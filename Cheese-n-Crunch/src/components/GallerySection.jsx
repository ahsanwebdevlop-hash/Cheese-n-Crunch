function GallerySection({ images, onImageClick }) {
  return (
    <section className="section-pad" style={{ background: 'var(--green-950)' }}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Fresh & Loaded</span>
          <h2>Food <em>Gallery</em></h2>
          <p>A closer look at what's coming out of our kitchen.</p>
        </div>
        <div className="gallery-grid reveal">
          {images.map((src, index) => (
            <button key={src} type="button" className={`gallery-item g${index + 1}`} onClick={() => onImageClick(src)}>
              <img src={src} alt={`Gallery item ${index + 1}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
