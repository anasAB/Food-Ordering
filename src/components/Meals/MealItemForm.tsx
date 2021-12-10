import React, { useContext } from 'react'
import './MealItemForm.css'
import CartContext from './../../store/cartContext';
import Buttons from './../../utils/Buttons';

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
        <form className='meal-item' onSubmit={SubmitFormHandler}>
            <Buttons handleButtonClick={addItem} iconType='plus' />
            <Buttons handleButtonClick={() => props.onRemoveItem(id)} iconType='minus' additionalClasses={`removeButton ${activeRemoveButton}`} />
        </form>
    )
}

export default MealItemForm


