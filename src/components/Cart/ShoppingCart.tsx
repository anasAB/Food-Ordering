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
    const [hideModal, setHideModal] = useState(false)

    const cancelHandler = useCallback(() => {
        history.push('/Meals')
        setContinueOrdering(false)
    }, [history]);


    useEffect(() => {
        cartCtx.items.length > 0 ? setShoppingItems(true) : setShoppingItems(false)
        if (!shoppingItems) {
            cancelHandler()
        }
    }, [cartCtx.items, shoppingItems, cancelHandler])

    const order = (value:any) => {
        setContinueOrdering(value)
    }


    //! post user data
    const submitFormData = (formData:any) => {
        let userData = {
            formData,
            orderedItem: cartCtx.items
        }

        fetch("https://food-ordering-7bdbe-default-rtdb.europe-west1.firebasedatabase.app/orders.json", {
            method: 'POST',
            body: JSON.stringify({
                user: userData
            })
        })

        setTimeout(function () {
            history.push('/Meals');
            cartCtx.clearCart()
        }, 7000);
    }

    const hideForm = (submit:any) => {
        setHideModal(submit)
    }



    const foodElement = cartCtx.items.map((item:any) => {
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
    let hideCartForm = hideModal ? 'hide-modal' : '';



    return (
        <div>
            <div className='order-page'>
                <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Foldwayspt.org%2Fsites%2Fdefault%2Ffiles%2Fthumbnails%2Fimage%2FFotolia_106693035_healthy-food-board.jpg&f=1&nofb=1' alt='Order-Food' />
            </div>
            <Modal>
                <div className={hideCartForm}>
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
                        : ''
                    }

                    {continueOrdering ?
                        <div className={orderForm}>
                            <InputForm closeForm={order} submitFormData={submitFormData} hideForm={hideForm} />
                        </div> : ''
                    }
                </div>

                {hideCartForm ?
                    <div className='check-body'>
                        <div className="check-card">
                            <div className='check-mark'>
                                <i>✓</i>
                            </div>
                            <h1>Success</h1>
                            <p>We received your purchase request<br />
                                <i className="fas fa-info"> You will be redirected to Home Page </i>
                            </p>
                        </div>
                    </div>
                    : ''
                }
            </Modal>
        </div>
    )
}

export default ShoppingCart