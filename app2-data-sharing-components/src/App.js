import './App.css';
import {useState} from 'react';
import MyButton1 from './components/MyButton1';
import MyButton2 from './components/MyButton2';

function App() {
  const [count, setCount] = useState(0);
  function increaseCount(){
    setCount(count + 1);
  }
  return (
     <div>
        <MyButton1 count={count} onClick={increaseCount}/>
        <MyButton1 count={count} onClick={increaseCount}/>
        <MyButton2 count={count} onClick={increaseCount}/>
     </div>
  );
}

export default App;
