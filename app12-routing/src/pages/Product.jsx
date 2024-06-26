import { useLocation, useNavigate, useParams } from "react-router-dom";
import Heading from "../layout/Heading";
import Button from "../layout/Button";

const Product = () => {
    const routeParams = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const getData = location.state;
    const activatedRoute = location.pathname;
    console.log("routeParams>>", routeParams);
    console.log("navigate>>", navigate);
    console.log("location>>", location);
    console.log("activatedRoute>>", activatedRoute);
    console.log("getData>>", getData);
    const navigationClick = () => {
        let data = { id: 7, color: 'green' };
        navigate("/product/3", { state: data });
    };
    return (
        <>
            <Heading level={1}>Product Page</Heading>
            <h2>Route ID: {routeParams.id}</h2>
            <h2>Product Color: {getData?.color}</h2>
            <h2>Product ID: {getData?.id}</h2>
            <Button onClick={navigationClick} title="Go to Product 3" />
        </>
    );
}

export default Product;