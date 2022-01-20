import { createContext, useState } from "react";

//espacio de memoria
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([
        { id: 0, name: "producto x", precio: 0 },
    ]);

    return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};
