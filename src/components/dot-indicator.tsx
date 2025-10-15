"use client";

import { motion } from "framer-motion";
import React from "react";

interface DotIndicatorProps {
    /** Jumlah total titik */
    count: number;
    /** Index titik aktif */
    activeIndex: number;
    /** Warna titik aktif */
    activeColor?: string;
    /** Warna titik tidak aktif */
    inactiveColor?: string;
    /** Ukuran titik aktif (Tailwind width class or px) */
    activeSize?: string;
    /** Ukuran titik tidak aktif */
    inactiveSize?: string;
    /** Kelas tambahan */
    className?: string;
}

/**
 * Reusable animated dot indicator.
 * Cocok untuk slider, carousel, atau pagination step.
 */
const DotIndicator: React.FC<DotIndicatorProps> = ({
    count,
    activeIndex,
    activeColor = "bg-accent",
    inactiveColor = "bg-gray-300",
    activeSize = "w-4",
    inactiveSize = "w-1.5",
    className = "",
}) => {
    return (
        <div
            className={`flex justify-center items-center gap-2 ${className}`}
        >
            {Array.from({ length: count }).map((_, index) => {
                const isActive = index === activeIndex;

                return (
                    <motion.span
                        key={index}
                        layout
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                        }}
                        className={`h-1.5 rounded-full ${isActive ? activeSize : inactiveSize
                            } ${isActive ? activeColor : inactiveColor}`}
                    />
                );
            })}
        </div>
    );
};

export default DotIndicator;
