import { useLoaderData } from "react-router-dom";
import Item from "./components/Item/Item";
import "./App.css";

function App() {
  const items = useLoaderData();

  return (
    <main>
      <h1>To Do List</h1>
      <section>
        <ul>
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
