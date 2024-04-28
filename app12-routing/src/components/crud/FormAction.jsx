import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../layout/Button";
import Input from "../../layout/Input";
import { ERRORS, FORM_FIELDS_ARR, REGX_PATTERN } from '../../utils/app.constant';


const FormAction = ({ isEdit, editIndex, editData }) => {
    const [table, setTable] = useState([]);

    const { register, setValue, getValues, handleSubmit, reset, formState: { errors, isValid } } = useForm();
    let navigate = useNavigate();
    const onSubmit = (data) => {
        let formObj = { ...data }
        navigate("/list", { state: { data: formObj, index: null } });
        reset();
    }

    const updateRow = () => {
        if (isValid) {
            navigate("/list", { state: { data: { ...getValues() }, index: editIndex } });
            reset();
        }
    }
    useEffect(() => {
        handleEdit();
    }, [])

    const handleEdit = () => {
        if (isEdit) {
            let fields = FORM_FIELDS_ARR;
            fields.forEach(field => setValue(field, editData[field],
                {
                    shouldDirty: true,
                    shouldTouch: true
                }
            ));
        }
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
                                !isEdit ?
                                    <Button title="Submit" type="submit" /> :
                                    <Button onClick={updateRow} title="Update" type="submit" />
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