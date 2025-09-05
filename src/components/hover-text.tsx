"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, ReactNode } from "react";

interface HoverTextProps {
    children: ReactNode;
    className?: string;
    speed?: number;
}

export default function HoverText({ children, className,speed = 0.25 }: HoverTextProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <span
            className={`w-full h-full relative overflow-hidden inline-block cursor-pointer ${className}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <AnimatePresence initial={false}>
                {!hovered ? (
                    <motion.span
                        key="normal"
                        initial={{ y: 0, opacity: 1 }}
                        exit={{ y: -40, opacity: 0 }}
                        transition={{ duration: speed }}
                        className="absolute left-0 right-0 text-center"
                    >
                        {children}
                    </motion.span>
                ) : (
                    <motion.span
                        key="hovered"
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: speed }}
                        className="absolute left-0 right-0 text-center"
                    >
                        {children}
                    </motion.span>
                )}
            </AnimatePresence>
            <span className="invisible">{children}</span>
        </span>
    );
}
