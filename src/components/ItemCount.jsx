import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";
import "../components/Button.css";

const ItemCount = ({ item, stock, initial, onAdd }) => {
    const [quantity, setQty] = useState(initial);

    const sumaQty = () => {
        if (quantity < stock) {
            setQty(quantity + 1);
        }
    };
    const restaQty = () => {
        if (quantity > 0) {
            setQty(quantity - 1);
        }
    };

    return (
        <>
            <div className="contador">
                <div className="button-37 red" onClick={restaQty}>
                    -
                </div>
                <div className="button-39">{quantity}</div>
                <div className="button-37" onClick={sumaQty}>
                    +
                </div>
            </div>
            {quantity > 0 ? (
                <div
                    className="button-30 "
                    style={{
                        height: "3rem",
                        width: "90%",
                        backgroundColor: "#acb0ecd6",
                    }}
                    onClick={() => onAdd(quantity)}
                >
                    Anadir al carrito
                    <i className="material-icons" style={{ marginLeft: "5px" }}>
                        shopping_cart
                    </i>
                </div>
            ) : (
                <button className="button-30" disabled>
                    Añadir
                    <i className="material-icons">shopping_cart</i>
                </button>
            )}
        </>
    );
};

export default ItemCount;
