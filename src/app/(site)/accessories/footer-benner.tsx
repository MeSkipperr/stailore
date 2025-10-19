import CallToAction from "@/components/shared/call-to-action";
import Image from "next/image";

const FooterBenner = () => {
    return (
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
                <div className="relative z-10 flex flex-col justify-center items-center gap-4 lg:gap-8 px-4">
                    <Image
                        src="/assets/logo/stailore-latter-logo-dark-green.png"
                        width={50}
                        height={50}
                        alt="Stailore Logo"
                        className="object-contain"
                    />
                    <span className="uppercase text-sm lg:text-base font-bold">Feel The Detail</span>
                    <h1 className="text-5xl lg:text-7xl text-center">Choose Your Favorite</h1>
                    <CallToAction />
                </div>
            </div>
        </div>
    );
}

export default FooterBenner;