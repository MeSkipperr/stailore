"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import HoverText from "@/components/hover-text";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { NAVBAR_PATHS, NAVBAR_TRANSPARENT_PATHS } from "@/config";
import matchPath from "@/utils/path/matchPath";
import CallToAction from "./shared/call-to-action";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  const isTransparentPage = matchPath(pathname, NAVBAR_TRANSPARENT_PATHS);

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

  useEffect(() => {
    if (!isTransparentPage) {
      setIsTransparent(false);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    };

    handleScroll(); // set state saat pertama render
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isTransparentPage]);

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
      <motion.div
        className={`w-full bg-primary  flex justify-between items-center py-2 px-4 lg:px-8 pointer-events-auto`}
        animate={{
          y: isTransparent ? "-100%" : 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
      >
        <ul className="flex items-center  text-sm  -4 h-full cursor-pointer space-x-4">
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

          <div className="w-px h-6 border-l  border-text bg-text hidden sm:block"></div>
          {NAVBAR_PATHS.map((item) => {
            const isActive = pathname === item.path;

            return (
              <li
                key={item.path}
                className="hidden sm:flex items-center font-semibold tracking-wide justify-center relative"
              >
                <Link href={item.path}>
                  <HoverText className=" text-base tracking-wider ">{item.name}</HoverText>
                </Link>

                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 size-1 rounded-full bg-text transition-all duration-300"></span>
                )}
              </li>
            );
          })}
        </ul>
        <ul className="flex items-center text-sm  -4 h-full">
          <li className="block">
            <CallToAction />
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: menuOpen ? "0%" : "-100%" }}
        transition={{ duration: 1, ease: [0.624, 0.019, 0.039, 0.906] }}
        className="px-4 w-full h-full bg-primary pointer-events-auto flex  flex-col justify-between "
      >
        <div className=" flex flex-col justify-start items-center text-second text-xl ">
          <ul className="w-full flex flex-col justify-center items-start  space-y-2">
            <span className="text-lg text-text/50 font-semibold">MENU</span>
            <li className="w-full flex justify-between items-center group">
              <a
                href="/"
                className="text-5xl text-kaftan"
              >
                Home
              </a>
              <span className={`h-2 w-2 rounded-full bg-text ${pathname === "/" ? "opacity-100" : "opacity-0 group-hover:opacity-100"}  transition-opacity duration-500`}></span>
            </li>
            {NAVBAR_PATHS.map((item) => {
              const isActive = pathname === item.path;

              return (
                <li key={"sidebar-" + item.path} className="w-full flex justify-between items-center group">
                  <Link href={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="text-5xl text-kaftan" >
                    {item.name}
                  </Link>
                  <span className={`h-2 w-2 rounded-full bg-text ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}  transition-opacity duration-500`}></span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full h-px bg-text/70  "></div>
        <div className="w-full flex justify-between items-start  -8">
          <ul className="flex flex-col  -1">
            <h3 className="font-bold text-base lg:text-lg pb-2">Menu</h3>
            <li className="cursor-pointer text-sm lg:text-base ">
              <a href="/">
                Home
              </a>
            </li>
            {NAVBAR_PATHS.map((item) => {
              return (
                <li
                  key={`footer-sidebar-${item.path}`}
                  className="cursor-pointer text-sm lg:text-base " >
                  <Link href={item.path}
                    onClick={() => setMenuOpen(false)}>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="flex flex-col  -1">
            <h3 className="font-bold text-base lg:text-lg  pb-2">Follow Us</h3>
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
          <ul className="flex flex-col  -1">
            <h3 className="font-bold text-base lg:text-lg l pb-2">Information</h3>
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
          <p className="text-sm lg:text-base flex items-center  -2"><CiLocationOn />Nusa Dua, Bali, Indonesia </p>
          <p className="text-sm lg:text-base ">© {new Date().getFullYear()} Stailore. Beauty in Every Detail.</p>
        </div>
      </motion.div>
    </motion.nav >
  );
};

export default Navbar;
