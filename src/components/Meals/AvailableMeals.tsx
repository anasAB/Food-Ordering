import React, { Fragment, useState } from 'react'
import Card from '../UI/Card';
import './AvailableMeals.css'
import MealItem from './MealItem';
import MealItemForm from './MealItemForm';
import Ingredients from './../Ingredients/Ingredients';

const DUMMY_MEALS = [
    {
        id: 'Sushi',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'Schnitzel',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'Barbecue Burger',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'Green Bowl',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const DUMMY_Ingredients = [
    {
        id: 'Sushi',
        Rice: 'Sushi-Meshi',
        Japanese_rice_vinegar: 'Komezu',
        flavoring: 'Kombu',
        Nori: 'seaweed',
        // Fish: {
        //     Bluefin: 'Tuna Maguro',
        //     Salmon: 'Sake',
        //     Japanese_amberjack: "Hamachi",
        //     Mackerel: 'Mackerel',
        //     Albacore_tuna: 'Bontoro'
        // },
        Vegetables: "Vegetables"

    },

    {
        id: 'Schnitzel',
        meat: 'veal cutlets',
        rice: 'brown rice flour',
        salt: 'teaspoon kosher salt',
        eggs: '2 large eggs',
        bread: '1/2 cup breadcrumbs',
        Oil: 'Oil or lard',
        lemon: '4 slices lemon'
    }
]

const AvailableMeals = () => {

    let [selectedMeal, setSelectedMeal] = useState('');
    console.log('selectedMeal',selectedMeal);
    const selectedMealHandler = (selectedID)   => {
        setSelectedMeal(selectedID)
    }

    return (

        <Fragment>
            {DUMMY_MEALS.map(meal => (
                <section key={Math.random()} className='meals'>
                    <Card>
                        <MealItem
                            key={Math.random()}
                            id={meal.id}
                            meal={meal}
                            selectedMeal={selectedMealHandler}
                        />
                        <MealItemForm />
                    </Card>

                </section>

            ))
            }

            {
                DUMMY_Ingredients.map(ingredient => (
                    <Ingredients Ingredients={ingredient} />
                ))
            }
        </Fragment>
    );



}
export default AvailableMeals