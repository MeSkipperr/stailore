"use client"
import PriceDisplay from "@/components/price-display";
import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import QuantityInput from "../quantity-input";
import CartTableItem from "./cart-table";

const Cart = () => {
    const [showDetail, setShowDetail] = useState(false);
    const [quantityInput, setQuantityInput] = useState(1);
    const [qty1, setQty1] = useState(1);
    const [qty2, setQty2] = useState(2);

    return (
        <div className="fixed inset-0  flex flex-col justify-center items-center  pointer-events-none z-50">
            <AnimatePresence>
                {showDetail && (
                    <motion.div
                        key="cart-detail"
                        initial={{ y: "100%" }}           // mulai dari bawah (tidak terlihat)
                        animate={{ y: 0 }}                // naik ke posisi penuh
                        exit={{ y: "100%" }}              // turun kembali ke bawah saat disembunyikan
                        transition={{
                            duration: 0.7,
                            ease: [0.624, 0.019, 0.039, 0.906],
                        }}
                        className="fixed  bottom-0 left-0 w-full h-dvh flex justify-center bg-primary pointer-events-auto "
                    >
                        <div className="mt-20 h-full w-3/4  ">
                            <h1 className="text-7xl">Cart</h1>
                            <div className="w-full flex justify-center">
                                <table className="w-3/4 text-left text-sm">
                                    <thead>
                                        <tr className="border-b border-text/20 text-base">
                                            <th className="py-2">Product Detail</th>
                                            <th className="py-2 text-center">Quantity</th>
                                            <th className="py-2 text-center">Price</th>
                                            <th className="py-2 text-center">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <CartTableItem
                                            image="/images/plant1.jpg"
                                            title="Monstera Deliciosa"
                                            type="Indoor Plant"
                                            price={120000}
                                            quantity={qty1}
                                            setQuantity={setQty1}
                                            currency="IDR"
                                        />
                                        <CartTableItem
                                            image="/images/plant2.jpg"
                                            title="Snake Plant"
                                            type="Succulent"
                                            price={95000}
                                            quantity={qty2}
                                            setQuantity={setQty2}
                                            currency="IDR"
                                        />
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="absolute bottom-12 bg-primary border border-gray-100 flex justify-between items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-1/3  rounded-2xl pointer-events-auto p-4">
                <CiShoppingCart className="size-6" />

                <button className="cursor-pointer flex items-center gap-2"
                    onClick={() => setShowDetail(!showDetail)}
                >
                    <IoIosArrowUp className={` transition ${!showDetail ? "rotate-90" : ""}`} />
                    Detail
                </button>
                <div className="flex items-center gap-2">
                    <span>4 Items </span>
                    <span>-</span>
                    <PriceDisplay
                        amount={12}
                        currency={"USD"}
                        className=" "
                    />
                </div>
                <button className="bg-secondary flex items-center gap-2 text-white py-2 px-6 rounded-full cursor-pointer">
                    <IoBagOutline />
                    Checkout
                </button>
            </div>
            {/* <div className="bg-primary flex justify-between items-center shadow w-1/2  mb-12 rounded-2xl pointer-events-auto p-4">
                    <button className="cursor-pointer">
                        <IoIosArrowForward className="text-2xl"/>
                    </button>
                    <span className="font-semibold ">Cart </span>
                    <div className="">
                        <ul>
                            <span className="font-bold">Elegant Fern Plant</span>
                            <li className="w-full flex justify-between">
                                <span>Lorem</span>
                                <span>1pc</span>
                            </li>
                        </ul>
                    </div>
                    <span>Total 100k</span>
                    <button className="bg-secondary  text-white py-2 px-6 rounded-full cursor-pointer">Buy</button>
                </div> */}
        </div>
    );
}

export default Cart;