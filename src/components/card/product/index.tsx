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
import ImageSlide from "@/components/animation/image-slide";
import Link from "next/link";

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
    const [direction, setDirection] = useState(1);

    const productImage = [
        imageUrl,
        ...type.map((item) => item.imageUrl),
    ];

    const handlePrevImage = () => {
        setDirection(-1)
        setProductImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleNextImage = () => {
        setDirection(1)
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
                <ImageSlide className="w-full h-full rounded-2xl"
                    image={productImage[productImageIndex]}
                    index={productImageIndex}
                    direction={direction}
                    yRange={[0, 0]}
                    scaleRange={[1, 1]}
                />
                <div className="absolute inset-0  flex justify-between z-10">
                    <button
                        onClick={handlePrevImage}
                        disabled={productImageIndex === 0}
                        className={`h-full w-1/4 flex items-center justify-center cursor-pointer transition 
                                    ${productImageIndex === 0 ? "opacity-0 cursor-default" : "opacity-100  cursor-pointer"}`}
                    >
                        <div className="w-10 aspect-square bg-text/30 hover:bg-text/50 transition flex justify-center items-center rounded-full  ">
                            <IoIosArrowBack className="size-full text-white py-2 " />
                        </div>
                    </button>

                    <button
                        onClick={handleNextImage}
                        disabled={productImageIndex === productImage.length - 1}
                        className={`h-full w-1/4 flex items-center justify-center transition
                                    ${productImageIndex === productImage.length - 1 ? "opacity-0 cursor-default" : "opacity-100  cursor-pointer"}`}
                    >
                        <div className="w-10 aspect-square bg-text/30 hover:bg-text/50 transition flex justify-center items-center rounded-full  ">
                            <IoIosArrowForward className="size-full text-white py-2 l" />
                        </div>
                    </button>

                    <div
                        className="absolute bottom-0 w-full  h-1/6 flex justify-center items-center gap-2">
                        <DotIndicator
                            count={productImage.length}
                            activeIndex={productImageIndex}
                            className=" w-full  h-10 "
                            inactiveColor="accent"
                            activeColor="accent-hover"
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
                                        setProductImageIndex(index + 1)
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
                    className={`w-full flex  ${!isEven ? "justify-between lg:justify-start flex-row-reverse lg:flex-row" : "justify-between lg:justify-start flex-row-reverse"
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
                    <Link href={`/accessories/${name.toLowerCase().replace(/\s+/g, "-")}`}>
                        <button
                            className={`cursor-pointer underline text-secondary py-3 lg:px-4 rounded-2xl flex justify-center items-center gap-2 text-sm lg:text-base`}
                        >
                            <HoverText>
                                <span className="underline size-4 lg:size-6">
                                    Explore This Product
                                </span>
                            </HoverText>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
