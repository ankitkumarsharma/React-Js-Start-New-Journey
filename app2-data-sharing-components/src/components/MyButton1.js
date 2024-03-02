const MyButton1 = ({ count, onClick }) => {
    return (
        <div>
            <button onClick={onClick} type="button">MyButton1 Click {count} times</button>
            {count} times
        </div>
    );
}

export default MyButton1;