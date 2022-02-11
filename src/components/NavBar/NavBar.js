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
            <a href="/" >
            <LogoBar/>
            </a>
            
            <ul style={styles.list}>
            <Link />
            <CartWidget ruta="/carrito"/>
            </ul>
        </nav>
    );
}

export default NavBar;
