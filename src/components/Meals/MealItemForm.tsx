import React from 'react'
import './MealItemForm.css'

const MealItemForm = (props) => {

    const { meal } = props

    const SubmitFormHandler = (submitEvent) => {
        submitEvent.preventDefault();
    }

    const addItem = () => {
        const enteredAmount = 1;
        const enteredAmountNumber = +enteredAmount;
        props.onAddToCart(enteredAmountNumber);
    }


    return (
        <form className='form' onSubmit={SubmitFormHandler}>

            <button onClick={addItem}>
                <i className="fas fa-plus"></i>
            </button>

            <button onClick={() => props.onRemoveItem(meal.id)} >
                <i className="fas fa-minus"></i>
            </button>

        </form>
    )



}

export default MealItemForm


