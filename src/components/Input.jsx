import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

export default function Input({ type = "text", placeholder, className = "", ...props }) {
    const [showPassword, setShowPassword] = useState(false);
    const inputType = type === "password" && showPassword ? "text" : type;

    const baseClasses =
        "border border-neutral-300 rounded-2xl px-3 py-3 hover:border-neutral-400 focus:border-neutral-500 focus:outline-none w-full transition duration-300 text-neutral-500";

    return (
        <div className="relative w-full">
            <input
                type={inputType}
                placeholder={placeholder}
                className={`${baseClasses} ${className}`}
                {...props}
            />

            {type === "password" && (
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent text-neutral-400"
                >
                    {showPassword ? <HiEyeOff size={30} /> : <HiEye size={30} />}
                </button>
            )}
        </div>
    );
}
