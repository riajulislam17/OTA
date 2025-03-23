import React, { useState } from "react";
import { MdFlightLand, MdFlightTakeoff } from "react-icons/md";
import LocationInput from "../../FormFields/LocationInput";
import DateSelector from "../../FormFields/DateSelector";
import { GiCommercialAirplane } from "react-icons/gi";
import { GoPlus } from "react-icons/go";
import { RxCrossCircled } from "react-icons/rx";
import ConfirmationPopup from "@/components/FormFields/ConfirmationPopup";

function MultiCity({
  travelerCounts,
  selectedCabin,
}: {
  travelerCounts: any;
  selectedCabin: any;
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
    value: any
  ) => {
    const updatedFlights = [...flights];
    updatedFlights[index][field] = value;
    setFlights(updatedFlights);
  };

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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 items-center">
                {/* From Location */}
                <div className="relative flex flex-col h-full">
                  <LocationInput
                    label="From"
                    icon={<MdFlightTakeoff />}
                    value={flight.from}
                    onChange={(value) => handleChange(index, "from", value)}
                  />
                </div>

                {/* Swap Icon */}
                {/* <div
                className="rounded-full p-3 bg-red-400 cursor-pointer border absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                onClick={() =>
                  handleChange(index, "from", flight.to) ||
                  handleChange(index, "to", flight.from)
                }
              >
                <FaExchangeAlt size={20} />
              </div> */}

                {/* To Location */}
                <div className="relative flex flex-col h-full">
                  <LocationInput
                    label="To"
                    icon={<MdFlightLand />}
                    value={flight.to}
                    onChange={(value) => handleChange(index, "to", value)}
                  />
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
