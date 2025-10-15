"use client";

import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import HoverText from "../../hover-text";
import PriceDisplay from "../../price-display";
import QuantityInput from "../../quantity-input";
import { CartItem } from "@/models/cart";
import { useLocalStorageState } from "@/utils/useLocalStorage";
import { ProductCardProps } from "./product-group";
import DotIndicator from "@/components/dot-indicator";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

type ProductCardParms = ProductCardProps & {
    position: "left" | "right"
}


const ProductCard: React.FC<ProductCardParms> = ({
    position,
    id,
    imageUrl,
    type,

    description,
    name,
}) => {
    const isEven = position === "right";
    const [indexTagSelected, setIndexTagSelected] = useState(0);
    const [productImageIndex, setProductImageIndex] = useState(0);
    const [quantityInput, setQuantityInput] = useState(1);

    const productImage = [
        imageUrl,
        ...type.map((item) => item.imageUrl),
    ];

    const handlePrevImage = () => {
        setProductImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleNextImage = () => {
        setProductImageIndex((prev) =>
            prev < productImage.length - 1 ? prev + 1 : prev
        );
    };

    const [cart, , cartActions] = useLocalStorageState<CartItem[]>("cart", []);

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
            className={`w-full h-auto lg:h-[50dvh] flex flex-col  lg:flex-row ${isEven ? "lg:flex-row-reverse" : ""
                } justify-start items-center gap-8`}
        >
            {/* Gambar */}
            <div
                className="w-full aspect-square lg:w-1/3 h-full bg-accent rounded-2xl bg-cover bg-center relative"
            >
                <Image
                    src={productImage[productImageIndex]}
                    fill
                    alt=""
                    className="rounded-2xl"
                />
                <div className="absolute inset-0  flex justify-between">
                    <button
                        onClick={handlePrevImage}
                        disabled={productImageIndex === 0}
                        className={`h-full w-1/4 flex items-center justify-center cursor-pointer transition 
                                    ${productImageIndex === 0 ? "opacity-0 cursor-default" : "opacity-100  cursor-pointer"}`}
                    >
                        <IoIosArrowBack className="size-1/3" />
                    </button>

                    <button
                        onClick={handleNextImage}
                        disabled={productImageIndex === productImage.length - 1}
                        className={`h-full w-1/4 flex items-center justify-center transition
                                    ${productImageIndex === productImage.length - 1 ? "opacity-0 cursor-default" : "opacity-100  cursor-pointer"}`}
                    >
                        <IoIosArrowForward className="size-1/3" />
                    </button>

                    <div
                        className="absolute bottom-0 w-full  h-1/6 flex justify-center items-center gap-2">
                        <DotIndicator
                            count={productImage.length}
                            activeIndex={productImageIndex}
                            className=" w-full  h-10 "
                            inactiveColor="bg-accent"
                            activeColor="bg-accent-hover"
                        />
                    </div>
                </div>
            </div>

            {/* Konten */}
            <div
                className={`w-full flex flex-col flex-1 gap-4 lg:gap-0 ${isEven ? "items-start lg:items-end" : "items-start"
                    } justify-between h-full`}
            >

                <div
                    className={`w-full space-y-4 flex flex-col ${isEven ? "lg:items-end lg:text-right" : "items-start text-left"
                        }`}
                >
                    <h1 className="text-5xl">{name}</h1>
                    <p className="w-2/3 text-sm lg:text-xl">{description}</p>
                    <PriceDisplay
                        amount={type[indexTagSelected].priceIDR}
                        className=" font-bold text-lg lg:text-2xl "
                    />
                    <div className="h-[1px] bg-text w-full"></div>

                    {/* Tags */}
                    <ul
                        className={`flex flex-wrap ${isEven ? "lg:justify-end" : "justify-start"
                            } w-1/2 tracking-wide gap-4`}
                    >
                        {type.map((tag, index) => (
                            <li
                                key={`${id}-${index}`}
                                className={`text-sm lg:text-lg rounded-full cursor-pointer hover:text-secondary ${index === indexTagSelected
                                    ? "text-secondary font-bold underline"
                                    : "text-base"
                                    }`}
                                onClick={() => {
                                setIndexTagSelected(index),
                                setProductImageIndex(index+1)
                                }}
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
                        className="border border-text rounded-2xl h-8 lg:h-10"
                    />
                    {!type[indexTagSelected].isAvailable && <p className="text-lg text-red-500 italic">This product is currently unavailable.</p>}

                </div>

                <div
                    className={`w-full flex ${!isEven ? "justify-end lg:justify-start " : "justify-end"
                        } gap-4`}
                >
                    <button
                        onClick={addToCartHelper}
                        disabled={!type[indexTagSelected].isAvailable}
                        className={`bg-secondary text-white py-3 px-4 rounded-2xl flex justify-center items-center gap-2 text-sm lg:text-base
                            ${type[indexTagSelected].isAvailable ? "cursor-pointer transition-all hover:bg-secondary/80" : " opacity-50"}`}
                    >
                        <HoverText>
                            <span className="flex justify-center gap-2 items-center">
                                <CiShoppingCart className="size-4 lg:size-6" />
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
