import { styles } from "../styles";
import React, { useEffect, useState } from "react";

const Categorias = [
    { catId: "1", nombre: "HOME", ruta: "/home" },
    { catId: "2", nombre: "PRODUCTOS", ruta: "/productos" },
    { catId: "3", nombre: "PERFIL", ruta: "/perfil" },
    { catId: "4", nombre: "CONTACTO", ruta: "/contacto" },
]; //esto simula una API

const Link = () => {
    //promesa para poder mapear las categorias de la API
    const [categorias, setCategorias] = useState([]); //pongo un array adentro pq lo voy a tener que mapear
    useEffect(() => {
        const promesaCat = new Promise((res, rej) => {
            res(Categorias);
        });
        promesaCat.then((res) => setCategorias(res)); //guardo esa data que traje de la api en un estado
    }, []);
    console.log(Categorias);

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
