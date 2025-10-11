import ProductGroup from "@/components/card/product-group";
import Cart from "@/components/cart";
import LineLogo from "@/components/line-logo";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shop  | Stailore - Every Stitch Has a Story",
    description: "Discover our curated selection of premium fabrics and ready designs. Each piece is crafted to bring comfort, confidence, and timeless elegance to your style."
};

const ShopPage = () => {
    return (
        <main className="w-full  min-h-dvh flex flex-col items-center">
            {/* Char Shop  */}
            <Cart/>
            <div className="px-4 w-3/4 gap-2  h-[30dvh] sm:h-[50dvh]   flex flex-col justify-end items-start sticky ">
                <h1 className="text-5xl sm:text-7xl">Crafted for</h1>
                <h1 className="text-5xl sm:text-7xl">every occasion. </h1>
                <p className="text-xl  w-3/4">Each piece is more than fabric — it’s a reflection of your moments, your confidence, and your story. Feel the elegance tailored to accompany you, wherever life takes you.</p>
            </div>
            <LineLogo className="my-10 mb-30"/>
            <ProductGroup />
        </main>
    );
}

export default ShopPage;