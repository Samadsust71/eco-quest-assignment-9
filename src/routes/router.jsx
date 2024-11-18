import { createBrowserRouter } from "react-router-dom";
import RootLayouts from "../layouts/RootLayouts";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Adventure from "../components/Adventure";
import Registration from "../pages/Registration";
import AdventureDetails from "../pages/AdventureDetails";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../pages/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <Adventure></Adventure>,
            loader: () => fetch("/data.json"),
          },
        ],
      },
      {
        path: "/adventure/:id",
        element: <PrivateRoute><AdventureDetails /></PrivateRoute>,
        loader: async ({ params }) => {
          const res = await fetch("/data.json");
          const data = await res.json();
          const singleData = data.find((d) => d.id === params.id);
          return singleData;
        },
      },
      {
        path: "/auth/profile",
        element: <PrivateRoute><MyProfile /></PrivateRoute>,
      },
      {
        path: "/auth/updateprofile",
        element: <PrivateRoute><UpdateProfile /></PrivateRoute>,
      },

      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/registration",
        element: <Registration />,
      },
    ],
  },
]);

export default router;
