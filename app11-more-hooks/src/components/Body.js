import Card from "../shared-components/layout/Card";
import Column from "../shared-components/layout/Column";
import Container from "../shared-components/layout/Container";
import Row from "../shared-components/layout/Row";
import Page2 from "./use-context/example1/with-it/Page2";
import Page1 from "./use-context/example1/without-it/Page1";
import PostApp2 from "./use-context/example2/with-it/PostApp2";
import PostApp1 from "./use-context/example2/without-it/PostApp1";
import TaskAppReducer from "./use-reducer-with-use-context/TaskAppReducer";

const Body = () => {
    return  <>
         <Container>
            <Row>
                <Column>
                    <Card>
                        {/* <Page1/> */} 
                        {/* <Page2/> */}
                        {/* <PostApp1/> */}
                        <PostApp2/>
                        {/* <TaskAppReducer/> */}
                    </Card>
                </Column>
            </Row>
         </Container>
    </>
}

export default Body;