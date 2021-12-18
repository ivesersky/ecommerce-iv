//aca va llamada API o la promesa
//manejo de estados
//vamos a traer 1 itemList
//este itemList va  a mapear item y devolverlo como lista
import "./itemListContainer.css";
import { useEffect, useState } from "react";
import MockedItems from "../mock/MockedItems";
import ItemList from "../ItemList/itemList.jsx";

const ItemListContainer = () => {
    //aca va la PROMISE

    const [items, setItems] = useState([]); //este es el estado que va a guardar el mockeditems

    useEffect(() => {
        //promesa
        const itemPromise = new Promise((res, rej) => {
            setTimeout(function () {
                res(MockedItems);
            }, 2000);
        });
        itemPromise.then((res) => setItems(res));
    }, [items]);

    return <ItemList items={items} />;
};

export default ItemListContainer;
