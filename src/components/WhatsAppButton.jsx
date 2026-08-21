function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923110992288"
      target="_blank"
      rel="noopener"
      className="fab-whatsapp"
      aria-label="Order on WhatsApp"
    >
      <img
        className="fab-whatsapp-icon"
        src="https://cdn.simpleicons.org/whatsapp/ffffff"
        alt=""
        aria-hidden="true"
      />
      <span className="fab-tooltip">Order on WhatsApp</span>
    </a>
  );
}

export default WhatsAppButton;
