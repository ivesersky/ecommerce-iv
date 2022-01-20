//aca va la card
import React from "react";
import "../containers/itemListContainer.css";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { CartContext } from "../../context/cartContext";
import { useContext } from "react/cjs/react.development";

export const Item = ({ id, title, pictureUrl, description }) => {
    const items = useContext(CartContext);
    console.log({ items });

    return (
        <Link to={`/producto/${id}`} style={styles.detailRow}>
            <div className="blurbg">
                <img src={`./img/${pictureUrl}`} alt="" />
                <div>
                    <h2>{title}</h2>
                    <span>{description}</span>
                    <button className="button-38 ">Agregar al carrito</button>
                </div>
            </div>
        </Link>
    );
};
