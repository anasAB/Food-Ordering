import React from 'react';
import { Route } from 'react-router-dom';
import CartProvider from './../store/cartProvider';

const ContextRoute = ({ component, ...rest}) => {
    
    const Component = component;

    return (
        <Route {...rest}>
            <CartProvider>
                <Component />
            </CartProvider>
        </Route>
    );
};

export default ContextRoute;