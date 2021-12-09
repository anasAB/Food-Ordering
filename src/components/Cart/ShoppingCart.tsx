import React, { useContext, useState, useEffect } from 'react'
import CartContext from '../../store/cartContext';
import Modal from '../UI/Modal';
import { useHistory } from "react-router-dom";
import './ShoppingCart.css'




const ShoppingCart = () => {
    const history = useHistory();
    const cartCtx = useContext(CartContext);
    const [ShoppingItems, setShoppingItems] = useState(true)


    useEffect(() => {
        cartCtx.items.length > 0 ? setShoppingItems(true) : setShoppingItems(false)

    }, [cartCtx.items, ShoppingItems])

    const cancelHandler = () => {
        history.goBack()
    }

    let shoppingLoading = ''
    if (!ShoppingItems) {

        shoppingLoading = (
            <>
                <div className="balls">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <br />
                <br />
                <p>The Package shop is empty</p>
            </>
        )
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
                    <i class="fas fa-euro-sign"> {(cartCtx.totalAmount).toFixed(2)}</i>
                </div>
                {shoppingLoading}
                <button type="button" className="btn btn-outline-danger" style={{ margin: '10px' }} onClick={cancelHandler}> Back </button>

                <button type="button" className="btn btn-outline-success" style={{ margin: '10px' }}> Continue </button>
            </Modal>
        </div>
    )
}

export default ShoppingCart