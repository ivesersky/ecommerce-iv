import { createContext, useContext } from "react";
import { useState } from "react/cjs/react.development";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [itemsCart, setItems] = useState([
        { id: 1, title: "producto", cantidad: 5 },
    ]);

    const isInCart = (id) => {};

    const addItem = (id, item, cantidad) => {
        setItems([...item, { ...item, cantidad: cantidad }]);
    };

    const removeItem = (id) => {
        const auxArray = itemsCart.filter((item) => item.id !== id);
        setItems(auxArray);
    };

    return (
        <CartContext.Provider value={{ itemsCart, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};
