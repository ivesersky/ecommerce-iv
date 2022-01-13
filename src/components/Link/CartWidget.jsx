import React from "react";
import { styles } from "../styles";
import { useState } from "react";

const CartWidget = ({ ruta }) => {
    const [hover, setHover] = useState(false);
    return (
        <div styles={styles.list}>
            <a
                href={ruta}
                style={{ ...styles.link, ...(hover ? styles.hover : null) }} //if ternario, hover, es true? sino null
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <i className="material-icons">shopping_cart</i>
            </a>
        </div>
    );
};

export default CartWidget;
