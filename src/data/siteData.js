// -----------------------------------------------------------------------------
// Editable menu source of truth
// Update this list to change category names and the product list shown on the Menu page.
// Keep each category shape consistent: { id, title, items }.
// The title is also used as the tab label in the menu filter. varient: [{ size: 'Small', price: 400 }, { size: 'Large', price: 600 }]
// -----------------------------------------------------------------------------
export const MENU_BY_CATEGORY = [
  {
    id: 'appetizer',
    title: 'Appetizers',
    items: [
      { name: 'French Fries', description: 'Crispy golden fries with light seasoning.', price: 265, img: 'https://example.com' },
      { name: 'Mayo Fries', description: 'Crispy fries topped with creamy mayo.', price: 345, img: 'https://example.com' },
      { name: 'Loaded Fries', description: 'Fries loaded with chicken, cheese and sauce.', price: 645, img: 'https://example.com' },
      { name: 'Oven Baked Wings (6 / 12 pcs)', description: 'Juicy chicken wings baked until golden.', varient: [{ size: '6pcs', price: 395 }, { size: '12pcs', price: 695 }], img: 'https://example.com' },
      { name: 'Malai Boti Wings (6 / 12 pcs)', description: 'Juicy wings with creamy malai boti flavor.', varient: [{ size: '6pcs', price: 395 }, { size: '12pcs', price: 695 }], img: 'https://example.com' },
      { name: 'Stick', description: 'Crispy chicken sticks with a tasty coating.', price: 545, img: 'https://example.com' },
      { name: 'Fish & Chips', description: 'Crispy fish served with golden fries.', price: 1195, img: 'https://example.com' },
    ]
  },
  {
    id: 'fried',
    title: 'Frieds',
    items: [
      { name: 'Fried Wings (6 / 12 pcs)', description: 'Crispy fried chicken wings with tasty seasoning.', varient: [{ size: '6pcs', price: 395 }, { size: '12pcs', price: 745 }], img: 'https://example.com' },
      { name: 'Fried Chicken', description: 'Crispy fried chicken with juicy meat inside.', varient: [{ size: 'Half', price: 795 }, { size: 'Full', price: 1545 }], img: 'https://example.com' },
      { name: 'Nuggets', description: 'Crispy chicken nuggets with a soft center.', varient: [{ size: 'pcs', price: 265 }, { size: '12pcs', price: 545 }], img: 'https://example.com' },
      { name: 'Hot Shots (12 pcs)', description: 'Small crispy chicken bites with tasty spices.', price: 595, img: 'https://example.com' },
    ]
  },
  {
    id: 'burgers',
    title: 'Burgers',
    items: [
      { name: 'CnC Special Burger', description: 'Crispy chicken burger with special creamy sauce.', price: 695, img: 'https://example.com/burger.jpg' },
      { name: 'Tower Burger', description: 'Double chicken burger with cheese and sauce.', price: 795, img: 'https://example.com/cheese-burger.jpg' },
      { name: 'Zinger Burger', description: 'Crispy chicken zinger with creamy mayo.', price: 495, img: 'https://example.com/burger.jpg' },
      { name: 'Petty Burger', description: 'Crispy chicken patty with creamy sauce.', price: 395, img: 'https://example.com/burger.jpg' },
      { name: 'Chappli Kabab Burger', description: 'Chappli kabab burger with fresh mint chutney.', price: 395, img: 'https://example.com/burger.jpg' },
      { name: 'Peri Peri Burger', description: 'Spicy chicken burger with peri peri flavor.', price: 545, img: 'https://example.com/burger.jpg' },
      { name: 'Cheesy Beef Burger', description: 'Juicy beef burger loaded with melted cheese.', price: 695, img: 'https://example.com/burger.jpg' },
      { name: 'Grilled Burger', description: 'Grilled chicken burger with mild tasty spices.', price: 645, img: 'https://example.com/burger.jpg' },
      { name: 'Pizza Burger', description: 'Burger with pizza sauce and melted cheese.', price: 745, img: 'https://example.com/burger.jpg' },
      { name: 'Fish Burger', description: 'Crispy fish burger with creamy tartar sauce.', price: 595, img: 'https://example.com/burger.jpg' },
    ]
  },
  {
    id: 'sandwich',
    title: 'Sandwiches',
    items: [
      { name: 'Supreme Sandwich', description: 'Grilled chicken sandwich with special creamy sauce.', price: 745, img: 'https://example.com' },
      { name: 'Malai Boti Sandwich', description: 'Creamy malai boti with onions in bread.', price: 795, img: 'https://example.com' },
      { name: 'Panini Tikka Sandwich', description: 'Grilled chicken tikka inside soft panini bread.', price: 545, img: 'https://example.com' },
      { name: 'Panini Malai Boti Sandwich', description: 'Juicy malai boti served inside soft panini.', price: 595, img: 'https://example.com' },
    ]
  },
  {
    id: 'bread',
    title: 'Bread & Baked',
    items: [
      { name: 'Garlic Bread', description: 'Soft bread with garlic butter and herbs.', price: 195, img: 'https://example.com' },
      { name: 'Garlic Supreme Bread', description: 'Garlic bread topped with melted mozzarella cheese.', price: 295, img: 'https://example.com' },
      { name: 'Chicken Supreme Bread', description: 'Baked bread topped with chicken and cheese.', price: 395, img: 'https://example.com' },
    ]
  },
  {
    id: 'pasta',
    title: 'Pasta',
    items: [
      { name: 'Lasagna Pasta', description: 'Baked pasta layers with chicken and cheese.', price: 195, img: 'https://example.com' },
      { name: 'Fettuccine Pasta', description: 'Fettuccine pasta with creamy white sauce.', price: 295, img: 'https://example.com' },
      { name: 'Macaroni Pasta', description: 'Macaroni with chicken and fresh mixed vegetables.', price: 395, img: 'https://example.com' },
    ]
  },
  {
    id: 'wrap',
    title: 'Wraps',
    items: [
      { name: 'Cocktail Wrap', description: 'Crispy chicken wrap with creamy cocktail sauce.', price: 495, img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop' },
      { name: 'Chatkhara Wrap', description: 'Spicy chicken wrap with tasty chatkhara flavor.', price: 495, img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop' },
      { name: 'Hari Bhari Wrap', description: 'Chicken wrap with fresh green herbs and sauce.', price: 495, img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop' },
      { name: 'Malai Boti Wrap', description: 'Creamy malai boti wrapped with fresh salad.', price: 495, img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop' },
      { name: 'Turkish Wrap', description: 'Grilled chicken wrap with Turkish style flavors.', price: 495, img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop' },
    ]
  },
  {
    id: 'roll',
    title: 'Rolls',
    items: [
      { name: 'Spin Roll', description: 'Crispy paratha roll filled with spicy chicken.', price: 545, img: 'https://example.com' },
      { name: 'Shawarma Roll', description: 'Chicken shawarma roll with fresh salad and sauce.', price: 495, img: 'https://example.com' },
      { name: 'Malai Boti Roll', description: 'Creamy grilled malai boti wrapped in paratha.', price: 545, img: 'https://example.com' },
      { name: 'Kabab Roll', description: 'Grilled chicken kabab wrapped in soft paratha.', price: 545, img: 'https://example.com' },
    ]
  },
  {
    id: 'platter',
    title: 'Platters',
    items: [
      { name: 'CnC Special Platter', description: 'A tasty mix of our favorite items.', price: 545, img: 'https://example.com' },
      { name: 'Malai Boti Platter', description: 'Creamy grilled malai boti served with sides.', price: 495, img: 'https://example.com' },
    ]
  },
  {
    id: 'bevrages',
    title: 'Beverages',
    items: [
      {
        name: 'Mineral Water',
        description: 'Fresh mineral water for a quick refresh.',
        price: 85,
        variants: [
          { size: 'Small', price: 85 },
          { size: 'Large', price: 130 },
        ],
        img: 'https://example.com',
      },
      {
        name: 'Drink',
        description: 'Cold soft drink available in different sizes.',
        price: 75,
        variants: [
          { size: '350ml', price: 75 },
          { size: '500ml', price: 130 },
          { size: '1 Liter', price: 190 },
          { size: '1.5 Liter', price: 220 },
        ],
        flavorOptions: ['Coca Cola', 'Sprite'],
        img: 'https://example.com',
      },
      { name: 'Tin Pack', description: 'Cold canned drink served in your favorite flavor.', price: 130, flavorOptions: ['Coca Cola', 'Sprite'], img: 'https://example.com' },
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
      { name: 'Cocktail Wrap', type: 'wrap', hasFlavorOption: false, img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop' },
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

export const ICE_CREAM_FLAVORS = [
  { name: 'Vanilla', desc: 'Classic smooth vanilla ice cream', img: 'https://images.unsplash.com/photo-1563805042-7684c019e157?q=80&w=600&auto=format&fit=crop' },
  { name: 'Chocolate', desc: 'Rich creamy chocolate ice cream', img: 'https://images.unsplash.com/photo-1564785564656-1fc51e2b5fcb?q=80&w=600&auto=format&fit=crop' },
  { name: 'Strawberry', desc: 'Fresh strawberry ice cream', img: 'https://images.unsplash.com/photo-1563805042-7684c019e157?q=80&w=600&auto=format&fit=crop' },
  { name: 'Mint Chocolate', desc: 'Refreshing mint with chocolate chips', img: 'https://images.unsplash.com/photo-1563805042-7684c019e157?q=80&w=600&auto=format&fit=crop' },
  { name: 'Caramel', desc: 'Sweet and creamy caramel ice cream', img: 'https://images.unsplash.com/photo-1564785564656-1fc51e2b5fcb?q=80&w=600&auto=format&fit=crop' },
  { name: 'Pistachio', desc: 'Nutty pistachio ice cream', img: 'https://images.unsplash.com/photo-1563805042-7684c019e157?q=80&w=600&auto=format&fit=crop' },
  { name: 'Cookie Dough', desc: 'Vanilla with cookie dough pieces', img: 'https://images.unsplash.com/photo-1564785564656-1fc51e2b5fcb?q=80&w=600&auto=format&fit=crop' },
  { name: 'Butter Pecan', desc: 'Buttery pecan flavored ice cream', img: 'https://images.unsplash.com/photo-1563805042-7684c019e157?q=80&w=600&auto=format&fit=crop' },
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
    flavorOptions: Array.isArray(item.flavorOptions) ? item.flavorOptions : [],
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
  { name: 'Danish Farooq', loc: 'Chiniot', stars: 5, text: 'Had a great dining experience at Cheese ’n Crunch. The Square Grand Pizza was enjoyable, with good service and a welcoming atmosphere. The staff was friendly, and the restaurant offers a wide variety of fast food and desserts. Overall, a pleasant experience for dining in.' },
  { name: 'Najaf Ali', loc: 'Chiniot', stars: 5, text: 'Everything we ordered was fresh, flavorful, and well prepared. From burgers and fries to pasta and other items, the food was delicious. The staff was friendly, the service was quick, and the complimentary gesture made the experience even more enjoyable. A great choice for fast food in Chiniot.' },
  { name: 'Rida Sabir', loc: 'Chiniot', stars: 5, text: 'An amazing experience from start to finish. The food was delicious, the service was excellent, and the atmosphere made the visit even more enjoyable. Definitely a place worth visiting again!' },
  { name: 'Naeem Ul Hassan', loc: 'Chiniot', stars: 4, text: 'Cheese N Crunch offers a wonderful ambience with a cozy and inviting atmosphere, especially for dinner. The taste stands out and feels superior to many other options. A comfortable place to enjoy quality food with a great dining environment.' },
  { name: 'captain shah', loc: 'Chiniot', stars: 5, text: 'An outstanding fast food experience at Cheese N Crunch. The CNC Special Burger, Fish n Fries, and Oven Baked Wings were all excellent. The food quality, service, and atmosphere were exceptional. A highly recommended spot for enjoying great fast food with friends and family.' },
  { name: 'Usama Sabir', loc: 'Chiniot', stars: 5, text: 'Cheese N Crunch is a great place to enjoy delicious food with friends and family. With a variety of options including pizzas, burgers, sandwiches, and more, there is something for everyone. A great spot to enjoy good food and quality time together.' },
  { name: 'lilly', loc: 'Chiniot', stars: 5, text: 'An amazing experience with delicious food and excellent service. The taste was impressive, and the staff’s behavior made the visit even more enjoyable. Overall, a wonderful dining experience that I would happily recommend.' },
  { name: 'Abeera Tul Qadar', loc: 'Chiniot', stars: 5, text: 'Had a wonderful experience at Cheese N Crunch. The ambience was beautiful, the atmosphere was welcoming, and the taste of the food was truly impressive. Everything came together to make the dining experience memorable and enjoyable.' }
];

