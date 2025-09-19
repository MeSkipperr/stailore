import ImageScroll from "@/components/animation/image-scrool";
import Reveal from "@/components/animation/reveal";
import ScrollReveal from "@/components/animation/ScrollReveal";
import Footer from "@/components/footer";
import HeroImage from "@/components/hero/hero-image";
import HomePageAnimation from "@/components/hero/homepage-animation";
import ImageSlider from "@/components/hero/image-slider";
import HeroText from "@/components/hero/text";
import HoverText from "@/components/hover-text";
import Image from "next/image";
import { FaStar } from "react-icons/fa";


export default function Home() {

  return (
    <main className="w-full flex flex-col justify-center items-center">
      <HomePageAnimation />
      <div className="w-full  sticky top-0 z-50 pointer-events-none">
        <div className="w-full h-[45dvh] sm:h-[45dvh] "></div>
        <div className="w-full z-50   flex flex-col justify-center items-center relative pointer-events-auto">
          <HeroImage />
          <div className="bg-primary w-full h-dvh flex justify-center items-center  flex-col  relative   ">
            <div className="absolute inset-0  flex justify-center items-center flex-col my-40">
              <Reveal className="w-3/4 h-1/2 flex justify-between items-start">
                <ImageScroll
                  src="https://via.assets.so/img.jpg?w=400&h=400&bg=e5e7eb&f=png"
                  width={400}
                  height={400}
                  alt="decorative"
                  className="w-auto h-3/4 object-cover"
                />

                <ImageScroll
                  src="https://via.assets.so/img.jpg?w=864&h=1080&bg=e5e7eb&f=png"
                  width={864}
                  height={1080}
                  alt="decorative"
                  className="w-auto h-3/4 object-cover"
                />
              </Reveal>
              <Reveal className="w-3/4 h-1/2 flex justify-between items-end">
                <ImageScroll
                  src="https://via.assets.so/img.jpg?w=864&h=1080&bg=e5e7eb&f=png"
                  width={864}
                  height={1080}
                  alt="decorative"
                  className="w-auto h-1/2 object-cover"
                />

                <ImageScroll
                  src="https://via.assets.so/img.jpg?w=400&h=400&bg=e5e7eb&f=png"
                  width={400}
                  height={400}
                  alt="decorative"
                  className="w-auto h-3/4 object-cover"
                />
              </Reveal>
            </div>
            <div className="z-10 w-full h-full  flex justify-center flex-col items-center mt-40 space-y-2">
              <Reveal as="h1" className="text-laobrige text-4xl text-secondary">5</Reveal>
              <Reveal as="h1" className="text-7xl">Tailored to Perfection,</Reveal>
              <Reveal as="h1" className="text-7xl">Styled for You</Reveal>
              <Reveal className="text-xl w-2/6 flex justify-center items-center text-center mt-4">
                <p>Handcrafted hair accessories made with love, bringing comfort, elegance, and a touch of uniqueness to your everyday style.</p>
              </Reveal>
            </div>
          </div>
          <div className="w-full flex flex-col bg-primary justify-center items-center rounded-b-3xl">
            <div className="w-full  flex justify-center items-center space-x-4 my-40 ">
              <div className="w-full h-px bg-text opacity-60"></div>
              <Image
                src="/assets/logo/stailore-latter-logo-dark-green.png"
                alt="Stailore Logo"
                width={50}
                height={50}
                className="object-contain"
              />
              <div className="w-full h-px bg-text opacity-60"></div>
            </div>

            <div className="w-3/4 h-[75dvh]  flex justify-start items-center gap-20">
              <div className="h-full w-1/2  flex justify-center items-center overflow-hidden">
                <ImageScroll
                  width={864}
                  height={1080}
                  alt="Fabric Picture"
                  className="w-full"
                  src="https://via.assets.so/img.jpg?w=864&h=1080&pattern=grid&gradient=linear-gradient%28220deg%2C+%23ffffff+5%25%2C+rgba%28181%2C+255%2C+252%2C+0.5%29+15%25%2C+rgba%28255%2C+222%2C+233%2C+0.5%29+50%25%2C+rgba%28181%2C+255%2C+252%2C+0.5%29+70%25%2C+%23ffffff+90%25%29&f=png"
                />
              </div>
              <div className="h-full w-1/2 flex  justify-start items-start flex-col gap-8">
                <span className="bold-text text-xl text-secondary opacity-60">Fabric</span>
                <div className="flex flex-col gap-2">
                  <h1 className="text-7xl flex items-center">Quality<span className="text-laobrige text-2xl pl-2">3</span></h1>
                  <h1 className="text-7xl">You Can Feel</h1>
                </div>
                <p className="w-full text-justify text-lg">Our accessories are made from carefully selected fabrics that are smooth to the touch and breathable for everyday comfort. Each piece is thoughtfully crafted to embrace your hair gently, keeping it in place without pulling or damage. Beyond comfort, every fiber carries a timeless elegance that inspires confidence and effortless beauty in every moment</p>
                <button className="py-4 px-6 rounded-full bg-secondary text-white flex items-center">
                  <HoverText>Explore the Fabric</HoverText>
                </button>
              </div>
            </div>


            <ImageSlider />
            <div className="w-3/4 h-[70dvh] flex items-center justify-start gap-8">
              <div className="h-full w-1/2   relative flex flex-col justify-center gap-8">
                <ScrollReveal
                  rangeY={[50, -50]}
                  rangeX={[-30, 30]}
                  className="w-2/3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex items-center rounded-2xl gap-2 bg-secondary/75 "
                >
                  <div className="w-full h-full flex justify-center items-start flex-col gap-2 py-4 px-2 bg-primary ml-4 pr-6 rounded-r-2xl ">
                    <span className="bold-text w-full flex items-center justify-between text-lg">
                      Amelia S.
                      <div className="flex text-secondary/75 gap-1">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </span>
                    <p>The fabric feels incredibly soft, and it doesn’t pull my hair at all. I can wear it all day comfortably.</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal
                  rangeY={[50, -50]}
                  rangeX={[30, -30]}
                  className="w-2/3  shadow-[0_3px_10px_rgb(0,0,0,0.2)] ml-auto flex items-center rounded-2xl gap-2 bg-secondary"
                >
                  <div className="w-full h-full flex justify-center items-start flex-col gap-2 py-4 px-2 bg-primary ml-4 pr-6 rounded-r-2xl ">
                    <span className="bold-text w-full flex items-center justify-between text-lg">
                      Clara W.
                      <div className="flex text-secondary gap-1">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </span>
                    <p>Elegant and simple. This accessory makes even my casual look feel more polished.</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal
                  rangeY={[50, -50]}
                  rangeX={[-30, 30]}
                  className="w-4/6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex items-center justify-start rounded-2xl gap-2 bg-secondary/35"
                >
                  <div className="w-full h-full flex justify-center items-start flex-col gap-2 py-4 px-2 bg-primary ml-4 pr-6 rounded-r-2xl ">
                    <span className="bold-text w-full flex items-center justify-between text-lg">
                      Michelle L.
                      <div className="flex text-secondary/35 gap-1">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </span>
                    <p>I love how durable it is while still feeling light and gentle. Truly a timeless piece.</p>
                  </div>
                </ScrollReveal>
              </div>
              <div className="flex gap-2 w-1/2 h-full flex-col justify-center items-start  ">
                <ScrollReveal rangeY={[50, -50]} as="span" className="bold-text text-xl text-secondary opacity-60 ">Testimonials</ScrollReveal>
                <ScrollReveal rangeY={[50, -50]} as="h1" className="text-7xl">Winning</ScrollReveal>
                <ScrollReveal rangeY={[50, -50]} as="h1" className="text-7xl">hearts and trust</ScrollReveal>
                <ScrollReveal rangeY={[50, -50]} as="p" className="w-full text-justify text-lg">Real stories from those who’ve made our accessories part of their day.</ScrollReveal>
              </div>
            </div>
            <Footer />
          </div>
        </div>
        <div className="w-full h-[30dvh]"></div>
      </div>
      <div className="w-full h-dvh  flex flex-col justify-between top-0 fixed ">
        <HeroText />
        <div className="w-full h-[30dvh] bg-primary flex justify-center items-end relative">
          <div   className="w-full text-text  h-1/12 flex justify-center items-center text-[28rem] ">
            <h1>Stailore</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
