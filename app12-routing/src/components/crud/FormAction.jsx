import Heading from "../../layout/Heading";
import Input from "../../layout/Input";
import { useForm } from "react-hook-form";
import { ERRORS, FORM_FIELDS_ARR, FORM_OBJ, REGX_PATTERN } from '../../utils/app.constant';
import { useState } from "react";
import Button from "../../layout/Button";


const FormAction = () => {
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
            <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg items-center space-x-4">
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
                        type="text"
                        name="email"
                        register={register}
                        errors={errors}
                        isRequired={true}
                        maxLength={40}
                        minLength={8}
                        pattern={REGX_PATTERN.email}
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
                    <div className="flex">
                        <div>
                            {
                                !isedit ?
                                    <Button title="Submit" type="submit" /> :
                                    <Button onClick={updateRow} title="Update" type="button" />
                            }
                        </div>
                        <div className="ml-3">
                            <Button onClick={() => reset()} title="Reset" type="button" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default FormAction;