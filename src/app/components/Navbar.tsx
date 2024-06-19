import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <section className="fixed top-0 w-full z-50 flex p-4 gap-8 navbar-blur">
      <div className="flex gap-1 items-center">
        <Image src={"/logo.svg"} width={50} height={50} alt={"logo"} />
        <span className="text-3xl font-black">DRIVEN</span>
      </div>
      <nav className="flex ml-auto">
        <ul className="flex items-center gap-4 font-medium">
          <li>
            <Link href="">Your Property</Link>
          </li>
          <li>
            <Link href="">For Developers</Link>
          </li>
          <li>
            <Link href="">Invest</Link>
          </li>
          <li>
            <Link href="">Off Plan</Link>
          </li>
          <li>
            <Link href="">Services</Link>
          </li>

          <li>
            <Link href="">Content Hub</Link>
          </li>
          <li>
            <Link href="">About Us</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center">
        <span className="material-icons">settings</span>
      </div>
      <div className="flex items-center">
        <button className="rounded bg-blue-500 p-4 text-white font-bold border border-blue-500 hover:bg-opacity-0 hover:border hover:border-blue-500 hover:text-blue-400">
          Instant Valuation
        </button>
      </div>
    </section>
  );
};

export default Navbar;
