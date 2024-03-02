import {useState} from 'react';

function Event3() {
    const [name, setName] = useState();
    function increaseCount(){
        setName('Ankit Sharma');
    }
    return(
        <div>
            <button type="button" onClick={increaseCount}>Show full name</button>
            {name}
        </div>
    );
}

export default Event3;