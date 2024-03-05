const ListItem = ({name,isPacked}) =>{
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
                <ListItem name="Space suit" isPacked={true} />
                <ListItem name="White blue" isPacked={false}/>
                <ListItem name="Point Color" isPacked={false}/>
                <ListItem name="Navy blue" isPacked={true}/>
            </ul>
        </>
    );
}

export default Condition1;