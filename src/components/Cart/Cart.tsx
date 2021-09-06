import React, { useContext } from 'react'
import CartContext from './../../store/cartContext';
import Modal from './../UI/Modal';
import { useHistory } from "react-router-dom";
import './Cart.css'

const Cart = (props) => {
    
    const history = useHistory();
    const cartCtx = useContext(CartContext);

    const foodElement = cartCtx.items.map(item => {
        return (
            <div key={Math.random()}>
                <table>
                    <tbody>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.price} <i className="fas fa-dollar-sign"></i></td>
                        </tr>
                    </tbody>
                </table>
            </div>)
    })


    const cancelHandler = () =>{
        history.goBack()
    }

    return (
        <div>
            <div className='Order-Page'>
                <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Foldwayspt.org%2Fsites%2Fdefault%2Ffiles%2Fthumbnails%2Fimage%2FFotolia_106693035_healthy-food-board.jpg&f=1&nofb=1' alt='Order-Food' />
            </div>
            <Modal>
                <h1>Shopping Cart</h1>
                {foodElement}
                <p style={{margin:'10px'}}>Total Price:{cartCtx.totalAmount}</p>
                <button type="button" className="btn btn-outline-danger" style={{margin:'10px'}} onClick={cancelHandler}> Cancel </button>

                <button type="button" className="btn btn-outline-success"style={{margin:'10px'}}> Continue </button>
            </Modal>
        </div>
    )
}

export default Cart