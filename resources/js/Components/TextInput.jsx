import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
    { type = "text", className = "", isFocused = false, ...props },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    if (type === "textarea") {
        return (
            <div className="flex flex-col items-start">
                <textarea
                    ref={ref}
                    {...props}
                    className={`border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ${className}`}
                ></textarea>
            </div>
        );
    }

    if (type === "upload") {
        return (
            <div className="flex flex-col items-start">
                <input
                    type="file"
                    className={`block w-full text-sm text-slate-50 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 ${className}`}
                    ref={ref}
                    {...props}
                />
            </div>
        );
    }

    return (
        <div className="flex flex-col items-start">
            <input
                {...props}
                type={type}
                className={`border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ${className}`}
                ref={input}
            />
        </div>
    );
});
