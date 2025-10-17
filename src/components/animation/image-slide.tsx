"use client";

import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import ImageScroll from "./image-scrool";

interface ImageSlideProps {
    image: string;
    index: number; // dikontrol dari luar
    direction: number; // arah animasi (-1 prev, 1 next)
    className?: string;
    title?: string;
}

const variants: Variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? "100%" : "-100%",
        zIndex: 0,
    }),
    center: {
        x: 0,
        zIndex: 1,
        transition: {
            duration: 0.8,
            ease: "easeInOut",
        },
    },
    exit: (direction: number) => ({
        x: direction > 0 ? "-60%" : "60%",
        zIndex: 0,
        transition: {
            duration: 0.8,
            ease: "easeInOut",
        },
    }),
};

const ImageSlide = ({
    image,
    index,
    direction,
    className = "w-full h-full",
    title
}: ImageSlideProps) => {
    return (
        <div className={`relative overflow-hidden  ${className}`}>
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={index}
                    className="absolute top-0 left-0 w-full h-full"
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                >
                    <ImageScroll
                        src={image}
                        alt={`slide-${index}`}
                        fill
                        priority
                        className="object-cover"
                    />
                </motion.div>
                {title && (
                    <motion.h2
                        key={title} // penting agar AnimatePresence bisa deteksi perubahan elemen
                        initial={{ y: 10, opacity: 0, filter: "blur(8px)" }} // posisi awal (dari bawah)
                        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}   // posisi saat tampil
                        exit={{ y: 10, opacity: 0 , filter: "blur(8px)"}}    // posisi saat keluar (ke bawah)
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="absolute z-40 bottom-1/4 text-center text-kaftan left-0 right-0 text-5xl"
                    >
                        {title}
                    </motion.h2>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ImageSlide;
