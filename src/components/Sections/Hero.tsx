import React from "react";
import { FaFacebook, FaLinkedin, FaPinterest } from "react-icons/fa";
import { FaPhoneVolume, FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Hero() {
  return (
    <div className="bg-transparent px-5 sm:px-10 md:px-20 lg:px-40 border-b border-[#06272733]">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-8 py-3">
        {/* Contact Info */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm sm:text-base text-black">
          <div className="flex items-center gap-3">
            <MdEmail className="text-lg sm:text-xl" />
            <span>support@demo.com</span>
          </div>
          <span className="hidden sm:inline">|</span>
          <div className="flex items-center gap-3">
            <FaPhoneVolume className="text-lg sm:text-xl" />{" "}
            <span>+(642) 342 762 44</span>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-black text-sm sm:text-base">
          <p className="text-black font-semibold">FOLLOW US:</p>
          <FaFacebook className="text-lg sm:text-xl cursor-pointer hover:text-[#1877F2]" />
          <FaSquareXTwitter className="text-lg sm:text-xl cursor-pointer hover:text-[#1DA1F2]" />
          <FaPinterest className="text-lg sm:text-xl cursor-pointer hover:text-[#E60023]" />
          <FaLinkedin className="text-lg sm:text-xl cursor-pointer hover:text-[#0077B5]" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
