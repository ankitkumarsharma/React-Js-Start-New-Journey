import { Outlet } from "react-router-dom";
import Heading from "../layout/Heading";

const Crud = () => {
    return (
        <>
            <Heading level={1}>Crud Page</Heading>
            <Outlet />
        </>
    );
}

export default Crud;