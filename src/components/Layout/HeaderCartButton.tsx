import { useContext, useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { ISelectedMeal, ICartCtx, IMeal } from 'src/TypeScript/TypeScriptStore';
import Buttons from 'src/utils/Buttons';
import CartContext from './../../store/cartContext';
import './HeaderCartButton.css'


const HeaderCartButton = (props: ISelectedMeal) => {

    const history = useHistory();
    const cartCtx: ICartCtx = useContext(CartContext);
    const [value, setValue] = useState < string > ('all meals');
    const { selectedMeal } = props

    const handleChange = (event: any): void => setValue(event.target.value)

    const navigateToCartHandler = (): void => history.push("/ShoppingCart")

    useEffect(() => {
        selectedMeal(value)
    }, [value, selectedMeal])



    const numberOfCartItems: number = cartCtx.items.reduce((curNumber: number, item: IMeal) => {
        return curNumber + item.amount;
    }, 0);

    let activeShoppingCart: string = numberOfCartItems > 0 ? 'activeShoppingCarte' : ''

    return (
        <div className='head-cart-body'>
            <div className='drop-down-list'>
                <label>
                    <p>What do we eat?</p>
                    <select value={value} onChange={handleChange}>
                        <option value="all meals">All Meals</option>
                        <option value="salad">Salad</option>
                        <option value="soup">Soup</option>
                        <option value="meat">Meat</option>
                    </select>
                </label>
            </div>

            <Buttons
                handleButtonClick={navigateToCartHandler}
                disabledButton={!!numberOfCartItems}
                iconType='shopping-cart' buttonType='HeaderCartButton'
                additionalClasses={activeShoppingCart}>
                {numberOfCartItems > 0 ? <span className='badge'> {numberOfCartItems}</span> : ""}
            </Buttons>
        </div>
    )
}

export default HeaderCartButton
