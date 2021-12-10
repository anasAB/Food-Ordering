import React, { useContext, useState, useEffect, useCallback } from 'react'
import CartContext from '../../store/cartContext';
import { useHistory } from "react-router-dom";
import Modal from '../UI/Modal';
import './ShoppingCart.css'
import Buttons from './../../utils/Buttons';




const ShoppingCart = () => {
    const history = useHistory();
    const cartCtx = useContext(CartContext);
    const [ShoppingItems, setShoppingItems] = useState(true)

    const cancelHandler = useCallback(() => {
        history.push('/Meals')
    }, [history]);

    useEffect(() => {
        cartCtx.items.length > 0 ? setShoppingItems(true) : setShoppingItems(false)
        if (!ShoppingItems) {
            cancelHandler()
        }
    }, [cartCtx.items, ShoppingItems, cancelHandler])


    const foodElement = cartCtx.items.map(item => {
        return (
            <tbody className='tbody' key={item.id}>
                <tr>
                    <td>{item.name}</td>
                    <td>{item.amount}</td>
                    <td>{(item.amount * item.price)}</td>
                </tr>
            </tbody>
        )
    })


    return (
        <div>
            <div className='order-page'>
                <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Foldwayspt.org%2Fsites%2Fdefault%2Ffiles%2Fthumbnails%2Fimage%2FFotolia_106693035_healthy-food-board.jpg&f=1&nofb=1' alt='Order-Food' />
            </div>
            <Modal>
                <h1>Shopping Cart</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Meal</th>
                            <th scope="col">amount</th>
                            <th scope="col"><i className="fas fa-money-check-alt" /></th>
                        </tr>
                    </thead>
                    {foodElement}
                </table>
                <div className='total-price'>
                    <i className="fas fa-euro-sign"> {(cartCtx.totalAmount).toFixed(2)}</i>
                </div>
                <Buttons handleButtonClick={cancelHandler} iconType='chevron-circle-left'> Back</Buttons>
                <Buttons iconType='cash-register'> Pay</Buttons>
            </Modal>
        </div>
    )
}

export default ShoppingCart