import { useId, forwardRef } from "react"

const Input = forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId();
    return (
        <div className="w-full">
            {
            label && 
            <label htmlFor={id}
            className="inline-block mb-1 pl-1">
                {label}
            </label>
            }
            <input
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-grey-50 duration-200 border border-grey-200 w-full ${className}`}
            id={id}
            type={type}
            ref={ref}
            {...props}
            />
        </div>
    )
})

export default Input;