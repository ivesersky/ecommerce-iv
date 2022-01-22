import React, { useState } from "react";
import { styles } from "./styles";
import "../components/containers/itemListContainer.css";
import "../components/Button.css";
import ItemCount from "./ItemCount";

export const ItemDetail = ({ item }) => {
    const [add, setAdd] = useState(false);

    const onAdd = (quantity) => {
        setAdd(!add);
    };

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
                            <div
                                className="button-30 "
                                style={{
                                    height: "3rem",
                                    width: "90%",
                                }}
                            >
                                <a
                                    href="../vistas/Carrito.jsx"
                                    style={styles.link}
                                >
                                    Finalizar compra
                                </a>
                            </div>
                        </section>
                    </div>
                ))}
        </>
    );
};

//arreglar el link al carrito
