import { useState, useEffect } from "react";
import { FaUpload } from "react-icons/fa";

export default function ImageUpload({ newPlayer, setNewPlayer, field = "foto" }) {
    const [preview, setPreview] = useState(null);

    useEffect(() => {
        if (newPlayer[field]) {
            setPreview(URL.createObjectURL(newPlayer[field]));
        } else {
            setPreview(null);
        }
    }, [newPlayer, field]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNewPlayer({ ...newPlayer, [field]: file });
            setPreview(URL.createObjectURL(file));
        }
    };

    return (
        <div className="flex flex-col items-center">
            <label className="w-50 h-50 cursor-pointer bg-neutral-800 rounded-2xl flex justify-center items-center overflow-hidden relative">
                {!preview ? (
                    <div className="flex flex-col items-center text-neutral-400">
                        <FaUpload size={32} />
                        <span className="text-sm mt-2">Adicionar Foto</span>
                    </div>
                ) : (
                    <img
                        src={preview}
                        alt="Preview"
                        className="object-cover w-full h-full"
                    />
                )}
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                />
            </label>
        </div>
    );
}
