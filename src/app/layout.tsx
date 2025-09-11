import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import SmoothScroll from "@/components/smoothscroll";


export const metadata: Metadata = {
  title: "Stailore | Your Personal Tailor",
  description: "Your Personal Tailor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className="bg-primary text-text w-full flex flex-col justify-center  ">
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
