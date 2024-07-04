import React, { useState } from "react";
import AdditionalMenu from "./AdditionalMenu";

const SettingsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex items-center gap-1 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="material-icons cursor-pointer hover:text-elegant-blue hover:scale-105 transition-transform duration-300  hover:animate-rotate-infinite">
          settings
        </span>
      </button>
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-40 bg-black/70 shadow-md rounded z-10 dropdown-pointer">
          <li className="px-4 py-2 text-white hover:bg-lighter-blue/30">
            <a href="#blogs">Settings 1</a>
          </li>
          <li className="px-4 py-2 text-white hover:bg-lighter-blue/30">
            <a href="#blogs">Settings 2</a>
          </li>
          <li className="px-4 py-2 text-white hover:bg-lighter-blue/30">
            <AdditionalMenu />
          </li>
        </ul>
      )}
    </div>
  );
};

export default SettingsMenu;
