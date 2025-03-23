import React from "react";

function PromoBanner() {
  return (
    <>
      <div className="relative px-5 sm:px-10 md:px-20 lg:px-40 py-16 md:py-24">
        <img
          src="../banner.png"
          alt="banner"
          className="object-cover w-full rounded-lg"
        />

        <div className="absolute bottom-10 md:bottom-28 lg:bottom-40 left-1/2 transform -translate-x-1/2">
          <button className="bg-[#69AF08] text-white px-6 py-3 rounded-3xl font-semibold shadow-md hover:bg-[#5C9C06] transition">
            Booking Now
          </button>
        </div>
      </div>
    </>
  );
}

export default PromoBanner;
