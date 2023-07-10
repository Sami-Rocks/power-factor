import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../layouts/home";
import About from "../layouts/About";
import Business from "../layouts/Business";
import Sustainability from "../layouts/Sustainability";
import Media from "../layouts/Media";
import Contact from "../layouts/Contact";
import People from "../layouts/People";
import Csrs from "../layouts/CSRS";
import PageNotFound from "../layouts/PageNotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/business",
        element: <Business />,
      },
      {
        path: "/sustainability",
        element: <Sustainability />,
      },
      {
        path: "/media",
        element: <Media />,
      },
      {
        path: "/people",
        element: <People />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/csrs",
        element: <Csrs/>
      },
    ],
  },
]);

export default router;
