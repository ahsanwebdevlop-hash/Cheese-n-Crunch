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
import Lightbox from './components/Lightbox.jsx';
import Toast from './components/Toast.jsx';
import Home from './pages/Home.jsx';
import Deals from './pages/Deals.jsx';
import Menu from './pages/Menu.jsx';
import Reviews from './pages/Reviews.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import { DEALS, SPECIAL_FLAVORS, REGULAR_FLAVORS } from './data/siteData.js';
import placeholderImg from './assets/placeholder-food.svg';

const DELIVERY_AREAS = [
  { name: 'Deen Garden', fee: 80 },
  { name: 'Raichand', fee: 50 },
  { name: 'Chahnbagar', fee: 100 },
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
  const [toastMessage, setToastMessage] = useState('');
  const [productModalState, setProductModalState] = useState({
    name: '',
    desc: '',
    img: '',
    // default to no variant / zero price until a product is opened
    variants: [],
    size: { label: '', price: 0 },
    qty: 1,
  });
  const [lightboxImage, setLightboxImage] = useState('');
  const [isHeaderScrolled, setHeaderScrolled] = useState(false);

  const cartCount = useMemo(() => cartItems.reduce((sum, item) => sum + item.qty, 0), [cartItems]);
  const cartSubtotal = useMemo(() => cartItems.reduce((sum, item) => sum + item.qty * item.price, 0), [cartItems]);
  const deliveryFee = useMemo(() => getAreaDeliveryFee(checkoutData.area), [checkoutData.area]);
  const cartTotal = useMemo(() => cartSubtotal + deliveryFee, [cartSubtotal, deliveryFee]);

  useEffect(() => {
    // globally catch broken/empty <img> loads and replace with a harmless placeholder
    const onImgError = (e) => {
      const t = e.target;
      if (!t || t.tagName !== 'IMG') return;
      try {
        if (!t.src || t.src.endsWith('placeholder-food.svg')) return;
      } catch (err) {}
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
      { threshold: 0.12 }
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

  const handleCheckoutFieldChange = (field, value) => {
    setCheckoutData((prev) => ({ ...prev, [field]: value }));
  };

  const resetCheckoutForm = () => {
    setCheckoutData({ name: '', phone: '', area: '', address: '', notes: '' });
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const key = `${item.name}|${item.price}`;
      const existing = prevItems.find((cartItem) => cartItem.key === key);
      if (existing) {
        return prevItems.map((cartItem) =>
          cartItem.key === key ? { ...cartItem, qty: cartItem.qty + item.qty } : cartItem
        );
      }
      return [...prevItems, { ...item, key }];
    });
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
    const defaultSize = variants.length ? variants[0] : { label: '', price: product.price || 0 };
    setProductModalState({ name: product.name, desc: product.desc, img: product.img, variants, size: defaultSize, qty: 1 });
    setProductModalOpen(true);
  };

  const addProductModalToCart = () => {
    const variantLabel = productModalState.size && productModalState.size.label ? ` (${productModalState.size.label})` : '';
    addToCart({
      name: `${productModalState.name}${variantLabel}`,
      price: productModalState.size ? productModalState.size.price : productModalState.price || 0,
      qty: productModalState.qty,
      img: productModalState.img,
    });
    setProductModalOpen(false);
    showToast('Added to cart');
  };

  const buyProductModalNow = () => {
    const variantLabel = productModalState.size && productModalState.size.label ? ` (${productModalState.size.label})` : '';
    addToCart({
      name: `${productModalState.name}${variantLabel}`,
      price: productModalState.size ? productModalState.size.price : productModalState.price || 0,
      qty: productModalState.qty,
      img: productModalState.img,
    });
    setProductModalOpen(false);
    setCartOpen(true);
    setCheckoutMode(true);
    showToast('Proceeding to checkout');
  };

  const openLightbox = (src) => setLightboxImage(src);
  const closeLightbox = () => setLightboxImage('');

  const placeOrder = ({ name, phone, area, address, notes }) => {
    if (!name || !phone || !area) {
      showToast('Please select a delivery area');
      return;
    }
    if (!address) {
      showToast('Please fill in your address');
      return;
    }
    const msgLines = [
      "NEW ORDER — CHEESE 'n CRUNCH",
      '',
      `Customer: ${name}`,
      `Phone: ${phone}`,
      `Delivery Area: ${area}`,
      `Delivery Fee: Rs. ${getAreaDeliveryFee(area)}`,
      `Address: ${address}`,
      '',
      'ORDER:',
      ...cartItems.map((item) => `${item.qty} x ${item.name} — Rs. ${item.price * item.qty}`),
      '',
      `Subtotal: Rs. ${cartSubtotal}`,
      `Delivery: Rs. ${getAreaDeliveryFee(area)}`,
      `TOTAL: Rs. ${cartTotal}`,
    ];
    if (notes) msgLines.push('', `Notes: ${notes}`);
    const url = `https://wa.me/923110992288?text=${encodeURIComponent(msgLines.join('\n'))}`;
    window.open(url, '_blank');
    setCheckoutMode(false);
    resetCheckoutForm();
    showToast('Order opened in WhatsApp');
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
          <Route path="/" element={<Home />} />
          <Route
            path="/deals"
            element={<Deals deals={DEALS} onAdd={addToCart} onShowToast={showToast} />}
          />
          <Route
            path="/menu"
            element={
              <Menu
                specialFlavors={SPECIAL_FLAVORS}
                regularFlavors={REGULAR_FLAVORS}
                onFlavorClick={openProductModal}
                onAdd={addToCart}
                onShowToast={showToast}
                onImageClick={openLightbox}
              />
            }
          />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
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
        }}
        items={cartItems}
        subtotal={cartSubtotal}
        deliveryFee={deliveryFee}
        total={cartTotal}
        onRemove={removeFromCart}
        onChangeQty={changeItemQty}
        onCheckout={placeOrder}
        onStartCheckout={openCheckout}
        checkoutMode={isCheckoutMode}
        checkoutData={checkoutData}
        onCheckoutFieldChange={handleCheckoutFieldChange}
      />
      <ProductModal
        isOpen={isProductModalOpen}
        state={productModalState}
        onClose={() => setProductModalOpen(false)}
        onSizeChange={(size) => setProductModalState((prev) => ({ ...prev, size }))}
        onQtyChange={(qty) => setProductModalState((prev) => ({ ...prev, qty: Math.max(1, qty) }))}
        onAdd={addProductModalToCart}
        onBuyNow={buyProductModalNow}
      />
      <Lightbox src={lightboxImage} onClose={closeLightbox} />
      <Toast message={toastMessage} />
    </>
  );
}

export default App;
