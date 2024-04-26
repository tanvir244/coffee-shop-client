import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee/UpdateCoffee";
import ViewPage from "../pages/ViewPage/ViewPage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import User from "../pages/User/User";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('https://coffee-shop-server-nu-one.vercel.app/addCoffee')
        },
        {
          path: '/addCoffee',
          element: <AddCoffee></AddCoffee>
        },
        {
          path: '/updateCoffee/:id',
          element: <UpdateCoffee></UpdateCoffee>,
          loader: ({params}) => fetch(`https://coffee-shop-server-nu-one.vercel.app/${params.id}`)
        },
        {
          path: '/viewPage/:id',
          element: <ViewPage></ViewPage>,
          loader: () => fetch('https://coffee-shop-server-nu-one.vercel.app/addCoffee')
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/users',
          element: <PrivateRoute><User></User></PrivateRoute>,
          loader: () => fetch('https://coffee-shop-server-nu-one.vercel.app/users')
        }
      ]
    },
  ]);

export default router;