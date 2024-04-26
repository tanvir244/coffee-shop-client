import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee/UpdateCoffee";
import ViewPage from "../pages/ViewPage/ViewPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/addCoffee')
        },
        {
          path: '/addCoffee',
          element: <AddCoffee></AddCoffee>
        },
        {
          path: '/updateCoffee/:id',
          element: <UpdateCoffee></UpdateCoffee>,
          loader: ({params}) => fetch(`http://localhost:5000/addCoffee/${params.id}`)
        },
        {
          path: '/viewPage/:id',
          element: <ViewPage></ViewPage>,
          loader: () => fetch('http://localhost:5000/addCoffee')
        }
      ]
    },
  ]);

export default router;