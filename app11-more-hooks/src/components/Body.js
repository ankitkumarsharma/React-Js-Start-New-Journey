import Card from "../shared-components/layout/Card";
import Column from "../shared-components/layout/Column";
import Container from "../shared-components/layout/Container";
import Row from "../shared-components/layout/Row";
import Page2 from "./use-context/with-it/Page2";
import Page1 from "./use-context/without-it/Page1";

const Body = () => {
    return  <>
         <Container>
            <Row>
                <Column>
                    <Card>
                        {/* <Page1/> */}
                        <Page2/>
                    </Card>
                </Column>
            </Row>
         </Container>
    </>
}

export default Body;