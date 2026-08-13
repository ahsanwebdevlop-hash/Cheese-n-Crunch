import { useState } from 'react';
import { SPECIAL_FLAVORS, REGULAR_FLAVORS, DRINK_FLAVORS, BROWNIE_FLAVORS, WRAP_FLAVORS } from '../data/siteData.js';

function DealsModal({ isOpen, deal, onClose, onAdd, onBuyNow }) {
  const [selectedFlavors, setSelectedFlavors] = useState({});
  const [qty, setQty] = useState(1);
  const [fieldErrors, setFieldErrors] = useState({});
  const [validationMessage, setValidationMessage] = useState('');

  // Prepare flavor options for dropdown
  const allFlavors = [...SPECIAL_FLAVORS, ...REGULAR_FLAVORS];

  // Get flavors based on item type
  const getFlavorsByType = (itemType) => {
    if (itemType === 'drink') return DRINK_FLAVORS;
    if (itemType === 'brownie') return BROWNIE_FLAVORS;
    if (itemType === 'wrap') return WRAP_FLAVORS;
    return [...SPECIAL_FLAVORS, ...REGULAR_FLAVORS]; // Default for pizza
  };

  // Group duplicate items and format display
  const getGroupedItems = (items) => {
    const grouped = {};
    items.forEach((item) => {
      if (!grouped[item.name]) {
        grouped[item.name] = {
          name: item.name,
          type: item.type,
          hasFlavorOption: item.hasFlavorOption,
          img: item.img,
          count: 0,
        };
      }
      grouped[item.name].count += 1;
    });
    return Object.values(grouped);
  };

  // Initialize selected flavors for items with flavor options (single unit)
  const initializeFlavorSelections = () => {
    if (!deal?.items) return {};
    const initial = {};
    deal.items.forEach((item, idx) => {
      if (item.hasFlavorOption && allFlavors.length > 0) {
        initial[idx] = allFlavors[0].name || '';
      }
    });
    return initial;
  };

  const handleFlavorChange = (itemIndex, flavorName) => {
    setSelectedFlavors((prev) => ({
      ...prev,
      [itemIndex]: flavorName,
    }));
    clearFieldError(`single-${itemIndex}`);
  };

  const getMissingFlavorIndexes = (flavorsToValidate = selectedFlavors) => {
    if (!deal?.items) return [];

    return deal.items.reduce((missing, item, index) => {
      if (item.hasFlavorOption && (!flavorsToValidate[index] || flavorsToValidate[index] === '')) {
        missing.push(index);
      }
      return missing;
    }, []);
  };

  const markFieldError = (key) => {
    setFieldErrors((prev) => ({
      ...prev,
      [key]: true,
    }));
  };

  const clearFieldError = (key) => {
    setFieldErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const showValidationToast = (message) => {
    setValidationMessage(message);
    window.clearTimeout(showValidationToast.timeoutId);
    showValidationToast.timeoutId = window.setTimeout(() => setValidationMessage(''), 1800);
  };

  const handleQtyChange = (newQty) => {
    const nextQty = Math.max(1, newQty);
    if (nextQty < 1) return;

    setQty(nextQty);
    setFieldErrors({});
    setValidationMessage('');
  };

  const handleAddToCart = () => {
    const missingIndexes = getMissingFlavorIndexes();
    if (missingIndexes.length > 0) {
      const nextErrors = {};
      missingIndexes.forEach((index) => {
        nextErrors[`single-${index}`] = true;
      });
      setFieldErrors(nextErrors);
      return;
    }

    onAdd(deal, qty, selectedFlavors);
    handleClose();
  };

  const handleBuyNowClick = () => {
    const missingIndexes = getMissingFlavorIndexes();
    if (missingIndexes.length > 0) {
      const nextErrors = {};
      missingIndexes.forEach((index) => {
        nextErrors[`single-${index}`] = true;
      });
      setFieldErrors(nextErrors);
      showValidationToast('Please select a flavor');
      return;
    }

    onBuyNow?.(deal);
    handleClose();
  };

  const handleClose = () => {
    setSelectedFlavors(initializeFlavorSelections());
    setQty(1);
    setFieldErrors({});
    setValidationMessage('');
    onClose();
  };

  if (!isOpen || !deal) return null;

  const itemCount = deal.items?.length || 0;

  return (
    <>
      {validationMessage && (
        <div className="toast show" role="status" aria-live="polite">
          {validationMessage}
        </div>
      )}
      {/* Main Modal Overlay */}
      <div className="modal-overlay open" onClick={handleClose} />

      {/* Main Deals Modal */}
      <div className="modal deals-modal open">
        <button className="modal-close" onClick={handleClose}>✕</button>

        {/* Single deal image matching the main deals cards */}
        <div className="modal-images deals-images single-image">
          <div className="deal-item-img single-deal-image">
            <img src={deal.img} alt={deal.title} />
          </div>
        </div>

        {/* Deal Title & Price */}
        <div className="modal-content">
          <h3>{deal.title}</h3>
          <p className="deal-items-list">
            {getGroupedItems(deal.items).map((item) => 
              item.count > 1 ? `${item.count} ${item.name}` : item.name
            ).join(', ')}
          </p>

          {/* Flavor Selection (Conditional) */}
          <div className="flavor-selectors">
            {deal.items.map((item, idx) => {
              const flavorOptions = getFlavorsByType(item.type);
              return (
                <div key={idx} className="flavor-selector-item">
                  <label>{item.name}</label>
                  {item.hasFlavorOption ? (
                    <>
                      <select
                        className={fieldErrors[`single-${idx}`] ? 'has-error' : ''}
                        value={selectedFlavors[idx] || ''}
                        onChange={(e) => handleFlavorChange(idx, e.target.value)}
                      >
                        <option value="">Select Flavor</option>
                        {flavorOptions.map((flavor) => (
                          <option key={flavor.name} value={flavor.name}>
                            {flavor.name}
                          </option>
                        ))}
                      </select>
                      {fieldErrors[`single-${idx}`] && (
                        <div className="field-error">Please select a flavor</div>
                      )}
                    </>
                  ) : (
                    <button className="btn-no-flavor" disabled>
                      No Special Flavour
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quantity Selector */}
          <div className="quantity-control">
            <label>Quantity</label>
            <div className="qty-buttons">
              <button onClick={() => handleQtyChange(qty - 1)}>−</button>
              <span>{qty}</span>
              <button onClick={() => handleQtyChange(qty + 1)}>+</button>
            </div>
          </div>

          {/* Price Display */}
          <div className="modal-price">
            Rs. {(deal.price * qty).toLocaleString()}
          </div>

          {/* Action Buttons */}
          <div className="modal-actions">
            <button className="btn btn-gold" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="btn btn-outline" onClick={handleBuyNowClick}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

    </>
  );
}

export default DealsModal;
