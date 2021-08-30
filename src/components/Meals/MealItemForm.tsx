import React, { useState, useRef } from 'react'
import Input from '../UI/Input'
import './MealItemForm.css'


const MealItemForm = (props) => {
    const amountInputRef = useRef();
    const [amountIsValid,setAmountIsValid] = useState(true);

    const SubmitFormHandler = (submitEvent) => {
        submitEvent.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false)
            return;
        }
        
        props.onAddToCart(enteredAmountNumber);
    }


    return (
        <form className='form' onSubmit={SubmitFormHandler}>

            <button >
                <i className="fas fa-plus"></i>
            </button>

            <Input
                ref={amountInputRef}
                label='Amount'
                input={
                    {
                        id: 'amount' + props.meal.id,
                        type: 'number',
                        min: '0',
                        max: '5',
                        step: '1',
                        defaultValue: '1',
                        amount: props.meal.amount,

                    }} />

            <button >
                <i className="fas fa-minus"></i>
            </button>
            {!amountIsValid && <p>UnValid Amount</p>}

        </form>

    )
}

export default MealItemForm


