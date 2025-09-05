"use client";
import { motion } from "framer-motion";

export default function Example() {
    return (
        <div className="h-[300vh] flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.3 }} // amount = berapa banyak bagian elemen yg harus kelihatan
                className="w-40 h-40 bg-blue-500 rounded-lg"
            />
        </div>
    );
}
