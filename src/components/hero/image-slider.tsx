"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";


const MotionImage = motion(Image);

const imageData = [
    {
        src: "https://via.assets.so/img.jpg?w=1920&h=1080&bg=1f2937&text=1&f=png",
        alt: "Image 1",
        title: "Confidence in Style",
        subtitle: "Little touches that spark big confidence in every look.",
        desc: "Model wanita mengenakan bandana dengan senyum lembut",
    },
    {
        src: "https://via.assets.so/img.jpg?w=1920&h=1080&gradientFrom=667eea&gradientTo=764ba2&gradientAngle=135&text=2&f=png",
        alt: "Image 2",
        title: "Soft Companion",
        subtitle: "Little touches that stay with you in your everyday stories.",
        desc: "Scrunchie diletakkan di atas buku harian terbuka dengan tulisan tangan, secangkir teh hangat di sampingnya.",
    },
    {
        src: "https://via.assets.so/img.jpg?w=1920&h=1080&gradient=linear-gradient%28135deg%2C+%236366f1%2C+%23a855f7%2C+%23ec4899%29&text=3&f=png",
        alt: "Image 3",
        title: "Made with Care",
        subtitle: "Every stitch carries a story of love, comfort, and attention to detail.",
        desc: "Model yang sedang menjahit",
    },
    {
        src: "https://via.assets.so/img.jpg?w=1920&h=1080&gradientFrom=667eea&gradientTo=764ba2&gradientAngle=135&text=4&f=png",
        alt: "Image 4",
        title: "Soft Elegance",
        subtitle: "Little details that bring comfort and beauty.",
        desc: "Close up saat mengikat rambut ",
    },
];

export default function ImageSlider() {
    const delay = 8000;
    const transitionSpeed = 800;
    const [index, setIndex] = useState(0);
    const swiperRef = useRef<any>(null);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.slideToLoop(index);
        }
    }, [index]);

    return (
        <div className="w-full h-dvh my-40 relative overflow-hidden">
            <AnimatePresence mode="wait">
                <MotionImage
                    key={index}
                    src={imageData[index].src}
                    width={1920}
                    height={1080}
                    alt={imageData[index].alt}
                    className="w-full h-full object-cover absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: transitionSpeed / 1000, ease: "easeInOut" }}
                />
            </AnimatePresence>


            <div className="w-full h-full flex justify-center items-center py-10 relative z-10">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={"auto"}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: delay,
                        disableOnInteraction: false,
                    }}
                    speed={transitionSpeed * 3}
                    className="w-full h-full swiper-wrapper"
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => {
                        setIndex(swiper.realIndex);
                    }}

                    allowTouchMove={false}
                    simulateTouch={false}
                >
                    {imageData.map((card, i) => (
                        <SwiperSlide
                            key={"card-image-slider-" + i}
                            className="!w-[60%] h-full"
                        >
                            <div
                                onClick={() => {
                                    setIndex((prev) => (i + imageData.length) % imageData.length);
                                }}
                                className="text-white transition-all duration-500 p-6 rounded-2xl h-full flex flex-col justify-center items-center">
                                <p>{card.subtitle}</p>
                                <h1 className="text-8xl font-bold">{card.title}</h1>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="absolute top-0 left-0 right-0 h-[25%] flex justify-center items-center">
                <Image
                    src="/assets/logo/stailore-latter-logo-black.png"
                    alt="Stailore Logo"
                    width={50}
                    height={50}
                    className="object-contain filter invert"
                />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[25%] flex justify-center items-center text-white gap-2 opacity-70">
                <span>{index + 1}</span>
                <div className="w-[10%] h-[2px] rounded-full  bg-white op1acity-60"></div>
                <span>{imageData.length}</span>
            </div>
        </div>
    );
}
