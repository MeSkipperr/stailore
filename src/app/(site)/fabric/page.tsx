import Reveal from "@/components/animation/reveal";
import StackScroll from "@/components/stack-scroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fabric Guide | Stailore",
    description: "Explore our carefully chosen fabrics—soft, breathable, and timeless. Each material designed to bring comfort, beauty, and confidence."
};

const FabricPage = () => {
    return (
        <Reveal duration={1.5} once delay={0.5} className="w-full sm:w-3/4">
            <div className="px-4 w-full  h-[30dvh] sm:h-[35dvh]   flex flex-col justify-end items-start sticky mb-20">
                <h1 className="text-5xl sm:text-7xl">Where softness</h1>
                <h1 className="text-5xl sm:text-7xl">meets your soul</h1>
                <p className="mt-4 text-sm sm:text-xl">Softness that stays close, giving comfort and quiet elegance.</p>
            </div>
            <div className="w-full mb-36 flex justify-center">
                <StackScroll />
            </div>
        </Reveal>
    );
}

export default FabricPage;