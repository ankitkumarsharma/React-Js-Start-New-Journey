import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../layout/Button";
import Heading from "../../layout/Heading";
import { useEffect, useState } from "react";
import { TABLE_LIST } from "../../utils/app.constant";

const List = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const [table, setTable] = useState(TABLE_LIST);
    const navigationClick = () => {
        navigate("/list/add-list");
    };
    const onEdit = (index) => {
        navigate("/list/edit-list", { state: { isEdit: true, editIndex: index, data: table[index] } });
    }
    useEffect(() => {
        if (location.state?.index) {
            let updateTable = [...table];
            updateTable[location.state.index] = location.state.data;
            setTable(updateTable);
        } else {
            if (location.state) {
                setTable([...table, location.state.data]);
            }

        }

    }, []);

    const onDelete = (index) => {
        let updateTable = [...table];
        updateTable.splice(index, 1)
        setTable(updateTable);
    }

    const tableRow = table.map((row, index) => (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{row?.name}</td>
            <td>{row?.email}</td>
            <td>{row?.mobile}</td>
            <td>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <Button onClick={() => onEdit(index)} title="Edit" type="submit" />
                    </li>
                    <li className="list-inline-item">
                        <Button onClick={() => onDelete(index)} title="Delete" type="button" />
                    </li>
                </ul>
            </td>
        </tr>
    ))
    return (
        <>
            <Button onClick={navigationClick} title="Add Row" />
            <Heading level={3}>Table List</Heading>
            {
                table.length > 0 ?
                    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-lg items-center space-x-2">
                        <table className="w-full">
                            <tr>
                                <th>Sr.No.</th>
                                <th>Name</th>
                                <th>Email Id</th>
                                <th>Mobile No.</th>
                                <th>Action</th>
                            </tr>
                            {tableRow}
                        </table>
                    </div> :

                    <p className="error">No Data</p>

            }
        </>
    );
}

export default List;