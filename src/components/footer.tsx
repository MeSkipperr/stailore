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
            <div className="w-[75%] h-[50dvh] py-20 flex flex-col items-center justify-center gap-12">
                <div className="w-full  flex items-center">
                    <div className="w-1/2 h-full flex flex-col justify-start items-start">
                        <h1 className="text-7xl">Every Knot</h1>
                        <h1 className="text-7xl">Has a Story 🌸</h1>
                    </div>
                    <div className="w-[50%] h-full flex justify-around">
                        <ul className="flex flex-col gap-1">
                            <h3 className="font-bold text-xl ">Menu</h3>
                            <li>
                                <Link href="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    Fabric
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    Product
                                </Link>
                            </li>
                        </ul>
                        <ul className="flex flex-col gap-1">
                            <h3 className="font-bold text-xl ">Follow Us</h3>
                            <Link href="/">
                                <li>Instagram</li>
                            </Link>
                            <Link href="/">
                                <li>Email</li>
                            </Link>
                        </ul>
                        <ul className="flex flex-col gap-1">
                            <h3 className="font-bold text-xl ">Information</h3>
                            <Link href="/">
                                <li>Terms & Conditions</li>
                            </Link>
                            <Link href="/">
                                <li>Privacy Policy</li>
                            </Link>
                            <Link href="/">
                                <li>How to Order</li>
                            </Link>
                            <Link href="/">
                                <li>Shipping & Returns</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className="w-full flex justify-between items-end">
                    <div className="w-1/2 flex flex-col items-start">
                        <h2 className="text-2xl mb-4">
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
                        <p className="text-lg flex items-center gap-2"><CiLocationOn />Nusa Dua, Bali, Indonesia </p>
                        <p className="text-lg ">© {new Date().getFullYear()} Stailore. Beauty in Every Detail.</p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Footer;