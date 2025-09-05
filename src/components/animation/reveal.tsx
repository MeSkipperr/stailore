"use client";
import { motion } from "framer-motion";
import { ReactNode, ElementType } from "react";

interface RevealProps {
    children: ReactNode;
    as?: ElementType; 
    className?: string;
    duration?: number;
    delay?: number;
    y?: number;
    once?: boolean;
    amount?: number;
}

export default function Reveal({
    children,
    as: Tag = "div",
    className,
    duration = 1,
    delay = 0,
    y = 50,
    once = false,
    amount = 0.3,
}: RevealProps) {
    const MotionTag = motion(Tag);

    return (
        <MotionTag
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration, delay }}
            viewport={{ once, amount }}
            className={className}
        >
            {children}
        </MotionTag>
    );
}
