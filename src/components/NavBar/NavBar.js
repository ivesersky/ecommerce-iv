//Crear una navbar sencilla que tenga:
//brand o titulo/nombre de la tienda
//listado de categorias clickeables (p)
//un componente CartWidget.js con un icono, ubicado en el navbar
import LogoBar from "./Logo";
import CartWidget from "../Link/CartWidget";
import Link from "../Link";
import {styles} from "../styles"

function NavBar() {
    return (
        <nav style={styles.nav}>
            <LogoBar />
            <ul style={styles.list}>
            <Link ruta="/home" nombre="HOME"/>
            <Link ruta="/productos" nombre="PRODUCTOS"/> {/*  de aca salen las categorias */}
            <Link ruta="/comoComprar" nombre="COMO COMPRAR"/>
            <Link ruta="/quienesSomos" nombre="QUIENES SOMOS"/>
            <Link ruta="/contacto" nombre="CONTACTO"/>
            <CartWidget ruta="/carrito"/>
            </ul>
        </nav>
    );
}

export default NavBar;
