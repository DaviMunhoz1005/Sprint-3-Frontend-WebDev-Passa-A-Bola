import Input from "./Input";
import ImageUpload from "./ImageUpload";

export default function FormField({ 
    type = "text", 
    placeholder, 
    value, 
    onChange, 
    options = [],   
    formatFn,       
    field, 
    setNewPlayer,
    newPlayer,
    isSelect = false,
    isUpload = false,
}) {
    if (isSelect) {
        return (
            <select
                value={value}
                onChange={(e) => setNewPlayer({ ...newPlayer, [field]: e.target.value })}
                className="border border-neutral-300 rounded-2xl px-3 py-3 hover:border-neutral-400 focus:border-neutral-500 focus:outline-none w-full transition duration-300 text-neutral-500"
            >
                <option value="">{placeholder}</option>
                {options.map((opt) => (
                <option key={opt} value={opt}>
                    {opt}
                </option>
                ))}
            </select>
        );
    }

    if (isUpload) {
        return (
            <ImageUpload
                newPlayer={newPlayer}
                setNewPlayer={setNewPlayer}
                field={field}
                size={48}
            />
        );
    }

    return (
        <Input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => {
                let val = e.target.value;
                if (formatFn) val = formatFn(val);
                setNewPlayer({ ...newPlayer, [field]: val });
            }}
        />
    );
}
