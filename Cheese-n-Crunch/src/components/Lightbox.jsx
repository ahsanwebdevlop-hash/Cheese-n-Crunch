function Lightbox({ src, onClose }) {
  if (!src) return null;
  return (
    <div className={`lightbox${src ? ' open' : ''}`} onClick={onClose}>
      <img src={src} alt="Expanded gallery item" />
      <button className="icon-close" onClick={onClose} aria-label="Close">✕</button>
    </div>
  );
}

export default Lightbox;
