import React from "react";
import airlinesData from "../../utils/FakeData/airlineData.json";

function AirlineList() {
  return (
    <>
      <div className="px-10 md:px-20 lg:px-40 py-24 bg-[#E7F3E7]">
        <div className="text-center text-3xl md:text-[60px] font-semibold font-outfit">
          Access to 750+ Airlines
        </div>

        <p className="text-center my-5 text-[16px] font-outfit">
          Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed
          suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus
          sollicitudin. Quisque vitae sodales lectus.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-5">
          {airlinesData.map((airline) => (
            <div
              key={airline.id}
              className="rounded-[30px] text-center p-[24px] border border-gray-300 bg-white"
            >
              <img
                src={airline.logo}
                alt={airline.name}
                className="mx-auto mb-4 h-20 object-contain"
              />
              <div className="font-semibold">{airline.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AirlineList;
