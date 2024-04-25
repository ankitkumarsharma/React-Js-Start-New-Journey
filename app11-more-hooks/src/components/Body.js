import Card from "../shared-components/layout/Card";
import Column from "../shared-components/layout/Column";
import Container from "../shared-components/layout/Container";
import Row from "../shared-components/layout/Row";
import TaskAppCustomHookExp1 from "./custom-hooks/example1/TaskAppCustomHookExp1";
import Page2 from "./use-context/example1/with-it/Page2";
import Page1 from "./use-context/example1/without-it/Page1";
import PostApp2 from "./use-context/example2/with-it/PostApp2";
import PostApp1 from "./use-context/example2/without-it/PostApp1";
import UseEffectExp1 from "./use-effects/exp1/UseEffectExp1";
import TaskAppReducer from "./use-reducer-with-use-context/TaskAppReducer";
import CountUseRefWithItExp1 from "./use-ref/example1/with-it/CountUseRefWithItExp1";
import CountUseRefWithItExp2 from "./use-ref/example1/without-it/CountUseRefWithoutItExp1";
import UseRefExp2 from "./use-ref/example2/UseRefExp2";
import UseRefExp3 from "./use-ref/exp3/UseRefExp3";

const Body = () => {
    return  <>
         <Container>
            <Row>
                <Column>
                    <Card>
                        {/* <Page1/> */} 
                        {/* <Page2/> */}
                        {/* <PostApp1/> */}
                        {/* <PostApp2/> */}
                        {/* <TaskAppReducer/> */}
                        {/* <TaskAppCustomHookExp1/> */}
                        {/* <CountUseRefWithItExp1/> */}
                        {/* <CountUseRefWithoutItExp1/> */}
                        {/* <UseRefExp2/> */}
                        {/* <UseRefExp3/> */}
                        <UseEffectExp1/>
                    </Card>
                </Column>
            </Row>
         </Container>
    </>
}

export default Body;