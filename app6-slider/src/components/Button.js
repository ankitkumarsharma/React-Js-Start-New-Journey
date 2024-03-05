const Button = ({onClick, inactive, children}) => {
    let className;
    if(inactive) {
        className = "bg-gray-500";
    } else {
        className = "bg-teal-500";
    }
    return (
        <button className={`h-10 w-24 text-white ${className}`} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;