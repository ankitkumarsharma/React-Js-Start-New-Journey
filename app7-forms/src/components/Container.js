const Container = ({children})=>{
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Container;