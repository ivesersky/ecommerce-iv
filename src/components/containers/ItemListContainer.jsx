import "./itemListContainer.css";
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/itemList";
import { useParams } from "react-router-dom";
import ItemListLoader from "../ItemListLoader";
import { db } from "../../firebase"; //acceso a base de datos
import { getDocs, query, collection, where } from "firebase/firestore";

export const ItemListContainer = ({ item }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const itemCollection = collection(db, "items"); //acceso a la coleccion
        if (id) {
            const consulta = query(
                itemCollection,
                where("categoria", "==", id)
            );
            getDocs(consulta)
                .then(({ docs }) => {
                    setItems(docs.map((doc) => ({ ...doc.data() })));
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => setLoading(false));
        } else {
            getDocs(itemCollection)
                .then(({ docs }) => {
                    setItems(docs.map((doc) => ({ ...doc.data() })));
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => setLoading(false));
        }
    }, [id]);

    return (
        <div className="container">
            {loading ? <ItemListLoader /> : <ItemList items={items} />}
        </div>
    );
};
