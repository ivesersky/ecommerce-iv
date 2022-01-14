import "./itemListContainer.css";
import { useEffect, useState } from "react";
import data from "../data/data";
import { ItemList } from "../ItemList/itemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ item }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const { catId } = useParams();

    useEffect(() => {
        setLoading(true);
        const getItems = new Promise((resolve) => {
            setTimeout(() => {
                const myData = catId
                    ? data.filter((item) => item.category === catId)
                    : data;

                resolve(myData);
            }, 1000);
        });

        getItems
            .then((res) => {
                setItems(res);
            })
            .finally(() => setLoading(false));
    }, [catId]);

    return loading ? (
        <h2>Cargando...</h2>
    ) : (
        <>
            <ItemList items={items} />
        </>
    );
};
