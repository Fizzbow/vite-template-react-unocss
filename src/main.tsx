import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import "./style/index.scss";
import "./pages/Home.css";
import "../i18n";
import "uno.css";
import "virtual:uno.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
