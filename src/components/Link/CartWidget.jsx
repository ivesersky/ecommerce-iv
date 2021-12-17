import React from "react";
import { styles } from "../styles";

const CartWidget = ({ ruta }) => (
    <>
        <div styles={styles.list}>
            <a href={ruta} style={styles.link}>
                <i class="material-icons">shopping_cart</i>
            </a>
        </div>
    </>
);

export default CartWidget;
