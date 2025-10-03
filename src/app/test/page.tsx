"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LayoutIdExample() {
    const [isSelect, setIsSelect] = useState<string | null>(null);
    const images = [
        {
            id: "divId-1",
            src: "https://via.assets.so/img.jpg?w=1920&h=1080&gradient=linear-gradient%28135deg%2C+%230093E9%2C+%2380D0C7%2C+%2323a6d5%2C+%2323d5ab%29&f=png",
        },
        {
            id: "divId-2",
            src: "https://via.assets.so/img.jpg?w=1920&h=1080&gradientFrom=8E2DE2&gradientTo=4A00E0&gradientAngle=135&f=png",
        },

    ]
    return (
        <div className="w-full h-dvh relative flex flex-col  justify-start items-center">
            {
                images.map((img) => (
                    <motion.div
                        key={img.id}
                        layoutId={img.id}
                        onClick={() => setIsSelect(img.id)}
                        transition={
                            {
                                duration: 1,
                                ease: [0.624, 0.019, 0.039, 0.906],
                            }
                        }
                        className="w-1/6 cursor-pointer aspect-video bg-accent">
                        <Image
                            src={img.src}
                            alt={img.id}
                            width={1920}
                            height={1080}
                            className="object-cover w-full h-full "
                        />
                    </motion.div>
                ))
            }

            <AnimatePresence>
                {isSelect && (
                    <motion.div
                        layoutId={isSelect}
                        className="fixed inset-0 bg-primary cursor-pointer flex justify-center items-center"
                        transition={
                            {
                                duration: 1,
                                ease: [0.624, 0.019, 0.039, 0.906],
                            }
                        }
                        onClick={() => setIsSelect(null)}
                    >   
                        <Image
                            src={
                                images.find((img) => img.id === isSelect)?.src || ""
                            }
                            alt={images[0].id}
                            width={1920}
                            height={1080}
                            className="object-cover w-full h-full "
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );

}
