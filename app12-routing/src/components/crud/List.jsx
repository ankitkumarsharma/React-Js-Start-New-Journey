import { useNavigate } from "react-router-dom";
import Button from "../../layout/Button";
import Heading from "../../layout/Heading";

const List = ({ data = [], onEdit, onDelete }) => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate("/list/add-list");
    }
    const tableRow = data.map((row, index) => (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.mobile}</td>
            <td>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <button onClick={() => onEdit(index)} className="edit">Edit</button>
                    </li>
                    <li className="list-inline-item">
                        <button onClick={() => onDelete(index)} className="trash">Delete</button>
                    </li>
                </ul>
            </td>
        </tr>
    ))
    return (
        <>
            <Button onClick={handleClick} title="Add Row" />
            <Heading level={3}>Table List</Heading>
            {
                data.length > 0 ?
                    <div className="table-responsive">
                        <table className="table">
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