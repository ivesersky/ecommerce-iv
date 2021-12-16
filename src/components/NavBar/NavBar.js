//Crear una navbar sencilla que tenga:
//brand o titulo/nombre de la tienda
//listado de categorias clickeables (p)
//un componente CartWidget.js con un icono, ubicado en el navbar
import React from "react";
import LogoBar from "./Logo";
import "./nav.css";
import CartWidget from "../Link/CartWidget";
import Link from "../Link";


function NavBar() {
    return (
        <nav>
            <LogoBar />
            <Link ruta="/home" nombre="HOME"/>
            <Link ruta="/productos" nombre="PRODUCTOS"/> {/*  de aca salen las categorias */}
            <Link ruta="/comoComprar" nombre="COMO COMPRAR"/>
            <Link ruta="/quienesSomos" nombre="QUIENES SOMOS"/>
            <Link ruta="/contacto" nombre="CONTACTO"/>
            <CartWidget ruta="/carrito"/>
        </nav>
    );
}

export default NavBar;
