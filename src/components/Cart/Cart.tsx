import React, { useContext } from 'react'
import Modal from './../UI/Modal';
import './Cart.css'
import CartContext from './../../store/cartContext';

const Cart = (props) => {
  
    const cartCtx = useContext(CartContext);

    const test = cartCtx.items.map(item => {

        return (<div key={Math.random()}>
            <h1>{item.name}</h1>
        </div>)

    })

    console.log('itemxx', test);

    return (
        <div>
            <div className='Order-Page'>
                <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Foldwayspt.org%2Fsites%2Fdefault%2Ffiles%2Fthumbnails%2Fimage%2FFotolia_106693035_healthy-food-board.jpg&f=1&nofb=1' alt='Order-Food' />
            </div>
            <Modal>
                <h1>Shopping Cart</h1>
                {test}
            </Modal>
        </div>
    )
}

export default Cart