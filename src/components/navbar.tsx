"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import HoverText from "@/components/hover-text";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (pathname === "/") {
      window.scrollTo(0, 0);
      window.scrollTo({ top: 0, behavior: "auto" });


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

  // disable scroll saat mobile menu terbuka
  // useEffect(() => {
  //   if (menuOpen) {
  //     document.body.style.overflow = "hidden";
  //     document.documentElement.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //     document.documentElement.style.overflow = "auto";
  //   }
  // }, [menuOpen]);

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
      className="w-full h-dvh flex flex-col fixed top-0 bottom-0 left-0 right-0 z-[100] pointer-events-none">
      <div
        className="w-full bg-primary flex justify-between items-center py-2 px-4 lg:px-8 pointer-events-auto"
      >
        <ul className="flex items-center  text-sm gap-4 h-full cursor-pointer">
          <li className="sm:hidden">
            <button
              className="relative w-8 h-6 flex flex-col justify-between items-center cursor-pointer bg-primary "
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <motion.span
                className="block w-8 h-[2px] bg-text rounded origin-left"
                animate={
                  menuOpen
                    ? { rotate: 45, }
                    : { rotate: 0 }
                }
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-8 h-[2px] bg-text rounded origin-left"
                animate={
                  menuOpen
                    ? { scaleX: 0 }
                    : { scaleX: 1 }
                }
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-8 h-[2px] bg-text rounded origin-left"
                animate={
                  menuOpen
                    ? { rotate: -45, }
                    : { rotate: 0 }
                }
                transition={{ duration: 0.3 }}
              />
            </button>
          </li>
          <li>
            <a href="/" className="flex items-center h-full ">
              <Image
                src="/assets/logo/stailore-latter-logo-dark-green.png"
                alt="Stailore Logo"
                width={50}
                height={50}
                className="object-contain"
              />
              <h1 className="text-xl lg:text-2xl">Stailore</h1>
            </a>
          </li>

          <div className="w-px h-6 border-l mx-2 hidden sm:block"></div>
          <li className=" hidden sm:flex items-center font-semibold tracking-wide">
            <a href="/">
              <HoverText className="bold-text text-base ">Home</HoverText>
            </a>
          </li>
          <li className=" hidden sm:flex items-center font-semibold tracking-wide">
            <Link href="">
              <HoverText className="bold-text text-base">Fabric</HoverText>
            </Link>
          </li>
          <li className=" hidden sm:flex items-center font-semibold tracking-wide">
            <Link href="">
              <HoverText className="bold-text text-base">Contact</HoverText>
            </Link>
          </li>
        </ul>
        <ul className="flex items-center text-sm gap-4 h-full">
          <li className="block">
            <button className="bg-text tracking-wide rounded-full text-white text-sm px-6 py-3 flex items-center border-none outline-none focus:outline-none">
              <HoverText>Bring to Home</HoverText>
            </button>
          </li>
        </ul>
      </div>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: menuOpen ? "0%" : "-100%" }}
        transition={{ duration: 1, ease: [0.624, 0.019, 0.039, 0.906] }}
        className="px-8 w-full h-full bg-primary pointer-events-auto flex  flex-col justify-between "
      >
        <div className=" flex flex-col justify-start items-center text-second text-xl ">
          <ul className="w-full flex flex-col justify-center items-start gap-4">
            <span className="text-lg text-text/75">Menu</span>
            <li className="w-full flex justify-between items-center group">
              <a
                href="/"
                className="text-6xl text-kaftan"
              >
                Home
              </a>
              <span className="h-2 w-2 rounded-full bg-text opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </li>
            <li className="w-full flex justify-between items-center group">
              <Link href="/about"
              onClick={() => setMenuOpen(false)}
                className="text-6xl text-kaftan" >
                About
              </Link>
              <span className="h-2 w-2 rounded-full bg-text opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </li>
            <li className="w-full flex justify-between items-center group">
              <Link href="/fabric"
              onClick={() => setMenuOpen(false)}
                className="text-6xl text-kaftan" >
                Fabric
              </Link>
              <span className="h-2 w-2 rounded-full bg-text opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </li>
          </ul>
        </div>
        <div className="w-full h-px bg-text/70  "></div>
        <div className="w-full flex justify-between items-start gap-8">
          <ul className="flex flex-col gap-1">
            <h3 className="font-bold text-lg lg:text-xl ">Menu</h3>
            <li className="cursor-pointer text-sm lg:text-base ">
              <a href="/">
                Home
              </a>
            </li>
            <li className="cursor-pointer text-sm lg:text-base ">
              <Link href="/"
              onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li className="cursor-pointer text-sm lg:text-base ">
              <Link href="/"
              onClick={() => setMenuOpen(false)}>
                Fabric
              </Link>
            </li>
            <li className="cursor-pointer text-sm lg:text-base ">
              <Link href="/"
              onClick={() => setMenuOpen(false)}>
                Product
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-1">
            <h3 className="font-bold text-lg lg:text-xl ">Follow Us</h3>
            <li className="cursor-pointer text-sm lg:text-base ">
              <Link href="/"
              onClick={() => setMenuOpen(false)}>
                Instagram
              </Link>
            </li>
            <li className="cursor-pointer text-sm lg:text-base ">
              <Link href="/"
              onClick={() => setMenuOpen(false)}>
                Email
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-1">
            <h3 className="font-bold text-lg lg:text-xl ">Information</h3>
            <li className="cursor-pointer text-sm lg:text-base ">
              <Link href="/"
              onClick={() => setMenuOpen(false)}>
                Terms & Conditions
              </Link>
            </li>
            <li className="cursor-pointer text-sm lg:text-base ">
              <Link href="/"
              onClick={() => setMenuOpen(false)}>
                Privacy Policy
              </Link>
            </li>
            <li className="cursor-pointer text-sm lg:text-base ">
              <Link href="/"
              onClick={() => setMenuOpen(false)}>
                How to Order
              </Link>
            </li>
            <li className="cursor-pointer text-sm lg:text-base ">
              <Link href="/"
              onClick={() => setMenuOpen(false)}>
                Shipping & Returns
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full h-px bg-text/70  "></div>
        <div className="w-full flex flex-col items-end mb-12">
          <p className="text-sm lg:text-lg flex items-center gap-2"><CiLocationOn />Nusa Dua, Bali, Indonesia </p>
          <p className="text-sm lg:text-lg ">© {new Date().getFullYear()} Stailore. Beauty in Every Detail.</p>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
