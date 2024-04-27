import { createBrowserRouter } from "react-router-dom";
import LandingPageLayout from "../layout/LandingPageLayout";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Services from "../pages/Services";
import PageNotFound from "../pages/PageNotFound";
import ErrorPage from "../layout/ErrorPage";
import Product from "../pages/Product";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPageLayout/>,
      errorElement: <ErrorPage/>, // we are not using page not found feature here, using this latest error feature, we can use page not found also rather than this, as below mention in children routes.
      children: [
        {
          path: '/',
          element: <Home/>,
        },
        {
          path: '/about',
          element: <AboutUs/>
        },
        {
          path: '/contact',
          element: <ContactUs/>
        },
        {
          path: '/services',
          element: <Services/>
        },
        {
            path: '/product/:id',
            element: <Product/>
          },
        // {
        //   path: '*',
        //   element: <PageNotFound/>
        // }
      ]
    },
  ]);