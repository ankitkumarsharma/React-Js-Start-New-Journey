import Card from "../shared-components/layout/Card";
import Column from "../shared-components/layout/Column";
import Container from "../shared-components/layout/Container";
import Row from "../shared-components/layout/Row";
import TaskApp from "./without-use-reducer/TaskApp";

const Body = () => {
    return  <>
         <Container>
            <Row>
                <Column>
                    <Card>
                        <TaskApp/>
                    </Card>
                </Column>
            </Row>
         </Container>
    </>
}

export default Body;