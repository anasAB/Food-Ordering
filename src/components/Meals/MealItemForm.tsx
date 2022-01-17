import { useContext } from 'react'
import './MealItemForm.css'
import CartContext from './../../store/cartContext';
import Buttons from './../../utils/Buttons';
import { IMeal } from 'src/TypeScript/TypeScriptStore';

const MealItemForm = (props: { meal: IMeal }) => {

    const { id, name, description, price } = props.meal;

    const cartCtx = useContext(CartContext)
    const mealAmount: IMeal[] = cartCtx.items.filter((item: IMeal) => item.id === id)

    let activeRemoveButton: string = mealAmount[0] && mealAmount[0].amount ? 'activeRemoveButton' : ''


    const SubmitFormHandler = (submitEvent: any) => submitEvent.preventDefault();

    const addItem = () => {
        const enteredAmount = 1;
        const enteredAmountNumber: number = +enteredAmount;
        addToCartHandler(enteredAmountNumber);
    }


    const addToCartHandler = (amount: number): void => {
        cartCtx.addItem({
            id,
            name,
            amount,
            description,
            price
        })
    }

    const removeItem = (id: string): void => cartCtx.removeItem(id)


    return (
        <form className='meal-item' onSubmit={SubmitFormHandler}>
            <Buttons handleButtonClick={addItem} iconType='plus' />
            <Buttons handleButtonClick={() => removeItem(id)} iconType='minus' additionalClasses={`removeButton ${activeRemoveButton}`} />
        </form>
    )
}

export default MealItemForm


