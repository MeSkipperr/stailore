"use client";
import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Lenis from "@studio-freight/lenis";
import { deniedPath } from "@/config/smooth-scrool";

interface SmoothScrollProps {
    children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
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
        if (!enabled || deniedPath.includes(pathname)) return;

        const lenis = new Lenis({
            lerp: 0.1,       
            duration: 1.5,   
            smoothWheel: true
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

    return <>{children}</>;
}
