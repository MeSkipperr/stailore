"use client";

import ProductCard from "./product";


const dummyProducts = [
    {
        id: 1,
        title: "Elegant Fern Plant",
        description:
            "A lush green fern that brings a fresh touch to any living space. Easy to care for and perfect for beginners.",
        price: 1,
        currency: "USD" as const,
        tags: ["Popular", "Indoor", "Low Light", "Evergreen"],
        imageUrl: "/plants/fern.jpg",
        position: "left" as const,
    },
    {
        id: 2,
        title: "Golden Pothos",
        description:
            "Known for its trailing vines and heart-shaped leaves, this plant is ideal for desks or hanging baskets.",
        price: 2.2,
        currency: "USD" as const,
        tags: ["Best Seller", "Air Purifier", "Trailing", "Easy Care"],
        imageUrl: "/plants/pothos.jpg",
        position: "right" as const,
    },
];

export default function ProductGroup() {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-40 mb-36">
            {dummyProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
}
