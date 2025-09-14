import clsx from "clsx";

export default function Button({
    children,
    variant = "pink",
    size = "medium",
    className,
    ...props
}) {
    const base = "text-white font-bold rounded-xl transition duration-300 focus:outline-none";

    const colors = {
        pink: "bg-contrast-pink hover:bg-contrast-pink-hover",
        gray: "bg-gray-400 hover:bg-gray-500",
        green: "bg-green-500 hover:bg-green-600",
        red: "bg-red-500 hover:bg-red-600",
    };

    const sizes = {
        small: "py-2 px-3 w-4/12",
        medium: "py-3 px-4 w-7/12",
        large: "py-4 px-6 w-10/12",
    };

    return (
        <button
            className={clsx(base, colors[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </button>
    );
}
