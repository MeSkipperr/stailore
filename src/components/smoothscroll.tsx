"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll() {
    const pathname = usePathname();
    const [enabled, setEnabled] = useState(true);

    useEffect(() => {
        if (pathname === "/") {
            setEnabled(false);

            const timer = setTimeout(() => {
                setEnabled(true);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [pathname]);

    useEffect(() => {
        if (!enabled) return; 

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, [enabled]);

    return null;
}
