import React from "react";
import { CiTrash } from "react-icons/ci";

interface QuantityInputProps {
    className?: string; // untuk mengubah tampilan UI
    state: number; // nilai quantity
    setState: (value: number | ((prev: number) => number)) => void;// fungsi untuk mengubah state
    add?: number; // jumlah yang ditambahkan/dikurangi per klik, default 1
    min?: number; // batas minimum, default 1
    max?: number; // batas maksimum, default Infinity
    disabled?: boolean; // menonaktifkan tombol + dan -
    deleteHandler?: () => void;
}

const QuantityInput: React.FC<QuantityInputProps> = ({
    className = "",
    state,
    setState,
    add = 1,
    min = 1,
    max = Infinity,
    disabled = false,
    deleteHandler,
}) => {
    const decrease = () => {
        if (disabled) return;

        if (state === min && deleteHandler) {
            deleteHandler();
        } else if (state > min) {
            setState((prev) => Math.max(prev - add, min));
        }
    };

    const increase = () => {
        if (!disabled) setState((prev) => Math.min(prev + add, max));
    };

    const showTrash = state === min && !!deleteHandler;

    return (
        <div
            className={`flex items-center justify-center w-fit select-none  ${className} ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
        >
            <button
                onClick={decrease}
                disabled={disabled || (state === min && !deleteHandler)}
                className={`rounded-l-2xl h-full text-lg font-semibold aspect-square transition flex justify-center items-center
        ${disabled || (state === min && !deleteHandler)
                        ? "opacity-50 cursor-default"
                        : "hover:bg-text/20 cursor-pointer"
                    }`}
            >
                {showTrash ? <CiTrash /> : "-"}
            </button>

            <span className="px-4 py-1 flex justify-center w-[40px]">{state}</span>

            <button
                onClick={increase}
                disabled={disabled}
                className={`rounded-r-2xl h-full text-lg font-semibold aspect-square transition
        ${disabled || (state === max)
                        ? "opacity-50 cursor-default"
                        : "hover:bg-text/20 cursor-pointer"
                    }`}
            >
                +
            </button>
        </div>
    );
};

export default QuantityInput;
