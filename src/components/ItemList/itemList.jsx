//esto va a mapear los productos (items)y devolver un

import Item from "../Item/item";
import "../containers/itemListContainer.css";

const ItemList = ({ items }) => {
    return (
        <>
            {items.map((item) => {
                return (
                    <div>
                        <Item
                            key={item.id}
                            img={item.img}
                            title={item.title}
                            description={item.description}
                            id={item.id}
                            price={item.price}
                            item={item}
                        />
                    </div>
                );
            })}
        </>
    );
};
export default ItemList;
