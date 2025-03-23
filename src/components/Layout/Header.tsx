import React from "react";
import Hero from "../Sections/Hero";
import Navbar from "../Sections/Navbar";
import SearchForm from "../Sections/SearchForm";

function Header() {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(../banner-2.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Hero />
        <Navbar />

        <div className="px-10 md:px-20 lg:px-40 pt-20 ">
          <p className="text-3xl md:text-4xl lg:text-5xl text-[#062727] font-kaushan mb-6">
            Welcome to Hazetrip
          </p>
          <p className="text-4xl md:text-5xl lg:text-6xl text-[#062727] font-Outfit font-bold uppercase">
            Let's travel the
          </p>
          <p className="text-4xl md:text-5xl lg:text-6xl text-[#062727] font-Outfit font-bold uppercase">
            world with us
          </p>
          <p className="text-sm md:text-base lg:text-lg mt-6">
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
