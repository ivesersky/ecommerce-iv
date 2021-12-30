import React, { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail";

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});

    return <ItemDetail {...product} />;
};
