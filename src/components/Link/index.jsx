import { styles } from "./styles";

const Link = ({ ruta, nombre }) => (
    <>
        <div style={styles.list}>
            <a href={ruta} style={styles.link}>
                <li>{nombre}</li>
            </a>
        </div>
    </>
);
export default Link;
