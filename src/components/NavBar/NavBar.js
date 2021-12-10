//Crear una navbar sencilla que tenga:
//brand o titulo/nombre de la tienda
//listado de categorias clickeables (p)
//un componente CartWidget.js con un icono, ubicado en el navbar
import React from "react";
import LogoBar from "./Logo";
import "./nav.css";
import CartWidget from "../CartWidget";

function NavBar() {
    return (
        <nav>
            <LogoBar />
            <div className="itemNav">
             <a href="/home">HOME</a>
            </div>
            <div className="itemNav">
            <a href="/aboutus">ABOUT US</a>
            </div>
            <div className="itemNav">
            <a href="/gallery">GALLERY</a>
            </div>
            <div className="itemNav">
            <a href="/products">PRODUCTS</a>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar;
