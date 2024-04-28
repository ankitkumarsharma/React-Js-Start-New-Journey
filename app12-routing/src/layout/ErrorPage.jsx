import { useNavigate, useRouteError } from "react-router-dom";
import Button from "./Button";
import Heading from "./Heading";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    let navigate = useNavigate();
    const navigationClick = () => {
        navigate("/");
    }
    return (
        <div id="error-page" className="text-center">
            <Button onClick={navigationClick} title="Back to Home" />
            <Heading level={1}>Oops!</Heading>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.status} {error.statusText},  {error.data}</i>
            </p>
        </div>
    );
}

export default ErrorPage;