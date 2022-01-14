//esto va a mapear los productos (items)y devolver un
import React from "react";
import { Item } from "../Item/item";
import "../containers/itemListContainer.css";

export const ItemList = ({ items }) => {
    return (
        <>
            {items?.map((item) => (
                <Item {...item} key={item.id} />
            ))}
        </>
    );
};
