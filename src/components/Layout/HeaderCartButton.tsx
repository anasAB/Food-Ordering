import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import Buttons from 'src/utils/Buttons';
import CartContext from './../../store/cartContext';
import './HeaderCartButton.css'


const HeaderCartButton = (props:any) => {

    const history = useHistory ();
    const cartCtx = useContext(CartContext);
    const [value, setValue] = useState('all meals');
    const { selectedMeal } = props

    const handleChange = (event:any) => {
        setValue(event.target.value);
    };

    useEffect(() => {
        selectedMeal(value)
    }, [value, selectedMeal])




    const numberOfCartItems : any = cartCtx.items.reduce((curNumber: any, item : any)  => {
        return curNumber + item.amount;
    }, 0);

    const navigateToCartHandler = () => { history.push("/ShoppingCart") }

    let activeShoppingCart :any= numberOfCartItems > 0 && 'activeShoppingCarte'

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

            <Buttons handleButtonClick={navigateToCartHandler} disabledButton={!!numberOfCartItems} iconType='shopping-cart' buttonType='HeaderCartButton' additionalClasses={activeShoppingCart}>
                {numberOfCartItems > 0 && <span className='badge'> {numberOfCartItems}</span>}
            </Buttons>

        </div>
    )
}

export default HeaderCartButton
