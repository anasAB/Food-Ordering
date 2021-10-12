import React, { useContext } from 'react'
import CartContext from './../../store/cartContext';
import Modal from './../UI/Modal';
import { useHistory } from "react-router-dom";
import './Cart.css'
// import MyImage from './assets/images/myimage.jpg';

const Cart = (props) => {

    const history = useHistory();
    const cartCtx = useContext(CartContext);


    // const addItemToCartHandler = (item) => {
    //     cartCtx.add
    // }

    const foodElement = cartCtx.items.map(item => {
        return (
            <div className="container" key={Math.random()} >
                <div className="row table" >
                    <div className="col">
                        {item.name}
                    </div>
                    <div className="col">
                        Amount: {item.amount}
                    </div>
                    <div className="col">
                        <i className="fas fa-dollar-sign"> {(item.amount * item.price)} </i>
                    </div>

                </div>
            </div>
        )
    })


    const cancelHandler = () => {
        history.goBack()
    }

    return (
        <div>
            <div className='Order-Page'>
                <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Foldwayspt.org%2Fsites%2Fdefault%2Ffiles%2Fthumbnails%2Fimage%2FFotolia_106693035_healthy-food-board.jpg&f=1&nofb=1' alt='Order-Food' />
            </div>
            {/* <div className='Order-Page'>
                <img src={MyImage} alt="torchlight in the sky" />
            </div> */}

            <Modal>
                <h1>Shopping Cart</h1>
                {foodElement}
                <div className='total-price'>
                    Total Price:{(cartCtx.totalAmount).toFixed(2)}
                </div>
                <button type="button" className="btn btn-outline-danger" style={{ margin: '10px' }} onClick={cancelHandler}> Cancel </button>

                <button type="button" className="btn btn-outline-success" style={{ margin: '10px' }}> Continue </button>
            </Modal>
        </div>
    )
}

export default Cart