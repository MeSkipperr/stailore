"use client";
import PriceDisplay from "@/components/price-display";
import { useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import CartTableItem from "./cart-table";
import { CartItem } from "@/models/cart";
import { useLocalStorageState } from "@/utils/useLocalStorage";
import HoverText from "../hover-text";

const Cart = () => {
    const [showDetail, setShowDetail] = useState(false);
    const [cart, setCart, cartActions] = useLocalStorageState<CartItem[]>("cart", []);
    const [grandTotal, setGrandTotal] = useState(0);
    const [isVisible, setIsVisible] = useState(false); // ⬅️ untuk kendali animasi keluar

    // Hitung total harga & tampilkan cart saat data ada
    useEffect(() => {
        if (cart && cart.length > 0) {
            setGrandTotal(cart.reduce((sum, item) => sum + item.totalPriceIDR, 0));
            setIsVisible(true); // munculkan cart
        } else {
            // sembunyikan setelah animasi keluar
            setShowDetail(false);
            setTimeout(() => setIsVisible(false), 700); // sesuai durasi animasi exit
        }
    }, [cart]);

    const handleQuantityChange = (
        value: number | ((prev: number) => number),
        item: CartItem
    ) => {
        const newQty = typeof value === "function" ? value(item.quantity) : value;
        const newTotal = item.priceIDR * newQty;
        cartActions.updateItem("id", item.id, {
            quantity: newQty,
            totalPriceIDR: newTotal,
        });
    };

    const handleDeleteItem = (id: string) => {
        cartActions.deleteItem("id", id);
    };

    if (!isVisible || !cart) return null; 

    return (
        <div className="fixed inset-0 flex flex-col justify-center items-center pointer-events-none z-50 ">
            <AnimatePresence>
                {showDetail && (
                    <motion.div
                        key="cart-detail"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{
                            duration: 0.7,
                            ease: [0.624, 0.019, 0.039, 0.906],
                        }}
                        className="fixed bottom-0 left-0 w-full h-dvh flex justify-center bg-primary pointer-events-auto"
                    >
                        <div className="mt-20 h-full w-full lg:w-3/4 px-4">
                            <h1 className="text-5xl lg:text-7xl">Cart</h1>
                            <div className="w-full flex justify-center">
                                <table className="w-full lg:w-3/4 text-left text-sm">
                                    <thead>
                                        <tr className="border-b border-text/20">
                                            <th className="w-[40%] lg:w-[55%] text-sm lg:text-lg py-2">Product Detail</th>
                                            <th className="w-[15%] text-sm lg:text-lg py-2 text-center">Quantity</th>
                                            <th className="w-[15%] text-sm lg:text-lg py-2 text-center">Price</th>
                                            <th className="w-[15%] text-sm lg:text-lg py-2 text-center">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((item) => (
                                            <CartTableItem
                                                key={item.id}
                                                image={item.imageUrl ?? ""}
                                                title={item.productName}
                                                type={item.typeName}
                                                price={item.priceIDR}
                                                quantity={item.quantity}
                                                deleteHandler={() => handleDeleteItem(item.id)}
                                                setQuantity={(value) => handleQuantityChange(value, item)}
                                            />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </motion.div>
                )}

                <motion.div
                    key="cart-summary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        delay: 0.2,
                        duration: 0.3,
                        ease: easeInOut,
                    }}
                    className="text-sm absolute lg:left-auto lg:right-auto left-4 right-4 bottom-12 bg-primary border border-gray-100 flex justify-between items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]  lg:w-1/3 rounded-2xl pointer-events-auto p-4"
                >
                    <CiShoppingCart className="size-6" />

                    <button
                        className="cursor-pointer flex items-center gap-2"
                        onClick={() => setShowDetail(!showDetail)}
                    >
                        <HoverText>
                            <span className="flex justify-center gap-2 items-center hover:text-secondary">
                                <IoIosArrowUp
                                    className={`transition ${!showDetail ? "rotate-90" : ""}`}
                                />
                                Detail
                            </span>
                        </HoverText>
                    </button>

                    <div className="flex items-center gap-2">
                        <span>{cart.length } Items </span>
                        <span>-</span>
                        <PriceDisplay amount={grandTotal} />
                    </div>

                    <button className="bg-secondary transition-all hover:bg-secondary/80 flex items-center gap-2 text-white py-2 px-6 rounded-2xl cursor-pointer">
                        <HoverText>
                            <span className="flex justify-center gap-2 items-center ">
                                <IoBagOutline />
                                Checkout
                            </span>
                        </HoverText>
                    </button>
                </motion.div>
            </AnimatePresence>
        </div >
    );
};

export default Cart;
