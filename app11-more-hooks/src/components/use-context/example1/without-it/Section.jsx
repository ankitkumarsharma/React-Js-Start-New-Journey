import Card from "../../../../shared-components/layout/Card";

const Section = ({children})=>{
    return (
        <>
            <section>
                <Card>
                    {children}
                </Card>
            </section>
        </>
    )
}

export default Section;