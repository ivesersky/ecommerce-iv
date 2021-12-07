//Crear una navbar sencilla que tenga:
//brand o titulo/nombre de la tienda
//listado de categorias clickeables (p)
//un componente CartWidget.js con un icono, ubicado en el navbar
import React from "react";
import CartWidget from "./CartWidget";
import "./nav.css";

function NavBar() {
    return (
        <nav>
            <CartWidget />
            <div className="itemNav">
                <li>HOME</li>
            </div>
            <div className="itemNav">
                <li>ABOUT US</li>
            </div>
            <div className="itemNav">
                <li>SHOP</li>
            </div>
        </nav>
    );
}

export default NavBar;
