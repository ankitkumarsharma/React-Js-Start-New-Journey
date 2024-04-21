import { useRef } from "react"

const CountUseRefWithItExp1 = () => {
    let countRef = useRef(0);

  function handleClick() {
    console.log("current value ",countRef.current)
    // This doesn't re-render the component!
    countRef.current = countRef.current + 1;
  }

  return (
    <button onClick={handleClick}>
      You clicked {countRef.current} times
    </button>
  );
}

export default CountUseRefWithItExp1;