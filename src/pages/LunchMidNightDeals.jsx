import DealsSection from '../components/DealsSection.jsx';

function LunchMidNightDeals() {
  const lunchDeals = [
    {
      n: 1,
      title: 'Deal 1',
      price: 595,
      img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop',
      items: [
        { name: '1 Small Pizza', type: 'pizza', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=600&auto=format&fit=crop' },
        { name: '1 Regular Drink', type: 'drink', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1554866585-cd4628902094?q=80&w=600&auto=format&fit=crop' },
      ],
    },
    {
      n: 2,
      title: 'Deal 2',
      price: 1095,
      img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop',
      items: [
        { name: '1 Wrap', type: 'wrap', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop' },
        { name: '1 Small Pizza', type: 'pizza', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=600&auto=format&fit=crop' },
        { name: 'Half Liter Drink', type: 'drink', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1554866585-cd4628902094?q=80&w=600&auto=format&fit=crop' },
      ],
    },
    {
      n: 3,
      title: 'Deal 3',
      price: 1195,
      img: 'https://images.unsplash.com/photo-1548365328-9f547fb0953b?q=80&w=800&auto=format&fit=crop',
      items: [
        { name: '1 Zinger Burger', type: 'burger', hasFlavorOption: false, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop' },
        { name: '12pcs Hot Wings', type: 'burger', hasFlavorOption: false, img: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=600&auto=format&fit=crop' },
        { name: 'Half Liter Drink', type: 'drink', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1554866585-cd4628902094?q=80&w=600&auto=format&fit=crop' },
      ],
    },
    {
      n: 4,
      title: 'Deal 4',
      price: 1595,
      img: 'https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=800&auto=format&fit=crop',
      items: [
        { name: '1 Regular Pizza', type: 'pizza', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=600&auto=format&fit=crop' },
        { name: 'Salad Bowl', type: 'burger', hasFlavorOption: false, img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=600&auto=format&fit=crop' },
        { name: 'Half Liter Drink', type: 'drink', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1554866585-cd4628902094?q=80&w=600&auto=format&fit=crop' },
      ],
    },
    {
      n: 5,
      title: 'Deal 5',
      price: 1745,
      img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=800&auto=format&fit=crop',
      items: [
        { name: '1 Large Pizza', type: 'pizza', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=600&auto=format&fit=crop' },
        { name: '1 Liter Drink', type: 'drink', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1554866585-cd4628902094?q=80&w=600&auto=format&fit=crop' },
      ],
    },
    {
      n: 6,
      title: 'Deal 6',
      price: 2395,
      img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=800&auto=format&fit=crop',
      items: [
        { name: '1 Grand Square', type: 'pizza', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=600&auto=format&fit=crop' },
        { name: 'Salad Bowl', type: 'burger', hasFlavorOption: false, img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=600&auto=format&fit=crop' },
        { name: '1 Liter Drink', type: 'drink', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1554866585-cd4628902094?q=80&w=600&auto=format&fit=crop' },
      ],
    },
    {
      n: 7,
      title: 'Deal 7',
      price: 2295,
      img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop',
      items: [
        { name: '1 X-Large Pizza', type: 'pizza', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=600&auto=format&fit=crop' },
        { name: '1.5 Liter Drink', type: 'drink', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1554866585-cd4628902094?q=80&w=600&auto=format&fit=crop' },
      ],
    },
    {
      n: 8,
      title: 'Deal 8',
      price: 2695,
      img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800&auto=format&fit=crop',
      items: [
        { name: '1 Large Pizza', type: 'pizza', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=600&auto=format&fit=crop' },
        { name: 'CnC Pasta', type: 'pasta', hasFlavorOption: false, img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=600&auto=format&fit=crop' },
        { name: 'Brownie', type: 'brownie', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=600&auto=format&fit=crop' },
        { name: '1.5 Liter Drink', type: 'drink', hasFlavorOption: true, img: 'https://images.unsplash.com/photo-1554866585-cd4628902094?q=80&w=600&auto=format&fit=crop' },
      ],
    },
  ];

  return (
    <DealsSection
      deals={lunchDeals}
      onAdd={() => {}}
      onShowToast={() => {}}
      eyebrow="Fresh & Filling"
      title="Lunch & Mid Night"
      accentTitle="Deals"
      tagline="Great value for every hour of the day."
      sectionId="lunch-mid-night-deals"
    />
  );
}

export default LunchMidNightDeals;
