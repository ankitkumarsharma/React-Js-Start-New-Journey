import { useState } from 'react';
import Input from "../../shared-components/Input";
import Card from "../../shared-components/layout/Card";
import ContainerRowCol from "../../shared-components/layout/ContainerRowCol";
import Row from '../../shared-components/layout/Row';
import Column from '../../shared-components/layout/Column';
import FormCrudTable from './FormCrudTable';
import { useForm } from "react-hook-form";
import { FORM_OBJ } from '../../utils/utils';

const FormCrud = () => {
    const [form, setForm] = useState(FORM_OBJ);

    const [table, setTable] = useState([]);
    const [isedit, setIsedit] = useState(false);
    const [editindex, setEditindex] = useState(null);

    const { register, handleSubmit, reset, formState: {errors}, } = useForm();


    const getFormControlValue = (control, value) => {
        form[control] = value;
        setForm({ ...form });
    }
    const onSubmit = (data) => {
        let formObj = { ...data }
        setTable([...table, formObj]);
        reset();
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
            return form[key] = '';
        });
        setForm({ ...form });
    }

    const setFormValue = (data) => {
        Object.keys(data).map((key) => {
            return form[key] = data[key];
        })
        setForm({ ...form });
    }
    return (
        <>
            <ContainerRowCol colName="col">
                <Row>
                    <Column>
                        <Card>
                            <h4 className="ak-sub-title">Form CRUD with React Hook Form</h4>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Input
                                    label="Name"
                                    id="an"
                                    type="text"
                                    name="name"
                                    register={register}
                                    errors={errors}
                                    isRequired={true}
                                    maxLength={40}
                                    minLength={5}
                                    pattern={null}
                                />
                                <Input
                                    label="Email"
                                    id="em"
                                    type="email"
                                    name="email"
                                    register={register}
                                    errors={errors}
                                    isRequired={true}
                                    maxLength={20}
                                    minLength={8}
                                    pattern={null}
                                />
                                <Input
                                    label="Mobile"
                                    id="mo"
                                    type="number"
                                    name="mobile"
                                    register={register}
                                    errors={errors}
                                    isRequired={true}
                                    maxLength={10}
                                    minLength={3}
                                    pattern={null}
                                />
                                <Input
                                    label="Password"
                                    id="pw"
                                    type="password"
                                    name="password"
                                    register={register}
                                    errors={errors}
                                    isRequired={true}
                                    maxLength={10}
                                    minLength={8}
                                    pattern={null}
                                />
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        {/* {
                                            !isedit ?
                                                <button onClick={onSubmit} className="btn primary-btn" type="button">Submit</button> :
                                                <button onClick={updateRow} className="btn primary-btn" type="button">Update</button>
                                        } */}
                                        <button className="btn primary-btn" type="submit">Submit</button> 
                                    </li>
                                    <li className="list-inline-item">
                                        <button className="btn secondary-btn" onClick={() => reset()} type="button">Reset</button>
                                    </li>
                                </ul>
                            </form>
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