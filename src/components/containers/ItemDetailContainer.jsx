import React, { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail";
import data from "../data/data.jsx";
import { useParams } from "react-router-dom";
import "./itemListContainer.css";

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(product);
    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);
        const getItems = new Promise((resolve) => {
            setTimeout(() => {
                const myData = data.filter((item) => item.id == itemId);

                resolve(myData);
            }, 1000);
        });

        getItems
            .then((resolve) => {
                setProduct(resolve);
            })
            .finally(() => setLoading(false));
    }, []);

    return loading ? (
        <h1 className="defaultText">Cargando...</h1>
    ) : (
        <ItemDetail item={product} />
    );
};
