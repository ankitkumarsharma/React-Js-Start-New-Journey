const Input = ({ label, id, type, name, placeholder, register, errors, isRequired, maxLength, minLength, pattern, patternMessage }) => {
    return (
        <div className="flex mb-3">
            <div className="w-3/6">
                <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white" id={id}>{label}</label>
            </div>
            <div className="w-4/6">
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register(name, {
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
                        message: pattern != null ? patternMessage : ''
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