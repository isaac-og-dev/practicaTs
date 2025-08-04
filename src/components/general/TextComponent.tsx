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
        <div className="flex flex-col mb-4">
            {label && (
                <label htmlFor={name} className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
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
                className="placeholder-medium-gray border-b-2 border-medium-blue w-full p-2 focus:outline-none focus:shadow-md focus:dark-blue"
            />
            {error && <span className="text-start text-sm text-red-500 mt-1">{error}</span>}
        </div>
    );
}