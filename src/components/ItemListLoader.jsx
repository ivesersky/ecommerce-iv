import React from "react";
import { Item } from "./Item/item";
import { styles } from "./styles";
const ItemListLoader = () => {
    return (
        <>
            <div style={styles.container}>
                {[...new Array(4)].map((_, index) => (
                    <div style={styles.loader} key={index}>
                        <Item
                            {...{
                                id: 0,
                                title: " ",
                                pictureUrl: "../img/Ripple-1s-200px.gif",
                                description: "",
                            }}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default ItemListLoader;
