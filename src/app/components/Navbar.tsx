"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import DropdownButton from "./DropdownButton";
import MobileMenuModal from "./MobileMenuModal";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={twMerge(
        "fixed top-0 w-full z-50 flex py-4 px-8 md:px-16 xl:px-24 gap-8 transition-all duration-300 ease-in-out ",
        isScrolled ? "bg-white shadow-md" : "navbar-blur"
      )}
    >
      <div className="flex gap-1 items-center hover:scale-105 transition-transform duration-300">
        <Image src={"/logo.svg"} width={50} height={50} alt="logo" />
        <span className="text-3xl font-black">DRIVEN</span>
      </div>
      <div className=" ml-auto hidden lg:flex">
        <ul className="flex items-center gap-4 font-medium">
          <li className="hover:text-elegant-blue hover:scale-105 transition-transform duration-300">
            <Link href="#home">Home</Link>
          </li>
          <li className="hover:text-elegant-blue hover:scale-105 transition-transform duration-300">
            <Link href="#features">Features</Link>
          </li>
          <li className="hover:text-elegant-blue hover:scale-105 transition-transform duration-300">
            <DropdownButton />
          </li>
          <li className="hover:text-elegant-blue hover:scale-105 transition-transform duration-300">
            <Link href="#newsletter">Newsletter</Link>
          </li>
          <li className="hover:text-elegant-blue hover:scale-105 transition-transform duration-300">
            <Link href="#contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className=" items-center hidden lg:flex">
        <span className="material-icons cursor-pointer hover:text-elegant-blue hover:scale-105 transition-transform duration-300  hover:animate-rotate-infinite">
          settings
        </span>
      </div>
      <div className=" items-center hidden lg:flex">
        <button className="rounded bg-elegant-blue p-4 text-white font-bold border border-elegant-blue hover:scale-105 transition-transform duration-300 hover:bg-elegant-blue/80">
          Instant Valuation
        </button>
      </div>
      <div className="lg:hidden flex items-center ml-auto">
        <MobileMenuModal />
      </div>
    </nav>
  );
};

export default Navbar;
