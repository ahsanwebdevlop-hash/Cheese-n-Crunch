function CustomCakeWhatsAppModal({ isOpen, onClose, onSendToWhatsApp, weight, price }) {
  if (!isOpen) return null;

  return (
    <>
      <div className={`modal-overlay${isOpen ? ' open' : ''}`} onClick={onClose} />
      <div className={`product-modal${isOpen ? ' open' : ''}`}>
        <button className="icon-close-modal" onClick={onClose} aria-label="Close">✕</button>
        <div className="pm-body" style={{ textAlign: 'center', padding: '30px 20px' }}>
          <h3 style={{ marginBottom: '16px' }}>Choose Your Cake Image on WhatsApp</h3>
          <p style={{ marginBottom: '20px', lineHeight: '1.6', color: '#ccc', fontSize: '0.95rem' }}>
            Your cake design image cannot be automatically attached to WhatsApp from the website.
          </p>
          <p style={{ marginBottom: '20px', lineHeight: '1.6', color: '#ccc', fontSize: '0.95rem' }}>
            <strong>After WhatsApp opens:</strong> Please select the same image from your device and send it with your order.
          </p>

          <div className="order-summary" style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '16px',
            borderRadius: '8px',
            marginBottom: '24px',
            textAlign: 'left',
          }}>
            <p style={{ margin: '8px 0', fontSize: '0.9rem' }}>
              <strong>Weight:</strong> {weight} Pound{weight > 1 ? 's' : ''}
            </p>
            <p style={{ margin: '8px 0', fontSize: '0.9rem' }}>
              <strong>Price:</strong> Rs. {price.toLocaleString()}
            </p>
          </div>

          <div className="pm-actions">
            <button
              className="btn btn-gold"
              onClick={onSendToWhatsApp}
              style={{ width: '100%' }}
            >
              Send to WhatsApp
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomCakeWhatsAppModal;
