import React, { useRef, useState } from "react";
import { SlCalender } from "react-icons/sl";

interface DateSelectorProps {
  label: string;
  value: string;
  onChange: (date: string) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({
  label,
  value,
  onChange,
}) => {
  const [showPicker, setShowPicker] = useState(false);
  const dateInputRef = useRef<HTMLInputElement>(null);

  const formatDate = (dateString: string) => {
    if (!dateString)
      return { day: "--", monthYear: "Select Date", weekday: "" };
    const date = new Date(dateString);
    return {
      day: date.getDate().toString(),
      monthYear: `${date.toLocaleDateString("en-US", {
        month: "long",
      })}, ${date.getFullYear()}`,
      weekday: date.toLocaleDateString("en-US", { weekday: "long" }),
    };
  };

  const { day, monthYear, weekday } = formatDate(value);
console.log('showPicker', showPicker)
  return (
    <div className="relative w-full">
      {/* Label + Calendar Icon */}
      <div className="flex justify-between items-center">
        <div>{label}</div>

        <SlCalender />
      </div>

      {/* Date Display */}
      <div
        className="flex items-center gap-5 mt-4 rounded-lg cursor-pointer"
        onClick={() => {
          setShowPicker(true);
          dateInputRef.current?.showPicker();
        }}
      >
        <div className="border-r border-black pr-3 font-bold">{day}</div>
        <div>
          <span className="text-sm">{monthYear}</span>
          <p className="text-sm">{weekday}</p>
        </div>
      </div>

      {/* Date Picker */}
      <input
        ref={dateInputRef}
        type="date"
        className="absolute top-full left-0 w-full bg-white border rounded-md shadow-md opacity-0 cursor-pointer"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setShowPicker(false);
        }}
        onBlur={() => setShowPicker(false)}
      />
    </div>
  );
};

export default DateSelector;
