"use client";
import { motion, useScroll, useTransform, } from "framer-motion";
import Image from "next/image";
import HoverText from "../hover-text";
import Link from "next/link";
const MotionImage = motion(Image);

const HeroImage = () => {
    const { scrollYProgress, scrollY } = useScroll();

    const y1 = useTransform(scrollY, [0, 500], [1, -50]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);
    return (
        <motion.div
            initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
            animate={{ backgroundColor: "#FFF5F2" }}
            transition={{
                delay: 3,
            }}
            className="w-[100%]  h-[80dvh] sm:h-dvh flex justify-center items-start relative overflow-hidden">
            <div className="w-[95%] sm:w-[90%] rounded-2xl h-full flex justify-center items-start relative overflow-hidden">
                <div className="w-full h-full inset-0 z-10 flex justify-center items-center ">
                    <div className="w-full h-2/4  flex justify-center items-end">
                        <Link href="/accessories">
                            <motion.button
                                style={{ y: y1 }}
                                transition={{ delay: 4, duration: 1 }}
                                className="bg-secondary text-white hover:bg-secondary/90 rounded-full text-sm h-10  px-6 has-[>svg]:px-4 flex items-center cursor-pointer">
                                <HoverText className="text-white">Explore More</HoverText>
                            </motion.button>
                        </Link>
                    </div>
                </div>
                <MotionImage
                    width={1920}
                    height={1080}
                    initial={{ "--maskW": "35%", "--maskH": 0 }}
                    animate={{ "--maskW": "100%", "--maskH": "100dvh" }}
                    transition={{
                        "--maskH": {
                            duration: 3.5,
                            delay: 1,
                            ease: [0.121, 0.899, 0.4, 0.123],
                        },
                        "--maskW": {
                            duration: 2,
                            delay: 2.5,
                            ease: [0.128, 0.358, 0.874, 0.247],
                        },
                    }}
                    src="https://via.assets.so/img.jpg?w=1920&h=1080&gradient=linear-gradient%28135deg%2C+%230093E9%2C+%2380D0C7%2C+%2323a6d5%2C+%2323d5ab%29&text=16%3A9&f=png"
                    alt="wallpaper"
                    className="w-full h-full object-cover bottom-0 absolute "
                    style={{
                        scale: scale,
                        WebkitMaskImage: "linear-gradient(black, black)",
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskSize: "var(--maskW) var(--maskH)",
                        WebkitMaskPosition: "center",
                        maskImage: "linear-gradient(black, black)",
                        maskRepeat: "no-repeat",
                        maskSize: "var(--maskW) var(--maskH)",
                        maskPosition: "center",
                    }}
                />
            </div>
        </motion.div >
    );
}

export default HeroImage;