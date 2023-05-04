import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    if (type === 'textarea') {
        return (
            <div className='flex flex-col items-start'>
                <textarea
                    {...props}
                    className={`border-gray-300 :ocus:border-primary/70 focus:ring-primary/50 rounded-md shadow-sm ${className}`}
                    ref={input}></textarea>
            </div>
        )
    }

    if (type === 'file') {
        return (
            <div className='flex items-center'>
                <span class="sr-only">Choose profile photo</span>
                <input
                    {...props}
                    type='file'
                    className={`text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-gray-700 hover:file:bg-violet-100 ${className}`}
                />
            </div>
        )
    }

    return (
        <div className="flex flex-col items-start">
            <input
                {...props}
                type={type}
                className={
                    `border-gray-300 focus:border-primary/70 focus:ring-primary/50 rounded-md shadow-sm ${className}`
                }
                ref={input}
            />
        </div>
    );
});
