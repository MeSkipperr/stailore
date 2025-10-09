"use client";

import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import HoverText from "../hover-text";
import PriceDisplay from "../price-display";
import QuantityInput from "../quantity-input";

interface ProductCardProps {
    id: number;
    title: string;
    description: string;
    price: number;
    currency?: "IDR" | "USD";
    tags: string[];
    imageUrl?: string;
    position?: "left" | "right"; // menentukan orientasi card
}

const ProductCard: React.FC<ProductCardProps> = ({
    id,
    title,
    description,
    price,
    currency = "IDR",
    tags,
    imageUrl,
    position = "left",
}) => {
    const isEven = position === "right";
    const [indexTagSelected, setIndexTagSelected] = useState(0);
    const [quantityInput, setQuantityInput] = useState(1);

    return (
        <div
            className={`w-full h-[50dvh] flex ${isEven ? "flex-row-reverse" : ""
                } justify-start items-center gap-8`}
        >
            {/* Gambar */}
            <div
                className="w-1/3 h-full bg-accent rounded-2xl bg-cover bg-center"
                style={{
                    backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
                }}
            ></div>

            {/* Konten */}
            <div
                className={`flex flex-col flex-1 items-${isEven ? "end" : "start"
                    } justify-between h-full`}
            >

                <div
                    className={`space-y-4 flex flex-col ${isEven ? "items-end text-right" : "items-start text-left"
                        }`}
                >
                    <h1 className="text-5xl">{title}</h1>
                    <p className="w-2/3 text-xl">{description}</p>
                    <PriceDisplay
                        amount={price}
                        currency={currency}
                        className=" font-bold text-2xl"
                    />
                    <div className="h-[1px] bg-text w-full"></div>

                    {/* Tags */}
                    <ul
                        className={`flex flex-wrap ${isEven ? "justify-end" : "justify-start"
                            } w-1/2 tracking-wide gap-4`}
                    >
                        {tags.map((tag, index) => (
                            <li
                                key={`${id}-${index}`}
                                className={`text-lg rounded-full cursor-pointer hover:text-secondary ${index === indexTagSelected
                                    ? "text-secondary font-bold underline"
                                    : "text-base"
                                    }`}
                                onClick={() => setIndexTagSelected(index)}
                            >
                                <span>{tag}</span>
                            </li>
                        ))}
                    </ul>
                    <QuantityInput
                        state={quantityInput}
                        setState={setQuantityInput}
                        add={1}
                        className="border border-text rounded-full h-10"
                    />
                </div>

                {/* Harga & Tombol */}
                <div
                    className={`w-full flex ${!isEven ? "justify-start " : "justify-end"
                        } gap-4`}
                >
                    {isEven ? (
                        <>
                            <button className="cursor-pointer bg-secondary text-white py-3 px-4 rounded-2xl flex justify-center items-center gap-2">
                                <HoverText>
                                    <span className="flex justify-center gap-2">
                                        <CiShoppingCart className="size-6" />
                                        Add to cart
                                    </span>
                                </HoverText>
                            </button>
                        </>
                    ) : (
                        <>
                            <button className="cursor-pointer bg-secondary text-white py-3 px-4 rounded-2xl flex justify-center items-center gap-2">
                                <CiShoppingCart className="size-6" />
                                Add to cart
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
