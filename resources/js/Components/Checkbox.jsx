export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                `rounded border-gray-300 text-primary/80 shadow-sm focus:ring-primary/80 ${className}`
            }
        />
    );
}
