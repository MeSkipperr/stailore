"use client";

import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface DotIndicatorProps {
    count: number;
    activeIndex: number;
    activeColor?: string;
    inactiveColor?: string;
    activeSize?: string;
    inactiveSize?: string;
    className?: string;
}

const DotIndicator: React.FC<DotIndicatorProps> = ({
    count,
    activeIndex,
    activeColor = "bg-accent",
    inactiveColor = "bg-gray-300",
    className = "",
}) => {
    return (
        <div className={`flex justify-center items-center gap-2 ${className}`}>
            {Array.from({ length: count }).map((_, index) => {
                const isActive = index === activeIndex;

                return (
                    <motion.span
                        key={index}
                        layout
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 25,
                        }}
                        animate={{
                            width: isActive ? 16 : 6, // smooth width animation (px)
                            opacity: isActive ? 1 : 0.6,
                            backgroundColor: isActive
                                ? "var(--color-accent, #22c55e)" // fallback green-500
                                : "var(--color-inactive, #d1d5db)",
                        }}
                        className={`h-1.5 rounded-full ${isActive ? activeColor : inactiveColor}`}
                    />
                );
            })}
        </div>
    );
};

export default DotIndicator;
