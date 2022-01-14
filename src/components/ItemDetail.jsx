import React from "react";
import { Link } from "react-router-dom";

export const ItemDetail = ({ id, name, pictureUrl, description, price }) => {
    return (
        <Link to={`/productos/${id}`}>
            <div className="detail-row">
                <img src={pictureUrl} alt={`${id}-${name}`} />
                <section>
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <h2>${price}</h2>
                </section>
            </div>
        </Link>
    );
};
