const Item = ({name,isPacked}) =>{
    if(isPacked){
        return <li>{name}</li>
    } else {
        return null;
    }
}

const Condition1 = () => {
    return(
        <>
            <h1>Dummy List</h1>
            <ul>
                <Item name="Space suit" isPacked={true} />
                <Item name="White blue" isPacked={false}/>
                <Item name="Point Color" isPacked={false}/>
                <Item name="Navy blue" isPacked={true}/>
            </ul>
        </>
    );
}

export default Condition1;