import type { Metadata } from "next";
import Footer from "@/components/footer";

export const metadata: Metadata = {
    title: "Stailore | Your Personal Tailor",
    description: "Your Personal Tailor",
};

export default function SiteLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="w-full  flex flex-col items-center top-0 justify-center ">
            <div className="w-full sticky top-0 z-50 pointer-events-none flex flex-col items-center">
                <div className="w-full bg-primary pointer-events-auto flex flex-col items-center ">
                    {children}
                    <Footer />
                </div>
                <div className="w-full h-[10dvh] sm:h-[20dvh] lg:h-[30dvh]"></div>
            </div>
            <div className="w-full h-dvh  flex flex-col justify-end top-0 fixed ">
                <div className="w-full h-[10dvh] sm:h-[20dvh] lg:h-[30dvh] bg-primary flex justify-center items-end relative">
                    <div className="w-full h-px text-text flex justify-center items-center ">
                        <h1 className="text-[25vw] leading-none">Stailore</h1>
                    </div>
                </div>
            </div>
        </main>
    );
}
