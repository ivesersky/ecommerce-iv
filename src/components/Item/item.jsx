//aca va la cardinal

import "../containers/itemListContainer.css";
import { Link } from "react-router-dom";

const Item = ({ item }) => (
    <Link to={`/product/${item.id}`}>
        <div className="blurbg">
            <img src={`./img/${item.pictureUrl}`} alt="" />
            <h1>{item.title}</h1>

            <p>{"$" + item.price}</p>
        </div>
    </Link>
);

export default Item;
