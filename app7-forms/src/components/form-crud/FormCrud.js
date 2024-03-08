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

    const onSubmit = (e) => {
        e.preventDefault();
        let formObj = {
            name: name,
            email: email,
            mobile: mobile,
            password: password
        };
        setTable([...table, formObj]);
    }
    return (
        <>
            <ContainerRowCol colName="col">
                <Row>
                    <Column>
                        <Card>
                            <h4 className="ak-sub-title">Form</h4>
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
                                        <button className="btn primary-btn" type="submit">Submit</button>
                                    </li>
                                    <li className="list-inline-item">
                                        <button className="btn secondary-btn" type="button">Reset</button>
                                    </li>
                                </ul>
                            </form>
                        </Card>
                    </Column>
                    <Column>
                        <Card>
                            <FormCrudTable data={table} />
                        </Card>
                    </Column>
                </Row >
            </ContainerRowCol >
        </>
    );
}

export default FormCrud;