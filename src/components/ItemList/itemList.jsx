//esto va a mapear los productos (items)y devolver un

import Item from "../Item/item";
import "../containers/itemListContainer.css";

const ItemList = ({ items }) => {
    return (
        <>
            {items.map((item) => {
                return (
                    <Item
                        key={item.id}
                        item={item}
                        img={item.img}
                        title={item.title}
                    />
                );
            })}
        </>
    );
};
export default ItemList;
