// -----------------------------------------------------------------------------
// Editable menu source of truth
// Update this list to change category names and the product list shown on the Menu page.
// Keep each category shape consistent: { id, title, items }.
// The title is also used as the tab label in the menu filter. varient: [{ size: 'Small', price: 400 }, { size: 'Large', price: 600 }]
// -----------------------------------------------------------------------------
export const MENU_BY_CATEGORY = [
  {
    id: 'appetizer',
    title: 'appetizer',
    items: [
      { name: 'French Fries', description: 'Toasted bread with grilled chicken and signature sauce.', price: 265, img: 'https://example.com' },
      { name: 'Mayo Fries', description: 'Creamy barbecue chicken malai boti with onions.', price: 345, img: 'https://example.com' },
      { name: 'Loaded Fries', description: 'Pressed panini stuffed with spicy chicken tikka.', price: 645, img: 'https://example.com' },
      { name: 'Oven Backed Wings 12/6 pcs', description: 'Pressed panini with juicy chicken malai boti.', varient: [{ size: '6pcs', price: 395 }, { size: '12pcs', price: 695 }], img: 'https://example.com' },
      { name: 'Malai Boti Wings 12/6 pcs', description: 'Pressed panini with juicy chicken malai boti.', varient: [{ size: '6pcs', price: 395 }, { size: '12pcs', price: 695 }], img: 'https://example.com' },
      { name: 'Stick', description: 'Pressed panini with juicy chicken malai boti.', price: 545, img: 'https://example.com' },
      { name: 'Fish & Chips', description: 'Crispy fried fish fillet served with chips.', price: 1195, img: 'https://example.com' },
    ]
  },
  {
    id: 'fried',
    title: 'Frieds',
    items: [
      { name: 'Fried Wings 12/6 pcs', description: 'Pressed panini with juicy chicken malai boti.', varient: [{ size: '6pcs', price: 395 }, { size: '12pcs', price: 745 }], img: 'https://example.com' },
      { name: 'Fried Chicken', description: 'Pressed panini with juicy chicken malai boti.', varient: [{ size: 'Half', price: 795 }, { size: 'Full', price: 1545 }], img: 'https://example.com' },
      { name: 'Nuggets', description: 'Pressed panini with juicy chicken malai boti.', varient: [{ size: 'pcs', price: 265 }, { size: '12pcs', price: 545 }], img: 'https://example.com' },
      { name: 'Hot Shots 12pcs', description: 'Bite-sized crispy chicken hot shots fried golden.', price: 595, img: 'https://example.com' },
    ]
  },
  {
    id: 'burgers',
    title: 'Burgers',
    items: [
      { name: 'CnC Special Burger', description: 'Signature crispy chicken patty with secret sauce.', price: 695, img: 'https://example.com/burger.jpg' },
      { name: 'Tower Burger', description: 'Double stacked crispy chicken fillets with cheese.', price: 795, img: 'https://example.com/cheese-burger.jpg' },
      { name: 'Zinger Burger', description: 'Classic crunchy zinger fillet with premium mayo.', price: 495, img: 'https://example.com/burger.jpg' },
      { name: 'Petty Burger', description: 'Traditional fried chicken patty with sweet cream sauce.', price: 395, img: 'https://example.com/burger.jpg' },
      { name: 'Chappli Kabab Burger', description: 'Spiced chappli kabab patty with mint chutney.', price: 395, img: 'https://example.com/burger.jpg' },
      { name: 'Peri Peri Burger', description: 'Flame-grilled chicken coated in fiery Peri Peri spice.', price: 545, img: 'https://example.com/burger.jpg' },
      { name: 'Cheesy Beef Burger', description: 'Juicy beef patty loaded with double cheddar cheese.', price: 695, img: 'https://example.com/burger.jpg' },
      { name: 'Grilled Burger', description: 'Charcoal-grilled chicken fillet with mild herbs.', price: 645, img: 'https://example.com/burger.jpg' },
      { name: 'Pizza Burger', description: 'Oven-baked burger stuffed with pizza sauce and mozzarella.', price: 745, img: 'https://example.com/burger.jpg' },
      { name: 'Fish Burger', description: 'Crispy fried fish fillet with tartar sauce.', price: 595, img: 'https://example.com/burger.jpg' },
    ]
  },
  {
    id: 'sandwich',
    title: 'Sandwich',
    items: [
      { name: 'Supreme Sandwich', description: 'Toasted bread with grilled chicken and signature sauce.', price: 745, img: 'https://example.com' },
      { name: 'Malai Boti Sandwich', description: 'Creamy barbecue chicken malai boti with onions.', price: 795, img: 'https://example.com' },
      { name: 'Panini Tikka Sandwich', description: 'Pressed panini stuffed with spicy chicken tikka.', price: 545, img: 'https://example.com' },
      { name: 'Panini Malai Boti Sandwich', description: 'Pressed panini with juicy chicken malai boti.', price: 595, img: 'https://example.com' },
    ]
  },
  {
    id: 'bread',
    title: 'Bread',
    items: [
      { name: 'Garlic Bread', description: 'Toasted baguette slices brushed with garlic butter.', price: 195, img: 'https://example.com' },
      { name: 'Garlic Supreme Bread', description: 'Baked garlic bread layered with melted mozzarella cheese.', price: 295, img: 'https://example.com' },
      { name: 'Chicken Supreme Bread', description: 'Baked bread loaded with seasoned chicken and cheese.', price: 395, img: 'https://example.com' },
    ]
  },
  {
    id: 'pasta',
    title: 'Pasta',
    items: [
      { name: 'Lasgna Pasta', description: 'Baked layers of pasta, minced chicken, and cheese.', price: 195, img: 'https://example.com' },
      { name: 'Fettuccine Pasta', description: 'Fettuccine pasta tossed in creamy white Alfredo sauce.', price: 295, img: 'https://example.com' },
      { name: 'Maccaroni Pasta', description: 'Stir-fried macaroni with chicken and mixed vegetables.', price: 395, img: 'https://example.com' },
    ]
  },
  {
    id: 'wrap',
    title: 'Wraps',
    items: [
      { name: 'Cocktail Wrap', description: 'Crispy chicken with tangy cocktail sauce wrap.', price: 495, img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop' },
      { name: 'Chatkhara Wrap', description: 'Spicy chicken with traditional tangy chatkhara spices.', price: 495, img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop' },
      { name: 'Hari Bhari Wrap', description: 'Fresh green herb marinated chicken wrapped tightly.', price: 495, img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop' },
      { name: 'Malai Boti Wrap', description: 'Creamy barbecue chicken malai boti wrapped smoothly.', price: 495, img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop' },
      { name: 'Turkish Wrap', description: 'Authentic Turkish style grilled chicken wrap.', price: 495, img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop' },
    ]
  },
  {
    id: 'roll',
    title: 'Rolls',
    items: [
      { name: 'Spin Roll', description: 'Crispy paratha roll stuffed with spiced chicken.', price: 545, img: 'https://example.com' },
      { name: 'Shawarma Roll', description: 'Traditional middle eastern style chicken roll.', price: 495, img: 'https://example.com' },
      { name: 'Malai Boti Roll', description: 'Creamy charcoal grilled chicken boti in paratha.', price: 545, img: 'https://example.com' },
      { name: 'Kabab Roll', description: 'Spiced grilled chicken kabab rolled in paratha.', price: 545, img: 'https://example.com' },
    ]
  },
  {
    id: 'platter',
    title: 'Platter',
    items: [
      { name: 'CnC Speacial Platter', description: 'Signature assortment of premium fast food items.', price: 545, img: 'https://example.com' },
      { name: 'Malai Boti Platter', description: 'Creamy grilled chicken boti served with sides.', price: 495, img: 'https://example.com' },
    ]
  },
  {
    id: 'pizza',
    title: 'Pizza',
    items: [
      {
        name: 'Special Square - Chicken Tikka',
        description: 'Square cut pizza with premium Chicken Tikka toppings',
        varient: [
          { size: 'Small', price: 595 },
          { size: 'Large', price: 895 },
        ],
        img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Special Square - Behari Kabab',
        description: 'Square cut pizza with smoky Behari Kabab pieces',
        varient: [
          { size: 'Small', price: 645 },
          { size: 'Large', price: 945 },
        ],
        img: 'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Special Square - Peri Peri',
        description: 'Square cut pizza with fiery Peri Peri chicken',
        varient: [
          { size: 'Small', price: 595 },
          { size: 'Large', price: 895 },
        ],
        img: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Traditional Square - Margherita',
        description: 'Classic square pizza with fresh mozzarella and basil',
        varient: [
          { size: 'Small', price: 445 },
          { size: 'Large', price: 695 },
        ],
        img: 'https://images.unsplash.com/photo-1548365328-9f547fb0953b?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Traditional Square - Chicken Fajita',
        description: 'Square pizza with zesty chicken fajita and peppers',
        varient: [
          { size: 'Small', price: 495 },
          { size: 'Large', price: 795 },
        ],
        img: 'https://images.unsplash.com/photo-1590534247854-e97d5e3feef6?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Traditional Square - Veggie Lover',
        description: 'Square pizza loaded with garden-fresh vegetables',
        varient: [
          { size: 'Small', price: 445 },
          { size: 'Large', price: 695 },
        ],
        img: 'https://images.unsplash.com/photo-1511689660979-10d2b1aada49?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'CnC Signature - Premium Feast',
        description: 'Our signature square pizza loaded with premium toppings and secret sauce',
        varient: [
          { size: 'Small', price: 745 },
          { size: 'Large', price: 1095 },
        ],
        img: 'https://images.unsplash.com/photo-1600628421066-f6bda6a7b976?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'CnC Signature - Malai Boti Deluxe',
        description: 'Signature creamy malai boti chicken on premium square crust',
        varient: [
          { size: 'Small', price: 695 },
          { size: 'Large', price: 1045 },
        ],
        img: 'https://images.unsplash.com/photo-1548365328-9f547fb0953b?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'CnC Signature - Steak Supreme',
        description: 'Loaded steak strips with supreme cheese and signature toppings',
        varient: [
          { size: 'Small', price: 745 },
          { size: 'Large', price: 1095 },
        ],
        img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=600&auto=format&fit=crop',
      },
    ]
  }
]

export const OTHER_CATEGORIES = MENU_BY_CATEGORY;

export const DEALS = [
  {
    n: 1,
    title: 'Deal 1',
    price: 945,
    img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop',
    items: [
      { name: 'Small Pizza', type: 'pizza', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=600&auto=format&fit=crop' },
      { name: '6 Oven Baked Wings', type: 'burger', hasFlavorOption: false, img: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=600&auto=format&fit=crop' },
      { name: 'Regular Drink', type: 'drink', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1554866585-cd4628902094?q=80&w=600&auto=format&fit=crop' },
    ],
  },
  {
    n: 2,
    title: 'Deal 2',
    price: 1055,
    img: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=800&auto=format&fit=crop',
    items: [
      { name: 'Cocktail Wrap', type: 'wrap', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop' },
      { name: 'Panini Tikka Sandwich', type: 'sandwich', hasFlavorOption: false, img: 'https://images.unsplash.com/photo-1553909092-d5960881ba35?q=80&w=600&auto=format&fit=crop' },
      { name: 'Half Liter Drink', type: 'drink', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1554866585-cd4628902094?q=80&w=600&auto=format&fit=crop' },
    ],
  },
  {
    n: 3,
    title: 'Deal 3',
    price: 1475,
    img: 'https://images.unsplash.com/photo-1548365328-9f547fb0953b?q=80&w=800&auto=format&fit=crop',
    items: [
      { name: '12 Wings Patty Burger', type: 'burger', hasFlavorOption: false, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop' },
      { name: 'Chappli Kabab Burger', type: 'burger', hasFlavorOption: false, img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=600&auto=format&fit=crop' },
      { name: 'Half Liter Drink', type: 'drink', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1554866585-cd4628902094?q=80&w=600&auto=format&fit=crop' },
    ],
  },
  {
    n: 4,
    title: 'Deal 4',
    price: 1845,
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
    items: [
      { name: 'Regular Pizza', type: 'pizza', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=600&auto=format&fit=crop' },
      { name: 'Supreme Sandwich', type: 'sandwich', hasFlavorOption: false, img: 'https://images.unsplash.com/photo-1553909092-d5960881ba35?q=80&w=600&auto=format&fit=crop' },
      { name: 'Half Liter Drink', type: 'drink', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1554866585-cd4628902094?q=80&w=600&auto=format&fit=crop' },
    ],
  },
  {
    n: 5,
    title: 'Deal 5',
    price: 1895,
    img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800&auto=format&fit=crop',
    items: [
      { name: 'Large Pizza', type: 'pizza', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=600&auto=format&fit=crop' },
      { name: 'Brownie', type: 'brownie', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=600&auto=format&fit=crop' },
      { name: 'One Liter Drink', type: 'drink', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1554866585-cd4628902094?q=80&w=600&auto=format&fit=crop' },
    ],
  },
  {
    n: 6,
    title: 'Deal 6',
    price: 1945,
    img: 'https://images.unsplash.com/photo-1590534247854-e97d5e3feef6?q=80&w=800&auto=format&fit=crop',
    items: [
      { name: '4 Zinger Burger', type: 'burger', hasFlavorOption: false, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop' },
      // { name: 'Zinger Burger', type: 'burger', hasFlavorOption: false, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop' },
      // { name: 'Zinger Burger', type: 'burger', hasFlavorOption: false, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop' },
      // { name: 'Zinger Burger', type: 'burger', hasFlavorOption: false, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop' },
      { name: 'One Liter Drink', type: 'drink', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1554866585-cd4628902094?q=80&w=600&auto=format&fit=crop' },
    ],
  },
  {
    n: 7,
    title: 'Deal 7',
    price: 2695,
    img: 'https://images.unsplash.com/photo-1600628421066-f6bda6a7b976?q=80&w=800&auto=format&fit=crop',
    items: [
      { name: 'Grand Square Pizza', type: 'pizza', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=600&auto=format&fit=crop' },
      { name: 'CnC Pasta', type: 'pasta', hasFlavorOption: false, img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=600&auto=format&fit=crop' },
      { name: 'One and Half Liter Drink', type: 'drink', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1554866585-cd4628902094?q=80&w=600&auto=format&fit=crop' },
    ],
  },
  {
    n: 8,
    title: 'Deal 8',
    price: 2795,
    img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=800&auto=format&fit=crop',
    items: [
      { name: 'XL Pizza', type: 'pizza', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=600&auto=format&fit=crop' },
      { name: 'CnC Burger', type: 'burger', hasFlavorOption: false, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop' },
      { name: 'One and Half Liter Drink', type: 'drink', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1554866585-cd4628902094?q=80&w=600&auto=format&fit=crop' },
    ],
  },
  {
    n: 9,
    title: 'Deal 9',
    price: 3295,
    img: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=800&auto=format&fit=crop',
    items: [
      { name: 'Large Pizza', type: 'pizza', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=600&auto=format&fit=crop' },
      { name: 'Large Pizza', type: 'pizza', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=600&auto=format&fit=crop' },
      { name: 'One and Half Liter Drink', type: 'drink', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1554866585-cd4628902094?q=80&w=600&auto=format&fit=crop' },
    ],
  },
  {
    n: 10,
    title: 'Deal 10',
    price: 4495,
    img: 'https://images.unsplash.com/photo-1626082927389-6cd097cee6a6?q=80&w=800&auto=format&fit=crop',
    items: [
      { name: 'XL Pizza', type: 'pizza', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=600&auto=format&fit=crop' },
      { name: 'XL Pizza', type: 'pizza', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=600&auto=format&fit=crop' },
      { name: 'One Liter Drink', type: 'drink', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1554866585-cd4628902094?q=80&w=600&auto=format&fit=crop' },
      { name: 'One Liter Drink', type: 'drink', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1554866585-cd4628902094?q=80&w=600&auto=format&fit=crop' },
    ],
  },
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

export const DRINK_FLAVORS = [
  { name: 'Coca Cola', desc: 'Refreshing Coca Cola', img: 'https://images.unsplash.com/photo-1554866585-cd4628902094?q=80&w=600&auto=format&fit=crop' },
  { name: 'Sprite', desc: 'Crisp and clean Sprite', img: 'https://images.unsplash.com/photo-1554866585-cd4628902094?q=80&w=600&auto=format&fit=crop' },
];

export const BROWNIE_FLAVORS = [
  { name: 'Caramel', desc: 'Sweet caramel brownie', img: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=600&auto=format&fit=crop' },
  { name: 'Chocolate', desc: 'Rich chocolate brownie', img: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=600&auto=format&fit=crop' },
  { name: 'Waswa', desc: 'Special waswa brownie', img: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=600&auto=format&fit=crop' },
];

export const WRAP_FLAVORS =
  (MENU_BY_CATEGORY.find((category) => category.id === 'wrap')?.items || [])
    .map((item) => ({
      name: item.name,
      desc: item.description || 'Wrap flavor option',
      img: item.img || 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop',
    }));

export const PIZZA_TOPPINGS = [
  {
    name: 'Chicken & Cheese',
    prices: {
      'Small': 95,
      'Medium': 145,
      'Large': 195,
      'X-Large': 245,
    },
  },
  {
    name: 'Vegetable',
    prices: {
      'Small': 80,
      'Medium': 120,
      'Large': 170,
      'X-Large': 220,
    },
  },
];

export function normalizeProduct(item) {
  const rawVariants = Array.isArray(item.variants)
    ? item.variants
    : Array.isArray(item.varient)
      ? item.varient
      : Array.isArray(item.variant)
        ? item.variant
        : [];

  const variants = Array.isArray(rawVariants)
    ? rawVariants.flatMap((v) => {
      if (typeof v === 'string') {
        const match = v.match(/([^:;]+)\s*[:;]\s*\$?\s*(\d+(?:\.\d+)?)/i);
        if (!match) return [];
        const size = match[1].trim();
        const price = Number(match[2]);
        return [{ name: item.name, size, price }];
      }

      if (!v || typeof v !== 'object') return [];

      const size = v.size || v.label || v.variant || '';
      const price = Number(v.price ?? v.amount ?? 0);
      const name = v.name || v.flavor || item.name;

      if (!size && !price && !name) return [];

      return [{ name, size, price }];
    })
    : [];

  const minVariantPrice = variants.length ? Math.min(...variants.map((v) => Number(v.price) || Infinity)) : undefined;

  return {
    name: item.name,
    desc: item.desc || item.description || "Delicious choice from Cheese ’n Crunch.",
    img: item.img || 'placeholder-food.svg',
    // original single price (fallback for fixed-price items)
    price: item.price,
    // per-product variants preserved exactly: { name, size, price }
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

