import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // we can create decrementCount method in 2 way
  // const decrementCount = ()=>{
  //   setCount(preCount => preCount - 1)
  // }
  function decrementCount(){
    setCount(preCount => preCount - 1)
  }
  function incrementCount(){
    setCount(preCount => preCount + 1)
  }
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-1">
            <button onClick={decrementCount} className="btn btn-primary">-</button>
          </div>
          <div className="col-1">
            <span>{count}</span>
          </div>
          <div className="col-1">
            <button onClick={incrementCount} className="btn btn-primary">+</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
