import { Link } from 'react-router-dom';

const DEFAULT_FOOD_IMAGE =
  'https://images.unsplash.com/photo-1579751626657-72bc17010498?q=85&w=1800&auto=format&fit=crop';
const DEFAULT_RESTAURANT_IMAGE =
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=85&w=1800&auto=format&fit=crop';

function CinematicHero({
  foodImage = DEFAULT_FOOD_IMAGE,
  restaurantImage = DEFAULT_RESTAURANT_IMAGE,
  restaurantName = "Cheese 'n Crunch",
  description = 'Fast food, fresh juices, desserts, and memorable meals made for every kind of gathering.',
}) {
  return (
    <section className="cinematic-hero reveal" aria-labelledby="cinematic-hero-title">
      <div className="cinematic-hero__image cinematic-hero__image--restaurant">
        <img src={restaurantImage} alt="Cheese 'n Crunch restaurant dining atmosphere" />
      </div>
      <div className="cinematic-hero__image cinematic-hero__image--food">
        <img src={foodImage} alt="Signature pizza and fast food from Cheese 'n Crunch" />
      </div>
      <div className="cinematic-hero__overlay" aria-hidden="true" />

      <div className="container cinematic-hero__content">
        <h1 id="cinematic-hero-title">{restaurantName}</h1>
        <p>{description}</p>
        <div className="cinematic-hero__actions">
          <Link to="/menu" className="btn btn-gold">View Menu</Link>
          <Link to="/menu" className="btn btn-outline">Order Now</Link>
        </div>
      </div>
    </section>
  );
}

export default CinematicHero;
