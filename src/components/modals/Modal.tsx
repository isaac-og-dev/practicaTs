import ReactDOM from 'react-dom';

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export function Modal({ open, onClose, children }: ModalProps) {
    if (!open) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-black"
                >
                    ✕
                </button>
                {children}
            </div>
        </div>,
        document.body
    )
}