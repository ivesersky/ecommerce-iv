import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";

const Carrito = () => {
    const { items, addItem } = useContext(CartContext); //useContext usado como hook
    console.log(items);

    return (
        <div>
            {items.map((item) => (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                </div>
            ))}
        </div>
    );
};

export default Carrito;
