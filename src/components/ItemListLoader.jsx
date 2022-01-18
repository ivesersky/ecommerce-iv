import React from "react";
import { Item } from "./Item/item";
const ItemListLoader = () => {
    return (
        <>
            <div>
                {[...new Array(4)].map((_, index) => (
                    <div className="blurbg" key={index}>
                        <Item
                            item={{
                                id: 0,
                                title: "cargando...",
                                thumbnail:
                                    "https://i.stack.imgur.com/ATB3o.gif",
                                price: "",
                            }}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default ItemListLoader;
