import { styles } from "./styles";
import React from "react";
import "../components/containers/itemListContainer.css";

export const ItemDetail = ({ item }) => {
    return (
        <>
            {item &&
                item.map((item) => (
                    <div key={item.id} className="container">
                        <img
                            src={item.pictureUrl}
                            alt={`${item.id}-${item.title}`}
                        />
                        <section style={styles.flexCol} className="blurbg">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <h2>${item.price}</h2>
                        </section>
                    </div>
                ))}
        </>
    );
};
