"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";

const images = [
    {
        id: "divId-1",
        src: "https://via.assets.so/img.jpg?w=1920&h=1080&gradient=linear-gradient%28135deg%2C+%230093E9%2C+%2380D0C7%2C+%2323a6d5%2C+%2323d5ab%29&f=png",
    },
    {
        id: "divId-2",
        src: "https://via.assets.so/img.jpg?w=1920&h=1080&gradientFrom=8E2DE2&gradientTo=4A00E0&gradientAngle=135&f=png",
    },
];

export default function DetailPage({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter();

    const { id } = React.use(params);

    const image = images.find((img) => img.id === id);
    if (!image) return null;

    return (
        <motion.div
            layoutId={image.id}
            className="fixed inset-0 bg-black flex justify-center items-center cursor-pointer z-50"
            onClick={() => router.back()}
            transition={{
                duration: 1,
                ease: [0.624, 0.019, 0.039, 0.906],
            }}
        >
            <Image
                src={image.src}
                alt={image.id}
                width={1920}
                height={1080}
                className="object-contain w-full h-full"
            />
        </motion.div>
    );
}
