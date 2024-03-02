const list = [
    {title: 'Mr.', name: 'Ankit Sharma', id:'1'},
    {title: 'Mrs.', name: 'Neha Sharma', id:'2'},
    {title: 'Mrs.', name: 'Gouri Datt', id:'3'},
    {title: 'Mr.', name: 'Manhon Gupta', id:'4'},
    {title: 'Mr.', name: 'Rakesh Shetty', id:'5'},
];

function MyList() {
    const listItems = list.map((item,index)=> (
        <li key={item.id}>
            {item.title} {item.name} - {item.id} , Index - {index}
        </li>
    ));
    return(
        <div>
            <ul>
                {listItems}
            </ul>
        </div>
    );
}

export default MyList;