import { useState } from 'react';
import Input from "../../shared-components/Input";
import Card from "../../shared-components/layout/Card";
import ContainerRowCol from "../../shared-components/layout/ContainerRowCol";
import Row from '../../shared-components/layout/Row';
import Column from '../../shared-components/layout/Column';
import FormCrudTable from './FormCrudTable';
import { useForm } from "react-hook-form";
import { ERRORS, FORM_FIELDS_ARR, FORM_OBJ, REGX_PATTERN } from '../../utils/utils';

const FormCrud = () => {
    const [table, setTable] = useState([]);
    const [isedit, setIsedit] = useState(false);
    const [editindex, setEditindex] = useState(null);

    const { register, setValue, getValues, handleSubmit, reset, formState: { errors, isValid } } = useForm();

    const onSubmit = (data) => {
        let formObj = { ...data }
        setTable([...table, formObj]);
        reset();
    }

    const updateRow = () => {
        if (isValid) {
            let updateTable = [...table];
            updateTable[editindex] = { ...getValues() };
            setTable(updateTable);
            setIsedit(false);
            reset();
        }
    }
    const editRow = (index) => {
        let fields = FORM_FIELDS_ARR;
        fields.forEach(field => setValue(field, table[index][field],
            {
                shouldDirty: true,
                shouldTouch: true
            }
        ));
        setEditindex(index);
        setIsedit(true);
    }
    const deleteRow = (index) => {
        let updateTable = [...table];
        updateTable.splice(index, 1)
        setTable(updateTable);
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
                                    pattern= {null}
                                />
                                <Input
                                    label="Email"
                                    id="em"
                                    type="text"
                                    name="email"
                                    register={register}
                                    errors={errors}
                                    isRequired={true}
                                    maxLength={40}
                                    minLength={8}
                                    pattern= {REGX_PATTERN.email}
                                    patternMessage={ERRORS.email}
                                />
                                <Input
                                    label="Mobile"
                                    id="mo"
                                    type="text"
                                    name="mobile"
                                    register={register}
                                    errors={errors}
                                    isRequired={true}
                                    maxLength={10}
                                    minLength={3}
                                    pattern={REGX_PATTERN.mobile}
                                    patternMessage={ERRORS.mobile}
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
                                    pattern={REGX_PATTERN.password}
                                    patternMessage={ERRORS.password}
                                />
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        {
                                            !isedit ?
                                                <button className="btn primary-btn" type="submit">Submit</button> :
                                                <button onClick={updateRow} className="btn primary-btn" type="button">Update</button>
                                        }
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