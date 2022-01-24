import React from "react";
import { cartContext, useCartContext } from "../context/CartContext";
import "./cart.css";

const Carrito = () => {
    const { cartTotal, removeItemFromCart, limpiar } = useCartContext();

    return (
        <div className="cart-container">
            <div className="Header">
                <h3 className="defaultFont">Shopping Cart</h3>
                <h5
                    className="Action defaultFont"
                    onClick={() => {
                        limpiar();
                    }}
                >
                    Remove all
                </h5>
            </div>

            {cartTotal.map((item) => (
                <div className="Cart-Items" key={item.id}>
                    <div className="image-box">
                        <img src={item.pictureUrl} />
                    </div>
                    <div className="about">
                        <h1 className="title">{item.title}</h1>
                        <p className="subtitle">{item.description}</p>
                        <h2 className="defaultFont">$ {item.price}</h2>
                        <p className="defaultFont"> x {item.quantity}</p>
                        <div
                            className="remove"
                            onClick={() => {
                                removeItemFromCart(item);
                            }}
                        >
                            <u>Remove</u>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Carrito;
