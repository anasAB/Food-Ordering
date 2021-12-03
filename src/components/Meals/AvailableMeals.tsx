import React from 'react'
import './AvailableMeals.css'
import MealItem from './MealItem';



const AvailableMeals = (props) => {
    let { meals } = props;

    return (
        <div className="container availableMeals">
            <div className="row row-cols-2">
                {meals.map(meal => (
                    <div className="col-12 col-lg-6 mealItem">
                        <MealItem meal={meal} />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default AvailableMeals

