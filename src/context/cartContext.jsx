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

    const estaEnElCarrito = (id) => {
        let EnCarrito = false;
        for (let i = 0; i < cartTotal.length; i++) {
            if (cartTotal[i].id == id) {
                EnCarrito = true;
            }
        }
        return EnCarrito;
    };

    const addItemToCart = (quantity, item) => {
        item.map((item) => {
            const copyItem = { ...item };
            if (estaEnElCarrito(copyItem.id)) {
                for (let i = 0; i < cartTotal.length; i++) {
                    if (cartTotal[i].id == copyItem.id) {
                        cartTotal[i].quantity =
                            cartTotal[i].quantity + quantity;
                    }
                }
                setCartItems(cartItems + quantity);
            } else {
                copyItem.quantity = quantity;
                const copyCarrito = cartTotal.slice(0);

                copyCarrito.push(copyItem);
                setCartTotal(copyCarrito);
                setCartItems(cartItems + quantity);
            }
        });
    };

    const removeItemFromCart = (item) => {
        const copyCartTotal = cartTotal.filter((items) => items.id != item.id);
        setCartTotal(copyCartTotal);
        setCartItems(cartItems - item.quantity);
    };
    const limpiar = () => {
        setCartItems(0);
        setCartTotal([]);
    };
    const globalValue = {
        cartItems,
        addItemToCart,
        removeItemFromCart,
        cartTotal,
        estaEnElCarrito,
        limpiar,
    };

    return <Provider value={globalValue}>{children}</Provider>;
};
export default CartProvider;
