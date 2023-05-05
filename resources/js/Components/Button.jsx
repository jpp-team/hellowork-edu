import clsx from "clsx";
import React from "react";

const Button = ({ variant, className, children, ...props }) => {
    const variantClasses = {
        primary: "bg-primary/80 text-white border border-transparent hover:bg-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none",
        secondary: "bg-secondary/90 text-white border border-transparent hover:bg-secondary focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:outline-none",
        outline: "bg-primary/10 border border-primary hover:bg-primary/30 focus:ring-2 focus:ring-primary/80 focus:ring-offset-2 focus:outline-none",
    };

    return (
        <button
            className={clsx(
                "inline-flex items-center px-8 py-2 rounded-md transition ease-in-out duration-200",
                variantClasses[variant],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
