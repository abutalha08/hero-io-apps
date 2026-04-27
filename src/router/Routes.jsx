import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "../pages/homepage/Homepage";
import Apps from "../pages/apps/Apps";
import InstallApps from "../pages/installApps/InstallApps";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        // path: "/",
        index: true,
        element: <Homepage />,
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      
      {
        path: "/installedApps",
        element: <InstallApps />,
      },
     
    ],
    errorElement: <NotFoundPage />,
  },
]);
