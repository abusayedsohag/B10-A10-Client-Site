import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Root";
import Home from "./Component/Home/Home";
import Error from "./Component/Error/Error";
import Details from "./Component/CardDetails/Details";
import Login from "./Component/Authentication/Login";
import Register from "./Component/Authentication/Register";
import AuthProvider from "./Provider/AuthProvider";
import Privacy from "./Component/Footer/Privacy";
import AddCampaigns from "./Component/Campaigns/AddCampaigns";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5001/campaigns'),
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) => fetch(`http://localhost:5001/campaigns/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/policy",
        element: <Privacy></Privacy>,
      },
      {
        path: "/addCampaigns",
        element: <PrivateRoute><AddCampaigns></AddCampaigns></PrivateRoute>,
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);