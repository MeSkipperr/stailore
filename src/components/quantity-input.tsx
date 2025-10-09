interface QuantityInputProps {
    className?: string; // untuk mengubah tampilan UI
    state: number; // nilai quantity
    setState: React.Dispatch<React.SetStateAction<number>>; // fungsi untuk mengubah state
    add?: number; // jumlah yang ditambahkan/dikurangi per klik, default 1
    min?: number; // batas minimum, default 1
    max?: number; // batas maksimum, default Infinity
}

const QuantityInput: React.FC<QuantityInputProps> = ({
    className = "",
    state,
    setState,
    add = 1,
    min = 1,
    max = Infinity,
}) => {
    const decrease = () => {
        setState((prev) => Math.max(prev - add, min));
    };

    const increase = () => {
        setState((prev) => Math.min(prev + add, max));
    };

    return (
        <div
            className={`flex items-center  w-fit select-none   ${className}`}
        >
            <button
                onClick={decrease}
                className="hover:bg-text/20 rounded-l-full h-full text-lg font-semibold aspect-square  transition cursor-pointer"
            >
                -
            </button>
            <span className="px-4 py-1 text-center w-[40px]">{state}</span>
            <button
                onClick={increase}
                className="hover:bg-text/20 rounded-r-full h-full text-lg font-semibold aspect-square    transition cursor-pointer"
            >
                +
            </button>
        </div>
    );
};

export default QuantityInput;
