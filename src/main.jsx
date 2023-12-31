import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Home from "./pages/home.jsx";

const router = createBrowserRouter([
  {
    path: "/savvy-app/",
    element: <App />,
    children: [
      {
        path: "/savvy-app/",
        element: <Home />,
      },
      {
        path: "/savvy-app/login",
        element: <Login />,
      },
      {
        path: "/savvy-app/register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
