export default function Button({ children, ...props }) {
    return (
        <button
            className="py-3 px-4 bg-contrast-pink w-10/12 text-white font-bold rounded-xl hover:bg-contrast-pink-hover transition duration-400"
            {...props}
        >
            {children}
        </button>
    );
}
