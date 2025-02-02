import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu from "./features/menu/Menu";
import { loader as menuLoader } from "./features/menu/menuLoader";
import { loader as orderLoader } from "./features/order/orderLoader";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import { action as newOrderAction } from "./features/order/newOrderAction";
import { action as updateOrderAction } from "./features/order/updateOrderAction";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: newOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
