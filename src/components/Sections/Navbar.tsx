import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent px-10 md:px-20 lg:px-40 py-3">
      {/* Large Screen Navbar (Default) */}
      <div className="hidden lg:grid grid-cols-3 items-center">
        {/* Logo */}
        <div>
          <img src="../navbar.png" alt="logo" className="h-10 object-contain" />
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center items-center gap-8 text-lg font-medium">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Service</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>

        {/* Partner Login Button */}
        <div className="text-end">
          <button className="rounded text-white bg-[#69AF08] py-2 px-8 font-semibold">
            PARTNER LOGIN
          </button>
        </div>
      </div>

      {/* Medium Screens Navbar (md) */}
      <div className="hidden md:flex lg:hidden flex-col items-center">
        <div className="flex justify-between w-full items-center">
          <img src="../navbar.png" alt="logo" className="h-10 object-contain" />
          <button className="rounded text-white bg-[#69AF08] py-2 px-6 font-semibold">
            PARTNER LOGIN
          </button>
        </div>
        <div className="flex justify-center gap-6 mt-3 text-lg font-medium">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Service</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
      </div>

      {/* Small Screens Navbar (sm) */}
      <div className="md:hidden flex justify-between items-center">
        {/* Logo */}
        <img src="../navbar.png" alt="logo" className="h-10 object-contain" />

        {/* Hamburger Menu */}
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-3 bg-white shadow-md py-4 rounded-lg">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Service</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
          <button className="rounded text-white bg-[#69AF08] py-2 px-6 font-semibold">
            PARTNER LOGIN
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
