import { useSelector } from "react-redux";

const Counter = ()=>{
    const count = useSelector(state => state);
    console.log("Counter", count);
    return(
        <div>
            <h1>{count.count}</h1>
        </div>
    )
}

export default Counter;