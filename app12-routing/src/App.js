import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import PageNotFound from "./pages/PageNotFound";
import Header from "./layout/Header";

function App() {
  const router = createBrowserRouter([
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
      path: '*',
      element: <PageNotFound/>
    }
  ])
  return (
    <>
      <Header/>
      <RouterProvider router={router}/> 
    </>
  );
}

export default App;
