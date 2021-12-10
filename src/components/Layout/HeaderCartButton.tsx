import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import Buttons from 'src/utils/Buttons';
import CartContext from './../../store/cartContext';
import './HeaderCartButton.css'


const HeaderCartButton = (props) => {
    const history = useHistory();
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const navigateToCartHandler = () => {history.push("/ShoppingCart")}

    let activeShoppingCart = numberOfCartItems > 0 && 'activeShoppingCarte'

    return (
        <Buttons handleButtonClick={navigateToCartHandler} disabledButton={numberOfCartItems} iconType='shopping-cart' buttonType='HeaderCartButton' additionalClasses={activeShoppingCart}>
            {numberOfCartItems > 0 && <span className='badge'> {numberOfCartItems}</span>}
        </Buttons>
    )
}

export default HeaderCartButton
