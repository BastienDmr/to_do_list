import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import connexion from "./services/connexion";

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

  /* {
    path: "/item/:id",
    element: <ItemPage />,
    loader: async ({ params }) => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/items/${params.id}`
      );
      if (res.status === 404) {
        throw new Response("Not Found", { status: 404 });
      }
      return res.data;
    },
  }, */
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
