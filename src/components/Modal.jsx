export default function Modal({ title, children, onClose }) {
    return (
        <div className="fixed inset-0 flex justify-center items-center z-50">
            <div 
                id="modal"
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />
            
            <div className="relative bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-10/12 lg:w-5/12 z-10">
                {title && <h2 className="text-4xl font-medium mb-4">{title}</h2>}
                {children}
            </div>
        </div>
    );
}
