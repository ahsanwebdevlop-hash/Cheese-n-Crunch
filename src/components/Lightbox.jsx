function Lightbox({ src, onClose }) {
  if (!src) return null;
  return (
    <div className={`lightbox${src ? ' open' : ''}`} onClick={onClose}>
      <img src={src} alt="" />
      <button className="icon-close" onClick={onClose} aria-label="Close image viewer">✕</button>
    </div>
  );
}

export default Lightbox;
