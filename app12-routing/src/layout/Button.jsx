const Button = ({ title, onClick, type }) => {
    const bgSubmitClass = 'bg-teal-800';
    const bgButtonClass = 'bg-gray-500';
    const bgDefaultClass = 'bg-indigo-600';
    const bgColor = (type === undefined) ? bgDefaultClass : ((type === 'submit') ? bgSubmitClass : bgButtonClass);
    const className = `${bgColor} min-w-24 text-white p-1 pl-2 pr-2 h-8 rounded`;
    return <button type={type} onClick={onClick} className={className} >
        {title}
    </button>
}

export default Button;