function Event1() {
    function displayPopup(){
        alert("Hi, My name is Ankit !!!");
    }
    return(
        <div>
            <button type="button" onClick={displayPopup}>Show Alert</button>
        </div>
    );
}

export default Event1;