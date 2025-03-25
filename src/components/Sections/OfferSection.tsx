import React, { useEffect, useState } from "react";
import offers from "../../utils/FakeData/offers.json";

function OfferSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % Math.ceil(offers.length / 2)
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="px-10 md:px-20 lg:px-40 py-24">
        <div className="text-center text-3xl md:text-[60px] font-outfit">
          Exclusive <span className="font-semibold text-[#062727]">Offer</span>
        </div>

        {/* Slider */}
        <div className="overflow-hidden mt-10 relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="w-full md:w-1/2 px-2 flex-shrink-0"
              >
                <div className="relative">
                  <img
                    src={offer.image}
                    alt="offer"
                    className="w-full h-96 object-cover rounded-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-5 space-x-2">
          {Array.from({ length: Math.ceil(offers.length / 2) }).map(
            (_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index
                    ? "bg-[#69AF08]"
                    : "bg-white border border-[#69AF08]"
                }`}
              />
            )
          )}
        </div>
      </div>
    </>
  );
}

export default OfferSection;
