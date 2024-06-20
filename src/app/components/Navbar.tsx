"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
        "fixed top-0 w-full z-50 flex p-4 gap-8 transition-all duration-300 ease-in-out",
        isScrolled ? "bg-white shadow-md" : "navbar-blur"
      )}
    >
      <div className="flex gap-1 items-center">
        <Image src={"/logo.svg"} width={50} height={50} alt="logo" />
        <span className="text-3xl font-black">DRIVEN</span>
      </div>
      <div className="flex ml-auto">
        <ul className="flex items-center gap-4 font-medium">
          <li className="hover:text-elegant-blue">
            <Link href="#home">Home</Link>
          </li>
          <li className="hover:text-elegant-blue">
            <Link href="#features">Features</Link>
          </li>
          <li className="hover:text-elegant-blue">
            <Link href="#blogs">Blogs</Link>
          </li>
          <li className="hover:text-elegant-blue">
            <Link href="#newsletter">Newsletter</Link>
          </li>
          <li className="hover:text-elegant-blue">
            <Link href="#contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <span className="material-icons cursor-pointer hover:text-elegant-blue transition-colors duration-300 ease-in-out hover:rotate-90">
          settings
        </span>
      </div>
      <div className="flex items-center">
        <button className="rounded bg-elegant-blue p-4 text-white font-bold border border-elegant-blue hover:bg-opacity-0 hover:border hover:border-elegant-blue hover:text-elegant-blue">
          Instant Valuation
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
