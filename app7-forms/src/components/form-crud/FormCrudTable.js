import './FormCrudTable.css';

const FormCrudTable = ({data}) => {
    const tableRow = data.map((row, index) => (
        <tr>
            <td>{index+1}</td>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.mobile}</td>
            <td>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <a href='javascript(0)' className="edit">Edit</a>
                    </li>
                    <li className="list-inline-item">
                        <a href='javascript(0)' className="trash">Delete</a>
                    </li>
                </ul>
            </td>
        </tr>
    ))
    return (
        <>
            <h4 className="ak-sub-title">Table</h4>
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
                    {/* <tr>
                        <td>
                            <p className="error">No Data</p>
                        </td>
                    </tr> */}
                </table>
            </div>
        </>
    );
}

export default FormCrudTable;