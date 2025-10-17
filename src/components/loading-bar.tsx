"use client";

import { useEffect, useState } from "react";

interface LoadingBarProps {
    /** Durasi animasi dalam milidetik */
    duration?: number;
    /** Kelas tambahan untuk container */
    className?: string;
    /** Kelas tambahan untuk batang progres */
    barClassName?: string;
    /** Apakah loading bar sedang aktif */
    isActive?: boolean;
    /** Arah animasi pengisian: "left" (default) atau "right" */
    direction?: "left" | "right";
    /** Apakah animasi keluar (saat non-aktif) diinginkan */
    exitAnimation?: boolean;
}

/**
 * LoadingBar Component
 * - Mengisi dari kiri ke kanan (default) atau kanan ke kiri.
 * - Saat non-aktif, bar menyusut ke arah berlawanan.
 */
const LoadingBar = ({
    duration = 2000,
    className = "",
    barClassName = "",
    isActive = true,
    direction = "left",
    exitAnimation = true,
}: LoadingBarProps) => {
    const [progress, setProgress] = useState(0);
    const [isResetting, setIsResetting] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (isActive) {
            // Mulai dari 0 ke 100
            setIsResetting(false);
            setProgress(0);

            requestAnimationFrame(() => setProgress(100));

            timer = setTimeout(() => setProgress(100), duration);
        } else {
            // Saat non-aktif, reset dari arah berlawanan
            setIsResetting(true);
            setProgress(0);
        }

        return () => clearTimeout(timer);
    }, [isActive, duration]);

    // Tentukan arah posisi berdasarkan direction dan state reset
    const isFromLeft = direction === "left";

    return (
        <div
            className={`relative  bg-gray-200 rounded-full overflow-hidden ${className}`}
        >
            <div
                className={`absolute top-0 h-full transition-all ease-in-out ${barClassName}`}
                style={{
                    width: `${progress}%`,
                    left:
                        isResetting
                            ? isFromLeft
                                ? "auto"
                                : 0
                            : isFromLeft
                                ? 0
                                : "auto",
                    right:
                        isResetting
                            ? isFromLeft
                                ? 0
                                : "auto"
                            : isFromLeft
                                ? "auto"
                                : 0,
                    transformOrigin:
                        isResetting
                            ? isFromLeft
                                ? "right"
                                : "left"
                            : isFromLeft
                                ? "left"
                                : "right",
                    transitionDuration: `${isActive ?
                            exitAnimation
                                ? duration
                                :
                                0
                            : 0}ms`,
                }}
            />
        </div>
    );
};

export default LoadingBar;
