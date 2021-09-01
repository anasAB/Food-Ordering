
import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';
import Header from './../Layout/Header';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
        amount: '',
        ingredients: {
            'Sushi Rice': 'Sushi-Meshi',
            'Japanese rice vinegar': 'Komezu',
            'flavoring': 'Kombu',
        }
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
        amount: '',
        ingredients: {
            'self-rising flour': 'self-rising flour',
            '¼ cup': 'self-rising cornmeal',
            '¼ teaspoon Salt': 'Salt',
            '¼ teaspoon pepper': 'pepper',
        }
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
        amount: '',
        ingredients: {
            'beef': '2 pounds (32 ounces) 80/20 ground beef',
            'garlic': '4 cloves garlic',
            'onion': '2 tablespoons minced onion',
            'sauce': 'Worcestershire sauce',
            'pepper': 'freshly ground pepper',
            'salt': 'salt',
            'hamburger buns': 'hamburger buns',
            'Butter ': 'Butter',
        }
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
        amount: '',
        ingredients: { }
    },
];


const Meals = () => {

    return (
        <>
            <Header />
            <MealsSummary />
            <AvailableMeals meals={DUMMY_MEALS} />
        </>
    )
}

export default Meals