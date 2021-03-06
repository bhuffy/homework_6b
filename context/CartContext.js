import React, { useState } from 'react';

export const CartContext = React.createContext();

const CartProvider = (props) => {
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;