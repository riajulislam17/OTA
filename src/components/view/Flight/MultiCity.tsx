import React, { useState } from "react";
import { MdFlightLand, MdFlightTakeoff } from "react-icons/md";
import LocationInput from "../../FormFields/LocationInput";
import DateSelector from "../../FormFields/DateSelector";
import { GiCommercialAirplane } from "react-icons/gi";
import { GoPlus } from "react-icons/go";
import { RxCrossCircled } from "react-icons/rx";
import ConfirmationPopup from "@/components/FormFields/ConfirmationPopup";
import { VscArrowSwap } from "react-icons/vsc";

function MultiCity({
  travelerCounts,
  selectedCabin,
}: {
  travelerCounts: {
    [key: string]: number;
  };
  selectedCabin: string;
}) {
  const initialFlight = {
    from: {
      code: "DAC",
      location: "Dhaka",
      name: "Hazrat Shahjalal International Airport",
    },
    to: { code: "LCY", location: "London", name: "London City Airport" },
    departureDate: new Date().toISOString().split("T")[0],
  };

  const [open, setOpen] = useState(false);
  const [flights, setFlights] = useState([initialFlight]);

  const handleChange = (
    index: number,
    field: "from" | "to" | "departureDate",
    value: Airport | string
  ) => {
    // console.log("value", value);
    const updatedFlights = [...flights];
    if (field === "departureDate" && typeof value === "string") {
      updatedFlights[index][field] = value;
    } else if (
      (field === "from" || field === "to") &&
      typeof value !== "string"
    ) {
      updatedFlights[index][field] = value;
    }
    setFlights(updatedFlights);
  };
  // console.log("flights", flights);
  const handleAddFlight = () => {
    setFlights([...flights, { ...initialFlight }]);
  };

  const handleRemoveFlight = (index: number) => {
    setFlights(flights.filter((_, i) => i !== index));
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

      {flights.map((flight, index) => (
        <div
          key={index}
          className="p-4 border rounded-lg shadow-sm bg-gray-100"
        >
          <h3 className="text-lg font-semibold text-gray-800">
            Transit {index + 1}
          </h3>
          <p className="text-gray-700">
            <span className="font-medium">From:</span> {flight.from.location} (
            {flight.from.code}) - {flight.from.name}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">To:</span> {flight.to.location} (
            {flight.to.code}) - {flight.to.name}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Departure:</span>{" "}
            {flight.departureDate}
          </p>
        </div>
      ))}
    </div>
  );

  const handleSwap = (index: number) => {
    setFlights((prevFlights) =>
      prevFlights.map((flight, i) =>
        i === index
          ? { ...flight, from: flight.to, to: flight.from } // Swap locations
          : flight
      )
    );
  };

  return (
    <>
      <div>
        {flights.map((flight, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 mb-4"
          >
            {/* Flight Details Grid */}
            <div className="w-full md:w-11/12">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 items-center">
                <div className="relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                  {/* From Location */}
                  <div className="flex-1 flex flex-col">
                    <LocationInput
                      label="From"
                      icon={<MdFlightTakeoff />}
                      value={flight.from}
                      onChange={(value) =>
                        value && handleChange(index, "from", value)
                      }
                    />
                  </div>

                  {/* Swap Icon - Clickable Without Gap */}
                  <button
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full border border-[#E5E7EB] z-10 font-thin bg-white rotate-90 md:rotate-0"
                    onClick={() => handleSwap(index)}
                  >
                    <VscArrowSwap size={24} />
                  </button>

                  {/* To Location */}
                  <div className="flex-1 flex flex-col">
                    <LocationInput
                      label="To"
                      icon={<MdFlightLand />}
                      value={flight.to}
                      onChange={(value) =>
                        value && handleChange(index, "to", value)
                      }
                    />
                  </div>
                </div>

                {/* Departure Date */}
                <div className="flex items-center justify-between border rounded-lg p-4 h-full">
                  <DateSelector
                    label="Departure"
                    value={flight.departureDate}
                    onChange={(value) =>
                      handleChange(index, "departureDate", value)
                    }
                  />
                </div>
              </div>
            </div>

            {/* Remove Button */}
            {flights.length > 1 && (
              <div className="w-full md:w-1/12 flex justify-center md:justify-end">
                <button
                  className="text-gray-500 p-1 rounded-full"
                  onClick={() => handleRemoveFlight(index)}
                >
                  <RxCrossCircled size={36} />
                </button>
              </div>
            )}
          </div>
        ))}

        {/* Add More Flights */}
        <div className="flex justify-between items-center mt-8">
          <button
            className="text-[#126930] flex items-center gap-3"
            onClick={handleAddFlight}
          >
            <GoPlus /> Add More Flight
          </button>
          <button
            className="py-2 px-8 bg-[#126930] rounded text-white font-semibold flex items-center gap-3"
            onClick={() => setOpen(true)}
          >
            Search Flight <GiCommercialAirplane />
          </button>
        </div>
      </div>

      <ConfirmationPopup
        open={open}
        title="MultiCity"
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

export default MultiCity;
