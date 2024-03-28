import { useState } from 'react';
import Input from "../../shared-components/Input";
import Card from "../../shared-components/layout/Card";
import ContainerRowCol from "../../shared-components/layout/ContainerRowCol";
import Row from '../../shared-components/layout/Row';
import Column from '../../shared-components/layout/Column';
import FormCrud2Table from './FormCrud2Table';

const FormCrud2 = () => {
    let formObject = {
        name: '',
        email: '',
        mobile: '',
        password: ''
    }
    const [form, setForm] = useState(formObject);

    const [table, setTable] = useState([]);
    const [isedit, setIsedit] = useState(false);
    const [editindex, setEditindex] = useState(null);

    const getFormControlValue = (control, value) => {
        form[control] = value;
        setForm({ ...form });
    }
    const onSubmit = () => {
        let formObj = { ...form }
        setTable([...table, formObj]);
        resetForm();
    }

    const updateRow = () => {
        let updateTable = [...table];
        updateTable[editindex] = { ...form };
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
        Object.keys(form).map((key) => {
            form[key] = '';
        });
        setForm({ ...form });
    }

    const setFormValue = (data) => {
        Object.keys(data).map((key) => {
            form[key] = data[key];
        })
        setForm({ ...form });
    }

    return (
        <>
            <ContainerRowCol colName="col">
                <Row>
                    <Column>
                        <Card>
                            <h4 className="ak-sub-title">Form CRUD 2</h4>
                            <form>
                                <Input
                                    value={form.name}
                                    label="Name"
                                    id="an"
                                    type="text"
                                    onChange={(e) => getFormControlValue('name', e.target.value)}
                                />
                                <Input
                                    value={form.email}
                                    label="Email"
                                    id="em"
                                    type="email"
                                    onChange={(e) => getFormControlValue('email', e.target.value)}
                                />
                                <Input
                                    value={form.mobile}
                                    label="Mobile"
                                    id="mo"
                                    type="number"
                                    onChange={(e) => getFormControlValue('mobile', e.target.value)}
                                />
                                <Input
                                    value={form.password}
                                    label="Password"
                                    id="pw"
                                    type="password"
                                    onChange={(e) => getFormControlValue('password', e.target.value)}
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
                        </Card>
                    </Column>
                    <Column>
                        <Card>
                            <FormCrud2Table onEdit={editRow} onDelete={deleteRow} data={table} />
                        </Card>
                    </Column>
                </Row >
            </ContainerRowCol >
        </>
    );
}

export default FormCrud2;