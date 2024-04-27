import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Header from "../layout/Header";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import Services from "../pages/Services";
// we can use this technique also, but this is old technique. I put it , only for knowledge part
const BrowserRouterExp = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/about" Component={AboutUs} />
                <Route path="/contact" Component={ContactUs} />
                <Route path="/services" Component={Services} />
                <Route path="*" Component={PageNotFound} />
            </Routes>
        </BrowserRouter>
    );
}

export default BrowserRouterExp;