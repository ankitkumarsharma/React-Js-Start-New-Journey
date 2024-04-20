import Card from "../../../shared-components/layout/Card";
import { LevelContext } from "./LevelContext";

const Section = ({children, level})=>{
    return (
        <>
            <section>
                <Card>
                    <LevelContext.Provider value={level}>
                        {children}
                    </LevelContext.Provider>
                </Card>
            </section>
        </>
    )
}

export default Section;