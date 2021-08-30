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
                    <Card>
                        <MealItem
                            key={Math.random()}
                            id={meal.id}
                            meal={meal}
                        />
                    </Card>
                </section>
            ))
            }
        </Fragment>
    );



}
export default AvailableMeals