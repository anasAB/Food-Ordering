import React, { useContext } from 'react'
import './HeaderCartButton.css'
import { useHistory } from "react-router-dom";
import CartContext from './../../store/cartContext';


const HeaderCartButton = (props) => {


    const history = useHistory();
    const cartCtx = useContext(CartContext);


    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    

    function handleClick() {
        history.push("/ShoppingCart");
    }

    return (
        <button className='button' type='button' onClick={handleClick} disabled={!numberOfCartItems} style={{ color: numberOfCartItems > 0 ? 'green' : 'red' }}>
            <span className='icon' ><i className="fas fa-shopping-cart"></i></span>
            <span className='badge'> {numberOfCartItems}</span>
        </button >
    )
}

export default HeaderCartButton