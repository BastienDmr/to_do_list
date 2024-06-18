import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import connexion from "./services/connexion";
import ItemPage from "./pages/ItemPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: async () => {
      try {
        const items = await connexion.get("/api/items");
        return items.data;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  {
    path: "/items/:id",
    element: <ItemPage />,
    loader: async ({ params }) => {
      try {
        const item = await connexion.get(`/api/items/${params.id}`);
        return item.data;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
