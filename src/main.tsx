import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NovaMoto from "./routes/NovaMoto.tsx";
import TabelaMotos from "./routes/TabelaMotos.tsx";
import Home from "./routes/Home.tsx";
import User from "./routes/User.tsx";
import MotoDetails from "./routes/MotoDetails.tsx";
import Error404 from "./routes/Error404.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/NovaMoto",
        element: <NovaMoto />,
      },
      {
        path: "/TabelaMotos",
        element: <TabelaMotos />,
      },
      {
        path: "/User",
        element: <User />,
      },
      {
        path: "/TabelaMotos/:id",
        element: <MotoDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
