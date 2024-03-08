const Column = ({className,children})=>{
    return(
        <div className={className ? className: 'col'}>
            {children}
        </div>
    );
}

export default Column;