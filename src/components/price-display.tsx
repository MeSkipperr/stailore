import React from "react";

interface PriceDisplayProps {
    currency?: "IDR" | "USD"; 
    amount: number;           
    quantity?: number;       
    className?: string;      
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({
    currency = "IDR",
    amount,
    quantity = 0,
    className = "",
}) => {
    const formatPrice = (value: number, currency: "IDR" | "USD") =>
        new Intl.NumberFormat(currency === "USD" ? "en-US" : "id-ID", {
            style: "currency",
            currency,
            minimumFractionDigits: currency === "USD" ? 2 : 0,
            maximumFractionDigits: currency === "USD" ? 2 : 0,
        }).format(value);

    return (
        <div className={`flex items-center gap-1  ${className}`}>
            <span >
                {formatPrice(amount, currency)}
            </span>

            {quantity > 0 && (
                <span className="text-gray-500 text-sm">
                    / {quantity} {quantity > 1 ? "pcs" : "pc"}
                </span>
            )}
        </div>
    );
};

export default PriceDisplay;
