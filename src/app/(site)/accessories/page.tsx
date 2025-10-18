import ImageScroll from "@/components/animation/image-scrool";
import Link from "next/link";

const Accessories = () => {
    return (
        <div className="w-full min-h-dvh flex flex-col items-center justify-start ">
            <div className="w-full h-[80dvh] flex flex-col justify-center items-center gap-8">
                <span className="text-base tracking-wider font-bold text-secondary">ACCESSORIES</span>
                <div className="text-center">
                    <h1 className="text-7xl capitalize">Where comfort meets</h1>
                    <h1 className="text-7xl capitalize">confidencee</h1>
                </div>
                <p className="w-1/3 text-center text-base">Let the subtle sense of ease guide you. When you feel good within, it shows effortlessly on the outside.</p>
            </div>
            <div className="w-3/4 min-h-dvh flex flex-col items-center">
                <div className="w-full h-[100dvh] flex gap-24 ">
                    <Link
                        href="/accessories/headband"
                        className="relative w-1/2 h-[80dvh] flex flex-col items-center justify-center"
                    >
                        <ImageScroll
                            src="https://via.assets.so/img.jpg?w=1920&h=1080&bg=dbeafe&f=png"
                            height={1080}
                            width={1920}
                            yRange={[-100, 0]}
                            alt="headband"
                            className="object-cover w-full h-full"
                        />
                        <h1 className="text-7xl absolute bottom-0">Headband</h1>
                    </Link>
                    <Link
                        href="/accessories/hair-tie"
                        className="relative w-1/2 h-[80dvh] flex flex-col items-center justify-center"
                    >
                        <ImageScroll
                            src="https://via.assets.so/img.jpg?w=1920&h=1080&bg=dbeafe&f=png"
                            height={1080}
                            width={1920}
                            yRange={[-100, 0]}
                            alt="headband"
                            className="object-cover w-full h-full"
                        />
                        <h1 className="text-7xl absolute bottom-0">Hair Tie</h1>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Accessories;