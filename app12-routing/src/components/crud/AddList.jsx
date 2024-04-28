import { useNavigate } from "react-router-dom";
import Button from "../../layout/Button";
import Heading from "../../layout/Heading";
import FormAction from "./FormAction";

const AddList = () => {
    let navigate = useNavigate();
    const navigationClick = () => {
        navigate("/list");
    }
    return (
        <>
            <div className="flex">
                <Heading level={3}>Add List</Heading>
                <Button onClick={navigationClick} title="Back to List" />
            </div>
            <FormAction />
        </>
    );
}

export default AddList;