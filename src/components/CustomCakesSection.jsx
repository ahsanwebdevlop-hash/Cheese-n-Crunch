import { useMemo, useState } from 'react';

const CUSTOM_CAKE_PRICE_PER_POUND = 1600;
const PREDEFINED_WEIGHTS = [1, 2, 3, 4, 5];

function CustomCakesSection({ onBuyNow, onShowToast }) {
  const [weightType, setWeightType] = useState('1');
  const [customWeight, setCustomWeight] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  // Determine actual weight to use
  const actualWeight = useMemo(() => {
    if (weightType === 'custom') {
      const num = parseInt(customWeight, 10);
      return num > 0 ? num : null;
    }
    return parseInt(weightType, 10);
  }, [weightType, customWeight]);

  // Calculate total price
  const totalPrice = useMemo(() => {
    return actualWeight ? actualWeight * CUSTOM_CAKE_PRICE_PER_POUND : 0;
  }, [actualWeight]);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        onShowToast('Please select a valid image file');
        return;
      }
      setUploadedImage(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviewUrl(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCustomWeightChange = (e) => {
    const value = e.target.value;
    // Allow only positive whole numbers
    if (value === '' || /^\d+$/.test(value)) {
      setCustomWeight(value);
    }
  };

  const handleBuyNow = () => {
    if (!actualWeight || actualWeight <= 0) {
      onShowToast('Please select a valid cake weight');
      return;
    }

    if (!uploadedImage) {
      onShowToast('Please upload your cake design');
      return;
    }

    const weightLabel = weightType === 'custom' ? `${customWeight} Pound` : `${weightType} Pound`;
    const orderLabel = `Custom Cake (${weightLabel})`;

    onBuyNow({
      name: orderLabel,
      price: totalPrice,
      qty: 1,
      img: previewUrl,
      isCustomCake: true,
      cakeWeight: actualWeight,
      originalImage: uploadedImage,
    });
  };

  const handleRemoveImage = () => {
    setUploadedImage(null);
    setPreviewUrl(null);
  };

  return (
    <section className="section-pad section-surface-flat" id="custom-cakes">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Design Your Own</span>
          <h2>Custom Cakes</h2>
          <p>Choose your weight, upload your design, and we'll bring it to life.</p>
        </div>

        <div className="custom-cakes-box reveal">
          <div className="cc-grid">
            {/* Weight Selection */}
            <div className="cc-section">
              <h3>Select Weight</h3>
              <div className="weight-options">
                {PREDEFINED_WEIGHTS.map((weight) => (
                  <button
                    key={weight}
                    type="button"
                    className={`weight-btn ${weightType === String(weight) ? 'active' : ''}`}
                    onClick={() => {
                      setWeightType(String(weight));
                      setCustomWeight('');
                    }}
                  >
                    {weight} Pound{weight > 1 ? 's' : ''}
                  </button>
                ))}
              </div>

              <div className="cc-divider">
                <span>OR</span>
              </div>

              <div className="custom-weight-group">
                <button
                  type="button"
                  className={`weight-btn ${weightType === 'custom' ? 'active' : ''}`}
                  onClick={() => setWeightType('custom')}
                >
                  Custom Weight
                </button>
                {weightType === 'custom' && (
                  <div className="custom-input-wrapper">
                    <input
                      type="number"
                      inputMode="numeric"
                      value={customWeight}
                      onChange={handleCustomWeightChange}
                      placeholder="Enter whole number"
                      min="1"
                      step="1"
                      className="custom-weight-input"
                    />
                    <span className="custom-unit">Pound{customWeight === '1' ? '' : 's'}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Image Upload */}
            <div className="cc-section">
              <h3>Upload Your Cake Design</h3>
              <div className="image-upload-area">
                <input
                  type="file"
                  id="cake-design-upload"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="file-input-hidden"
                />
                <label htmlFor="cake-design-upload" className="image-upload-label">
                  <div className="upload-icon">📸</div>
                  <div className="upload-text">
                    <p className="upload-main">Click to upload or drag & drop</p>
                    <p className="upload-sub">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </label>

                {previewUrl && (
                  <div className="image-preview">
                    <img src={previewUrl} alt="Cake design preview" />
                    <button
                      type="button"
                      className="remove-image-btn"
                      onClick={handleRemoveImage}
                      title="Remove image"
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Summary Row */}
          <div className="cc-summary">
            <div className="summary-item weight-summary">
              <span className="summary-label">Weight</span>
              <span className="summary-value">
                {actualWeight ? `${actualWeight} Pound${actualWeight > 1 ? 's' : ''}` : '—'}
              </span>
            </div>

            <div className="summary-item image-summary">
              <span className="summary-label">Design</span>
              {previewUrl ? (
                <img src={previewUrl} alt="Selected design" className="summary-preview" />
              ) : (
                <span className="summary-value placeholder">Upload Design</span>
              )}
            </div>

            <div className="summary-item price-summary">
              <span className="summary-label">Price</span>
              <span className="summary-value price">Rs. {totalPrice.toLocaleString()}</span>
            </div>
          </div>

          {/* Buy Now Button */}
          <div className="cc-action">
            <button
              className="btn btn-gold btn-large"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomCakesSection;
