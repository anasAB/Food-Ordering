import { useReducer } from 'react';
import CartContext from './cartContext';



const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD-ITEM':
            const updatedItems = state.items.concat(action.item);
            const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;          
            return {
                items: updatedItems,
                totalAmount:updatedTotalAmount,
            }
        case 'REMOVE-ITEM':
            return 
        default:
            return defaultCartState
    }
}


const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer,defaultCartState )

    const addItem = (item) => {
       dispatchCartAction({type:'ADD-ITEM', item})
    }

    const removeItem = (id) => {}

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItem,
        removeItem: removeItem,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider