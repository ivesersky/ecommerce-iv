import React, { useState } from "react";
import { styles } from "./styles";
import "../components/containers/itemListContainer.css";
import "../components/Button.css";
import ItemCount from "./ItemCount";
import { Link, NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export const ItemDetail = ({ item }) => {
    const [add, setAdd] = useState(false); //itemCount
    const { addItemToCart, removeItemFromCart } = useCartContext();

    const onAdd = (quantity) => {
        setAdd(!add);
        addItemToCart(quantity, item);
    }; //itemCount

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
                            <h2>$ {item.price}</h2>
                            <div>
                                {add ? (
                                    <div className="">¡Añadido!</div>
                                ) : (
                                    <ItemCount
                                        stock={10}
                                        initial={1}
                                        onAdd={onAdd}
                                    />
                                )}
                            </div>
                            <div className="">
                                <Link
                                    to="/carrito"
                                    className="button-30"
                                    style={{
                                        backgroundColor: " #888fe9d7",
                                        color: "#36395a",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Checkout
                                </Link>
                                <NavLink
                                    to="/productos"
                                    className="button-30 "
                                    style={{
                                        backgroundColor: "transparent",
                                        color: "#36395a",
                                    }}
                                >
                                    Seguir comprando
                                </NavLink>
                            </div>
                        </section>
                    </div>
                ))}
        </>
    );
};

//arreglar el link al carrito
