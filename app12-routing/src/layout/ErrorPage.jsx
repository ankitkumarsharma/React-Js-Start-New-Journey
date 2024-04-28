import { Link, useRouteError } from "react-router-dom";
import Header from "./Header";
import Heading from "./Heading";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="text-center">
            <button className="bg-gray-500 text-white p-2 rounded">
                <Link to='/'>Go to Home</Link>
            </button>
            <Heading level={1}>Oops!</Heading>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.status} {error.statusText},  {error.data}</i>
            </p>
        </div>
    );
}

export default ErrorPage;