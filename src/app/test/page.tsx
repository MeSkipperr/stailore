"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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

export default function GalleryPage() {
    return (
        <div className="w-full min-h-screen flex flex-wrap gap-4 justify-center items-start p-8">
            {images.map((img) => (
                <Link href={`/test/${img.id}`} key={img.id}>
                    <motion.div
                        layoutId={img.id}
                        className="w-1/6 cursor-pointer aspect-video overflow-hidden rounded-xl"
                        transition={{
                            duration: 1,
                            ease: [0.624, 0.019, 0.039, 0.906],
                        }}
                    >
                        <Image
                            src={img.src}
                            alt={img.id}
                            width={1920}
                            height={1080}
                            className="object-cover w-full h-full"
                        />
                    </motion.div>
                </Link>
            ))}
        </div>
    );
}
