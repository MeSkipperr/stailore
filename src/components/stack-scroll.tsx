"use client";

import { motion } from "framer-motion";
import {FabricConfig} from "@/config/fabric"
import ImageScroll from "./animation/image-scrool";

export default function StackScroll() {
    return (
        <div className="w-full ">
            {FabricConfig.items.map((item, index) => (
                <motion.div
                    key={index}
                    className="sticky w-full h-[30dvh] sm:h-[50dvh] bg-white flex items-center justify-center overflow-hidden"
                    style={{
                        top: ((index % FabricConfig.initialShow) === 0 ? 100 : 100 * ((index % FabricConfig.initialShow ) + 1)),
                        zIndex: index + 1
                    }}
                >
                    <div className="relative w-full h-full flex items- justify- ">
                        <ImageScroll
                            src={item.img}
                            alt={item.title}
                            width={1920}
                            height={1080}
                            className="object-cover w-full"
                            scaleRange={[1,1.3]}
                            yRange={[0,0]}
                            
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/35 to-transparent"></div>
                    </div>

                    <h1 className="text-2xl sm:text-4xl text-white  absolute inset-4 sm:inset-8 ">{item.title}</h1>
                </motion.div>
            ))}
        </div>
    );
}
