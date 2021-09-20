import React, { Fragment } from 'react'
import Card from '../UI/Card';
import './AvailableMeals.css'
import MealItem from './MealItem';



const AvailableMeals = (props) => {
    let { meals } = props;


    return (
        <Fragment>
            {meals.map(meal => (
                <section key={Math.random()} className='meals'>
                        <MealItem
                            key={Math.random()}
                            id={meal.id}
                            meal={meal}
                        />
                </section>
            ))
            }
        </Fragment>
    );
}
export default AvailableMeals