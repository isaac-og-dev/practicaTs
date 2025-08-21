type BtnProps = {
    type?: "button" | "submit" | "reset";
    text: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export function BtnBlueComponent({
    type = "button",
    text,
    onClick,
}: BtnProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            className="bg-medium-dark-blue hover:bg-dark-blue active:bg-medium-blue text-white font-bold
            w-full p-2 mb-2 cursor-pointer rounded-lg"
        >
            {text}
        </button>
    );
}

export function BtnRedComponent({
    type = "button",
    text,
    onClick,
}: BtnProps) {
    return(
        <button 
            type={type}
            onClick={onClick}
            className="text-white font-bold
            w-full p-2 mb-2 cursor-pointer rounded-lg
            bg-red-600 hover:bg-red-700 active:bg-red-500"
        >
            {text}
        </button>
    );
}
