import Heading from "./Heading";
import Section from "./Section";

const Page2 = () => {
    return (
        <>
            <Section level={1}>
                <Heading>Page 2 with useContext</Heading>
                <Section level={2}>
                    <Heading>Heading</Heading>
                    <Heading>Heading</Heading>
                    <Heading>Heading</Heading>
                    <Section level={3}>
                        <Heading>Sub-heading</Heading>
                        <Heading>Sub-heading</Heading>
                        <Heading>Sub-heading</Heading>
                        <Section level={4}>
                            <Heading>Sub-sub-heading</Heading>
                            <Heading>Sub-sub-heading</Heading>
                            <Section level={5}>
                                <Heading>Sub-sub-heading</Heading>
                                <Heading>Sub-sub-heading</Heading>
                            </Section>
                        </Section>
                    </Section>
                </Section>
            </Section>
        </>
    )
}

export default Page2;