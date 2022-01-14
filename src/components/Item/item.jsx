//aca va la card
import React from "react";
import "../containers/itemListContainer.css";
import { Link } from "react-router-dom";

export const Item = ({ id, title, pictureUrl, price, description }) => {
    return (
        <Link to={`/producto/${id}`}>
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
