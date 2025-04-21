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
import AddCampaigns from "./Component/Campaigns/AddCampaigns";
import PrivateRoute from "./PrivateRoute";
import AllCampaigns from "./Component/Campaigns/AllCampaigns";
import MyCampaigns from "./Component/Campaigns/MyCampaigns/MyCampaigns";
import UpdateCampaigns from "./Component/Campaigns/MyCampaigns/UpdateCampaigns";
import MyDonation from "./Component/Campaigns/MyDonation/MyDonation";
import ThemeProvider from "./Provider/ThemeContext";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const campaignData = await fetch('https://crowdcube-server-site-alpha.vercel.app/campaign').then(res => res.json());
          const featureData = await fetch('https://crowdcube-server-site-alpha.vercel.app/campaigns').then(res => res.json());
          const donationData = await fetch('https://crowdcube-server-site-alpha.vercel.app/donations').then(res => res.json());
          const userData = await fetch('https://crowdcube-server-site-alpha.vercel.app/user').then(res => res.json());

          return { campaign: campaignData, campaigns: featureData, donations: donationData, user: userData };
        }
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
        path: "/addCampaigns",
        element: <PrivateRoute><AddCampaigns></AddCampaigns></PrivateRoute>,
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({ params }) => fetch(`https://crowdcube-server-site-alpha.vercel.app/campaign/${params.id}`),
      },
      {
        path: "campaigns",
        element: <AllCampaigns></AllCampaigns>,
        loader: () => fetch('https://crowdcube-server-site-alpha.vercel.app/campaigns'),
      },
      {
        path: "/mycampaigns",
        element: <PrivateRoute><MyCampaigns></MyCampaigns></PrivateRoute>,
        loader: () => fetch('https://crowdcube-server-site-alpha.vercel.app/campaigns')
      },
      {
        path: "/updateCampaign/:id",
        element: <PrivateRoute><UpdateCampaigns></UpdateCampaigns></PrivateRoute>,
        loader: ({ params }) => fetch(`https://crowdcube-server-site-alpha.vercel.app/campaign/${params.id}`)
      },
      {
        path: "/myDonation",
        element: <PrivateRoute><MyDonation></MyDonation></PrivateRoute>,
        loader: () => fetch('https://crowdcube-server-site-alpha.vercel.app/donations')
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} fallbackElement={<div>Loading</div>} />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);