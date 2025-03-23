import React, { useState, useEffect, useRef } from "react";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import cabins from "../../utils/FakeData/cabinData.json";
import { FaRegCircle, FaCheckCircle } from "react-icons/fa";

interface CabinSelectorProps {
  selectedCabin: string;
  onChange: (value: string) => void;
}

const CabinSelector: React.FC<CabinSelectorProps> = ({
  selectedCabin,
  onChange,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const selectedOption = cabins.find((cabin) => cabin.value === selectedCabin);

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative w-full">
      <div
        className="rounded-lg flex items-center justify-between gap-3 cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {selectedOption ? selectedOption.label : "Select Cabin"}
        <MdAirlineSeatReclineExtra />
      </div>

      {/* Dropdown Options */}
      {showDropdown && (
        <div
          ref={dropdownRef}
          className="absolute w-[150px] md:w-[200px] mt-2 bg-white border rounded-lg shadow-lg z-10"
        >
          {cabins.map((cabin) => (
            <div
              key={cabin.id}
              className={`p-3 hover:bg-[#69AF0833] hover:text-[#69AF08] cursor-pointer flex items-center gap-3 ${
                cabin.value === selectedCabin
                  ? "bg-[#69AF0833] text-[#69AF08]"
                  : ""
              }`}
              onClick={() => {
                onChange(cabin.value);
                setShowDropdown(false);
              }}
            >
              {cabin.value === selectedCabin ? (
                <FaCheckCircle className="text-[#69AF08]" />
              ) : (
                <FaRegCircle />
              )}
              {cabin.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CabinSelector;
