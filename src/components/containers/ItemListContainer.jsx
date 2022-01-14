//aca va llamada API o la promesa
//manejo de estados
//vamos a traer 1 itemList
//este itemList va  a mapear item y devolverlo como lista
import "./itemListContainer.css";
import { useEffect, useState } from "react";
import MockedItems from "../mock/MockedItems";
import ItemList from "../ItemList/itemList.jsx";

const ItemListContainer = () => {
    const [items, setItems] = useState([]); //este es el estado que va a guardar el mockeditems
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        //promesa
        const itemPromise = new Promise((res, rej) => {
            setTimeout(function () {
                res(MockedItems);
            }, 1000);
        });
        itemPromise
            .then((res) => {
                setItems(res);
            })
            .finally(() => setLoading(false));
    }, [items]);

    return loading ? (
        <h1 className="defaultText">Cargando...</h1>
    ) : (
        <>
            <ItemList items={items} />
        </>
    );
};

export default ItemListContainer;
