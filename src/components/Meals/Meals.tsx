import React from 'react'
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
        },
        image: 'https://paleofoundation.com/wp-content/uploads/2013/10/paleo-sushi.jpg'
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
        },
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.josefsvienna.com%2Fwp-content%2Fuploads%2F2014%2F05%2Fjosefs-chicken-schnitzel.jpg&f=1&nofb=1'
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
        },
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbestmonumentdentist.com%2Fwp-content%2Fuploads%2F2019%2F05%2FAdobeStock_127928024.jpeg&f=1&nofb=1'
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
        amount: '',
        ingredients: {},
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F28%2Fe9%2Fda%2F28e9da5d3847b260191a9f80650d3e7f.jpg&f=1&nofb=1'
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