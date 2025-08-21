type TextComponentProps = {
    label?: string;
    name: string;
    value: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    Icon?: React.ReactNode;
}

export default function TextComponent({
    label,
    name,
    value,
    placeholder,
    onChange,
    error,
    Icon
}: TextComponentProps) {

    return (
        <div className="flex flex-1 flex-col mb-4">
            {label && (
                <label htmlFor={name} className="text-sm font-medium text-gray-900 mb-1 flex items-center gap-2">
                    {Icon && <span className="text-gray-600">{Icon}</span>}
                    {label}
                </label>
            )}
            <input
                id={name}
                name={name}
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={`w-full p-2 border-2 rounded-lg transition-all duration-200
        placeholder-zinc-700 bg-zinc-300 focus:bg-zinc-100 
        focus:outline-none
        ${error
                        ? "border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200"
                        : "border-gray-300 focus:border-medium-dark-blue focus:ring-2 focus:ring-blue-200"
                    }`}
            />
            {error && <span className="text-start text-sm text-red-500 mt-1">{error}</span>}
        </div>
    );
}