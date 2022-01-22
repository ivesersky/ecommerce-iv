import { styles } from "../styles";
import React, { useEffect, useState } from "react";

const Categorias = [
    { catId: "1", nombre: "HOME", ruta: "/home" },
    { catId: "2", nombre: "PRODUCTOS", ruta: "/productos" },
    { catId: "3", nombre: "PERFIL", ruta: "/perfil" },
    { catId: "4", nombre: "CONTACTO", ruta: "/contacto" },
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
                    <a
                        key={categoria.catId}
                        href={categoria.ruta}
                        style={styles.link}
                    >
                        <li>{categoria.nombre}</li>
                    </a>
                );
            })}
        </>
    );
};

export default Link;
