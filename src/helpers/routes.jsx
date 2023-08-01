/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SuspendedComponent from "../components/SuspendedComponent";
import { lazy } from "react";
import PageNotFound from "../pages/PageNotFound";

const LazyHome = lazy(() => import("../pages/Home"));
const LazyAbout = lazy(() => import("../pages/About"));
const LazyBusiness = lazy(() => import("../pages/Business"));
const LazyCertificates = lazy(() => import("../pages/about/certificates.jsx"));
const LazyContact = lazy(() => import("../pages/about/contact.jsx"));
const LazyHistory = lazy(() => import("../pages/about/history.jsx"));
const LazyLeadership = lazy(() => import("../pages/about/leadership.jsx"));
const LazyMission = lazy(() => import("../pages/about/mission.jsx"));
const LazyValues = lazy(() => import("../pages/about/values.jsx"));
const LazyVision = lazy(() => import("../pages/about/vision.jsx"));
const LazyCsrc = lazy(() => import("../pages/Csrs.jsx"));


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
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
        path: "about",
        children: [
          {
            path: "",
            element: (
              <SuspendedComponent>
                <LazyAbout />
              </SuspendedComponent>
            ),
          },
          {
            path: "certificates",
            element: (
              <SuspendedComponent>
                <LazyCertificates />
              </SuspendedComponent>
            ),
          },
          {
            path: "values",
            element: (
              <SuspendedComponent>
                <LazyValues />
              </SuspendedComponent>
            ),
          },
          {
            path: "leadership",
            element: (
              <SuspendedComponent>
                <LazyLeadership />
              </SuspendedComponent>
            ),
          },
          {
            path: "history",
            element: (
              <SuspendedComponent>
                <LazyHistory />
              </SuspendedComponent>
            ),
          },
          {
            path: "contact",
            element: (
              <SuspendedComponent>
                <LazyContact />
              </SuspendedComponent>
            ),
          },
          {
            path: "vision",
            element: (
              <SuspendedComponent>
                <LazyVision />
              </SuspendedComponent>
            ),
          },
          {
            path: "mission",
            element: (
              <SuspendedComponent>
                <LazyMission />
              </SuspendedComponent>
            ),
          },
        ],
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
        path: "/csrs",
        element: (
          <SuspendedComponent>
            <LazyCsrc />
          </SuspendedComponent>
        ),
      },
    ],
  },
]);

export default router;
