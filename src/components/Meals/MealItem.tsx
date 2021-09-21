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

    const removeItem = (id) => {
        cartCtx.removeItem(id)
    }


    return (
        <div className='meal' >
            <img className="card-img-top image" loading="lazy" src={meal.image} alt={meal.name} />
            <div className="card-body">
                <h5 className="card-title">{meal.name}</h5>
                <p className="card-text">{meal.description}</p>
                <MealInfo
                    mealInfo={meal}
                />
            </div>
            <div className="card-footer">
                <MealItemForm meal={meal} onAddToCart={addToCartHandler} onRemoveItem={removeItem} />
            </div>
            <p className="card-text price">{meal.price}</p>
        </div>
    )
}

export default MealItem