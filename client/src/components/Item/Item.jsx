import { Link } from "react-router-dom";
import "./Item.css";

function Item({ item }) {
  return (
    <div className="list-container">
      <li>{item.name}</li>
      <li>{item.quantity}</li>
      <li>{item.category_title}</li>
      <li>{item.status_title}</li>
      <li>
        <Link to={`/items/${item.id}`}>Detail</Link>
      </li>
    </div>
  );
}

export default Item;
