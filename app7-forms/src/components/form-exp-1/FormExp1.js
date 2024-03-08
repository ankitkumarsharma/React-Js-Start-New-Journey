import { useState } from 'react';
import Button from "../../shared-components/Button";
import ContainerRowCol from '../../shared-components/layout/ContainerRowCol';
import Input from "../../shared-components/Input";

const FormExp1 = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        let formObj = {
            name: name,
            email: email,
            password: password
        }
        console.log(formObj)
    }
    return (
        <ContainerRowCol colName="col-5">
            <form onSubmit={onSubmit}>
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
                    value={password}
                    label="Password"
                    id="pw"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button className="btn btn-primary" type="submit">Submit</Button>
            </form>
        </ContainerRowCol>
    );
}

export default FormExp1;