import React, { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase/index"; //ahora tengo que importar lo de itemlist

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);
        // const getItems = new Promise((resolve) => {
        //     setTimeout(() => {
        //         const myData = data.filter((item) => item.id == itemId);

        //         resolve(myData);
        //     }, 1000);
        // });

        const baseDatos = getFirestore();
        const itemCollection = baseDatos.collection("items");
        itemCollection.get().then((value) => {
            let aux = value.docs.map((e) => {
                return { ...e.data(), id: e.itemId };
            });
            let product = aux.find((e) => {
                return e.id === itemId;
            });
            setProduct(product);
            console.log(itemId);
            setLoading(false);
        });
    }, []);
    return loading ? (
        <h1 className="defaultText">Cargando...</h1>
    ) : (
        <ItemDetail item={product} />
    );
};
