function Item({ item }) {
  return (
    <div>
      <li>{item.name}</li>
      <li>{item.quantity}</li>
      <li>{item.category_title}</li>
      <li>{item.status_title}</li>
    </div>
  );
}

export default Item;
