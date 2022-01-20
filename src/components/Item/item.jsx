//aca va la card
import React from "react";
import "../containers/itemListContainer.css";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { CartContext } from "../context/cartContext";

export const Item = ({ id, title, pictureUrl, description }) => {
    const misItems = useContext(CartContext);
    console.log(misItems);

    return (
        <Link to={`/producto/${id}`} style={styles.detailRow}>
            <div className="blurbg">
                <img src={`./img/${pictureUrl}`} alt="" />
                <div>
                    <h2>{title}</h2>
                    <span>{description}</span>
                </div>
            </div>
        </Link>
    );
};
