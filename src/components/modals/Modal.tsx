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
            <div className="bg-white px-5 py-2 rounded-md shadow-lg relative">
                {children}
            </div>
        </div>,
        document.body
    )
}