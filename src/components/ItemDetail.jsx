import { styles } from "./styles";
import "../components/containers/itemListContainer.css";
import "../components/Button.css";
import ItemCount from "./ItemCount";

export const ItemDetail = ({ item }) => {
    const addToCart = (quantity) => {};
    return (
        <>
            {item &&
                item.map((item) => (
                    <div key={item.id} className="productDetailCentered">
                        <img
                            src={item.pictureUrl}
                            alt={`${item.id}-${item.title}`}
                        />
                        <section
                            style={styles.flexCol}
                            className="blurbg centered"
                        >
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <h2>${item.price}</h2>
                            <div>
                                <ItemCount
                                    stock={10}
                                    initial={1}
                                    onAdd={addToCart}
                                />
                            </div>
                        </section>
                    </div>
                ))}
        </>
    );
};
