import Card from "../shared-components/layout/Card";
import Column from "../shared-components/layout/Column";
import Container from "../shared-components/layout/Container";
import Row from "../shared-components/layout/Row";
import TaskApp from "./without-use-reducer/TaskApp";
import TaskAppReducer from "./with-use-reducer-hook/TaskAppReducer";

const Body = () => {
    return  <>
         <Container>
            <Row>
                <Column>
                    <Card>
                        {/* <TaskApp/> */}
                        <TaskAppReducer/>
                    </Card>
                </Column>
            </Row>
         </Container>
    </>
}

export default Body;