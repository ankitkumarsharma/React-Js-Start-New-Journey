import Card from "../shared-components/layout/Card";
import Column from "../shared-components/layout/Column";
import Row from "../shared-components/layout/Row";
import Container from "../shared-components/layout/Container";
import Accordian from "./Accordian";

const Body = () => {
    return  <>
         <Container>
            <Row>
                <Column>
                    <Card>
                        <Accordian/>
                    </Card>
                </Column>
            </Row>
         </Container>
    </>
}

export default Body;