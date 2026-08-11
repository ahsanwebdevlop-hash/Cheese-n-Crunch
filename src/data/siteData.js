import placeholderImg from '../assets/placeholder-food.svg';

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

export const SIZES = [
  { label: 'Small', price: 595 },
  { label: 'Medium', price: 895 },
  { label: 'Large', price: 1295 },
  { label: 'X-Large', price: 1795 },
];

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
  { name: 'Bonefire', desc: 'Smoky bonefire chicken, bold and hearty.', img: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=600&auto=format&fit=crop' },
  { name: 'Cheese Lover', desc: 'Extra cheese, for the true cheese lover.', img: 'https://images.unsplash.com/photo-1571066811602-716837d681de?q=80&w=600&auto=format&fit=crop' },
  { name: 'Veggie Lover', desc: 'Garden-fresh vegetable topping mix.', img: 'https://images.unsplash.com/photo-1511689660979-10d2b1aada49?q=80&w=600&auto=format&fit=crop' },
];

export const PLACEHOLDER_CATALOG = {
  Burgers: [
    { name: 'Creamy Burger', desc: 'Juicy patty, melted cheese and special sauce.', price: 695, img: placeholderImg, isPlaceholder: true },
    { name: 'Spicy Burger', desc: 'Fiery burger with crispy toppings and heat.', price: 745, img: placeholderImg, isPlaceholder: true },
    { name: 'Cheese Burst Burger', desc: 'Extra cheesy burger with loaded flavor.', price: 725, img: placeholderImg, isPlaceholder: true },
    { name: 'BBQ Burger', desc: 'Smoky BBQ sauce, onion rings and cheese.', price: 765, img: placeholderImg, isPlaceholder: true },
    { name: 'Classic Burger', desc: 'A timeless burger with fresh vegetables.', price: 675, img: placeholderImg, isPlaceholder: true },
  ],
  'Fried Chicken': [
    { name: 'Crispy Chicken', desc: 'Golden fried chicken with a crunchy bite.', price: 695, img: placeholderImg, isPlaceholder: true },
    { name: 'Hot Wings', desc: 'Spicy wings with a tangy finish.', price: 725, img: placeholderImg, isPlaceholder: true },
    { name: 'Garlic Chicken', desc: 'Garlic coated chicken with bold flavors.', price: 735, img: placeholderImg, isPlaceholder: true },
    { name: 'Honey Chicken', desc: 'Sweet and savory glazed chicken pieces.', price: 745, img: placeholderImg, isPlaceholder: true },
    { name: 'Crunchy Chicken', desc: 'Extra crispy fried chicken for sharing.', price: 755, img: placeholderImg, isPlaceholder: true },
  ],
  Wings: [
    { name: 'Fiery Wings', desc: 'Hot wings with flame grilled spice.', price: 645, img: placeholderImg, isPlaceholder: true },
    { name: 'Lemon Pepper Wings', desc: 'Zesty lemon pepper wing bites.', price: 655, img: placeholderImg, isPlaceholder: true },
    { name: 'Honey Garlic Wings', desc: 'Sweet and savory glazed wings.', price: 675, img: placeholderImg, isPlaceholder: true },
    { name: 'Classic Wings', desc: 'Crispy wings with signature seasoning.', price: 665, img: placeholderImg, isPlaceholder: true },
    { name: 'BBQ Wings', desc: 'Smoky barbecue wings with rich sauce.', price: 685, img: placeholderImg, isPlaceholder: true },
  ],
  Sandwiches: [
    { name: 'Club Sandwich', desc: 'Stacked sandwich with fresh fillings.', price: 595, img: placeholderImg, isPlaceholder: true },
    { name: 'Grilled Sandwich', desc: 'Toasted sandwich with melted cheese.', price: 605, img: placeholderImg, isPlaceholder: true },
    { name: 'Chicken Sandwich', desc: 'Tender chicken with crunchy salad.', price: 615, img: placeholderImg, isPlaceholder: true },
    { name: 'Spicy Sandwich', desc: 'Bold flavors in every toasted bite.', price: 625, img: placeholderImg, isPlaceholder: true },
    { name: 'Cheese Sandwich', desc: 'Extra cheese and fresh vegetables.', price: 635, img: placeholderImg, isPlaceholder: true },
  ],
  Pasta: [
    { name: 'Creamy Alfredo Pasta', desc: 'Rich Alfredo sauce with tender pasta.', price: 595, img: placeholderImg, isPlaceholder: true },
    { name: 'Chicken Pasta', desc: 'Savory chicken tossed with pasta.', price: 625, img: placeholderImg, isPlaceholder: true },
    { name: 'Spicy Pasta', desc: 'Spicy tomato pasta with bold herbs.', price: 615, img: placeholderImg, isPlaceholder: true },
    { name: 'Cheesy Pasta', desc: 'Loaded with melted cheese and herbs.', price: 605, img: placeholderImg, isPlaceholder: true },
    { name: 'Special Pasta', desc: 'House special pasta with rich flavors.', price: 635, img: placeholderImg, isPlaceholder: true },
  ],
  Drinks: [
    { name: 'Classic Cola', desc: 'Refreshing chilled cola drink.', price: 195, img: placeholderImg, isPlaceholder: true },
    { name: 'Lemon Soda', desc: 'Zesty lemon soda with bubbles.', price: 195, img: placeholderImg, isPlaceholder: true },
    { name: 'Mango Juice', desc: 'Sweet mango juice chilled to perfection.', price: 225, img: placeholderImg, isPlaceholder: true },
    { name: 'Strawberry Shake', desc: 'Creamy strawberry drink delight.', price: 245, img: placeholderImg, isPlaceholder: true },
    { name: 'Mint Cooler', desc: 'Cool mint refresher for every order.', price: 215, img: placeholderImg, isPlaceholder: true },
  ],
  Desserts: [
    { name: 'Chocolate Brownie', desc: 'Warm brownie with rich chocolate.', price: 325, img: placeholderImg, isPlaceholder: true },
    { name: 'Vanilla Cake', desc: 'Soft vanilla cake slice with frosting.', price: 345, img: placeholderImg, isPlaceholder: true },
    { name: 'Caramel Brownie', desc: 'Brownie topped with caramel drizzle.', price: 335, img: placeholderImg, isPlaceholder: true },
    { name: 'Nutty Cake', desc: 'Crunchy nuts with moist cake slice.', price: 355, img: placeholderImg, isPlaceholder: true },
    { name: 'Berry Brownie', desc: 'Fruity brownie treat with berries.', price: 345, img: placeholderImg, isPlaceholder: true },
  ],
};

export function normalizeProduct(item) {
  return {
    name: item.name,
    desc: item.desc || item.description || 'Delicious choice from Cheese ’n Crunch.',
    img: item.img || 'placeholder-food.svg',
    price: item.price || 595,
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

export const OTHER_CATEGORIES = [
  { id: 'appetizers', title: 'Appetizers', items: [
    { name: 'Fried Wings', description: 'Crispy fried chicken wings', price: 195, img: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=400&auto=format&fit=crop' },
    { name: 'Meatball', description: 'Classic favorite from Cheese \'n Crunch.', price: 245, img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400&auto=format&fit=crop' },
    { name: 'Loaded Wings', description: 'Classic favorite from Cheese \'n Crunch.', price: 345, img: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?q=80&w=400&auto=format&fit=crop' },
    { name: 'Oven Baked Wings', description: 'Classic favorite from Cheese \'n Crunch.', price: 345, img: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=400&auto=format&fit=crop' },
  ]},
  { id: 'fried', title: 'Fried', items: [
    { name: 'Nuggets', description: 'Classic favorite from Cheese \'n Crunch.', price: 195, img: 'https://images.unsplash.com/photo-1562967916-eb82221dfb92?q=80&w=400&auto=format&fit=crop' },
  ]},
  { id: 'wraps', title: 'Wraps', items: [
    { name: 'Cocktail Wrap', description: 'Fresh wrap with a savory bite.', price: 195, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&auto=format&fit=crop' },
    { name: 'Chacha Wrap', description: 'Fresh wrap with a savory bite.', price: 195, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&auto=format&fit=crop' },
    { name: 'Bihari Wrap', description: 'Fresh wrap with a savory bite.', price: 195, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&auto=format&fit=crop' },
    { name: 'Maal Boil Wrap', description: 'Fresh wrap with a savory bite.', price: 195, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&auto=format&fit=crop' },
    { name: 'Turkish Wrap', description: 'Fresh wrap with a savory bite.', price: 195, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&auto=format&fit=crop' },
  ]},
  { id: 'fish-and-chips', title: 'Fish & Chips', items: [
    { name: 'Fish & Chips', description: 'Hot Shots | 12pcs pricing: 195, 195, 295, 395, 495, 595', price: 195, img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=400&auto=format&fit=crop' },
  ]},
  { id: 'burgers', title: 'Burgers', items: [
    { name: 'CricSpecial Burger', description: 'Classic favorite from Cheese \'n Crunch.', price: 595, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&auto=format&fit=crop' },
    { name: 'Zinger Burger', description: 'Classic favorite from Cheese \'n Crunch.', price: 595, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&auto=format&fit=crop' },
    { name: 'Peppy Burger', description: 'Classic favorite from Cheese \'n Crunch.', price: 595, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400&auto=format&fit=crop' },
    { name: 'Chapski Burger', description: 'Classic favorite from Cheese \'n Crunch.', price: 595, img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=400&auto=format&fit=crop' },
    { name: 'Peri Peri Burger', description: 'Classic favorite from Cheese \'n Crunch.', price: 595, img: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?q=80&w=400&auto=format&fit=crop' },
    { name: 'Cheesy Beef Burger', description: 'Classic favorite from Cheese \'n Crunch.', price: 595, img: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?q=80&w=400&auto=format&fit=crop' },
    { name: 'Grilled Burger', description: 'Classic favorite from Cheese \'n Crunch.', price: 595, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400&auto=format&fit=crop' },
    { name: 'Pizza Burger', description: 'Classic favorite from Cheese \'n Crunch.', price: 595, img: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?q=80&w=400&auto=format&fit=crop' },
    { name: 'Fish Burger', description: 'Classic favorite from Cheese \'n Crunch.', price: 595, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&auto=format&fit=crop' },
  ]},
  { id: 'sandwiches', title: 'Sandwiches', items: [
    { name: 'Supreme Sandwich', description: 'Classic favorite from Cheese \'n Crunch.', price: 595, img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=400&auto=format&fit=crop' },
  ]},
  { id: 'bread', title: 'Bread', items: [
    { name: 'Garlic Bread', description: 'Classic favorite from Cheese \'n Crunch.', price: 595, img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400&auto=format&fit=crop' },
    { name: 'Garlic Bread Supreme', description: 'Classic favorite from Cheese \'n Crunch.', price: 595, img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400&auto=format&fit=crop' },
    { name: 'Chicken Supreme', description: 'Classic favorite from Cheese \'n Crunch.', price: 595, img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=400&auto=format&fit=crop' },
  ]},
  { id: 'salad', title: 'Salad', items: [
    { name: 'Russian Salad', description: 'Half: 495 | Full: 795', price: 495, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400&auto=format&fit=crop' },
  ]},
  { id: 'beverages', title: 'Beverages', items: [
    { name: 'Tin Pack', description: 'Classic favorite from Cheese \'n Crunch.', price: 195, img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=400&auto=format&fit=crop' },
    { name: 'Drink Milk 300ml', description: 'Classic favorite from Cheese \'n Crunch.', price: 195, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&auto=format&fit=crop' },
    { name: 'Drink Milk 600ml', description: 'Classic favorite from Cheese \'n Crunch.', price: 295, img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=400&auto=format&fit=crop' },
    { name: 'Mineral Water 1.5L', description: 'Classic favorite from Cheese \'n Crunch.', price: 195, img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=400&auto=format&fit=crop' },
  ]},
  { id: 'pasta', title: 'Pasta', items: [
    { name: 'CricSpecial Pasta', description: 'Classic favorite from Cheese \'n Crunch.', price: 395, img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=400&auto=format&fit=crop' },
    { name: 'Lasagna Pasta', description: 'Classic favorite from Cheese \'n Crunch.', price: 595, img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=400&auto=format&fit=crop' },
    { name: 'Fettucine Pasta', description: 'Classic favorite from Cheese \'n Crunch.', price: 595, img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=400&auto=format&fit=crop' },
    { name: 'Macromacian Pasta', description: 'Classic favorite from Cheese \'n Crunch.', price: 595, img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=400&auto=format&fit=crop' },
  ]},
  { id: 'pizza', title: 'Pizza', items: [
    { name: 'CricSpecial Pizza', description: 'Classic favorite from Cheese \'n Crunch.', price: 595, img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400&auto=format&fit=crop' },
  ]},
  { id: 'cheese-n-crunch', title: 'Cheese \'n Crunch', items: [
    { name: 'Pin Cheese', description: 'Classic favorite from Cheese \'n Crunch.', price: 195, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&auto=format&fit=crop' },
    { name: 'Bait Kabab', description: 'Classic favorite from Cheese \'n Crunch.', price: 195, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&auto=format&fit=crop' },
    { name: 'Pepti', description: 'Classic favorite from Cheese \'n Crunch.', price: 195, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&auto=format&fit=crop' },
    { name: 'Malli Boti', description: 'Classic favorite from Cheese \'n Crunch.', price: 195, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&auto=format&fit=crop' },
    { name: 'Shami Satilan', description: 'Classic favorite from Cheese \'n Crunch.', price: 195, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&auto=format&fit=crop' },
  ]},
];
