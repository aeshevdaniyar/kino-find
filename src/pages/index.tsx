import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Home";
import { ROUTES } from "@entities";

const router = createBrowserRouter([
  {
    element: <HomePage />,
    path: ROUTES.HOME,
  },
]);
const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
