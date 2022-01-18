import React, { createContext, useState } from "react";

export const CartContext = createContext([])

export const CartProvider = ({children}) =>{
//  aca voy a crear toda la data del carrito que quiero que este disponible en toda la app
    const [items,setItems] = useState([{
        id:1,
        title:"primer producto",
        qty:5
    }])

    const isInCart =(id)=>{
        
    }


    const addItem = (id,item,qty)=>{
       
         setItems([...items,{...item, qty: qty}]);
    }

    return(
        <CartContext.Provider value={{items,addItem}} >
            {children}
        </CartContext.Provider>
    )
}
