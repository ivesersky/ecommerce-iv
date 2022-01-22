import { createContext, useContext } from "react";
import { useState } from "react/cjs/react.development";

export const cartContext = createContext();

const { Provider } = cartContext;

export const useCartContext = () => {
    return useContext(cartContext);
};

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = () => {
        setCartItems(cartItems + 1);
    };
    const removeItemFromCart = () => {
        setCartItems(cartItems - 1);
    };

    const globalValue = { cartItems, addItemToCart, removeItemFromCart };
    console.log(cartItems);
    return <Provider value={globalValue}>{children}</Provider>;
};
export default CartProvider;
