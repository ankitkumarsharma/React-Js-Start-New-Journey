import { useRef, useState } from "react";

const UseRefExp3 = ()=>{
    // Best practices for DOM manipulation with useRef
    const [show, setShow] = useState(true);
    const ref = useRef(null);

    return(
        <>
            <button onClick={()=> setShow(!show)}>Toggle with setState</button>
            <button onClick={()=> {ref.current.remove()}}>Remove from the DOM</button>
            {show ? <p ref={ref}>Hello World</p> : ''}
        </>
    );
}

export default UseRefExp3;