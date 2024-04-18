import { useState } from "react";
import Panel from "./Panel";

const Accordian = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <>
            <h1>This the example of Accordian</h1>
            <Panel title="What is Lorem Ipsum?" isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Panel>
            <Panel title="Where does it come from?" isActive={activeIndex === 2} onShow={() => setActiveIndex(2)}>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites
            </Panel>
            <Panel title="Why do we use it?" isActive={activeIndex === 3} onShow={() => setActiveIndex(3)}>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            </Panel>
        </>
    );
}

export default Accordian;