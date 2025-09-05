import Reveal from "@/components/animation/reveal";
import HeroImage from "@/components/hero/hero-image";
import HomePageAnimation from "@/components/hero/homepage-animation";
import HeroText from "@/components/hero/text";
import Image from "next/image";

export default function Home() {

  return (
    <main className="w-full flex flex-col justify-center items-center">
      <HomePageAnimation />
      <div className="w-full  sticky top-0 z-50 ">
        <div className="w-full h-[45dvh] sm:h-[45dvh]"></div>
        <div className="w-full z-50   flex flex-col justify-center items-center relative">
          <HeroImage />
          <div className="bg-primary w-full h-dvh flex justify-center items-center  flex-col  relative ">
            <div className="absolute inset-0  flex justify-center items-center flex-col mt-20">
              <Reveal className="w-3/4 h-1/2 flex justify-between items-start">
                <Image
                  src="https://via.assets.so/img.jpg?w=400&h=400&bg=e5e7eb&f=png"
                  width={400}
                  height={400}
                  alt="decorative"
                  className="w-auto h-1/2 object-cover"
                />

                <Image
                  src="https://via.assets.so/img.jpg?w=864&h=1080&bg=e5e7eb&f=png"
                  width={1920}
                  height={1080}
                  alt="decorative"
                  className="w-auto h-3/4 object-cover"
                />
              </Reveal>
              <Reveal className="w-3/4 h-1/2 flex justify-between items-end">
                <Image
                  src="https://via.assets.so/img.jpg?w=864&h=1080&bg=e5e7eb&f=png"
                  width={1920}
                  height={1080}
                  alt="decorative"
                  className="w-auto h-1/2 object-cover"
                />
                
                <Image
                  src="https://via.assets.so/img.jpg?w=400&h=400&bg=e5e7eb&f=png"
                  width={400}
                  height={400}
                  alt="decorative"
                  className="w-auto h-3/4 object-cover"
                />
              </Reveal>
            </div>
            <Reveal as="h1" className="text-7xl">Tailored to Perfection,</Reveal>
            <Reveal as="h1" className="text-7xl">Styled for You</Reveal>
            <Reveal as="h1" className="text-laobrige text-4xl">5</Reveal>
          </div>
          <div className="w-full h-dvh bg-primary"></div>
        </div>
        <div className="w-full h-[30dvh]"></div>
      </div>
      <div className="w-full h-dvh  flex flex-col justify-between top-0 fixed">
        <HeroText />
        <div className="w-full h-[30dvh] ">
          <h1>JAYA</h1>
        </div>
      </div>
    </main>
  );
}
