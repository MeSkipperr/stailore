"use client";

import ProductCard from ".";
import { Skeleton } from "@/components/ui/skeleton"
import SkeletonList from "./skeleton";
import { useEffect, useState } from "react";

export type ProductCardProps = {
    id: string;
    category: string,
    name: string;
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
                imageUrl: "https://via.assets.so/img.jpg?w=400&h=400&bg=dbeafe&f=png",
            },
            {
                id: "t2",
                name: "Medium Pot",
                priceIDR: 75000,
                description: "Comes in a 10 cm pot with decorative stones.",
                createdAt: new Date("2025-01-05"),
                updatedAt: new Date("2025-03-10"),
                isAvailable: true,
                imageUrl: "https://via.assets.so/img.jpg?w=400&h=400&bg=dcfce7&f=png",
            },
        ],
        imageUrl: "https://via.assets.so/img.jpg?w=400&h=400&bg=e9d5ff&f=png",
        isAvailable: true,
        createdAt: new Date("2025-01-01"),
        updatedAt: new Date("2025-03-15"),
    },
    {
        id: "data-2",
        category: "Tropical Plant",
        name: "Monstera Deliciosa",
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
                imageUrl: "https://via.assets.so/img.jpg?w=400&h=400&gradientFrom=667eea&gradientTo=764ba2&gradientAngle=135&f=png",
            },
            {
                id: "t4",
                name: "Large Size",
                priceIDR: 250000,
                description: "Mature plant around 60 cm tall.",
                createdAt: new Date("2025-02-01"),
                updatedAt: new Date("2025-03-12"),
                isAvailable: false,
                imageUrl: "https://via.assets.so/img.jpg?w=400&h=400&gradientFrom=22c55e&gradientTo=10b981&gradientAngle=135&f=png",
            },
        ],
        imageUrl: "https://via.assets.so/img.jpg?w=400&h=400&gradientFrom=ff0000&gradientTo=ff7f00&gradientAngle=135&f=png",
        isAvailable: true,
        createdAt: new Date("2025-02-01"),
        updatedAt: new Date("2025-03-15"),
    },
];





export default function ProductGroup() {
    const [products, setProducts] = useState<ProductCardProps[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulasi fetch data dari API
        const fetchData = async () => {
            setLoading(true);

            // simulasi delay 2 detik
            await new Promise((resolve) => setTimeout(resolve, 2000));

            setProducts(dummyProducts);
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <div className="w-full lg:w-3/4 flex flex-col justify-center items-center gap-40 mb-36">
            {loading ? (
                // tampilkan Skeleton selama data dimuat
                <SkeletonList count={2} />
            ) : (
                // tampilkan data produk setelah "fetch"
                products.map((product, index) => (
                    <ProductCard
                        key={product.id}
                        {...product}
                        position={index % 2 === 0 ? "left" : "right"}
                    />
                ))
            )}
        </div>
    );
}
