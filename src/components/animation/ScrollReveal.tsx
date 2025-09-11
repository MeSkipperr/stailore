"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, ElementType, useRef } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    as?: ElementType;
    className?: string;
    rangeX?: [number, number]; // [start, end] untuk x
    rangeY?: [number, number]; // [start, end] untuk y
}

export default function ScrollReveal({
    children,
    as: Tag = "div",
    className,
    rangeX,
    rangeY,
}: ScrollRevealProps) {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // selalu panggil hook, fallback ke [0,0] kalau tidak ada
    const x = useTransform(scrollYProgress, [0, 1], rangeX ?? [0, 0]);
    const y = useTransform(scrollYProgress, [0, 1], rangeY ?? [0, 0]);

    const MotionTag = motion(Tag);

    return (
        <MotionTag ref={ref} style={{ x, y }} className={className}>
            {children}
        </MotionTag>
    );
}
