const Input = ({ label, id, type, name, placeholder, register, errors, isRequired, maxLength, minLength, pattern, patternMessage }) => {
    return (
        <div className="row mb-3 form-group">
            <div className="col-4">
                <label id={id}>{label}</label>
            </div>
            <div className="col-8">
                <input className="form-control" {...register(name, {
                    required: {
                        value: isRequired,
                        message: `${label} is required field`
                    },
                    maxLength: {
                        value: maxLength,
                        message: `Value must be maximum ${maxLength}`
                    },
                    minLength: {
                        value: minLength,
                        message: `Value must be minimum ${minLength}`
                    },
                    pattern: {
                        value: pattern,
                        message: pattern != null ? patternMessage: ''
                    },
                })} type={type} placeholder={placeholder} />
                <p className="error mb-0">
                    {errors[name] && errors[name].message}
                </p>
            </div>
        </div>
    )
}

export default Input;