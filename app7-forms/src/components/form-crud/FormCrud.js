import { useState } from 'react';
import Input from "../../shared-components/Input";
import Card from "../../shared-components/layout/Card";
import ContainerRowCol from "../../shared-components/layout/ContainerRowCol";
import Row from '../../shared-components/layout/Row';
import Column from '../../shared-components/layout/Column';
import FormCrudTable from './FormCrudTable';

const FormCrud = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [table, setTable] = useState([]);
    const [isedit, setIsedit] = useState(false);
    const [editindex, setEditindex] = useState(null);
    const [invalidForm, setInvalidForm] = useState(true);
    const onSubmit = () => {
        let formObj = {
            name: name,
            email: email,
            mobile: mobile,
            password: password
        };
        checkFormValid(formObj);
        if (!invalidForm) {
            setTable([...table, formObj]);
            resetForm();
            setInvalidForm(true);
        }
    }
    const checkFormValid = (obj) => {
        Object.keys(obj).map((key) => {
            if (obj[key] == '') {
                setInvalidForm(true);
            } else {
                setInvalidForm(false)
            }
        })
    }
    const updateRow = () => {
        let formObj = {
            name: name,
            email: email,
            mobile: mobile,
            password: password
        };
        let updateTable = [...table];
        updateTable[editindex] = { ...formObj };
        setTable(updateTable);
        setIsedit(false);
        resetForm();
    }
    const editRow = (index) => {
        setFormValue(table[index]);
        setEditindex(index);
        setIsedit(true);
    }
    const deleteRow = (index) => {
        let updateTable = [...table];
        updateTable.splice(index, 1)
        setTable(updateTable);
    }
    const resetForm = () => {
        setName('');
        setEmail('');
        setMobile('');
        setPassword('');
    }

    const setFormValue = (data) => {
        setName(data.name);
        setEmail(data.email);
        setMobile(data.mobile);
        setPassword(data.password);
    }

    return (
        <>
            <ContainerRowCol colName="col">
                <Row>
                    <Column>
                        <Card>
                            <h4 className="ak-sub-title">Form</h4>
                            <form>
                                <Input
                                    value={name}
                                    label="Name"
                                    id="an"
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <Input
                                    value={email}
                                    label="Email"
                                    id="em"
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Input
                                    value={mobile}
                                    label="Mobile"
                                    id="mo"
                                    type="number"
                                    onChange={(e) => setMobile(e.target.value)}
                                />
                                <Input
                                    value={password}
                                    label="Password"
                                    id="pw"
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        {
                                            !isedit ?
                                                <button onClick={onSubmit} className="btn primary-btn" type="button">Submit</button> :
                                                <button onClick={updateRow} className="btn primary-btn" type="button">Update</button>
                                        }
                                    </li>
                                    <li className="list-inline-item">
                                        <button className="btn secondary-btn" onClick={resetForm} type="button">Reset</button>
                                    </li>
                                </ul>
                            </form>
                            {invalidForm ? <p className='error'>Form is invalid, All fields are required!!!</p> : ''}
                        </Card>
                    </Column>
                    <Column>
                        <Card>
                            <FormCrudTable onEdit={editRow} onDelete={deleteRow} data={table} />
                        </Card>
                    </Column>
                </Row >
            </ContainerRowCol >
        </>
    );
}

export default FormCrud;