import { useEffect, useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import MobileNav from './components/MobileNav.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import StickyOrderBar from './components/StickyOrderBar.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import ProductModal from './components/ProductModal.jsx';
import OrderReviewModal from './components/OrderReviewModal.jsx';
import Lightbox from './components/Lightbox.jsx';
import Toast from './components/Toast.jsx';
import Home from './pages/Home.jsx';
import Deals from './pages/Deals.jsx';
import Menu from './pages/Menu.jsx';
import Reviews from './pages/Reviews.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Bar from './pages/Bar.jsx';
import FAQ from './pages/FAQ.jsx';
import LunchMidNightDeals from './pages/LunchMidNightDeals.jsx';
import { DEALS, SPECIAL_FLAVORS, REGULAR_FLAVORS } from './data/siteData.js';
import placeholderImg from './assets/placeholder-food.svg';

const DELIVERY_AREAS = [
  { name: 'Chanab Nagar', fee: 200 },
  { name: 'Deen Garden', fee: 200 },
  { name: 'Kimz College', fee: 200 },
  { name: 'GC University', fee: 350 },
  { name: 'Chanab College', fee: 100 },
  { name: 'Talab', fee: 200 },
  { name: 'Iqbal Rice', fee: 100 },
];

const getAreaDeliveryFee = (area) => {
  const match = DELIVERY_AREAS.find((item) => item.name === area);
  return match ? match.fee : 0;
};

function App() {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isCheckoutMode, setCheckoutMode] = useState(false);
  const [checkoutData, setCheckoutData] = useState({ name: '', phone: '', area: '', address: '', notes: '' });
  const [isProductModalOpen, setProductModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [buyNowItem, setBuyNowItem] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [productModalState, setProductModalState] = useState({
    name: '',
    desc: '',
    img: '',
    // default to no variant / zero price until a product is opened
    variants: [],
    selectedFlavor: null,
    selectedVariant: null,
    price: 0,
    qty: 1,
  });
  const [lightboxImage, setLightboxImage] = useState('');
  const [isHeaderScrolled, setHeaderScrolled] = useState(false);
  const [customCakeData, setCustomCakeData] = useState(null);
  const [orderReview, setOrderReview] = useState(null);

  const cartCount = useMemo(() => cartItems.reduce((sum, item) => sum + item.qty, 0), [cartItems]);
  const cartSubtotal = useMemo(() => cartItems.reduce((sum, item) => sum + item.qty * item.price, 0), [cartItems]);
  const deliveryFee = useMemo(() => getAreaDeliveryFee(checkoutData.area), [checkoutData.area]);
  const cartTotal = useMemo(() => cartSubtotal + deliveryFee, [cartSubtotal, deliveryFee]);

  const checkoutItems = buyNowItem ? [buyNowItem] : cartItems;
  const checkoutSubtotal = useMemo(
    () => checkoutItems.reduce((sum, item) => sum + item.qty * item.price, 0),
    [checkoutItems]
  );
  const checkoutTotal = useMemo(() => checkoutSubtotal + deliveryFee, [checkoutSubtotal, deliveryFee]);

  useEffect(() => {
    // globally catch broken/empty <img> loads and replace with a harmless placeholder
    const onImgError = (e) => {
      const t = e.target;
      if (!t || t.tagName !== 'IMG') return;
      try {
        if (!t.src || t.src.endsWith('placeholder-food.svg')) return;
      } catch (err) { }
      t.src = placeholderImg;
    };

    window.addEventListener('error', onImgError, true);
    return () => window.removeEventListener('error', onImgError, true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -15% 0px' }
    );

    // Observe currently present reveal/stagger elements
    const observeAll = () => {
      document.querySelectorAll('.reveal, .stagger').forEach((el) => {
        // avoid observing elements already revealed
        if (!el.classList.contains('in')) revealObserver.observe(el);
      });
    };

    observeAll();

    // Use a MutationObserver to detect new elements added to the DOM (route changes, async lists)
    const mutationObserver = new MutationObserver((mutations) => {
      // when nodes are added, attempt to observe any new reveal/stagger elements
      let added = false;
      for (const m of mutations) {
        if (m.addedNodes && m.addedNodes.length) {
          added = true;
          break;
        }
      }
      if (added) {
        // small timeout to allow React to paint children
        setTimeout(observeAll, 40);
      }
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      revealObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === 'Escape') {
        setCartOpen(false);
        setProductModalOpen(false);
        setMobileNavOpen(false);
        setLightboxImage('');
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, []);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(''), 1800);
  };

  const openCart = () => {
    setCheckoutMode(false);
    setCartOpen(true);
  };

  const openCheckout = () => {
    if (cartItems.length === 0) {
      showToast('Add items to cart first');
      return;
    }
    setCheckoutMode(true);
  };

  const isValidPakistaniPhone = (value) => /^03\d{9}$/.test(String(value || '').trim());

  const handleCheckoutFieldChange = (field, value) => {
    setCheckoutData((prev) => ({ ...prev, [field]: value }));
  };

  const resetCheckoutForm = () => {
    setCheckoutData({ name: '', phone: '', area: '', address: '', notes: '' });
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      // For deals with selectedFlavors, include flavor data in the key to differentiate
      let key = `${item.name}|${item.price}`;
      if (item.is_deal && item.selectedFlavors) {
        const flavorStr = JSON.stringify(item.selectedFlavors);
        key = `${key}|${flavorStr}`;
      }

      const existing = prevItems.find((cartItem) => cartItem.key === key);
      if (existing) {
        return prevItems.map((cartItem) =>
          cartItem.key === key ? { ...cartItem, qty: cartItem.qty + item.qty } : cartItem
        );
      }
      return [...prevItems, { ...item, key }];
    });
  };

  const buyNow = (item) => {
    const key = `${item.name}|${item.price}|${Date.now()}`;
    setBuyNowItem({ ...item, key });
    resetCheckoutForm();
    setCartOpen(true);
    setCheckoutMode(true);
    showToast('Proceeding to checkout');
  };

  const removeFromCart = (key) => setCartItems((prevItems) => prevItems.filter((item) => item.key !== key));
  const changeItemQty = (key, delta) =>
    setCartItems((prevItems) =>
      prevItems
        .map((item) => (item.key === key ? { ...item, qty: Math.max(1, item.qty + delta) } : item))
        .filter((item) => item.qty > 0)
    );

  const openProductModal = (product) => {
    // product is expected to be normalized (see normalizeProduct)
    const variants = product.variants || [];
    const defaultVariant = variants.length ? variants[0] : null;
    const defaultFlavor = product.flavorOptions?.[0] || (defaultVariant ? defaultVariant.name : null);
    setProductModalState({
      name: product.name,
      desc: product.desc,
      img: product.img,
      variants,
      flavorOptions: product.flavorOptions || [],
      selectedFlavor: defaultFlavor,
      selectedVariant: defaultVariant,
      price: product.price,
      qty: 1,
    });
    setProductModalOpen(true);
  };

  const addProductModalToCart = () => {
    const v = productModalState.selectedVariant;
    const baseName = v?.name || productModalState.name;
    const variantLabel = v?.size ? ` (${v.size})` : '';
    const name = `${baseName}${variantLabel}`;
    const price = v ? v.price : productModalState.price || 0;
    addToCart({ name, price, qty: productModalState.qty, img: productModalState.img });
    setProductModalOpen(false);
    showToast('Added to cart');
  };

  const buyProductModalNow = () => {
    const v = productModalState.selectedVariant;
    const baseName = v?.name || productModalState.name;
    const variantLabel = v?.size ? ` (${v.size})` : '';
    const name = `${baseName}${variantLabel}`;
    const price = v ? v.price : productModalState.price || 0;
    setProductModalOpen(false);
    buyNow({ name, price, qty: productModalState.qty, img: productModalState.img });
  };

  const openLightbox = (src) => setLightboxImage(src);
  const closeLightbox = () => setLightboxImage('');

  const buildReviewOrder = (customerOverride = null) => {
    const customer = customerOverride
      ? { ...checkoutData, ...customerOverride }
      : { ...checkoutData };

    const customCake = customCakeData
      ? {
          name: customCakeData.name,
          price: customCakeData.price,
          qty: 1,
          key: customCakeData.key || `custom-cake-${Date.now()}`,
          img: customCakeData.img,
          isCustomCake: true,
          cakeWeight: customCakeData.cakeWeight,
          originalImage: customCakeData.originalImage,
        }
      : null;

    const items = customCake
      ? [customCake]
      : (buyNowItem ? [buyNowItem] : cartItems).map((item) => ({ ...item }));

    const subtotal = items.reduce((sum, item) => sum + item.qty * item.price, 0);
    const deliveryFeeValue = getAreaDeliveryFee(customer.area);
    const total = subtotal + deliveryFeeValue;

    return {
      items,
      subtotal,
      deliveryFee: deliveryFeeValue,
      total,
      customer,
      isCustomCake: Boolean(customCake),
      customCake,
    };
  };

  const handleCustomCakeBuyNow = (cakeItem) => {
    // Store custom cake temporarily
    setCustomCakeData(cakeItem);
    // Open checkout directly for custom cakes
    setCheckoutMode(false);
    setCartOpen(true);
    // After cart is open, move to checkout
    setTimeout(() => {
      setCheckoutMode(true);
      // Set buyNowItem for checkout
      setBuyNowItem({ ...cakeItem, key: `custom-cake-${Date.now()}` });
    }, 100);
  };

  const openOrderReview = (customerOverride = null) => {
    const review = buildReviewOrder(customerOverride);

    if (!review.items.length) {
      showToast('Your cart is empty');
      return;
    }

    if (!review.customer.name || !review.customer.phone || !review.customer.area || !review.customer.address) {
      showToast('Please complete your details');
      return;
    }

    setOrderReview(review);
  };

  const handleConfirmOrderReview = () => {
    if (!orderReview) return;

    const customer = orderReview.customer;
    const { items, subtotal, deliveryFee, total, isCustomCake } = orderReview;

    if (isCustomCake) {
      const customCakeMessage = [
        "CUSTOM CAKE ORDER — CHEESE 'n CRUNCH",
        '',
        `Cake: ${orderReview.customCake.name}`,
        `Weight: ${orderReview.customCake.cakeWeight} Pound${orderReview.customCake.cakeWeight > 1 ? 's' : ''}`,
        `Price: Rs. ${orderReview.customCake.price.toLocaleString()}`,
        '',
        'Customer Information:',
        `Name: ${customer.name}`,
        `Phone: ${customer.phone}`,
        `Delivery Area: ${customer.area}`,
        `Delivery Fee: Rs. ${deliveryFee}`,
        `Address: ${customer.address}`,
        '',
        `Subtotal: Rs. ${subtotal}`,
        `Delivery: Rs. ${deliveryFee}`,
        `TOTAL: Rs. ${total}`,
      ];

      if (customer.notes) customCakeMessage.push('', `Notes: ${customer.notes}`);
      customCakeMessage.push('', '⚠️ IMPORTANT ⚠️');
      customCakeMessage.push('[ PLEASE SELECT AND ATTACH YOUR CAKE DESIGN IMAGE ]');
      customCakeMessage.push('After WhatsApp opens, please select the same cake design image from your device and send it with your order.');

      const url = `https://wa.me/923110992288?text=${encodeURIComponent(customCakeMessage.join('\n'))}`;
      window.open(url, '_blank');

      setOrderReview(null);
      setCartOpen(false);
      setCheckoutMode(false);
      setBuyNowItem(null);
      setCustomCakeData(null);
      resetCheckoutForm();
      showToast('Order sent to WhatsApp');
      return;
    }

    const msgLines = [
      "NEW ORDER — CHEESE 'n CRUNCH",
      '',
      `Customer: ${customer.name}`,
      `Phone: ${customer.phone}`,
      `Delivery Area: ${customer.area}`,
      `Delivery Fee: Rs. ${deliveryFee}`,
      `Address: ${customer.address}`,
      '',
      'ORDER:',
      ...items.map((item) => `${item.qty} x ${item.name} — Rs. ${item.price * item.qty}`),
      '',
      `Subtotal: Rs. ${subtotal}`,
      `Delivery: Rs. ${deliveryFee}`,
      `TOTAL: Rs. ${total}`,
    ];

    if (customer.notes) msgLines.push('', `Notes: ${customer.notes}`);

    const url = `https://wa.me/923110992288?text=${encodeURIComponent(msgLines.join('\n'))}`;
    window.open(url, '_blank');

    setOrderReview(null);
    setCartOpen(false);
    setCheckoutMode(false);
    if (buyNowItem) {
      setBuyNowItem(null);
    }
    resetCheckoutForm();
    showToast('Order opened in WhatsApp');
  };

  const placeOrder = ({ name, phone, area, address, notes }) => {
    if (!name || !phone || !area) {
      showToast('Please select a delivery area');
      return;
    }
    if (!isValidPakistaniPhone(phone)) {
      showToast('Please enter a valid Pakistani mobile number (e.g., 03110992288)');
      return;
    }
    if (!address) {
      showToast('Please fill in your address');
      return;
    }

    const orderItems = buyNowItem ? [buyNowItem] : cartItems;
    if (!customCakeData && orderItems.length === 0) {
      showToast('Your cart is empty');
      return;
    }

    openOrderReview({ name, phone, area, address, notes });
  };

  return (
    <>
      <Header
        onBurgerClick={() => setMobileNavOpen((open) => !open)}
        onCartClick={() => openCart()}
        cartCount={cartCount}
        isHeaderScrolled={isHeaderScrolled}
        isMobileNavOpen={isMobileNavOpen}
      />
      <MobileNav isOpen={isMobileNavOpen} onClose={() => setMobileNavOpen(false)} />
      <ScrollToTop />
      <main id="main">
        <Routes>
          <Route 
            path="/" 
            element={<Home onFlavorClick={openProductModal} onAdd={addToCart} onBuyNow={handleCustomCakeBuyNow} onShowToast={showToast} />} 
          />
          <Route
            path="/deals"
            element={<Deals deals={DEALS} onAdd={addToCart} onBuyNow={buyNow} onShowToast={showToast} />}
          />
          <Route
            path="/menu"
            element={
              <Menu
                specialFlavors={SPECIAL_FLAVORS}
                regularFlavors={REGULAR_FLAVORS}
                onFlavorClick={openProductModal}
                onAdd={addToCart}
                onBuyNow={buyNow}
                onShowToast={showToast}
                onImageClick={openLightbox}
              />
            }
          />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/bar" element={<Bar onFlavorClick={openProductModal} onAdd={addToCart} onShowToast={showToast} onBuyNow={handleCustomCakeBuyNow} />} />
          <Route
            path="/lunch-mid-night-deals"
            element={<LunchMidNightDeals onAdd={addToCart} onBuyNow={buyNow} onShowToast={showToast} />}
          />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyOrderBar count={cartCount} onClick={openCart} />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => {
          setCartOpen(false);
          setCheckoutMode(false);
          setBuyNowItem(null);
        }}
        items={checkoutItems}
        subtotal={checkoutSubtotal}
        deliveryFee={deliveryFee}
        total={checkoutTotal}
        onRemove={removeFromCart}
        onChangeQty={changeItemQty}
        onCheckout={placeOrder}
        onStartCheckout={openCheckout}
        checkoutMode={isCheckoutMode}
        checkoutData={checkoutData}
        onCheckoutFieldChange={handleCheckoutFieldChange}
        deliveryAreas={DELIVERY_AREAS}
      />
      <ProductModal
        isOpen={isProductModalOpen}
        state={productModalState}
        onClose={() => setProductModalOpen(false)}
        onFlavorChange={(flavor) =>
          setProductModalState((prev) => {
            const variant = (prev.variants || []).find((v) => v.name === flavor) || prev.selectedVariant || null;
            return { ...prev, selectedFlavor: flavor, selectedVariant: variant };
          })
        }
        onVariantChange={(variant) => setProductModalState((prev) => ({ ...prev, selectedVariant: variant }))}
        onQtyChange={(qty) => setProductModalState((prev) => ({ ...prev, qty: Math.max(1, qty) }))}
        onAdd={addProductModalToCart}
        onBuyNow={buyProductModalNow}
      />
      <Lightbox src={lightboxImage} onClose={closeLightbox} />
      <OrderReviewModal
        isOpen={Boolean(orderReview)}
        onClose={() => setOrderReview(null)}
        onConfirm={handleConfirmOrderReview}
        order={orderReview}
      />
      <Toast message={toastMessage} />
    </>
  );
}

export default App;
