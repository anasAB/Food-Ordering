import React from 'react'
import './AvailableMeals.css'
import MealCard from './MealCard';



const AvailableMeals = (props) => {
    let { meals } = props;
    return (
        <section className="wrapper">
            <div className="container-fostrap">
                <div className="content">
                    <div className="container">
                        <div className="row">
                            {meals.map(meal => (
                                <div className="col-xs-12 col-sm-6" key={meal.id}>
                                    <MealCard meal={meal} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AvailableMeals

