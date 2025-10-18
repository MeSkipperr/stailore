import ImageScroll from "@/components/animation/image-scrool";
import HoverText from "@/components/hover-text";
import ImageSliderContainer from "@/components/image-slide-container";
import LineLogo from "@/components/line-logo";
import Image from "next/image";
import Link from "next/link";

const image = "https://via.assets.so/img.jpg?w=1920&h=1080&gradientFrom=56CCF2&gradientTo=2F80ED&gradientAngle=135&f=png"
const Headband = () => {
    return (
        <div className="w-full min-h-dvh flex flex-col items-center justify-start ">
            <div className="w-full h-dvh relative">
                <ImageScroll
                    src={image}
                    height={1080}
                    width={1920}
                    yRange={[100, 0]}
                    alt="headband"
                    className="object-cover w-full h-full"
                    overlay
                    overlayClassName="bg-gradient-to-b from-black/40  to-transparent"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 text-white">

                    {/* Konten */}
                    <div className="relative z-10 flex flex-col justify-center items-center gap-4">
                        <Image
                            src="/assets/logo/stailore-latter-logo-dark-green.png"
                            width={100}
                            height={100}
                            alt="Stailore Logo"
                            className="object-contain"
                        />
                        <h1 className="text-9xl">Headband</h1>
                    </div>
                </div>
            </div>

            <div className="w-full h-[80dvh] flex flex-col items-center justify-center space-y-8">
                <span className="text-base tracking-wider font-bold text-secondary">HEADBAND</span>
                <div className="text-center">
                    <h1 className="text-7xl ">Hold your</h1>
                    <h1 className="text-7xl ">moments in place</h1>
                </div>
                <p className="w-1/3 text-center text-base">This headband is made to bring a quiet sense of confidence to your day. Its soft texture rests gently, keeping you comfortable while expressing effortless charm. A simple touch that reminds you—beauty feels better when it feels like you.</p>
            </div>
            <ImageSliderContainer />
            <div className="w-1/3 h-[40dvh] text-base  text-center flex flex-col items-center justify-center ">
                <p >Soft as a memory, light as a breath — each one carries a quiet kind of comfort.
                    Choose not just what you wear, but how you wish to feel today.</p>
            </div>
            <div className="w-full h-[80dvh] flex items-center justify-center relative">
                <Image
                    src="https://via.assets.so/img.jpg?w=1920&h=1080&bg=dbeafe&f=png"
                    height={1080}
                    width={1920}
                    alt="headband"
                    className="object-cover w-full h-[90%]"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 text-white">
                    {/* Overlay gelap */}
                    <div className="absolute w-full h-[90%] bg-black/30 z-0" />

                    {/* Konten */}
                    <div className="relative z-10 flex flex-col justify-center items-center gap-8">
                        <Image
                            src="/assets/logo/stailore-latter-logo-dark-green.png"
                            width={50}
                            height={50}
                            alt="Stailore Logo"
                            className="object-contain"
                        />
                        <span className="uppercase font-bold">Feel The Detail</span>
                        <h1 className="text-7xl">Choose Your Favorite</h1>
                        <Link href="/shop">
                            <button className="bg-text tracking-wide rounded-2xl text-white text-sm px-6 py-3 flex items-center border-none outline-none focus:outline-none">
                                <HoverText>Bring to Home</HoverText>
                            </button>
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Headband;