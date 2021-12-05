import React, { useContext } from 'react'
import './MealItemForm.css'
import CartContext from './../../store/cartContext';

const MealItemForm = (props) => {

    const { id } = props;
    const cartCtx = useContext(CartContext)
    const mealAmount = cartCtx.items.filter(item => item.id === id)


    const SubmitFormHandler = (submitEvent) => {
        submitEvent.preventDefault();
    }

    const addItem = () => {
        const enteredAmount = 1;
        const enteredAmountNumber = +enteredAmount;
        props.onAddToCart(enteredAmountNumber);
    }



    let activeRemoveButton = mealAmount[0] && mealAmount[0].amount && 'activeRemoveButton'
    return (
        <form className='form' onSubmit={SubmitFormHandler}>
            <button onClick={addItem}>
                <i className="fas fa-plus"></i>
            </button>
            <button className={`removeButton ${activeRemoveButton}`} onClick={() => props.onRemoveItem(id)} /*style={{color:activeButton,}} disabled*/ >
                <i className="fas fa-minus"></i>
            </button>

        </form>
    )



}

export default MealItemForm


