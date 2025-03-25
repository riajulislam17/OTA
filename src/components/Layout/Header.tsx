import React from "react";
import Hero from "../Sections/Hero";
import Navbar from "../Sections/Navbar";
import SearchForm from "../Sections/SearchForm";

function Header() {
  return (
    <>
      <style>
        @import
        url(`https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap`);
      </style>

      <div
        style={{
          backgroundImage: "url(../banner-2.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "container",
        }}
      >
        <Hero />
        <Navbar />

        <div className="px-10 md:px-20 lg:px-40 pt-20 ">
          <p
            className="text-3xl md:text-4xl lg:text-5xl text-[#062727] mb-6 "
            style={{ fontFamily: "'Kaushan Script', cursive" }}
          >
            Welcome to Hazetrip
          </p>
          <p className="text-4xl md:text-5xl lg:text-[80px] text-[#062727] font-Outfit font-bold uppercase font-outfit">
            Lets travel the
          </p>
          <p className="text-4xl md:text-5xl lg:text-[80px] text-[#062727] font-Outfit font-bold uppercase font-outfit">
            world with us
          </p>
          <p className="text-sm md:text-base lg:text-lg mt-6 font-outfit">
            Find awesome flights, hotels, tours, cars, and packages
          </p>
        </div>

        <div className="">
          <SearchForm />
        </div>
      </div>
    </>
  );
}

export default Header;
