import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import SuspendedComponent from "../components/SuspendedComponent";
import App from "../App";
const LazyHome = lazy(() => import("../pages/Home"));
const LazyAbout = lazy(() => import("../pages/About"));
const LazyBusiness = lazy(() => import("../pages/Business"));
const LazyContact = lazy(() => import("../pages/Contact"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <SuspendedComponent>
            <LazyHome />
          </SuspendedComponent>
        ),
      },
      {
        path: "/about",
        element: (
          <SuspendedComponent>
            <LazyAbout />
          </SuspendedComponent>
        ),
      },
      {
        path: "/business",
        element: (
          <SuspendedComponent>
            <LazyBusiness />
          </SuspendedComponent>
        ),
      },
      {
        path: "/contact",
        element: (
          <SuspendedComponent>
            <LazyContact />
          </SuspendedComponent>
        ),
      },
    ],
  },
]);

export default router;
