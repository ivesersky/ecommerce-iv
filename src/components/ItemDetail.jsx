import { styles } from "./styles";
import React from "react";

export const ItemDetail = ({ item }) => {
    return (
        <>
            {item &&
                item.map((item) => (
                    <div key={item.id}>
                        <img
                            src={item.pictureUrl}
                            alt={`${item.id}-${item.title}`}
                        />
                        <section style={styles.flexCol}>
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <h2>${item.price}</h2>
                        </section>
                    </div>
                ))}
        </>
    );
};
