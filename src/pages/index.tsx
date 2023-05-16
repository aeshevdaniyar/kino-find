import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Home";
import { ROUTES } from "@entities";
import LoginPage from "./Login";
import RegisterPage from "./Register";

const router = createBrowserRouter([
  {
    element: <HomePage />,
    path: ROUTES.HOME,
  },
  {
    element: <LoginPage />,
    path: ROUTES.LOGIN,
  },
  {
    element: <RegisterPage />,
    path: ROUTES.REGISTER,
  },
]);
const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
