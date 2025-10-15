"use client"
import { Currency } from "@/models/cart";
import { convertCurrency } from "@/utils/currencyConvert";
import { useLocalStorageState } from "@/utils/useLocalStorage";
import React, { useEffect, useState } from "react";

interface PriceDisplayProps {
    currency?: "IDR" | "USD";
    amount: number;
    quantity?: number;
    className?: string;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({
    amount,
    quantity = 0,
    className = "",
}) => {
    const [currency] = useLocalStorageState<Currency[]>("currency", ["USD"]);
    const [isClient, setIsClient] = useState(false);

    // Pastikan render hanya setelah komponen terpasang di client
    useEffect(() => {
        setIsClient(true);
    }, []);

    const formatPrice = (value: number, currency: "IDR" | "USD") =>
        new Intl.NumberFormat(currency === "USD" ? "en-US" : "id-ID", {
            style: "currency",
            currency,
            minimumFractionDigits: currency === "USD" ? 2 : 0,
            maximumFractionDigits: currency === "USD" ? 2 : 0,
        }).format(value);

    // Hindari render sebelum client siap
    if (!isClient) {
        // opsional: kamu bisa kembalikan nilai placeholder
        return <span className={className}>...</span>;
    }

    return (
        <div className={`flex items-center gap-1 ${className}`}>
            <span>
                {formatPrice(convertCurrency(currency[0], amount), currency[0])}
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
