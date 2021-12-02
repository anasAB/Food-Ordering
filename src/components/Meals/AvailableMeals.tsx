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
                        <div className="col-sm meal_item" key={meal.id} >
                            <MealItem
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

