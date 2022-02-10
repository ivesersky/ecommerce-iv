import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { ItemDetail } from "../ItemDetail";
import { useParams } from "react-router-dom";
import { getDocs, query, collection, where } from "firebase/firestore";
import ItemListLoader from "../ItemListLoader";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const itemCollection = collection(db, "items");

        if (id) {
            const consulta = query(itemCollection, where("id", "==", id));
            getDocs(consulta)
                .then(({ docs }) => {
                    setProduct(docs.map((doc) => ({ ...doc.data() })));
                })
                .catch((error) => {
                    alert("Error en la carga del producto");
                    console.log(error);
                })
                .finally(() => setLoading(false));
        }
    }, [id]);

    return (
        <>
            {loading == true && product.length === 0 ? (
                <ItemListLoader />
            ) : (
                <ItemDetail item={product} />
            )}
        </>
    );
};
export default ItemDetailContainer;
