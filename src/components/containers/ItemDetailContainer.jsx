import React, { useState, useEffect } from "react";
import { db } from "../../firebase.js";
import { ItemDetail } from "../ItemDetail";
import { useParams } from "react-router-dom";
import { getDocs, query, collection, where } from "firebase/firestore";
import ItemListLoader from "../ItemListLoader";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    // const [loading, setLoading] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        // setLoading(true);

        const dbDetailItem = collection(db, "detalles_item");

        if (id) {
            const consulta = query(dbDetailItem, where("id", "==", id));
            getDocs(consulta)
                .then(({ docs }) => {
                    setProduct(docs.map((doc) => ({ ...doc.data() })));
                })
                .catch((error) => {
                    alert("Error en la carga del producto");
                    console.log(error);
                });
            // .finally(() => setLoading(false));
        }
        //  else {
        //     setLoading(true);
        // }
    }, [id]);

    return (
        <>
            {product.length === 0 ? (
                <h3>Cargando detalle de un producto</h3>
            ) : (
                <>
                    <ItemDetail item={product} />
                </>
            )}
        </>
    );
};
export default ItemDetailContainer;
