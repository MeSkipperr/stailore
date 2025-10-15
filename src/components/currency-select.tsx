"use client"

import { Currency } from "@/models/cart";
import { useLocalStorageState } from "@/utils/useLocalStorage";
import { useEffect, useState } from "react";
import HoverText from "./hover-text";

const CurrencySelect = () => {
    const [isClient, setIsClient] = useState(false);
    const [currency, setCurrency] = useLocalStorageState<Currency[]>("currency", ["USD"]);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleChange = (cur: Currency) => {
        setCurrency([cur]);
    };

    if (!isClient) return null;

    return (
        <div className="flex  gap-4 items-center">
            <button
                onClick={() => handleChange("USD")}
                className={`rounded-2xl cursor-pointer transition-all flex items-center px-4 py-2  ${currency[0] === "USD" ? " font-bold  bg-secondary  text-white " : "hover:underline hover:font-bold"}`}
            >
                <HoverText>
                    USD
                </HoverText>
            </button>
            <span>|</span>
            <button
                onClick={() => handleChange("IDR")}
                className={`rounded-2xl cursor-pointer transition-all flex items-center px-4   py-2  ${currency[0] === "IDR" ? " font-bold   bg-secondary text-white" : "hover:underline hover:font-bold"}`}
            >
                <HoverText >
                    IDR
                </HoverText>
            </button>
        </div>
    );
}

export default CurrencySelect;