import React ,{ useReducer } from 'react';
import CartContext from './cartContext';



const defaultCartState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {

    let existedItemIndex, updatedItems, updatedItem, existingCartItem, updatedTotalAmount

    switch (action.type) {
        case 'ADD-ITEM':
            existedItemIndex = state.items.findIndex((item) => item.id === action.item.id)
            existingCartItem = state.items[existedItemIndex]

            if (existingCartItem) {
                updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.item.amount
                };
                updatedItems = [...state.items];
                updatedItems[existedItemIndex] = updatedItem
            } else {
                updatedItems = [action.item, ...state.items];
            }
            updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount,
            }

        case 'REMOVE-ITEM':

            existedItemIndex = state.items.findIndex(item => item.id === action.id)
            existingCartItem = state.items[existedItemIndex]

            //! check if the meal existed
            if (existedItemIndex !== -1) {
                if (existingCartItem && existingCartItem.amount > 1) {
                    updatedItem = {
                        ...existingCartItem,
                        amount: existingCartItem.amount - 1
                    };
                    updatedItems = [...state.items];
                    updatedItems[existedItemIndex] = updatedItem
                }
                if (existingCartItem.amount === 1) {
                    updatedItems = state.items.filter(item => item.id !== action.id)
                }

                updatedTotalAmount = state.totalAmount - existingCartItem.price;

                return {
                    items: updatedItems,
                    totalAmount: updatedTotalAmount,
                }
            } else {
                return state
            }

        default:
            return defaultCartState
    }
}


const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
    const addItem = (item) => {
        dispatchCartAction({ type: 'ADD-ITEM', item })
    }

    const removeItem = (id) => {
        dispatchCartAction({ type: 'REMOVE-ITEM', id })
    }

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