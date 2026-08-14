import { useState } from 'react';
import { SPECIAL_FLAVORS, REGULAR_FLAVORS, DRINK_FLAVORS, BROWNIE_FLAVORS, WRAP_FLAVORS, PIZZA_TOPPINGS } from '../data/siteData.js';

// Helper functions for pizza topping system
function extractPizzaSize(itemName) {
  if (itemName.includes('Small')) return 'Small';
  if (itemName.includes('Regular')) return 'Medium';
  if (itemName.includes('Large')) return 'Large';
  if (itemName.includes('XL') || itemName.includes('X-Large')) return 'X-Large';
  if (itemName.includes('Grand')) return 'Large';
  return 'Medium'; // default
}

function isPizzaItem(itemType) {
  return itemType === 'pizza';
}

function DealsModal({ isOpen, deal, onClose, onAdd, onBuyNow }) {
  const [selectedFlavors, setSelectedFlavors] = useState({});
  const [selectedToppings, setSelectedToppings] = useState({});
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

  const shouldRequireFlavorSelection = (item, itemIndex) => {
    if (!item || !item.hasFlavorOption) return false;
    if (item.type !== 'wrap') return true;
    return deal?.n === 2 && deal?.title === 'Deal 2';
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
      if (shouldRequireFlavorSelection(item, idx) && allFlavors.length > 0) {
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

  const handleToppingChange = (itemIndex, toppingName) => {
    setSelectedToppings((prev) => ({
      ...prev,
      [itemIndex]: toppingName || null,
    }));
  };

  const getMissingFlavorIndexes = (flavorsToValidate = selectedFlavors) => {
    if (!deal?.items) return [];

    return deal.items.reduce((missing, item, index) => {
      if (shouldRequireFlavorSelection(item, index) && (!flavorsToValidate[index] || flavorsToValidate[index] === '')) {
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

  // Calculate topping price (total for all toppings, before qty)
  const calculateToppingPrice = () => {
    let toppingPrice = 0;
    
    deal.items.forEach((item, idx) => {
      if (isPizzaItem(item.type) && selectedToppings[idx]) {
        const toppingSize = extractPizzaSize(item.name);
        const topping = PIZZA_TOPPINGS.find((t) => t.name === selectedToppings[idx]);
        if (topping) {
          toppingPrice += topping.prices[toppingSize] || 0;
        }
      }
    });
    
    return toppingPrice;
  };

  const calculateTotalPrice = () => {
    return (deal.price + calculateToppingPrice()) * qty;
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

    onAdd(deal, qty, selectedFlavors, selectedToppings);
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

    onBuyNow?.(deal, qty, selectedFlavors, selectedToppings);
    handleClose();
  };

  const handleClose = () => {
    setSelectedFlavors(initializeFlavorSelections());
    setSelectedToppings({});
    setQty(1);
    setFieldErrors({});
    setValidationMessage('');
    onClose();
  };

  if (!isOpen || !deal) return null;

  const itemCount = deal.items?.length || 0;
  const toppingPrice = calculateToppingPrice();
  const basePrice = deal.price * qty;
  const totalPrice = calculateTotalPrice();

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

          {/* Flavor Selection & Topping Selection (Combined) */}
          <div className="flavor-selectors">
            {deal.items.map((item, idx) => {
              const flavorOptions = getFlavorsByType(item.type);
              return (
                <div key={idx}>
                  {/* Flavor Selector */}
                  {shouldRequireFlavorSelection(item, idx) ? (
                    <div className="flavor-selector-item">
                      <label>{item.name}</label>
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
                    </div>
                  ) : (
                    <div className="flavor-selector-item">
                      <label>{item.name}</label>
                      <button className="btn-no-flavor" disabled>
                        Fixed Flavor
                      </button>
                    </div>
                  )}
                  
                  {/* Topping Selector - Show right after flavor if pizza and flavor selected */}
                  {isPizzaItem(item.type) && selectedFlavors[idx] && (
                    <div className="flavor-selector-item">
                      <label>Add Topping (optional) - {item.name}</label>
                      <select
                        value={selectedToppings[idx] || ''}
                        onChange={(e) => handleToppingChange(idx, e.target.value || null)}
                      >
                        <option value="">No Topping</option>
                        {PIZZA_TOPPINGS.map((topping) => (
                          <option key={topping.name} value={topping.name}>
                            {topping.name} (+Rs. {topping.prices[extractPizzaSize(item.name)] || 0})
                          </option>
                        ))}
                      </select>
                    </div>
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

          {/* Price Display with Breakdown */}
          <div className="modal-price">
            {toppingPrice > 0 ? (
              <>
                Rs. {(deal.price * qty).toLocaleString()} + {toppingPrice} = <strong>{totalPrice.toLocaleString()}</strong>
              </>
            ) : (
              <>Rs. {totalPrice.toLocaleString()}</>
            )}
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
