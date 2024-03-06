import { useState } from 'react';
import SliderContainer from './SliderContainer';

const Slider = ({ data }) => {
    const [count, setCount] = useState(0);
    let prevInactive = false;
    let nextInactive = false;
    const nextCount = () => {
        if (count < data.length - 1) setCount(count + 1);
    }
    const prevCount = () => {
        if (count > 0) setCount(count - 1);
    }
    if (count === 0) prevInactive = true;
    if (count === data.length - 1) nextInactive = true;
    return <SliderContainer
        prevInactive={prevInactive}
        nextInactive={nextInactive}
        nextCount={nextCount}
        prevCount={prevCount}
        count={count}
        data={data}
    />;
}

export default Slider;