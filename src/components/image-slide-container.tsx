"use client";

import { useEffect, useRef, useState } from "react";
import ImageSlide from "./animation/image-slide";
import LoadingBar from "./loading-bar";
import { splitArrayAutoSize } from "@/utils/array";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Daftar URL gambar yang akan ditampilkan dalam slider
const IMAGES = [
    {
        id: "data-1",
        name: "Blue Gradient Sky",
        imageUrl:
            "https://via.assets.so/img.jpg?w=1920&h=1080&gradientFrom=56CCF2&gradientTo=2F80ED&gradientAngle=135&f=png",
    },
    {
        id: "data-2",
        name: "Soft Yellow Light",
        imageUrl:
            "https://via.assets.so/img.jpg?w=1920&h=1080&bg=fef3c7&f=png",
    },
    {
        id: "data-3",
        name: "Sunset Gradient",
        imageUrl:
            "https://via.assets.so/img.jpg?w=1920&h=1080&gradientFrom=f093fb&gradientTo=f5576c&gradientAngle=135&f=png",
    },
    {
        id: "data-4",
        name: "Calm Blue Sea",
        imageUrl:
            "https://via.assets.so/img.jpg?w=1920&h=1080&bg=dbeafe&f=png",
    },
    {
        id: "data-5",
        name: "Rainbow Aurora",
        imageUrl:
            "https://via.assets.so/img.jpg?w=1920&h=1080&gradient=linear-gradient%2890deg%2C+%23667eea%2C+%23764ba2%2C+%23f093fb%2C+%23f5576c%29&f=png",
    },
];


const ImageSliderContainer = () => {
    const imageGroup = 3

    // State untuk melacak index gambar aktif
    const [index, setIndex] = useState(0);

    // State untuk menentukan arah animasi (1 = next, -1 = prev)
    const [direction, setDirection] = useState(1);

    const imageShortGroup = splitArrayAutoSize(IMAGES, imageGroup);

    const [isDisable, setIsDisable] = useState(false);

    // Jumlah langkah perpindahan setiap kali slide berganti
    const step = 1;

    // Waktu interval pergantian otomatis (ms)
    const interval = 5000;

    // Referensi interval agar bisa dihentikan saat perlu
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // 🔁 Fungsi untuk memulai auto-slide
    const startAutoSlide = () => {
        // Hentikan interval lama jika masih aktif
        if (intervalRef.current) clearInterval(intervalRef.current);

        // Buat interval baru untuk menggeser gambar secara otomatis
        intervalRef.current = setInterval(() => {
            setDirection(1);
            setIndex((prev) => (prev + step) % imageShortGroup[0].length);
        }, interval);
    };

    // ▶️ Geser ke gambar berikut (manual)
    const handleNext = () => {
        if (isDisable) return; // cegah klik berulang

        setIsDisable(true);
        setTimeout(() => setIsDisable(false), 1000); // aktifkan kembali setelah 1 detik
        setDirection(1);
        setIndex((prev) => (prev + step) % imageShortGroup[0].length);
        startAutoSlide(); // Reset interval agar waktu mulai ulang setelah klik
    };

    // ◀️ Geser ke gambar sebelumnya (manual)
    const handlePrev = () => {
        if (isDisable) return; // cegah klik berulang

        setIsDisable(true);
        setTimeout(() => setIsDisable(false), 1000); // aktifkan kembali setelah 1 detik
        setDirection(-1);
        setIndex((prev) => (prev - step + imageShortGroup[0].length) % imageShortGroup[0].length);
        startAutoSlide(); // Reset interval agar waktu mulai ulang setelah klik
    };

    // 🎬 Lifecycle: kontrol auto-slide & event tab/window
    useEffect(() => {
        // Mulai auto-slide
        const startAutoSlide = () => {
            setIsDisable(true);
            setTimeout(() => setIsDisable(false), 1000); // aktifkan kembali setelah 1 detik
            if (intervalRef.current) clearInterval(intervalRef.current);
            intervalRef.current = setInterval(handleNext, interval);
        };

        // Hentikan auto-slide
        const stopAutoSlide = () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;

            }
        };

        // 🔄 Jalankan kembali auto-slide jika tab kembali aktif
        const handleVisibilityChange = () => {
            if (document.hidden) {
                stopAutoSlide();
            } else {
                startAutoSlide();
            }
        };

        // 🟢 Saat window fokus → geser ke gambar berikut & jalankan auto-slide
        const handleWindowFocus = () => {
            handleNext();
            startAutoSlide();
        };

        // 🔕 Saat window blur → hentikan auto-slide
        const handleWindowBlur = () => {
            stopAutoSlide();
        };

        // Jalankan auto-slide pertama kali saat komponen dimount
        startAutoSlide();

        // Tambahkan event listener
        document.addEventListener("visibilitychange", handleVisibilityChange);
        window.addEventListener("focus", handleWindowFocus);
        window.addEventListener("blur", handleWindowBlur);

        // Bersihkan event dan hentikan interval saat komponen di-unmount
        return () => {
            stopAutoSlide();
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            window.removeEventListener("focus", handleWindowFocus);
            window.removeEventListener("blur", handleWindowBlur);
        };
    }, []);

    return (
        <div className="w-full flex flex-col items-center gap-2">
            <div className="w-full lg:h-[80dvh] flex flex-col lg:flex-row justify-around items-start relative  lg:gap-12 px-4 lg:px-0">
                <ImageSlide className="w-full aspect-[4/3] lg:aspect-auto lg:h-[90%]  "
                    image={imageShortGroup?.[0]?.[index].imageUrl ?? "/fallback.jpg"}
                    index={index}
                    direction={direction}
                    title={imageShortGroup?.[0]?.[index].name ?? "Lorem, ipsum."}
                    yRange= {[0, -50]}
                />
                <ImageSlide className="w-full aspect-[4/3] lg:aspect-auto lg:h-[90%]  self-end"
                    image={imageShortGroup?.[1]?.[index].imageUrl ?? "/fallback.jpg"}
                    index={index}
                    direction={direction}
                    title={imageShortGroup?.[1]?.[index].name ?? "Lorem, ipsum."}
                    yRange= {[0, -50]}
                />
                <ImageSlide className="w-full aspect-[4/3] lg:aspect-auto lg:h-[90%]  "
                    image={imageShortGroup?.[2]?.[index].imageUrl ?? "/fallback.jpg"}
                    index={index}
                    direction={direction}
                    title={imageShortGroup?.[2]?.[index].name ?? "Lorem, ipsum."}
                    yRange= {[0, -50]}
                />
                <div className="absolute left-0 w-30 top-0 bottom-0  z-40  flex items-center justify-center">
                    <button
                        disabled={isDisable}
                        onClick={handlePrev}
                        className={`bg-text/30 hover:bg-text/50 rounded-full flex items-center justify-center p-2
                            ${isDisable ? "cursor-default " : "cursor-pointer"}`}
                    >
                        <IoIosArrowBack className="size-8" />
                    </button>

                </div>
                <div className="absolute right-0 w-30 top-0 bottom-0  z-40  flex items-center justify-center">
                    <button
                        disabled={isDisable}
                        onClick={handleNext}
                        className={`bg-text/30  hover:bg-text/50 rounded-full flex items-center justify-center p-2
                            ${isDisable ? "cursor-default" : "cursor-pointer"}`}
                    >
                        <IoIosArrowForward className="size-8" />
                    </button>
                </div>
            </div>
            <div className="w-full flex items-center justify-center flex-col">
                <div className="w-3/4 lg:w-1/3 flex justify-center items-center gap-2">
                    {[...Array(imageShortGroup[0].length)].map((_, i) => (
                        <LoadingBar
                            key={i} // ✅ penting untuk mencegah warning React
                            duration={interval}
                            isActive={index === i}
                            className="h-0.5 bg-accent w-1/4"
                            barClassName="bg-accent-hover"
                        />
                    ))}</div>
            </div>
        </div>
    );

};

export default ImageSliderContainer;
