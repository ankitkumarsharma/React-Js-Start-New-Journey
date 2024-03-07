const Container = ({colName,children})=>{
    return(
        <div className="container mt-3">
            <div className="row">
                <div className={colName}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Container;