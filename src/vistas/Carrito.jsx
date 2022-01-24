import React from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import "./cart.css";

const Carrito = () => {
    const { cartTotal, removeItemFromCart, limpiar, totalCompra } =
        useCartContext();
    if (cartTotal.length > 0) {
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
                            <img
                                src={item.pictureUrl}
                                alt={`${item.id}-${item.title}`}
                            />
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
                <div className="Header">
                    <NavLink to="/productos" className="Action defaultFont">
                        Seguir comprando
                    </NavLink>
                    <h2 className="defaultFont">Total : $ {totalCompra}</h2>
                </div>
            </div>
        );
    } else {
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
                    <div className="about">
                        <h3 className="defaultFont ">No hay items</h3>
                        <NavLink to="/productos" className="Action defaultFont">
                            Seguir comprando
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
};

export default Carrito;
