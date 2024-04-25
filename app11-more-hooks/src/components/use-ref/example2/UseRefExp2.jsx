import { useRef } from "react";

const UseRefExp2 = ()=>{
    // we can use any browser API with useRef , implement with any input/DOM element by exp like >> inputRef.current.focus(), inputRef.current.scrollIntoView();
    const inputRef = useRef(null);
    const handleClick = ()=>{
        inputRef.current.focus();
    }
    return(
        <>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>Focus on the Input</button>
        </>
    );
}

export default UseRefExp2;