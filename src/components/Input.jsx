export default function Input({ type = "text", placeholder, ...props }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className="border border-neutral-300 rounded-2xl px-3 py-3 hover:border-neutral-400 focus:border-neutral-500 focus:outline-none w-full transition duration-300"
            {...props}
        />
    );
}
