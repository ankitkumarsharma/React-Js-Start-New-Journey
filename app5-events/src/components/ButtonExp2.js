import {useState} from 'react';
const ButtonExp2 = () => {
    const [number, setNumber] = useState(0);
    return (
      <>
        <h2>{number}</h2>
        <button onClick={()=>{
          setNumber(number + 2);
          alert(`2 number will be increase...now ${number+2}`);
        }}>Button with +2 count</button>
      </>
    );
}

export default ButtonExp2;


