function Item({ item }) {
  return (
    <>
      <li>{item.name}</li>
      <li>{item.quantity}</li>
      <li>{item.category_id}</li>
      <li>{item.status_id}</li>
    </>
  );
}

export default Item;
