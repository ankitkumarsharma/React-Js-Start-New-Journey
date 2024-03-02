const MyButton2 = ({ count, onClick }) => {
    return (
        <div>
            <button onClick={onClick} type="button">MyButton2 Click {count} times</button>
            {count} times
        </div>
    );
}

export default MyButton2;