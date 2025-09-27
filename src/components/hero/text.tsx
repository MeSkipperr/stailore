"use client";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            duration: 4,
            delay: 4,
            staggerChildren: 0.05,
            delayChildren: 4,
            ease: "easeOut",
        },
    },
};

const HeroText = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, -100]); 

    return (
        <div className="w-full h-[40dvh] sm:h-[45dvh] flex flex-col justify-end items-center">
            <motion.div
                style={{ y: y1 }}
            
                variants={containerVariants}
                className="flex space-x-0 text-9xl justify-center items-center w-full flex-col overflow-hidden"
            >
                
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        y: {
                            delay: 3.8,
                            duration: 1,
                            ease: "easeOut",
                        },
                        opacity: {
                            delay: 4,
                            duration: 0.8
                        }
                    }}
                    className="text-6xl sm:text-8xl flex items-center">
                    <span className="text-laobrige text-2xl sm:text-4xl ">1</span>

                    Beauty in
                    <span className="text-laobrige text-2xl sm:text-4xl ">1</span>

                </motion.h1>
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        y: {
                            delay: 4,
                            duration: 1,
                            ease: "easeOut",
                        },
                        opacity: {
                            delay: 4.2,
                            duration: 0.8
                        }
                    }}
                    className="text-[4rem] sm:text-9xl ">
                    the Details
                </motion.h1>
            </motion.div>
        </div>
    );
}

export default HeroText;