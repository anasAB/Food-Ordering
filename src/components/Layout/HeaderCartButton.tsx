import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import Buttons from 'src/utils/Buttons';
import CartContext from './../../store/cartContext';
import './HeaderCartButton.css'


const HeaderCartButton = (props) => {

    const history = useHistory();
    const cartCtx = useContext(CartContext);
    const [value, setValue] = useState('all meals');
    const { selectedMeal } = props

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    useEffect(() => {
        selectedMeal(value)
    }, [value, selectedMeal])




    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const navigateToCartHandler = () => { history.push("/ShoppingCart") }

    let activeShoppingCart = numberOfCartItems > 0 && 'activeShoppingCarte'

    return (
        <>
            <Buttons handleButtonClick={navigateToCartHandler} disabledButton={!!numberOfCartItems} iconType='shopping-cart' buttonType='HeaderCartButton' additionalClasses={activeShoppingCart}>
                {numberOfCartItems > 0 && <span className='badge'> {numberOfCartItems}</span>}
            </Buttons>

            <div>
                <label>
                    What do we eat?
                    <select value={value} onChange={handleChange}>
                        <option value="all meals">All Meals</option>
                        <option value="salad">Salad</option>
                        <option value="soup">Soup</option>
                        <option value="meat">Meat</option>
                    </select>
                </label>
            </div>
        </>
    )
}

export default HeaderCartButton
