import Link from "next/link";
import React, { useState } from "react";
import DropdownButton from "./DropdownButton";

const MobileMenuModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex items-center gap-1 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="material-icons text-5xl">menu</span>
      </button>
      {isOpen && (
        <ul className="absolute flex flex-col gap-8 items-center right-0 mt-2 w-80 bg-white/90 shadow-md rounded-2xl z-10 p-8 dropdown-pointer-white">
          <li className="hover:text-elegant-blue">
            <Link href="#home">Home</Link>
          </li>
          <li className="hover:text-elegant-blue">
            <Link href="#features">Features</Link>
          </li>
          <li className="hover:text-elegant-blue">
            <DropdownButton />
          </li>
          <li className="hover:text-elegant-blue">
            <Link href="#newsletter">Newsletter</Link>
          </li>
          <li className="hover:text-elegant-blue">
            <Link href="#contact">Contact Us</Link>
          </li>
          <li>
            <span className="material-icons cursor-pointer hover:text-elegant-blue  hover:animate-rotate-infinite">
              settings
            </span>
          </li>
          <li>
            <button className="rounded bg-elegant-blue p-4 text-white font-bold border border-elegant-blue hover:scale-105 transition-transform duration-300 hover:bg-elegant-blue/80">
              Instant Valuation
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MobileMenuModal;
