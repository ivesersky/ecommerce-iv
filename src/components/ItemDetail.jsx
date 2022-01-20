import { styles } from "./styles";
import React, { useContext, useState } from "react";
import "../components/containers/itemListContainer.css";
import "../components/Button.css";
import { useCartContext } from "../context/CartContext";

export const ItemDetail = ({ item }) => {
    const { addItemToCart, removeItemFromCart } = useCartContext();
    return (
        <>
            {item &&
                item.map((item) => (
                    <div key={item.id} className="productDetailCentered">
                        <img
                            src={item.pictureUrl}
                            alt={`${item.id}-${item.title}`}
                        />
                        <section
                            style={styles.flexCol}
                            className="blurbg centered"
                        >
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <h2>${item.price}</h2>
                            <button
                                className="button-38 "
                                onClick={() => addItemToCart()}
                            >
                                Agregar a carrito
                            </button>
                            <button
                                className="button-38 "
                                onClick={() => removeItemFromCart()}
                            >
                                Quitar
                            </button>
                        </section>
                    </div>
                ))}
        </>
    );
};
