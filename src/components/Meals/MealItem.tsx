import React, { useContext } from 'react'
import MealInfo from '../Layout/MealInfo'
import './MealItem.css'
import MealItemForm from './MealItemForm'
import CartContext from './../../store/cartContext'


const MealItem = (props) => {
    const { meal } = props;
    const cartCtx = useContext(CartContext)

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: meal.id,
            name: meal.name,
            amount: amount,
            description: meal.description,
            price: meal.price
        })
    }

    return (
        <div className="container meal">
            <div className="row">
                <div className="col ">
                    {meal.name}
                </div>
                <div className="col description">
                    {meal.description}
                </div>
                <div className="col price">
                    {meal.price}
                    <i className="fas fa-dollar-sign"></i>
                </div>
                <div className="col">
                    <MealInfo
                        mealInfo={meal}
                    />
                </div>
            </div>
            <MealItemForm meal={meal} onAddToCart={addToCartHandler} />
        </div>
    )
}

export default MealItem