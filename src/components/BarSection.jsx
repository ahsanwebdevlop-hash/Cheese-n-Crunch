import { useMemo, useState } from 'react';
import { normalizeProduct } from '../data/siteData.js';
import ProductCard from './ProductCard.jsx';

function BarSection({ onFlavorClick }) {
  // Sample data for beverages and desserts
  const barCategories = useMemo(() => [
     {
      id: 'brownie',
      title: 'Brownies',
      items: [
        {
          name: 'Fudge Brownie',
          description: 'Flaky pastry with rich chocolate filling',
          price: 250,
          img: 'https://images.unsplash.com/photo-1560080876-daf2d34e00a1?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Caramel Brownie',
          description: 'Classic French butter croissant, crispy and golden',
          price: 250,
          img: 'https://images.unsplash.com/photo-1585518119820-8f71d1de1da3?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Red Velvet Brownie',
          description: 'Delicate pastry with roasted almonds',
          price: 155,
          img: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd86b83?q=80&w=600&auto=format&fit=crop',
        }
        // {
        //   name: 'Danish Pastry',
        //   description: 'Sweet Danish with fruit and cream',
        //   price: 165,
        //   img: 'https://images.unsplash.com/photo-1560080876-daf2d34e00a1?q=80&w=600&auto=format&fit=crop',
        // },
      ],
    },
    {
      id: 'cold-coffee',
      title: 'Cold Coffee',
      items: [
        {
          name: 'American',
          description: 'Strong and smooth cold American coffee',
          price: 545,
          img: 'https://images.unsplash.com/photo-1517701550927-30cf4ba20d38?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Ice Latte',
          description: 'Chilled latte with smooth milk',
          price: 535,
          img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Chocolate Mocha',
          description: 'Rich chocolate mocha cold coffee',
          price: 545,
          img: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Caramel Latte',
          description: 'Sweet caramel latte cold coffee',
          price: 545,
          img: 'https://images.unsplash.com/photo-1517701550927-30cf4ba20d38?q=80&w=600&auto=format&fit=crop',
        },
      ],
    },
    {
      id: 'ice-cream',
      title: 'Ice Cream',
      items: [
        {
          name: 'Strawberry',
          description: 'Fresh strawberry ice cream',
          price: 120,
          img: 'https://images.unsplash.com/photo-1563805042-7684c019e157?q=80&w=600&auto=format&fit=crop',
          variants: [
            { size: 'Small', price: 120 },
            { size: 'Medium', price: 230 },
            { size: 'Large', price: 320 },
          ],
        },
        {
          name: 'Kulfa',
          description: 'Traditional kulfa ice cream',
          price: 120,
          img: 'https://images.unsplash.com/photo-1563805042-7684c019e157?q=80&w=600&auto=format&fit=crop',
          variants: [
            { size: 'Small', price: 120 },
            { size: 'Medium', price: 230 },
            { size: 'Large', price: 320 },
          ],
        },
        {
          name: 'Mango',
          description: 'Creamy mango ice cream',
          price: 120,
          img: 'https://images.unsplash.com/photo-1563805042-7684c019e157?q=80&w=600&auto=format&fit=crop',
          variants: [
            { size: 'Small', price: 120 },
            { size: 'Medium', price: 230 },
            { size: 'Large', price: 320 },
          ],
        },
        {
          name: 'Pista',
          description: 'Pistachio flavored ice cream',
          price: 120,
          img: 'https://images.unsplash.com/photo-1563805042-7684c019e157?q=80&w=600&auto=format&fit=crop',
          variants: [
            { size: 'Small', price: 120 },
            { size: 'Medium', price: 230 },
            { size: 'Large', price: 320 },
          ],
        },
        {
          name: 'Vanilla',
          description: 'Classic vanilla ice cream',
          price: 120,
          img: 'https://images.unsplash.com/photo-1563805042-7684c019e157?q=80&w=600&auto=format&fit=crop',
          variants: [
            { size: 'Small', price: 120 },
            { size: 'Medium', price: 230 },
            { size: 'Large', price: 320 },
          ],
        },
        {
          name: 'Pearl Line',
          description: 'Pearl line flavored ice cream',
          price: 120,
          img: 'https://images.unsplash.com/photo-1563805042-7684c019e157?q=80&w=600&auto=format&fit=crop',
          variants: [
            { size: 'Small', price: 120 },
            { size: 'Medium', price: 230 },
            { size: 'Large', price: 320 },
          ],
        },
        {
          name: 'Chocolate Chip',
          description: 'Chocolate with chip ice cream',
          price: 120,
          img: 'https://images.unsplash.com/photo-1563805042-7684c019e157?q=80&w=600&auto=format&fit=crop',
          variants: [
            { size: 'Small', price: 120 },
            { size: 'Medium', price: 230 },
            { size: 'Large', price: 320 },
          ],
        },
        {
          name: 'Coffee',
          description: 'Coffee flavored ice cream',
          price: 120,
          img: 'https://images.unsplash.com/photo-1563805042-7684c019e157?q=80&w=600&auto=format&fit=crop',
          variants: [
            { size: 'Small', price: 120 },
            { size: 'Medium', price: 230 },
            { size: 'Large', price: 320 },
          ],
        },
      ],
    },
    {
      id: 'coffee-tea',
      title: 'Coffee & Tea',
      items: [
        {
          name: 'Cappuccino',
          description: 'Creamy cappuccino with perfect foam',
          price: 420,
          img: 'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Black Coffee',
          description: 'Strong and bold black coffee',
          price: 350,
          img: 'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Black Tea',
          description: 'Classic black tea',
          price: 175,
          img: 'https://images.unsplash.com/photo-1597318972862-c43e8b2e8fcf?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Cardamum Tea',
          description: 'Aromatic cardamum tea',
          price: 275,
          img: 'https://images.unsplash.com/photo-1597318972862-c43e8b2e8fcf?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Green Tea',
          description: 'Refreshing and healthy green tea',
          price: 140,
          img: 'https://images.unsplash.com/photo-1597318972862-c43e8b2e8fcf?q=80&w=600&auto=format&fit=crop',
        },
      ],
    },
    {
      id: 'shakes',
      title: 'Shakes',
      items: [
        {
          name: 'Strawberry',
          description: 'Fresh strawberry shake',
          price: 300,
          img: 'https://images.unsplash.com/photo-1550258987-920a2eae7d1f?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Kajoor',
          description: 'Creamy dates shake',
          price: 370,
          img: 'https://images.unsplash.com/photo-1550258987-920a2eae7d1f?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Gold King',
          description: 'Premium gold king shake',
          price: 350,
          img: 'https://images.unsplash.com/photo-1550258987-920a2eae7d1f?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Pina Colada',
          description: 'Tropical pina colada shake',
          price: 350,
          img: 'https://images.unsplash.com/photo-1550258987-920a2eae7d1f?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Mango',
          description: 'Sweet mango shake',
          price: 350,
          img: 'https://images.unsplash.com/photo-1550258987-920a2eae7d1f?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Banana',
          description: 'Smooth banana shake',
          price: 300,
          img: 'https://images.unsplash.com/photo-1550258987-920a2eae7d1f?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Apple',
          description: 'Fresh apple shake',
          price: 350,
          img: 'https://images.unsplash.com/photo-1550258987-920a2eae7d1f?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Apple Banana',
          description: 'Apple and banana blend shake',
          price: 300,
          img: 'https://images.unsplash.com/photo-1550258987-920a2eae7d1f?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Banana Khajoor',
          description: 'Banana and dates combination shake',
          price: 380,
          img: 'https://images.unsplash.com/photo-1550258987-920a2eae7d1f?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Pineapple',
          description: 'Fresh pineapple shake',
          price: 500,
          img: 'https://images.unsplash.com/photo-1550258987-920a2eae7d1f?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: "C'nC Special",
          description: 'Our special signature shake',
          price: 550,
          img: 'https://images.unsplash.com/photo-1550258987-920a2eae7d1f?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Ice Cream Shake',
          description: 'Thick ice cream milkshake',
          price: 450,
          img: 'https://images.unsplash.com/photo-1550258987-920a2eae7d1f?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Kit Kat',
          description: 'Kit Kat flavored shake',
          price: 500,
          img: 'https://images.unsplash.com/photo-1550258987-920a2eae7d1f?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Oreo',
          description: 'Oreo cookie shake',
          price: 430,
          img: 'https://images.unsplash.com/photo-1550258987-920a2eae7d1f?q=80&w=600&auto=format&fit=crop',
        },
      ],
    },
    {
      id: 'chillers',
      title: 'Chillers',
      items: [
        {
          name: 'Mint Margarita',
          description: 'Refreshing mint margarita chiller',
          price: 200,
          img: 'https://images.unsplash.com/photo-1590912014594-2b69292df8c0?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Strawberry',
          description: 'Fruity strawberry chiller drink',
          price: 200,
          img: 'https://images.unsplash.com/photo-1590912014594-2b69292df8c0?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Peach',
          description: 'Sweet peach chiller',
          price: 250,
          img: 'https://images.unsplash.com/photo-1590912014594-2b69292df8c0?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Pina Colada',
          description: 'Tropical pina colada chiller',
          price: 300,
          img: 'https://images.unsplash.com/photo-1590912014594-2b69292df8c0?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Blue Lagoon',
          description: 'Exotic blue lagoon chiller',
          price: 250,
          img: 'https://images.unsplash.com/photo-1590912014594-2b69292df8c0?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Fresh Lime',
          description: 'Tangy fresh lime chiller',
          price: 180,
          img: 'https://images.unsplash.com/photo-1590912014594-2b69292df8c0?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Lemonade',
          description: 'Classic refreshing lemonade',
          price: 150,
          img: 'https://images.unsplash.com/photo-1590912014594-2b69292df8c0?q=80&w=600&auto=format&fit=crop',
        },
      ],
    },
    {
      id: 'fresh-juice',
      title: 'Fresh Juice',
      items: [
        {
          name: 'Peach',
          description: 'Fresh peach juice',
          price: 250,
          img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Falsa',
          description: 'Refreshing falsa juice',
          price: 195,
          img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Pineapple',
          description: 'Fresh pineapple juice',
          price: 350,
          img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Strawberry',
          description: 'Fresh strawberry juice',
          price: 280,
          img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Plum',
          description: 'Fresh plum juice',
          price: 380,
          img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Apple',
          description: 'Fresh apple juice',
          price: 300,
          img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Jamun',
          description: 'Fresh jamun juice',
          price: 280,
          img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Mango',
          description: 'Fresh mango juice',
          price: 280,
          img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'C\'nC Special',
          description: 'Our special signature juice',
          price: 300,
          img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=600&auto=format&fit=crop',
        },
      ],
    },
  ], []);

  const categoryList = useMemo(() => {
    return barCategories.map((c) => ({
      label: c.title,
      kind: 'category',
    }));
  }, [barCategories]);

  const [activeCategory, setActiveCategory] = useState(() => {
    return barCategories[0]?.title || 'Cold Coffee';
  });

  const handleCategoryClick = (label) => {
    setActiveCategory(label);
  };

  const itemsForCategory = useMemo(() => {
    const category = barCategories.find((c) => c.title === activeCategory);
    if (!category) {
      return [];
    }
    return category.items.map(normalizeProduct);
  }, [activeCategory, barCategories]);

  return (
    <section className="section-pad" id="bar-nav" style={{ background: 'var(--green-950)' }}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Refresh & Indulge</span>
          <h2>Bar <em>(Desserts & Beverages)</em></h2>
          <p>Cool drinks, sweet treats, and perfect refreshment.</p>
        </div>

        {/* Category Strip */}
        <div className="cat-nav-wrap reveal">
          <div className="cat-nav">
            {categoryList.map((item) => (
              <button
                key={item.label}
                type="button"
                className={`btn ${activeCategory === item.label ? 'active' : ''}`}
                onClick={() => handleCategoryClick(item.label)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flavor-group-title reveal" style={{ marginTop: 18 }}>
          <h3>{activeCategory}</h3>
          <div className="line" />
        </div>

        <div className="flavor-grid stagger">
          {itemsForCategory.map((product) => (
            <ProductCard key={product.name} product={product} onFlavorClick={onFlavorClick} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BarSection;
