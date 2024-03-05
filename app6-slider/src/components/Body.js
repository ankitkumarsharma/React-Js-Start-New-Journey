import Header from "./Header";
import Slider from "./Slider";
import { slideJson } from "../utils/slideJson";
const Body = () => {
    return (
        <>
            <Header />
            <Slider data={slideJson} />
        </>
    );
}

export default Body;