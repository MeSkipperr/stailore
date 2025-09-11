"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const MotionImage = motion(Image);

interface ImageScrollProps {
    scaleRange?: [number, number];
    yRange?: [number, number];
    className?: string;
    src: string;
    alt: string;
    width: number;
    height: number;
}

const ImageScroll = ({
    className,
    src,
    alt,
    width,
    height,
    scaleRange = [1, 1.05],
    yRange = [0, -100],
}: ImageScrollProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], yRange);
    const scale = useTransform(scrollYProgress, [0, 1], scaleRange);

    return (
        <motion.div
            ref={ref}
            className={` ${className}`}
        >
            <MotionImage
                style={{ y, scale }}
                width={width}
                height={height}
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
            />
        </motion.div>
    );
};

export default ImageScroll;
