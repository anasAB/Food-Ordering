import React, { useContext, useState, useEffect, useCallback } from 'react'
import CartContext from '../../store/cartContext';
import { useHistory } from "react-router-dom";
import Modal from '../UI/Modal';
import './ShoppingCart.css'
import Buttons from './../../utils/Buttons';
import InputForm from '../Form/InputForms';

const ShoppingCart = () => {
    const history = useHistory();
    const cartCtx = useContext(CartContext);
    const [shoppingItems, setShoppingItems] = useState(true)
    const [continueOrdering, setContinueOrdering] = useState(false)

    const cancelHandler = useCallback(() => {
        history.push('/Meals')
        setContinueOrdering(false)
    }, [history]);


    useEffect(() => {
        cartCtx.items.length > 0 ? setShoppingItems(true) : setShoppingItems(false)
        if (!shoppingItems) {
            cancelHandler()
        }
    }, [cartCtx.items, shoppingItems, cancelHandler,])

    const order = (value) => {
        setContinueOrdering(value)
    }


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

    let orderForm = continueOrdering ? 'ordering-form' : 'hide-ordering-form'

    return (
        <div>
            <div className='order-page'>
                <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Foldwayspt.org%2Fsites%2Fdefault%2Ffiles%2Fthumbnails%2Fimage%2FFotolia_106693035_healthy-food-board.jpg&f=1&nofb=1' alt='Order-Food' />
            </div>
            <div>
                <Modal>
                    <h1>Shopping Cart</h1>
                    <table className="table" >
                        <thead>
                            <tr>
                                <th scope="col">Meal</th>
                                <th scope="col">Amount</th>
                                <th scope="col"><i className="fas fa-money-check-alt" /></th>
                            </tr>
                        </thead>
                        {foodElement}
                    </table>

                    <div className='total-price'>
                        <i className="fas fa-euro-sign"> {(cartCtx.totalAmount).toFixed(2)}</i>
                    </div>

                    {!continueOrdering ?
                        <div className='cart-buttons'>
                            <Buttons handleButtonClick={cancelHandler} iconType='chevron-circle-left'> Back</Buttons>
                            <Buttons iconType='address-card' handleButtonClick={order}> Continue</Buttons>
                        </div>
                        : ''}

                    <div className={orderForm}>
                        <InputForm  closeForm={order}/>
                    </div>

                </Modal>
            </div>
        </div>
    )
}

export default ShoppingCart