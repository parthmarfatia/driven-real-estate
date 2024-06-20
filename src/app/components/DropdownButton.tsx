import React, { useState } from "react";

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex items-center gap-1 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        Blogs
        <span
          className="material-icons transform transition-transform duration-200"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          expand_more
        </span>
      </button>
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-40 bg-black/70 shadow-md rounded z-10 dropdown-pointer">
          <li className="px-4 py-2 text-white hover:bg-lighter-blue/30">
            <a href="#blogs">Blog 1</a>
          </li>
          <li className="px-4 py-2 text-white hover:bg-lighter-blue/30">
            <a href="#blogs">Blog 2</a>
          </li>
          <li className="px-4 py-2 text-white hover:bg-lighter-blue/30">
            <a href="#blogs">Blog 3</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownButton;
