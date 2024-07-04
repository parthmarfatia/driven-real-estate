import React, { useState } from "react";

const AdditionalMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex w-full items-center justify-between gap-1 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        Options
        <span
          className="material-icons transform transition-transform duration-200"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          chevron_right
        </span>
      </button>
      {isOpen && (
        <ul className="absolute left-0 md:left-40 mt-6 md:-mt-4 w-40 bg-black/70 shadow-md rounded z-10 dropdown-pointer-left">
          <li className="px-4 py-2 text-white hover:bg-lighter-blue/30">
            <a href="#blogs">Option 1</a>
          </li>
          <li className="px-4 py-2 text-white hover:bg-lighter-blue/30">
            <a href="#blogs">Option 2</a>
          </li>
          <li className="px-4 py-2 text-white hover:bg-lighter-blue/30">
            <a href="#blogs">Option 3</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default AdditionalMenu;
