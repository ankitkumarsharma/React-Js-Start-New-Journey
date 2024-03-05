import Button from "./Button";
import SlideContent from "./SlideContent";
import { useState } from 'react';

const Slider = ({ data }) => {
    const [count, setCount] = useState(0);
    let prevInactive = false;
    let nextInactive = false;
    const nextCount = () => {
        if (count < 19) setCount(count + 1);
    }
    const prevCount = () => {
        if (count > 0) setCount(count - 1);
    }
    if (count == 0) prevInactive = true;
    if (count == 19) nextInactive = true;
    return (
        <div className="flex m-20">
            <div className="flex-1">
                <Button inactive={prevInactive} onClick={prevCount}>
                    Prev
                </Button>
            </div>
            <div className="flex-1 text-center">
                <SlideContent
                    count={count}
                    data={data}
                />
            </div>
            <div className="flex-1 text-right">
                <Button inactive={nextInactive} onClick={nextCount}>
                    Next
                </Button>
            </div>
        </div>
    );
}

export default Slider;