import React, { Fragment } from 'react'
import Card from '../UI/Card';
import './AvailableMeals.css'
import MealItem from './MealItem';



const AvailableMeals = (props) => {
    let { meals } = props;

    return (
        <div className='meals' >
            <div className="container">
                <div className="row">
                    {meals.map(meal => (
                        <div className="col-sm meal_item" >
                            <MealItem
                                key={Math.random()}
                                id={meal.id}
                                meal={meal}
                            />
                        </div>

                    ))}

                </div>
            </div>
        </div>
    )
}
export default AvailableMeals

