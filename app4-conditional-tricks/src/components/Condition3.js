const Item = ({data}) =>{
    return (
        <li>
            {data.stocked ? (
                <del>
                    data.name
                </del>
            ): data.name}
        </li>
    );
}

const Condition3 = ({products}) => {
    const itemList = products.map((item,index)=>(
        <Item key={index} data={item}/>
    ))
    return(
        <>
            <h1>Dummy List</h1>
            <ul>
            {itemList}
            </ul>
        </>
    );
}

export default Condition3;