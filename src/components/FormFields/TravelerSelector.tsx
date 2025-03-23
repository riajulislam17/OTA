import { travelers } from "@/utils/FakeData/travelerData"; // Ensure correct path and import
import React, { useState, useEffect, useRef } from "react";
import { FaPersonWalkingLuggage } from "react-icons/fa6";

interface TravelerSelectorProps {
  traveler: {
    [key: string]: number;
  };
  onTravelerChange: (value: { [key: string]: number }) => void;
}

const TravelerSelector: React.FC<TravelerSelectorProps> = ({
  traveler,
  onTravelerChange,
}) => {
  const [travelerCounts, setTravelerCounts] = useState<{
    [key: string]: number;
  }>(traveler);

  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    // Attach the event listener for clicks outside the component
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTravelerCounts(traveler);
  }, [traveler]);

  const handleIncrement = (value: string) => {
    setTravelerCounts((prev) => {
      const newCount = prev[value] + 1;
      const updatedCounts = { ...prev, [value]: newCount };
      onTravelerChange(updatedCounts);
      return updatedCounts;
    });
  };

  const handleDecrement = (value: string) => {
    setTravelerCounts((prev) => {
      if (prev[value] > 0) {
        const newCount = prev[value] - 1;
        const updatedCounts = { ...prev, [value]: newCount };
        onTravelerChange(updatedCounts);
        return updatedCounts;
      }
      return prev;
    });
  };

  const handleApply = () => {
    setShowDropdown(false);
  };

  const totalTravelers = Object.values(travelerCounts).reduce(
    (acc, count) => acc + count,
    0
  );

  return (
    <div className=" w-full relative">
      {/* Total Traveler Display */}
      <div
        className="flex items-center justify-between gap-2 cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <div className="flex items-center gap-3">
          <div className="border-r border-black pr-3 font-bold">
            {totalTravelers}
          </div>
          Traveler
        </div>
        <div>
          <FaPersonWalkingLuggage />
        </div>
      </div>

      {/* Dropdown for Traveler Count */}
      {showDropdown && (
        <div
          ref={dropdownRef}
          className="absolute z-10 w-[300px] mt-1 space-y-2 p-4 bg-white border rounded-md shadow-lg"
        >
          {travelers.map((traveler) => (
            <div
              key={traveler.id}
              className="flex justify-between items-center gap-5"
            >
              <div className="">
                <p>{traveler.label}</p>
                <p className="text-sm text-gray-500">{traveler.remark}</p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleDecrement(traveler.value)}
                  className="px-4 py-1 border border-gray-300 rounded-l"
                >
                  -
                </button>
                <span className="px-4 py-1 border border-gray-300">
                  {travelerCounts[traveler.value] || 0}
                </span>
                <button
                  onClick={() => handleIncrement(traveler.value)}
                  className="px-4 py-1 border border-gray-300 rounded-r"
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-center items-center mt-4">
            <button
              onClick={handleApply}
              className="bg-[#E1EFCE] text-[#69AF08] px-8 py-2 rounded"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TravelerSelector;
