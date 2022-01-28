import "./itemListContainer.css";
import { useEffect, useState } from "react";
import data from "../data/data";
import { ItemList } from "../ItemList/itemList";
import { useParams } from "react-router-dom";
import ItemListLoader from "../ItemListLoader";
import { getFirestore } from "../../firebase/index";

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

    // importar  data de firebase
    useEffect(() => {
        const baseDatos = getFirestore();
        const itemCollection = baseDatos.collection("items");
        itemCollection.get().then((value) => {
            let aux = value.docs.map((e) => {
                return { ...e.data(), id: e.id };
            });
            setItems(aux);
        });
    }, []);

    return (
        <div className="container">
            {loading ? <ItemListLoader /> : <ItemList items={items} />}
        </div>
    );
};
