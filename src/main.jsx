import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./pages/cart.jsx";
import OrderDetails from "./pages/orderdetails.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/orderdetails",
    element: <OrderDetails />
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
