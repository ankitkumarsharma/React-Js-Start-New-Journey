const Input = ({label, id, type, value, placeholder, onChange})=>{
    return (
        <div className="row mb-3 form-group">
            <div className="col-4">
                <label id={id}>{label}</label>
            </div>
            <div className="col-8">
                <input className="form-control" type={type} value={value} placeholder={placeholder} onChange={onChange} />
            </div>
        </div>
    )
}

export default Input;