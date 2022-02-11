//aca va la card
import React from "react";
import "../containers/itemListContainer.css";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import "../Button.css";

export const Item = ({ id, title, pictureUrl, description }) => {
    return (
        <div className="blurbg">
            <Link to={`/producto/${id}`} style={styles.link}>
                <div className="flex-img">
                    <img
                        src={`./img/${pictureUrl}`}
                        alt={`/producto/${title}`}
                    />
                </div>
                <div className="flex col-1">
                    <h2>{title}</h2>
                    <span>{description}</span>
                    <button to="/carrito" className="button-30">
                        Ver mas
                    </button>
                </div>
            </Link>
        </div>
    );
};
