import {useState} from 'react';

function Event2() {
    const [count, setCount] = useState(0);
    function increaseCount(){
        setCount(count + 1);
    }
    return(
        <div>
            <button type="button" onClick={increaseCount}>Show count {count} times</button>
        </div>
    );
}

export default Event2;