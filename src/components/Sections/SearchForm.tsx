import React, { useState } from "react";

import OneWay from "../view/Flight/OneWay";
import RoundTrip from "../view/Flight/RoundTrip";
import { FaHotel, FaPassport, FaRegCircle } from "react-icons/fa";
import MultiCity from "../view/Flight/MultiCity";
import TravelerSelector from "../FormFields/TravelerSelector";
import CabinSelector from "../FormFields/CabinSelector";
import { RiFlightTakeoffLine } from "react-icons/ri";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { CiCircleMore } from "react-icons/ci";

const tabs: { label: string; value: "one-way" | "return" | "multi-city" }[] = [
  { label: "One Way", value: "one-way" },
  { label: "Round Trip", value: "return" },
  { label: "Multi City", value: "multi-city" },
];

const options: {
  label: string;
  value: "flights" | "hotel" | "tour" | "visa" | "more";
  icon: React.ReactNode;
}[] = [
  { label: "Flights", value: "flights", icon: <RiFlightTakeoffLine /> },
  { label: "Hotel", value: "hotel", icon: <FaHotel /> },
  { label: "Tour", value: "tour", icon: <FaPersonWalkingLuggage /> },
  { label: "Visa", value: "visa", icon: <FaPassport /> },
  { label: "More", value: "more", icon: <CiCircleMore /> },
];

function SearchForm() {
  const [activeTab, setActiveTab] = useState<
    "one-way" | "return" | "multi-city"
  >("one-way");

  const [activeOption, setActiveOption] = useState<
    "flights" | "hotel" | "tour" | "visa" | "more"
  >("flights");

  const [travelerCounts, setTravelerCounts] = useState<{
    [key: string]: number;
  }>({
    adult: 1,
    children: 0,
    kids: 0,
    infants: 0,
  });
  const [selectedCabin, setSelectedCabin] = useState("economy");

  return (
    <>
      <div className="px-10 md:px-20 lg:px-40 py-24">
        <div className="bg-white rounded-lg p-5 shadow-xl border relative">
          {/* Options */}
          <div className="flex items-center gap-4 absolute -top-12 overflow-x-auto whitespace-nowrap w-[70vw]">
            {options.map((item) => (
              <button
                key={item.value}
                className={`shadow py-[10px] px-4 rounded-lg border ${
                  activeOption === item.value
                    ? "bg-[#69AF08] text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => setActiveOption(item.value)}
              >
                <p className="flex justify-center items-center mb-4">
                  {item.icon}
                </p>
                <p>{item.label}</p>
              </button>
            ))}
          </div>

          {/* Options component */}
          <div className="mt-10">
            {activeOption === "flights" ? (
              <>
                {/* Cabin & Traveler selection  */}
                <div
                  className={`flex items-center gap-8 flex-wrap ${
                    activeTab === "multi-city"
                      ? "justify-between"
                      : "justify-end"
                  }`}
                >
                  {/* Multi-city input fields (TravelerSelector and CabinSelector) */}
                  {activeTab === "multi-city" && (
                    <div className="flex items-center gap-5 lg:order-1 order-2">
                      <div className="border rounded-lg p-4 flex items-center gap-3">
                        <TravelerSelector
                          traveler={travelerCounts}
                          onTravelerChange={setTravelerCounts}
                        />
                      </div>
                      <div className="border rounded-lg p-4 flex items-center gap-3">
                        <CabinSelector
                          selectedCabin={selectedCabin}
                          onChange={setSelectedCabin}
                        />
                      </div>
                    </div>
                  )}

                  {/* Tabs */}
                  <div className="grid grid-cols-3 gap-3 md:gap-6 lg:order-2 order-1">
                    {tabs.map((tab) => (
                      <button
                        key={tab.value}
                        className={`py-2 px-2 md:px-5 lg:px-8 rounded-lg text-[.7rem] md:text-[1rem] whitespace-nowrap transition-colors duration-300 flex items-center gap-2 ${
                          activeTab === tab.value
                            ? "bg-[#126930] text-white"
                            : "bg-[#E7F3E7] text-[#126930]"
                        }`}
                        onClick={() => setActiveTab(tab.value)}
                      >
                        <FaRegCircle /> {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tab component */}
                <div className="mt-5">
                  {activeTab === "one-way" && (
                    <OneWay setActiveTab={setActiveTab} />
                  )}
                  {activeTab === "return" && <RoundTrip />}
                  {activeTab === "multi-city" && (
                    <MultiCity
                      travelerCounts={travelerCounts}
                      selectedCabin={selectedCabin}
                    />
                  )}
                </div>
              </>
            ) : (
              <p className="text-center text-3xl font-bold my-8">
                Coming Soon...!
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchForm;
