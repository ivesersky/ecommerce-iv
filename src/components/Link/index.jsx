import { styles } from "../styles";
import React, { useState } from "react";

const Link = ({ ruta, nombre }) => {
    const [hover, setHover] = useState(false); //se pude poner en vez de hover nombre,setNombre=usesatate ('Pepe')
    //llamo setHover para cambiar el estado, y hover me lo almacena. array tiene 2 estados
    return (
        <a
            href={ruta}
            style={{ ...styles.link, ...(hover ? styles.hover : null) }} //if ternario, hover, es true? sino null
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <li>{nombre}</li>
        </a>
    );
};

export default Link;
