import React, { useContext } from 'react'
import MealInfo from '../Layout/MealInfo'
import './MealItem.css'
import MealItemForm from './MealItemForm'
import CartContext from './../../store/cartContext'

const MealItem = (props) => {

    const { id,name,description,price,image,ingredients } = props.meal;
    const cartCtx = useContext(CartContext)

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id,
            name,
            amount,
            description,
            price
        })
    }

    const removeItem = (id) => {
        cartCtx.removeItem(id)
    }


    return (
        <div className='meal' >
            <img className="card-img-top image" loading="lazy" src={image} alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <MealInfo
                    ingredients={ingredients}
                />
            </div>
            <div className="card-footer">
                <MealItemForm id ={id} onAddToCart={addToCartHandler} onRemoveItem={removeItem} />
            </div>
            <p className="card-text price">{price}</p>
        </div>
    )
}

export default MealItem