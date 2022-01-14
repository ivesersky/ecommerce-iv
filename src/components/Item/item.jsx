//aca va la card

import "../containers/itemListContainer.css";
import { Link } from "react-router-dom";

const Item = ({ item }) => (
    <Link to={`/product/${item.id}`}>
        <div className="blurbg">
            <img src={`./img/${item.pictureUrl}`} alt="" />
            <h2>{item.title}</h2>
        </div>
    </Link>
);

export default Item;
