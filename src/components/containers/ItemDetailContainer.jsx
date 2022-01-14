import React, { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail";
import MockedItems from "../mock/MockedItems";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/itemList";
export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);

        const getItems = new Promise((resolve) => {
            setTimeout(() => {
                const MockedItems = ItemList.find((item) => item.id === itemId);
                resolve(MockedItems);
            }, 1000);
        });
        getItems
            .then((res) => {
                setProduct(res);
            })
            .finally(() => setLoading(false));
    }, [itemId]);

    return <ItemDetail {...product} />;
};
