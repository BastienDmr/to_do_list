import { useLoaderData } from "react-router-dom";

function ItemPage() {
  const item = useLoaderData();

  return (
    <div>
      <h1>Vous arrivez sur la magnifique page detail de {item.name} </h1>
    </div>
  );
}

export default ItemPage;
