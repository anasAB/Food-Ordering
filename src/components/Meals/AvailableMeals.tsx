import Card from '../UI/Card';
import './AvailableMeals.css'
import React, { Fragment } from 'react'
import MealItem from './MealItem';
import MealItemForm from './MealItemForm';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
        ingredients:{
            'Sushi Rice' :'Sushi-Meshi',
            'Japanese rice vinegar':'Komezu',
            'flavoring':'Kombu',
        }
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
        ingredients:{
            'Schnitzel' :'AAA',
            'B':'b',
            'C':'c',
        }
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];



const AvailableMeals = () => {

    return (

        <Fragment>
            {DUMMY_MEALS.map(meal => (
                <section key={Math.random()} className='meals'>
                    <Card>
                        <MealItem
                            key={Math.random()}
                            meal={meal}
                        />
                        <MealItemForm meal={meal} />
                    </Card>

                </section>

            ))
            }
        </Fragment>
    );



}
export default AvailableMeals