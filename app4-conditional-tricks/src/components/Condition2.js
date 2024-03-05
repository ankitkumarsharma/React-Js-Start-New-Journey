const Item = ({name,isPacked}) =>{
    return (
        <li>
            {isPacked ? (
                <del>
                    name
                </del>
            ): name}
        </li>
    );
}

const Condition2 = () => {
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

export default Condition2;