import { useLocation, useNavigate, useParams } from "react-router-dom";

const Product = ()=>{
    const routeParams = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const getData = location.state;
    const activatedRoute = location.pathname;
    console.log("routeParams>>",routeParams);
    console.log("navigate>>",navigate);
    console.log("location>>",location);
    console.log("activatedRoute>>",activatedRoute);
    console.log("getData>>",getData);
    const handleClick = () => {
        let data = { id: 7, color: 'green' };
        navigate("/product/3", { state: data});
      };
    return (
        <>
            <h1>Product Page</h1>
            <h2>Product ID: {routeParams.id}</h2>
            <button onClick={handleClick}>Go to product 3</button>
        </>
    );
}

export default Product;