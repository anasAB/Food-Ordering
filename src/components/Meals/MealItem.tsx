import React, { useContext } from 'react'
import MealInfo from '../Layout/MealInfo'
import './MealItem.css'
import MealItemForm from './MealItemForm'
import CartContext from './../../store/cartContext'

const MealItem = (props) => {

    const { id, name, description, price, image, ingredients } = props.meal;
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
        <div className="card bg-dark text-white">
            <img className="card-img-top" loading="lazy" src={image} alt={name} />

            <div className="card-img-overlay">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>

                <div className='cardBottom'>
                    <div className='formItem'>
                        <MealItemForm id={id} onAddToCart={addToCartHandler} onRemoveItem={removeItem} />
                    </div>
                    <p className="card-text"><i className="fas fa-utensils"><MealInfo ingredients={ingredients} /></i></p>
                </div>

            </div>
        </div>

    )
}

export default MealItem