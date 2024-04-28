import { useEffect, useState } from "react";
import Heading from "../../layout/Heading";
import FormAction from "./FormAction";
import { useLocation } from "react-router-dom";

const EditList = () => {
    let location = useLocation();
    const [editData, setEditData] = useState({
        isEdit: false,
        editIndex: null,
        data: null
    });
    useEffect(() => {
        handleEdit();
    }, []);

    const handleEdit = () => {
        if (location.state) {
            setEditData({
                isEdit: location.state.isEdit,
                editIndex: location.state.editIndex,
                data: location.state.data
            });
        }
    }

    return (
        <>
            <Heading level={3}>Edit List</Heading>
            {editData.isEdit && <FormAction isEdit={editData.isEdit} editData={editData.data} editIndex={editData.editIndex} />}

        </>
    );
}

export default EditList;