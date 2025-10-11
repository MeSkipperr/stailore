import React from "react";
import QuantityInput from "../quantity-input";
import PriceDisplay from "../price-display";

interface CartTableItemProps {
    image?: string;
    title: string;
    type?: string;
    price: number;
    quantity: number;
    setQuantity: React.Dispatch<React.SetStateAction<number>>;
    currency?: "USD" | "IDR";
    className?: string;
    deleteHandler?: () => void;
}

const CartTableItem: React.FC<CartTableItemProps> = ({
    image,
    title,
    type,
    price,
    quantity,
    setQuantity,
    currency = "USD",
    className = "",
    deleteHandler
}) => {
    const total = price * quantity;

    return (
        <tr className={` border-b border-text/20 ${className}`}>
            {/* Product detail */}
            <td className="flex  gap-4 py-3">
                <div className="rounded-xl size-32 bg-gray-100  overflow-hidden flex items-center justify-center">

                </div>
                <div className="flex flex-col h-full j">
                    <span className="font-semibold text-lg">{title}</span>
                    {type && <span className="text-text/80 text-base ">{type}</span>}
                </div>
            </td>

            {/* Quantity */}
            <td className="  ">
                <QuantityInput
                    deleteHandler={deleteHandler}
                    state={quantity}
                    setState={setQuantity}
                    add={1}
                    className="border border-text rounded-full h-8 m-auto "
                />
            </td>

            {/* Price */}
            <td className="  h-full ">
                <PriceDisplay
                    amount={price}
                    currency={currency}
                    className=" text-base  w-full flex justify-center "
                />
            </td>

            {/* Total */}
            <td className="text-center">
                <PriceDisplay
                    amount={total}
                    currency={currency}
                    className=" text-base  w-full flex justify-center"
                />
            </td>
        </tr>
    );
};

export default CartTableItem;
