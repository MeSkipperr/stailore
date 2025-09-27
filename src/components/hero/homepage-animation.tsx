"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const MotionImage = motion(Image);

const HomePageAnimation = () => {
    return (
        <motion.div
            initial={{ height: "100dvh", opacity: 1 }}
            animate={{ height: 0, opacity: 0 }}
            transition={{
                height: { delay: 5, duration: 1 },
                opacity: { delay: 4.5, duration: 0.5 },
            }}
            className="absolute top-0 h-dvh left-0 right-0 z-50 flex justify-center items-center text-4xl bg-primary "
        >
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: -50 }}
                transition={{
                    y: { delay: 1, duration: 3, ease: "easeOut" },
                }}
                className="w-full flex justify-center items-center overflow-hidden"
            >
                <MotionImage
                    initial={{ y: 0 }}
                    animate={{ y: -1000 }}
                    transition={{
                        delay: 3,
                        duration: 4,
                        ease: [0.25, 1, 0.5, 1],
                    }}
                    src="/assets/logo/stailore-latter-logo-dark-green.png"
                    alt="Stailore Logo"
                    width={200}
                    height={200}
                    className="object-contain size-1/3 lg:size-auto"
                />
            </motion.div>
        </motion.div>
    );
}

export default HomePageAnimation;