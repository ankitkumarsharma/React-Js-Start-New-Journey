import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const LandingPageLayout = () => {
    return (
        <div>
            <Header />
                <div className="p-5">
                <Outlet />
                </div>
            <Footer />
        </div>
    );
}

export default LandingPageLayout;