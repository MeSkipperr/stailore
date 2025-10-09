import type { Metadata } from "next";
import Footer from "@/components/footer";
import { AnimatePresence, LayoutGroup } from "framer-motion";

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
            <LayoutGroup>
                <AnimatePresence mode="wait">
                    {children}
                </AnimatePresence>
            </LayoutGroup>

        </main>
    );
}
