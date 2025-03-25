import React, { useState } from "react";
import LocationInput from "../../FormFields/LocationInput";
import { MdFlightLand, MdFlightTakeoff } from "react-icons/md";
import DateSelector from "../../FormFields/DateSelector";
import TravelerSelector from "../../FormFields/TravelerSelector";
import CabinSelector from "../../FormFields/CabinSelector";
import { GiCommercialAirplane } from "react-icons/gi";
import ConfirmationPopup from "@/components/FormFields/ConfirmationPopup";
import { VscArrowSwap } from "react-icons/vsc";

function RoundTrip() {
  const [open, setOpen] = useState(false);
  const [from, setFrom] = useState<Airport | null>({
    code: "DAC",
    location: "Dhaka",
    name: "Hazrat Shahjalal International Airport",
  });
  const [to, setTo] = useState<Airport | null>({
    code: "LCY",
    location: "London",
    name: "London City Airport",
  });

  const [departureDate, setDepartureDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [returnDate, setReturnDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );

  const [travelerCounts, setTravelerCounts] = useState<{
    [key: string]: number;
  }>({
    adult: 1,
    children: 0,
    kids: 0,
    infants: 0,
  });
  const [selectedCabin, setSelectedCabin] = useState("economy");

  const handleSwap = () => {
    // Swap the from and to values
    setFrom(to);
    setTo(from);
  };

  const renderPopupContent = () => (
    <div className="space-y-4">
      <div className="p-4 border rounded-lg shadow-sm bg-gray-100">
        <h3 className="text-lg font-semibold text-gray-800">
          Cabin Information
        </h3>
        <p className="text-gray-700">
          <span className="font-medium">Cabin:</span>{" "}
          <span className="capitalize">{selectedCabin}</span>
        </p>
      </div>

      <div className="p-4 border rounded-lg shadow-sm bg-gray-100">
        <h3 className="text-lg font-semibold text-gray-800">
          Traveler Information
        </h3>
        <p className="text-gray-700">
          <span className="font-medium">Adults:</span> {travelerCounts.adult}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Children:</span>{" "}
          {travelerCounts.children}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Kids:</span> {travelerCounts.kids}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Infants:</span> {travelerCounts.infants}
        </p>
      </div>

      <div className="p-4 border rounded-lg shadow-sm bg-gray-100">
        <h3 className="text-lg font-semibold text-gray-800">Flight Details</h3>
        <p className="text-gray-700">
          <span className="font-medium">From:</span> {from?.location} (
          {from?.code}) - {from?.name}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">To:</span> {to?.location} ({to?.code}) -{" "}
          {to?.name}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Departure Date:</span> {departureDate}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Return Date:</span> {returnDate}
        </p>
      </div>
    </div>
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        {/* From & To Section - Full Height */}
        <div className="relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {/* From Location */}
          <div className="flex-1 flex flex-col">
            <LocationInput
              label="From"
              icon={<MdFlightTakeoff />}
              value={from}
              onChange={setFrom}
            />
          </div>

          {/* Swap Icon - Clickable Without Gap */}
          <button
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full border border-[#E5E7EB] z-10 font-thin bg-white rotate-90 md:rotate-0"
            onClick={handleSwap}
          >
            <VscArrowSwap size={24} />
          </button>

          {/* To Location */}
          <div className="flex-1 flex flex-col">
            <LocationInput
              label="To"
              icon={<MdFlightLand />}
              value={to}
              onChange={setTo}
            />
          </div>
        </div>

        {/* Departure & Return Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4 flex justify-between items-center gap-8 min-h-full">
            {/* Departure Date */}
            <DateSelector
              label="Departure"
              value={departureDate}
              onChange={setDepartureDate}
            />

            {/* Return Date */}
            <DateSelector
              label="Return"
              value={returnDate}
              onChange={setReturnDate}
            />
          </div>

          {/* Traveler & Cabin Section */}
          <div className="flex flex-col gap-4 min-h-full">
            <div className="border rounded-lg px-4 py-3 flex items-center gap-3">
              <TravelerSelector
                traveler={travelerCounts}
                onTravelerChange={setTravelerCounts}
              />
            </div>
            <div className="border rounded-lg px-4 py-3 flex items-center gap-3">
              <CabinSelector
                selectedCabin={selectedCabin}
                onChange={setSelectedCabin}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-8">
        <button
          className="py-2 px-8 bg-[#126930] rounded text-white font-semibold flex items-center gap-3"
          onClick={() => setOpen(true)}
        >
          Search Flight <GiCommercialAirplane />
        </button>
      </div>

      <ConfirmationPopup
        open={open}
        title="Round Trip"
        content={renderPopupContent()}
        onClose={() => setOpen(false)}
        onConfirm={() => {
          console.log("Confirmed!");
          setOpen(false);
        }}
      />
    </>
  );
}

export default RoundTrip;
