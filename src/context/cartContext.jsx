import { createContext, useContext } from "react";
import { useState } from "react/cjs/react.development";

export const cartContext = createContext();

const { Provider } = cartContext;

export const useCartContext = () => {
    return useContext(cartContext);
};

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(0);
    const [cartTotal, setCartTotal] = useState([]);

    const addItemToCart = (quantity, item) => {
        item.map((item) => {
            const copyItem = { ...item };
            copyItem.quantity = quantity;
            const copyCarrito = cartTotal.slice(0);

            copyCarrito.push(copyItem);
            setCartTotal(copyCarrito);

            setCartItems(cartItems + quantity);
        });
    };
    const removeItemFromCart = () => {
        setCartItems(cartItems - 1);
    };

    const globalValue = {
        cartItems,
        addItemToCart,
        removeItemFromCart,
        cartTotal,
    };

    return <Provider value={globalValue}>{children}</Provider>;
};
export default CartProvider;
