const ButtonExp1 = () => {
    const handleClick = ()=>{
        alert("Child function calling ...")
    }
    return (
        <button onClick={handleClick}>Local Button</button>
    );
}

export default ButtonExp1;

{/* <button onClick={() => {
  alert('You clicked me!');
}}></button> */}


{/* <button onClick={function handleClick() {
  alert('You clicked me!');
}}></button> */}

