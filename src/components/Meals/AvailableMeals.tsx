import React from 'react'
import './AvailableMeals.css'
import MealItem from './MealItem';



const AvailableMeals = (props) => {
    let { meals } = props;
    return (    
        <div className='meals' >
            <div className="container">
                <div className="row">
                    {meals.map(meal => (
                        <div className="col-sm meal_item" key={Math.random()} >
                            <MealItem
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

