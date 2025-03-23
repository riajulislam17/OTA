import React, { useState, useRef, useEffect } from "react";
import airports from "../../utils/FakeData/airportData.json";

interface LocationInputProps {
  label: "From" | "To";
  icon: React.ReactNode;
  value: Airport | null;
  onChange: (value: Airport | null) => void;
}

const LocationInput: React.FC<LocationInputProps> = ({
  label,
  icon,
  value,
  onChange,
}) => {
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLDivElement>(null);
  const inputFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (value && !isTyping) {
      setSearch("");
    }
  }, [value, isTyping]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
        setIsTyping(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelection = (selected: Airport) => {
    onChange(selected);
    setShowDropdown(false);
    setIsTyping(false);
  };

  return (
    <div ref={inputRef} className="relative border rounded-lg p-4 w-full">
      <div className="flex justify-between items-center mb-4">
        <div>{label}</div>
        <div>{icon}</div>
      </div>

      {/* Clickable Input Box */}
      <div
        className="w-full border-none outline-none rounded cursor-pointer flex items-center gap-5 bg-white"
        onClick={() => {
          setShowDropdown(true);
          setIsTyping(true);
          setTimeout(() => inputFieldRef.current?.focus(), 10);
        }}
      >
        {!isTyping && value ? (
          <>
            <div className="border-r border-black pr-3 font-bold">
              {value.code}
            </div>
            <div>
              {value.location}
              <p className="text-sm">{value.name}</p>
            </div>
          </>
        ) : (
          <input
            ref={inputFieldRef}
            type="text"
            autoFocus
            className="w-full p-2 outline-none"
            placeholder="Search Airport..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onBlur={() => {
              if (!search) {
                setIsTyping(false);
              }
            }}
          />
        )}
      </div>

      {/* Dropdown Options */}
      {showDropdown && (
        <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
          {airports
            .filter(
              (option) =>
                option.code.toLowerCase().includes(search.toLowerCase()) ||
                option.name.toLowerCase().includes(search.toLowerCase()) ||
                option.location.toLowerCase().includes(search.toLowerCase())
            )
            .map((option) => (
              <div
                key={option.code}
                className="flex items-center gap-5 p-3 cursor-pointer hover:bg-gray-200"
                onClick={() => handleSelection(option)}
              >
                <div className="border-r border-black pr-3 font-bold">
                  {option.code}
                </div>
                <div>
                  {option.location}
                  <p className="text-sm">{option.name}</p>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default LocationInput;
