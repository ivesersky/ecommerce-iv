//aca va la cardinal

import "../containers/itemListContainer.css";

const Item = ({ item }) => (
    <div className="cards">
        <div className="blurbg">
            <img src={`./img/${item.pictureUrl}`} alt="" />
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>{"$" + item.price}</p>
        </div>
    </div>
);

export default Item;
