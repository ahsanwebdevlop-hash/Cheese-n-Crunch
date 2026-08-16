import { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { normalizeProduct } from '../data/siteData.js';
import ProductCard from './ProductCard.jsx';

function BarSection({ onFlavorClick }) {
  const [searchParams] = useSearchParams();
  const [showAnimation, setShowAnimation] = useState(false);

  // Sample data for beverages and desserts
  const barCategories = useMemo(() => [
    {
      id: 'brownie',
      title: 'Brownies',
      items: [
        {
          name: 'Fudge Brownie',
          description: 'Rich chocolate brownie with a soft center.',
          price: 250,
          img: 'https://images.unsplash.com/photo-1560080876-daf2d34e00a1?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Caramel Brownie',
          description: 'Soft brownie topped with sweet caramel.',
          price: 250,
          img: 'https://images.unsplash.com/photo-1585518119820-8f71d1de1da3?q=80&w=600&auto=format&fit=crop',
        }
        // ,
        // {
        //   name: 'Red Velvet Brownie',
        //   description: 'Soft red velvet brownie with sweet flavor.',
        //   price: 155,
        //   img: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd86b83?q=80&w=600&auto=format&fit=crop',
        // }
        // {
        //   name: 'Danish Pastry',
        //   description: 'Sweet Danish pastry with fruit and cream.',
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
          description: 'Strong cold coffee with a smooth taste.',
          price: 545,
          img: 'https://images.unsplash.com/photo-1517701550927-30cf4ba20d38?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Ice Latte',
          description: 'Cold latte made with smooth fresh milk.',
          price: 535,
          img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Chocolate Mocha',
          description: 'Cold coffee with rich chocolate flavor.',
          price: 545,
          img: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Caramel Latte',
          description: 'Cold latte with a sweet caramel taste.',
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
          description: 'Sweet strawberry ice cream.',
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
          description: 'Creamy traditional kulfa ice cream.',
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
          description: 'Sweet and creamy mango ice cream.',
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
          description: 'Creamy ice cream with pistachio flavor.',
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
          description: 'Smooth and creamy vanilla ice cream.',
          price: 120,
          img: 'https://images.unsplash.com/photo-1563805042-7684c019e157?q=80&w=600&auto=format&fit=crop',
          variants: [
            { size: 'Small', price: 120 },
            { size: 'Medium', price: 230 },
            { size: 'Large', price: 320 },
          ],
        },
        // {
        //   name: 'Pearl Line',
        //   description: 'Sweet pearl line flavored ice cream.',
        //   price: 120,
        //   img: 'https://images.unsplash.com/photo-1563805042-7684c019e157?q=80&w=600&auto=format&fit=crop',
        //   variants: [
        //     { size: 'Small', price: 120 },
        //     { size: 'Medium', price: 230 },
        //     { size: 'Large', price: 320 },
        //   ],
        // },
        {
          name: 'Chocolate Chip',
          description: 'Chocolate ice cream with crunchy chips.',
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
          description: 'Creamy ice cream with coffee flavor.',
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
          description: 'Hot coffee with creamy milk foam.',
          price: 420,
          img: 'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Black Coffee',
          description: 'Strong black coffee with rich taste.',
          price: 350,
          img: 'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Black Tea',
          description: 'Simple hot tea with a rich taste.',
          price: 175,
          img: 'https://images.unsplash.com/photo-1597318972862-c43e8b2e8fcf?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Cardamum Tea',
          description: 'Hot tea with a light cardamom taste.',
          price: 275,
          img: 'https://images.unsplash.com/photo-1597318972862-c43e8b2e8fcf?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Green Tea',
          description: 'Light and refreshing green tea.',
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
          description: 'Sweet and creamy strawberry shake.',
          price: 300,
          img: 'https://images.unsplash.com/photo-1550258987-920a2eae7d1f?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Kajoor',
          description: 'Creamy shake made with sweet dates.',
          price: 370,
          img: 'https://images.unsplash.com/photo-1550258987-920a2eae7d1f?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Gold King',
          description: 'Rich creamy shake with a special taste.',
          price: 350,
          img: 'https://images.unsplash.com/photo-1550258987-920a2eae7d1f?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Pina Colada',
          description: 'Sweet creamy shake with tropical flavor.',
          price: 350,
          img: 'https://images.unsplash.com/photo-1550258987-920a2eae7d1f?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Mango',
          description: 'Sweet and creamy mango shake.',
          price: 350,
          img: 'https://images.unsplash.com/photo-1550258987-920a2eae7d1f?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Banana',
          description: 'Smooth and creamy banana shake.',
          price: 300,
          img: 'https://images.unsplash.com/photo-1550258987-920a2eae7d1f?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Apple',
          description: 'Fresh and creamy apple shake.',
          price: 350,
          img: 'https://images.unsplash.com/photo-1550258987-920a2eae7d1f?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Apple Banana',
          description: 'Creamy shake with apple and banana.',
          price: 300,
          img: 'https://images.unsplash.com/photo-1550258987-920a2eae7d1f?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Banana Khajoor',
          description: 'Creamy shake with banana and dates.',
          price: 380,
          img: 'https://images.unsplash.com/photo-1550258987-920a2eae7d1f?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Pineapple',
          description: 'Sweet and creamy pineapple shake.',
          price: 500,
          img: 'https://images.unsplash.com/photo-1550258987-920a2eae7d1f?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: "C'nC Special",
          description: 'Our special creamy signature shake.',
          price: 550,
          img: 'https://images.unsplash.com/photo-1550258987-920a2eae7d1f?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Ice Cream Shake',
          description: 'Thick shake made with ice cream.',
          price: 450,
          img: 'https://images.unsplash.com/photo-1550258987-920a2eae7d1f?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Kit Kat',
          description: 'Creamy shake with Kit Kat pieces.',
          price: 500,
          img: 'https://images.unsplash.com/photo-1550258987-920a2eae7d1f?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Oreo',
          description: 'Creamy shake with Oreo cookies.',
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
          description: 'Cool mint drink with a fresh taste.',
          price: 200,
          img: 'https://images.unsplash.com/photo-1590912014594-2b69292df8c0?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Strawberry',
          description: 'Cold strawberry drink with a sweet taste.',
          price: 200,
          img: 'https://images.unsplash.com/photo-1590912014594-2b69292df8c0?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Peach',
          description: 'Cold peach drink with a sweet taste.',
          price: 250,
          img: 'https://images.unsplash.com/photo-1590912014594-2b69292df8c0?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Pina Colada',
          description: 'Cold creamy drink with tropical flavor.',
          price: 300,
          img: 'https://images.unsplash.com/photo-1590912014594-2b69292df8c0?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Blue Lagoon',
          description: 'Cool fruity drink with a fresh taste.',
          price: 250,
          img: 'https://images.unsplash.com/photo-1590912014594-2b69292df8c0?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Fresh Lime',
          description: 'Fresh lime drink with a tangy taste.',
          price: 180,
          img: 'https://images.unsplash.com/photo-1590912014594-2b69292df8c0?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Lemonade',
          description: 'Cold lemonade with a fresh lemon taste.',
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
          description: 'Fresh peach juice with sweet taste.',
          price: 250,
          img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Falsa',
          description: 'Fresh falsa juice with a sweet taste.',
          price: 195,
          img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Pineapple',
          description: 'Fresh pineapple juice with sweet taste.',
          price: 350,
          img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Strawberry',
          description: 'Fresh strawberry juice with sweet taste.',
          price: 280,
          img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Plum',
          description: 'Fresh plum juice with sweet taste.',
          price: 380,
          img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Apple',
          description: 'Fresh apple juice with sweet taste.',
          price: 300,
          img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Jamun',
          description: 'Fresh jamun juice with rich taste.',
          price: 280,
          img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Mango',
          description: 'Fresh mango juice with sweet taste.',
          price: 280,
          img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: "C'nC Special",
          description: 'Our special fresh fruit juice.',
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

  const [activeCategory, setActiveCategory] = useState('Cold Coffee');

  // Update active category when URL parameter changes
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      const foundCategory = barCategories.find((c) => c.id === categoryParam);
      if (foundCategory) {
        setActiveCategory(foundCategory.title);
      }
    }
  }, [searchParams, barCategories]);

  // Trigger animation when category changes
  useEffect(() => {
    setShowAnimation(false);
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 300);
    return () => clearTimeout(timer);
  }, [activeCategory]);

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
      <style>{`
        .flavor-grid.animating > * {
          opacity: 0;
          transform: translateY(20px);
        }

        .flavor-grid.animating-in > * {
          animation: revealItem 0.5s ease-out forwards;
        }

        @keyframes revealItem {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .flavor-grid.animating-in > :nth-child(1) { animation-delay: 0s; }
        .flavor-grid.animating-in > :nth-child(2) { animation-delay: 0.05s; }
        .flavor-grid.animating-in > :nth-child(3) { animation-delay: 0.1s; }
        .flavor-grid.animating-in > :nth-child(4) { animation-delay: 0.15s; }
        .flavor-grid.animating-in > :nth-child(5) { animation-delay: 0.2s; }
        .flavor-grid.animating-in > :nth-child(6) { animation-delay: 0.25s; }
        .flavor-grid.animating-in > :nth-child(7) { animation-delay: 0.3s; }
        .flavor-grid.animating-in > :nth-child(8) { animation-delay: 0.35s; }
        .flavor-grid.animating-in > :nth-child(9) { animation-delay: 0.4s; }
        .flavor-grid.animating-in > :nth-child(10) { animation-delay: 0.45s; }
      `}</style>
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

        <div className={`flavor-grid stagger ${showAnimation ? 'animating-in' : 'animating'}`}>
          {itemsForCategory.map((product) => (
            <ProductCard key={product.name} product={product} onFlavorClick={onFlavorClick} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BarSection;
