import { Link, useRouteError } from "react-router-dom";
import Header from "./Header";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h3>
                <Link to='/'>Go to Home</Link>
            </h3>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.status} {error.statusText},  {error.data}</i>
            </p>
        </div>
    );
}

export default ErrorPage;