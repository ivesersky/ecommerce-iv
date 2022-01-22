//aca va la card
import React from "react";
import "../containers/itemListContainer.css";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import "../Button.css";

export const Item = ({ id, title, pictureUrl, description }) => {
    return (
        <Link to={`/producto/${id}`} style={styles.detailRow}>
            <div className="blurbg">
                <img src={`./img/${pictureUrl}`} alt="" />
                <div>
                    <h2>{title}</h2>
                    <span>{description}</span>
                    <button to="/carrito" className="button-30">
                        Ver mas
                    </button>
                </div>
            </div>
        </Link>
    );
};
