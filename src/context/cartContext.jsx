import { createContext, useState } from "react";

//espacio de memoria
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([
        { id: 1, name: "producto 1", precio: 500 },
    ]);

    return;
    <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};
