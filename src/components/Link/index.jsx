import { styles } from "../styles";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Categorias = [
    { catId: "1", nombre: "HOME", ruta: "/home" },
    { catId: "2", nombre: "PRODUCTOS", ruta: "/productos" },
    { catId: "3", nombre: "CONTACTO", ruta: "/contacto" },
];

const Link = () => {
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        const promesaCat = new Promise((res, rej) => {
            res(Categorias);
        });
        promesaCat.then((res) => setCategorias(res));
    }, []);

    return (
        <>
            {categorias.map((categoria) => {
                return (
                    <NavLink
                        to={categoria.ruta}
                        key={categoria.catId}
                        style={styles.link}
                    >
                        <li>{categoria.nombre}</li>
                    </NavLink>
                );
            })}
        </>
    );
};

export default Link;
