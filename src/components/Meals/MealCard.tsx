import React, { useContext } from 'react'
// import MealIngredients from '../Layout/MealIngredients'
import './MealCard.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../store/cartContext'

const MealCard = (props) => {
    const { id, name, description, price, image } = props.meal;
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
        <div className="card bg-dark">
            <div className='my-img-container'>
                <img className="card-img-top " loading="lazy" src={image} alt={name} />
            </div>
            <div className="card-img-overlay">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <div className='card-content'>
                    <MealItemForm id={id} onAddToCart={addToCartHandler} onRemoveItem={removeItem} />
                    {/* <p className="card-text"><i className="fas fa-utensils"><MealIngredients ingredients={ingredients} /></i></p> */}
                </div>
            </div>
        </div>
    )
}

export default MealCard