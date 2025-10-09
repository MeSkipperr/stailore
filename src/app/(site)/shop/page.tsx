import ProductGroup from "@/components/card/product-group";
import Cart from "@/components/cart";



const ShopPage = () => {
    return (
        <main className="w-full  lg:w-3/4 min-h-dvh flex flex-col items-center">
            {/* Char Shop  */}
            <Cart/>
            <div className="px-4 w-full gap-2  h-[30dvh] sm:h-[50dvh]   flex flex-col justify-center items-start sticky mb-20">
                <h1 className="text-5xl sm:text-7xl">Crafted for</h1>
                <h1 className="text-5xl sm:text-7xl">every occasion.</h1>
                <p className="text-xl  w-3/4">Each piece is more than fabric — it’s a reflection of your moments, your confidence, and your story. Feel the elegance tailored to accompany you, wherever life takes you.</p>


            </div>

            <ProductGroup />
        </main>
    );
}

export default ShopPage;