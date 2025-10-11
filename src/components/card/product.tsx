"use client";

import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import HoverText from "../hover-text";
import PriceDisplay from "../price-display";
import QuantityInput from "../quantity-input";
import { CartItem, Currency } from "@/models/cart";
import { useLocalStorageState } from "@/utils/useLocalStorage";
import { ProductCardProps } from "./product-group";
import { convertCurrency } from "@/utils/currencyConvert";

type ProductCardParms = ProductCardProps & {
    currency: Currency
    position: "left" | "right"
}


const ProductCard: React.FC<ProductCardParms> = ({
    position,
    currency,
    id,
    imageUrl,
    type,
    priceIDR,
    isAvailable,
    description,
    name,
}) => {
    const isEven = position === "right";
    const [indexTagSelected, setIndexTagSelected] = useState(0);
    const [quantityInput, setQuantityInput] = useState(1);

    const productImage = [
        imageUrl,
        ...type.map((item) => item.imageUrl),
    ];

    const [cart, setCart, cartActions] = useLocalStorageState<CartItem[]>("cart", []);

    const addToCartHelper = () => {
        const selectedType = type[indexTagSelected];

        const productDetail: CartItem = {
            id:
                crypto?.randomUUID?.() ??
                Math.random().toString(36).substring(2) + Date.now().toString(36),
            productId: id,
            productTypeId: selectedType.id,
            productName: name,
            typeName: selectedType.name,
            imageUrl: selectedType.imageUrl,
            quantity: quantityInput,
            priceIDR: selectedType.priceIDR,
            totalPriceIDR: selectedType.priceIDR * quantityInput,
        };

        const existingItem = cart.find(
            (item) =>
                item.productId === productDetail.productId &&
                item.productTypeId === productDetail.productTypeId
        );

        if (existingItem) {
            // Pastikan id tetap sama dengan yang sudah ada
            productDetail.id = existingItem.id;

            // Update quantity dan total harga
            const updatedQuantity = existingItem.quantity + quantityInput;
            const updatedTotal = existingItem.priceIDR * updatedQuantity;

            cartActions.updateItem("id", existingItem.id, {
                quantity: updatedQuantity,
                totalPriceIDR: updatedTotal,
            });
        } else {
            // Tambahkan item baru jika belum ada
            cartActions.addItem(productDetail);
        }
    };



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
                    <h1 className="text-5xl">{name}</h1>
                    <p className="w-2/3 text-xl">{description}</p>
                    <PriceDisplay
                        amount={convertCurrency(currency, type[indexTagSelected].priceIDR)}
                        currency={currency}
                        className=" font-bold text-2xl"
                    />
                    <div className="h-[1px] bg-text w-full"></div>

                    {/* Tags */}
                    <ul
                        className={`flex flex-wrap ${isEven ? "justify-end" : "justify-start"
                            } w-1/2 tracking-wide gap-4`}
                    >
                        {type.map((tag, index) => (
                            <li
                                key={`${id}-${index}`}
                                className={`text-lg rounded-full cursor-pointer hover:text-secondary ${index === indexTagSelected
                                    ? "text-secondary font-bold underline"
                                    : "text-base"
                                    }`}
                                onClick={() => setIndexTagSelected(index)}
                            >
                                <HoverText>{tag.name}</HoverText>
                            </li>
                        ))}
                    </ul>

                    <QuantityInput
                        disabled={!type[indexTagSelected].isAvailable}
                        state={quantityInput}
                        setState={setQuantityInput}
                        add={1}
                        className="border border-text rounded-full h-10"
                    />
                    {!type[indexTagSelected].isAvailable && <p className="text-lg text-red-500 italic">This product is currently unavailable.</p>}

                </div>

                {/* Harga & Tombol */}
                <div
                    className={`w-full flex ${!isEven ? "justify-start " : "justify-end"
                        } gap-4`}
                >
                    <button
                        onClick={addToCartHelper}
                        disabled={!type[indexTagSelected].isAvailable}
                        className={`bg-secondary text-white py-3 px-4 rounded-2xl flex justify-center items-center gap-2
                            ${type[indexTagSelected].isAvailable ? "cursor-pointer hover:bg-secondary/80" : "cursor-not-allowed opacity-50"}`}
                    >
                        <HoverText>
                            <span className="flex justify-center gap-2">
                                <CiShoppingCart className="size-6" />
                                {type[indexTagSelected].isAvailable ? "Add to cart" : "Out of stock"}
                            </span>
                        </HoverText>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default ProductCard;
