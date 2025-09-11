"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import HoverText from "@/components/hover-text";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Navbar = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      window.scrollTo(0, 0);
      window.scrollTo({ top: 0, behavior: "instant" });

      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      const preventScroll = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
      };

      const preventKeyScroll = (e: KeyboardEvent) => {
        if (
          ["ArrowUp", "ArrowDown", "PageUp", "PageDown", " ", "Home", "End"].includes(e.key)
        ) {
          e.preventDefault();
        }
      };

      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
      window.addEventListener("keydown", preventKeyScroll, { passive: false });

      const timer = setTimeout(() => {
        document.body.style.overflow = "auto";
        document.documentElement.style.overflow = "auto";
        window.removeEventListener("wheel", preventScroll);
        window.removeEventListener("touchmove", preventScroll);
        window.removeEventListener("keydown", preventKeyScroll);
      }, 5000);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "auto";
        document.documentElement.style.overflow = "auto";
        window.removeEventListener("wheel", preventScroll);
        window.removeEventListener("touchmove", preventScroll);
        window.removeEventListener("keydown", preventKeyScroll);
      };
    }
  }, [pathname]);
  const getDelay = () => {
    if (pathname === "/") return 4.5;
    if (pathname === "/about") return 2;
    if (pathname.startsWith("/blog")) return 1;
    return 0.5;
  };




  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: getDelay(),
        duration: 0.5,
      }}
      className="w-full bg-primary flex justify-between items-center py-2 px-8 fixed top-0 left-0 right-0 z-[100]">
      <ul className="flex items-center text-sm gap-4 h-full cursor-pointer">
        <li >
          <a href="/" className="flex items-center h-full ">
            <Image
              src="/assets/logo/stailore-latter-logo-dark-green.png"
              alt="Stailore Logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <h1 className="text-2xl hidden sm:block">Stailore</h1>
          </a>
        </li>
        <div className="w-px h-6 border-l mx-2 hidden sm:block"></div>
        <li className=" hidden sm:flex items-center font-semibold tracking-wide">
          <Link href="">
            <HoverText className="bold-text">About</HoverText>
          </Link>
        </li>
        <li className=" hidden sm:flex items-center font-semibold tracking-wide">
          <Link href="">
            <HoverText className="bold-text">Home</HoverText>
          </Link>
        </li>
        <li className=" hidden sm:flex items-center font-semibold tracking-wide">
          <Link href="">
            <HoverText className="bold-text">Fabric</HoverText>
          </Link>
        </li>
      </ul>
      <ul>
        <li className="hidden sm:block">
          <button className="bg-text  tracking-wide rounded-full text-white text-sm px-6 py-3 flex items-center">
            <HoverText>Bring to Home</HoverText>
          </button>
        </li>
        <li className="sm:hidden">
          <button></button>
        </li>
      </ul>
    </motion.nav>

  );
};

export default Navbar;
