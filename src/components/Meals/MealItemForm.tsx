import React, { useContext } from 'react'
import './MealItemForm.css'
import CartContext from './../../store/cartContext';
import Buttons from './../../utils/Buttons';

const MealItemForm = (props: any) => {
    console.log('propsxx');
    

    const { id } = props;
    const cartCtx = useContext(CartContext)
    const mealAmount: any = cartCtx.items.filter((item: any) => item.id === id)


    const SubmitFormHandler = (submitEvent: any) => {
        submitEvent.preventDefault();
    }

    const addItem = () => {
        const enteredAmount = 1;
        const enteredAmountNumber = +enteredAmount;
        props.onAddToCart(enteredAmountNumber);
    }

    let activeRemoveButton: any = mealAmount[0] && mealAmount[0].amount && 'activeRemoveButton'

    return (
        <form className='meal-item' onSubmit={SubmitFormHandler}>
            <Buttons handleButtonClick={addItem} iconType='plus' />
            <Buttons handleButtonClick={() => props.onRemoveItem(id)} iconType='minus' additionalClasses={`removeButton ${activeRemoveButton}`} />
        </form>
    )
}

export default MealItemForm


