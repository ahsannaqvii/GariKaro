import Card from '../../UI/Card/Card'
// import MealItem from './MealItem/MealItem';
import classes from './AvailableRides.module.css';
import RideDetails from './RideDetails/RideDetails';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
];

const AvailableRides = () => {
    
  const mealsList = DUMMY_MEALS.map((meal) => (
    <RideDetails
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));


  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableRides;