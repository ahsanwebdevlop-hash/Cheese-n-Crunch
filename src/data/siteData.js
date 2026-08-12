// -----------------------------------------------------------------------------
// Editable menu source of truth
// Update this list to change category names and the product list shown on the Menu page.
// Keep each category shape consistent: { id, title, items }.
// The title is also used as the tab label in the menu filter.
// -----------------------------------------------------------------------------
export const MENU_BY_CATEGORY = [
  // ---------------------------------------------------------------------------
  // APPETIZERS & WINGS CATEGORY
  // This array controls the cards shown under the "Appetizers & Wings" tab.
  // Each item object = { name, description, price, img }
  // - name: shows on the card as the product title
  // - description: short product text under the title
  // - price: numeric price in PKR
  // - img: image URL for the product card
  // Edit this block to change anything inside this category.
  // ---------------------------------------------------------------------------
  {
    id: 'appetizers-and-wings',
    title: 'Appetizers & Wings',
    items: [
      { name: 'French Fries', description: 'Golden fries with a crisp finish.', price: 265, img: 'https://images.unsplash.com/photo-1573096108468-6c65d219e4f2?q=80&w=400&auto=format&fit=crop' },
      { name: 'Mayo Fries', description: 'Loaded fries with creamy mayo flavor.', price: 345, img: 'https://images.unsplash.com/photo-1573096108468-6c65d219e4f2?q=80&w=400&auto=format&fit=crop' },
      { name: 'Loaded Fries', description: 'A loaded, savory fries favorite.', price: 645, img: 'https://images.unsplash.com/photo-1573096108468-6c65d219e4f2?q=80&w=400&auto=format&fit=crop' },
      { name: 'Oven Baked Wings (6 pcs)', description: 'Crispy oven-baked wings.', price: 395, img: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=400&auto=format&fit=crop' },
      { name: 'Oven Baked Wings (12 pcs)', description: 'Crispy oven-baked wings.', price: 695, img: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=400&auto=format&fit=crop' },
      { name: 'Malai Boti Wings (6 pcs)', description: 'Creamy malai boti flavored wings.', price: 395, img: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?q=80&w=400&auto=format&fit=crop' },
      { name: 'Malai Boti Wings (12 pcs)', description: 'Creamy malai boti flavored wings.', price: 695, img: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?q=80&w=400&auto=format&fit=crop' },
      { name: 'Nuggets (6 pcs)', description: 'Crispy bite-size chicken nuggets.', price: 265, img: 'https://images.unsplash.com/photo-1562967916-eb82221dfb92?q=80&w=400&auto=format&fit=crop' },
      { name: 'Nuggets (12 pcs)', description: 'Crispy bite-size chicken nuggets.', price: 545, img: 'https://images.unsplash.com/photo-1562967916-eb82221dfb92?q=80&w=400&auto=format&fit=crop' },
      { name: 'Jalapeno Cheese Stick', description: 'Crispy cheesy jalapeno bites.', price: 545, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400&auto=format&fit=crop' },
      { name: 'Fish & Chips', description: 'Hot shots classic platter.', price: 1195, img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=400&auto=format&fit=crop' },
      { name: 'Hot Shots (12 pcs)', description: 'Crispy hot shots.', price: 595, img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=400&auto=format&fit=crop' },
    ],
  },
  // ---------------------------------------------------------------------------
  // FRIED CATEGORY
  // This is the fried chicken section. Every item in this group is one card.
  // Example: "Fried Chicken (Half)" -> name, price, image, description.
  // Change the values here to update the card without touching the menu layout.
  // ---------------------------------------------------------------------------
  {
    id: 'fried',
    title: 'Fried',
    items: [
      { name: 'Fried Wings (6 pcs)', description: 'Crispy fried chicken wings.', price: 395, img: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=400&auto=format&fit=crop' },
      { name: 'Fried Wings (12 pcs)', description: 'Crispy fried chicken wings.', price: 745, img: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=400&auto=format&fit=crop' },
      { name: 'Fried Chicken (Half)', description: 'Juicy fried chicken half portion.', price: 795, img: 'https://images.unsplash.com/photo-1626082927389-6cd097cee6a6?q=80&w=400&auto=format&fit=crop' },
      { name: 'Fried Chicken (Full)', description: 'Juicy fried chicken full portion.', price: 1545, img: 'https://images.unsplash.com/photo-1626082927389-6cd097cee6a6?q=80&w=400&auto=format&fit=crop' },
    ],
  },
  // ---------------------------------------------------------------------------
  // WRAPS CATEGORY
  // This block only controls the wrap cards.
  // If you want to add/edit a wrap, update the object inside this category.
  // ---------------------------------------------------------------------------
  {
    id: 'wraps',
    title: 'Wraps',
    items: [
      { name: 'Cocktail Wrap', description: 'Fresh, savory wrap.', price: 495, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&auto=format&fit=crop' },
      { name: 'Chatkhara Wrap', description: 'Fresh, savory wrap.', price: 495, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&auto=format&fit=crop' },
      { name: 'Hari Bhari Wrap', description: 'Fresh, savory wrap.', price: 495, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&auto=format&fit=crop' },
      { name: 'Malai Boti Wrap', description: 'Fresh, savory wrap.', price: 495, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&auto=format&fit=crop' },
      { name: 'Turkish Wrap', description: 'Fresh, savory wrap.', price: 495, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&auto=format&fit=crop' },
    ],
  },
  // ---------------------------------------------------------------------------
  // ROLLS CATEGORY
  // Add/edit roll cards here. The menu automatically picks up these objects.
  // ---------------------------------------------------------------------------
  {
    id: 'rolls',
    title: 'Rolls',
    items: [
      { name: 'Spin Rolls', description: 'Crispy savory rolls.', price: 545, img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400&auto=format&fit=crop' },
      { name: 'Shawarma Roll', description: 'Classic shawarma roll.', price: 495, img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400&auto=format&fit=crop' },
      { name: 'Malai Boti Roll', description: 'Creamy malai boti roll.', price: 545, img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400&auto=format&fit=crop' },
      { name: 'Kabab Roll', description: 'Savory kabab roll.', price: 545, img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400&auto=format&fit=crop' },
    ],
  },
  // ---------------------------------------------------------------------------
  // BURGERS CATEGORY
  // This block is for the Burgers tab and burger product cards.
  // To change a burger card, edit name, description, price, or img in this object.
  // ---------------------------------------------------------------------------
  {
    id: 'burgers',
    title: 'Burgers',
    items: [
      { name: 'CnC Special Burger', description: 'Classic favorite from Cheese \'n Crunch.', price: 695, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&auto=format&fit=crop' },
      { name: 'Tower Burger', description: 'Classic favorite from Cheese \'n Crunch.', price: 795, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&auto=format&fit=crop' },
      { name: 'Zinger Burger', description: 'Classic favorite from Cheese \'n Crunch.', price: 495, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&auto=format&fit=crop' },
      { name: 'Patty Burger', description: 'Classic favorite from Cheese \'n Crunch.', price: 395, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400&auto=format&fit=crop' },
      { name: 'Chappli Kabab Burger', description: 'Classic favorite from Cheese \'n Crunch.', price: 395, img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=400&auto=format&fit=crop' },
      { name: 'Peri Peri Burger', description: 'Classic favorite from Cheese \'n Crunch.', price: 545, img: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?q=80&w=400&auto=format&fit=crop' },
      { name: 'Cheesy Beef Burger', description: 'Classic favorite from Cheese \'n Crunch.', price: 695, img: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?q=80&w=400&auto=format&fit=crop' },
      { name: 'Grilled Burger', description: 'Classic favorite from Cheese \'n Crunch.', price: 645, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400&auto=format&fit=crop' },
      { name: 'Pizza Burger', description: 'Classic favorite from Cheese \'n Crunch.', price: 745, img: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?q=80&w=400&auto=format&fit=crop' },
      { name: 'Fish Burger', description: 'Classic favorite from Cheese \'n Crunch.', price: 595, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&auto=format&fit=crop' },
    ],
  },
  // ---------------------------------------------------------------------------
  // SANDWICH CATEGORY
  // This section controls the sandwich card list only.
  // Each product object is independent and can be edited without affecting other tabs.
  // ---------------------------------------------------------------------------
  {
    id: 'sandwich',
    title: 'Sandwich',
    items: [
      { name: 'Supreme Sandwich', description: 'Classic favorite from Cheese \'n Crunch.', price: 745, img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=400&auto=format&fit=crop' },
      { name: 'Malai Boti Sandwich', description: 'Classic favorite from Cheese \'n Crunch.', price: 795, img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=400&auto=format&fit=crop' },
      { name: 'Panini Tikka Sandwich', description: 'Classic favorite from Cheese \'n Crunch.', price: 545, img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=400&auto=format&fit=crop' },
      { name: 'Panini Malai Boti Sandwich', description: 'Classic favorite from Cheese \'n Crunch.', price: 595, img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=400&auto=format&fit=crop' },
    ],
  },
  // ---------------------------------------------------------------------------
  // BREAD CATEGORY
  // This block contains bread card entries.
  // Change the name, description, price, or img here to update each bread item.
  // ---------------------------------------------------------------------------
  {
    id: 'bread',
    title: 'Bread',
    items: [
      { name: 'Garlic Bread', description: 'Classic favorite from Cheese \'n Crunch.', price: 195, img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400&auto=format&fit=crop' },
      { name: 'Garlic Supreme Bread', description: 'Classic favorite from Cheese \'n Crunch.', price: 295, img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400&auto=format&fit=crop' },
      { name: 'Chicken Supreme Bread', description: 'Classic favorite from Cheese \'n Crunch.', price: 395, img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=400&auto=format&fit=crop' },
    ],
  },
  // ---------------------------------------------------------------------------
  // PASTA CATEGORY
  // This is the pasta tab and all product cards visible under it.
  // Whatever is written inside this block appears as pasta cards on the menu.
  // Fields inside each item:
  // - name = pasta name shown on the card
  // - description = short product line under the name
  // - price = item price in PKR
  // - img = photo URL for the card
  // Edit this block when you want to update pasta items or add a new pasta card.
  // ---------------------------------------------------------------------------
  {
    id: 'pasta',
    title: 'Pasta',
    items: [
      { name: 'CnC Special Pasta (L)', description: 'Classic favorite from Cheese \'n Crunch.', price: 745, img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=400&auto=format&fit=crop' },
      { name: 'CnC Special Pasta (S)', description: 'Classic favorite from Cheese \'n Crunch.', price: 445, img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=400&auto=format&fit=crop' },
      { name: 'Lasagna Pasta', description: 'Classic favorite from Cheese \'n Crunch.', price: 695, img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=400&auto=format&fit=crop' },
      { name: 'Fettuccine Pasta', description: 'Classic favorite from Cheese \'n Crunch.', price: 645, img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=400&auto=format&fit=crop' },
      { name: 'Macaroni Pasta', description: 'Classic favorite from Cheese \'n Crunch.', price: 595, img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=400&auto=format&fit=crop' },
    ],
  },
  // ---------------------------------------------------------------------------
  // PLATTER CATEGORY
  // This block controls platter cards only.
  // Edit the object values here to change platter names, prices, and descriptions.
  // ---------------------------------------------------------------------------
  {
    id: 'platter',
    title: 'Platter',
    items: [
      { name: 'CnC Special Platter', description: 'House special platter.', price: 945, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&auto=format&fit=crop' },
      { name: 'Malai Boti Platter', description: 'Creamy malai boti platter.', price: 995, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&auto=format&fit=crop' },
    ],
  },
  // ---------------------------------------------------------------------------
  // SALAD CATEGORY
  // This array controls the salad cards shown on the menu.
  // To update a salad item, edit its name, description, price, or image here.
  // ---------------------------------------------------------------------------
  {
    id: 'salad',
    title: 'Salad',
    items: [
      { name: 'Russian Salad (Half)', description: 'Fresh and crisp salad.', price: 475, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400&auto=format&fit=crop' },
      { name: 'Russian Salad (Full)', description: 'Fresh and crisp salad.', price: 795, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400&auto=format&fit=crop' },
    ],
  },
  // ---------------------------------------------------------------------------
  // BEVERAGES CATEGORY
  // This block controls all beverage cards and their prices.
  // Change the values here to update drink names, description, price, or image.
  // ---------------------------------------------------------------------------
  {
    id: 'beverages',
    title: 'Beverages',
    items: [
      { name: 'Drink (350ml - Dine in)', description: 'Available for dine in.', price: 75, img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=400&auto=format&fit=crop' },
      { name: 'Mineral Water (Small)', description: 'Classic favorite from Cheese \'n Crunch.', price: 85, img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=400&auto=format&fit=crop' },
      { name: 'Mineral Water (Large)', description: 'Classic favorite from Cheese \'n Crunch.', price: 130, img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=400&auto=format&fit=crop' },
      { name: 'Tin Pack', description: 'Classic favorite from Cheese \'n Crunch.', price: 130, img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=400&auto=format&fit=crop' },
      { name: 'Drink (500ml)', description: 'Classic favorite from Cheese \'n Crunch.', price: 130, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&auto=format&fit=crop' },
      { name: 'Drink (1000ml)', description: 'Classic favorite from Cheese \'n Crunch.', price: 190, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&auto=format&fit=crop' },
      { name: 'Drink (1.5 Liter)', description: 'Classic favorite from Cheese \'n Crunch.', price: 220, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&auto=format&fit=crop' },
    ],
  },
];

export const OTHER_CATEGORIES = MENU_BY_CATEGORY;

export const DEALS = [
  { n: 1, title: 'Deal 1', items: '1 Small Pizza, 1 Oven Baked Wings, 1 Reg Drink', price: 595, img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop' },
  { n: 2, title: 'Deal 2', items: '1 Web, 1 Panini Tikka Sandwich, Half Liter Drink', price: 1055, img: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=800&auto=format&fit=crop' },
  { n: 3, title: 'Deal 3', items: '1 2 Wings Patty Burger, Champio Burger, Half Liter Drink', price: 1475, img: 'https://images.unsplash.com/photo-1548365328-9f547fb0953b?q=80&w=800&auto=format&fit=crop' },
  { n: 4, title: 'Deal 4', items: '1 Reg Pizza, 1 Supreme Sandwich, Half Liter Drink', price: 1885, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop' },
  { n: 5, title: 'Deal 5', items: '1 Large Pizza, 1 Brownie, 1 Liter Drink', price: 1745, img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800&auto=format&fit=crop' },
  { n: 6, title: 'Deal 6', items: '1 Zinger Burger, 1 Burger, Burger, 1.5 Liter Drink', price: 1945, img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=800&auto=format&fit=crop' },
  { n: 7, title: 'Deal 7', items: '1 Grand Square C Pizza, C Passi, 1.5 Liter Drink', price: 2295, img: 'https://images.unsplash.com/photo-1600628421066-f6bda6a7b976?q=80&w=800&auto=format&fit=crop' },
  { n: 8, title: 'Deal 8', items: '1 X/C Burger, 1.5 Liter Drink', price: 2345, img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=800&auto=format&fit=crop' },
  { n: 9, title: 'Deal 9', items: '2 Large Pizza, 1.5 Liter Drink', price: 2495, img: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=800&auto=format&fit=crop' },
  { n: 10, title: 'Deal 10', items: '2 Drinmilk, 1 Liter', price: 1950, img: 'https://images.unsplash.com/photo-1626082927389-6cd097cee6a6?q=80&w=800&auto=format&fit=crop' },
];

// -----------------------------------------------------------------------------
// PIZZA SIZE PRICING
// This array controls the size selector used for pizza items.
// Each object shape is: { label: 'Small', price: 495 }
// - label = text shown in the UI (Small / Medium / Large / X-Large)
// - price = numeric value in PKR for that size
// To change available sizes or prices, edit this array only.
// Example: if you want a different price for Large, update the Large object here.
// -----------------------------------------------------------------------------
// NOTE: Global SIZES removed. Variants are defined per-product via the
// `variants` array on each product object. See normalizeProduct() below.

export const SPECIAL_FLAVORS = [
  { name: 'CnC Special', desc: 'Our signature house blend of premium toppings.', img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=600&auto=format&fit=crop' },
  { name: 'Behari Kabab', desc: 'Smoky spiced kabab pieces on a loaded base.', img: 'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?q=80&w=600&auto=format&fit=crop' },
  { name: 'Peri Peri', desc: 'Fiery peri peri chicken with a tangy kick.', img: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=600&auto=format&fit=crop' },
  { name: 'Malai Boti', desc: 'Creamy malai boti chicken, rich and mild.', img: 'https://images.unsplash.com/photo-1548365328-9f547fb0953b?q=80&w=600&auto=format&fit=crop' },
  { name: 'Steak Supreme', desc: 'Loaded steak strips with supreme toppings.', img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=600&auto=format&fit=crop' },
  { name: 'Mayo Garlic', desc: 'Bold garlic and creamy mayo base.', img: 'https://images.unsplash.com/photo-1600628421066-f6bda6a7b976?q=80&w=600&auto=format&fit=crop' },
  { name: 'Mughlai', desc: 'Rich Mughlai-spiced chicken pizza.', img: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?q=80&w=600&auto=format&fit=crop' },
];

export const REGULAR_FLAVORS = [
  { name: 'Chicken Tikka', desc: 'Classic spiced chicken tikka topping.', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop' },
  { name: 'Chicken Fajita', desc: 'Zesty fajita chicken with peppers.', img: 'https://images.unsplash.com/photo-1590534247854-e97d5e3feef6?q=80&w=600&auto=format&fit=crop' },
  { name: 'Chicken Supreme', desc: 'Loaded chicken supreme, all the classics.', img: 'https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?q=80&w=600&auto=format&fit=crop' },
  { name: 'Euro', desc: 'European-style blend of savory toppings.', img: 'https://images.unsplash.com/photo-1552539618-7eec9b4d1796?q=80&w=600&auto=format&fit=crop' },
  { name: 'Fajita Sicilian', desc: 'Sicilian-inspired fajita chicken pizza.', img: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=600&auto=format&fit=crop' },
  { name: 'Bonefire', desc: 'Smoky bonfire chicken, bold and hearty.', img: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=600&auto=format&fit=crop' },
  { name: 'Cheese Lover', desc: 'Extra cheese, for the true cheese lover.', img: 'https://images.unsplash.com/photo-1571066811602-716837d681de?q=80&w=600&auto=format&fit=crop' },
  { name: 'Veggie Lover', desc: 'Garden-fresh vegetable topping mix.', img: 'https://images.unsplash.com/photo-1511689660979-10d2b1aada49?q=80&w=600&auto=format&fit=crop' },
];

export function normalizeProduct(item) {
  const variantsRaw = item.variants || [];
  const variants = Array.isArray(variantsRaw)
    ? variantsRaw.map((v) => ({ label: v.size || v.label || '', price: v.price }))
    : [];

  const minVariantPrice = variants.length ? Math.min(...variants.map((v) => v.price || Infinity)) : undefined;

  return {
    name: item.name,
    desc: item.desc || item.description || "Delicious choice from Cheese ’n Crunch.",
    img: item.img || 'placeholder-food.svg',
    // original single price (fallback for fixed-price items)
    price: item.price,
    // per-product variants (preserve labels and prices as authored)
    variants,
    // derived display price: minimum variant price when variants exist, otherwise use fixed price or undefined
    displayPrice: minVariantPrice !== undefined ? minVariantPrice : item.price,
    isPlaceholder: item.isPlaceholder === true,
  };
}

export const GALLERY = [
  'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1626082927389-6cd097cee6a6?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600628421066-f6bda6a7b976?q=80&w=800&auto=format&fit=crop',
];

export const SAMPLE_REVIEWS = [
  { name: 'Ahmed', loc: 'Chiniot', stars: 5, text: 'Cheese \u2019n Crunch ka large pizza order kiya tha, cheese bilkul loaded tha aur crust perfect crispy. Ab yehi apna go-to pizza place ban gaya hai.' },
  { name: 'Sana', loc: 'Chiniot', stars: 5, text: 'Deal 6 li thi for the whole family and honestly itni value kahin aur nahi milti. Do large pizza aur drink itnay mein — bohat reasonable!' },
  { name: 'Bilal', loc: null, stars: 4.5, text: 'The wings were so crispy, best fried chicken I\'ve had in a while. Thoda spicy tha jo mujhe pasand aaya, will order again for sure.' },
  { name: 'Hina', loc: 'Chiniot', stars: 5, text: 'Food quality is genuinely consistent every time I order. Fresh lagta hai, oily nahi hota, aur portion bhi acha hota hai.' },
  { name: 'Usman', loc: null, stars: 4.5, text: 'Delivery was faster than I expected and the rider was polite. Pizza garam garam pohnchi, packaging bhi neat thi.' },
  { name: 'Mahnoor', loc: 'Chiniot', stars: 5, text: 'Itni saari flavors mein se choose karna mushkil hota hai — Peri Peri aur Malai Boti dono try ki, dono hi zabardast thi.' },
  { name: 'Fahad', loc: null, stars: 5, text: 'Overall bohat achi experience rahi, order se leke delivery tak sab smooth tha. Cheese \u2019n Crunch is now our regular Friday night order.' },
];

