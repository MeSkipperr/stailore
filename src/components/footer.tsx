"use client";

import Link from "next/link";
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // simple email validation
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        setError("");
        // lanjutkan submit di sini (API, dsb)
        console.log("Submitted email:", email);
    };

    return (
        <>
            <div className="w-full lg:w-3/4 min-h-[50dvh] py-20 flex flex-col items-center justify-center gap-12">
                <div className="w-full  flex items-center flex-col lg:flex-row gap-8 lg:gap-0">
                    <div className="w-full px-4  lg:w-1/2 h-full flex flex-col justify-start items-start">
                        <h1 className="text-5xl lg:text-7xl">Every Stitch</h1>
                        <h1 className="text-5xl lg:text-7xl">Has a Story 🌸</h1>
                    </div>
                    <div className="w-full px-4 lg:w-1/2 h-full flex justify-between items-start gap-8">
                        <ul className="flex flex-col gap-1">
                            <h3 className="font-bold text-lg lg:text-xl ">Menu</h3>
                            <li className="cursor-pointer text-sm lg:text-base ">
                                <Link href="/">
                                    Home
                                </Link>
                            </li>
                            <li className="cursor-pointer text-sm lg:text-base ">
                                <Link href="/">
                                    About
                                </Link>
                            </li>
                            <li className="cursor-pointer text-sm lg:text-base ">
                                <Link href="/">
                                    Fabric
                                </Link>
                            </li>
                            <li className="cursor-pointer text-sm lg:text-base ">
                                <Link href="/">
                                    Product
                                </Link>
                            </li>
                        </ul>
                        <ul className="flex flex-col gap-1">
                            <h3 className="font-bold text-lg lg:text-xl ">Follow Us</h3>
                            <li className="cursor-pointer text-sm lg:text-base ">
                                <Link href="/">
                                    Instagram
                                </Link>
                            </li>
                            <li className="cursor-pointer text-sm lg:text-base ">
                                <Link href="/">
                                    Email
                                </Link>
                            </li>
                        </ul>
                        <ul className="flex flex-col gap-1">
                            <h3 className="font-bold text-lg lg:text-xl ">Information</h3>
                            <li className="cursor-pointer text-sm lg:text-base ">
                                <Link href="/">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li className="cursor-pointer text-sm lg:text-base ">
                                <Link href="/">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li className="cursor-pointer text-sm lg:text-base ">
                                <Link href="/">
                                    How to Order
                                </Link>
                            </li>
                            <li className="cursor-pointer text-sm lg:text-base ">
                                <Link href="/">
                                    Shipping & Returns
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full px-4 gap-8 lg:gap-0 flex flex-col lg:flex-row lg:justify-between lg:items-end">
                    <div className="w-full  flex flex-col items-start">
                        <h2 className="text-lg lg:text-2xl mb-4">
                            Stay connected—never miss a new collection.
                        </h2>
                        <form onSubmit={handleSubmit} className="w-full flex items-center gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`flex-1 bg-transparent border-b-2 outline-none py-2
                                        ${error
                                        ? "border-red-500"
                                        : "border-secondary focus:border-secondary"
                                    }`}
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 rounded-xl cursor-pointer bg-secondary text-white text-sm"
                            >
                                Send
                            </button>
                        </form>
                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    </div>
                    <div className="w-full flex flex-col items-end">
                        <p className="text-sm lg:text-lg flex items-center gap-2"><CiLocationOn />Nusa Dua, Bali, Indonesia </p>
                        <p className="text-sm lg:text-lg ">© {new Date().getFullYear()} Stailore. Beauty in Every Detail.</p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Footer;