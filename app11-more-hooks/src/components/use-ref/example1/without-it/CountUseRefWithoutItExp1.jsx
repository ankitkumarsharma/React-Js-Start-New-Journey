import { useState } from "react";

const CountUseRefWithoutItExp1 = () => {
    const [count, setCount] = useState(0);

    function handleClick() {
        // This re-render the component!
        setCount(count + 1);
        console.log("current value ",count)
    }

    return (
        <button onClick={handleClick}>
            You clicked {count} times
        </button>
    );
}

export default CountUseRefWithoutItExp1;