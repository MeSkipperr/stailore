"use client";

import { Currency } from "@/models/cart";
import ProductCard from "./product";

export type ProductCardProps = {
    id: string;
    category: string,
    name: string;
    priceIDR: number,
    description: string;
    type: {
        id: string;
        name: string;
        priceIDR: number;
        description: string;
        createdAt: Date;
        updatedAt: Date;
        isAvailable: boolean;
        imageUrl: string;
    }[];
    imageUrl: string,
    isAvailable: boolean,
    createdAt: Date,
    updatedAt: Date,
}
const dummyProducts: ProductCardProps[] = [
    {
        id: "data-1",
        category: "Succulent",
        name: "Echeveria Elegans",
        priceIDR: 45000,
        description:
            "A beautiful rosette-forming succulent with pastel green leaves. Perfect for indoor decoration.",
        type: [
            {
                id: "t1",
                name: "Small Pot",
                priceIDR: 45000,
                description: "Comes in a 5 cm ceramic pot.",
                createdAt: new Date("2025-01-05"),
                updatedAt: new Date("2025-03-10"),
                isAvailable: true,
                imageUrl: "/images/echeveria-small.jpg",
            },
            {
                id: "t2",
                name: "Medium Pot",
                priceIDR: 75000,
                description: "Comes in a 10 cm pot with decorative stones.",
                createdAt: new Date("2025-01-05"),
                updatedAt: new Date("2025-03-10"),
                isAvailable: true,
                imageUrl: "/images/echeveria-medium.jpg",
            },
        ],
        imageUrl: "/images/echeveria-main.jpg",
        isAvailable: true,
        createdAt: new Date("2025-01-01"),
        updatedAt: new Date("2025-03-15"),
    },
    {
        id: "data-2",
        category: "Tropical Plant",
        name: "Monstera Deliciosa",
        priceIDR: 120000,
        description:
            "A tropical plant with iconic split leaves. Great for home or office spaces.",
        type: [
            {
                id: "t3",
                name: "Small Size",
                priceIDR: 120000,
                description: "Young plant around 20 cm tall.",
                createdAt: new Date("2025-02-01"),
                updatedAt: new Date("2025-03-12"),
                isAvailable: true,
                imageUrl: "/images/monstera-small.jpg",
            },
            {
                id: "t4",
                name: "Large Size",
                priceIDR: 250000,
                description: "Mature plant around 60 cm tall.",
                createdAt: new Date("2025-02-01"),
                updatedAt: new Date("2025-03-12"),
                isAvailable: false,
                imageUrl: "/images/monstera-large.jpg",
            },
        ],
        imageUrl: "/images/monstera-main.jpg",
        isAvailable: true,
        createdAt: new Date("2025-02-01"),
        updatedAt: new Date("2025-03-15"),
    },
];





export default function ProductGroup() {
    const currency: Currency = "IDR"
    return (
        <div className="w-3/4 flex flex-col justify-center items-center gap-40 mb-36">
            {dummyProducts.map((product, index) => (
                <ProductCard key={product.id} {...product} currency={currency} position={index % 2 === 0 ? "left" : "right"} />
            ))}
        </div>
    );
}
