import './FormCrud3ValidationTable.css';

const FormCrud3ValidationTable = ({ data, onEdit, onDelete }) => {
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
            <h4 className="ak-sub-title">Table</h4>
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

export default FormCrud3ValidationTable;