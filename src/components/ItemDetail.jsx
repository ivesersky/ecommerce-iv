import { styles } from "./styles";
import React, { useContext, useState } from "react";
import "../components/containers/itemListContainer.css";
import { CartContext } from "../context/useContext";
import "../components/Button.css";

export const ItemDetail = ({ item }) => {
    const [add, setAdd] = useState(false);
    const { addItem } = useContext(CartContext);
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
                            <button to="/carrito" className="button-38">
                                Agregar
                                <i className="material-icons">shopping_cart</i>
                            </button>
                        </section>
                    </div>
                ))}
        </>
    );
};
