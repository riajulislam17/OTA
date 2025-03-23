import React from "react";
import destinationData from "../../utils/FakeData/destinationData.json";

function DestinationList() {
  return (
    <>
      <div className="px-10 md:px-20 lg:px-40 py-24">
        <div className="text-center text-3xl md:text-5xl font-semibold">
          Popular Destination
        </div>

        <p className="text-center my-5">
          Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed
          suscipit.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-5">
          {destinationData.map((item, index) => (
            <div
              key={item.id}
              className={`relative  ${index % 2 === 0 ? "mb-12" : "mt-12"}`}
            >
              <div className="aspect-w-4 aspect-h-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-[20px]"
                  style={{ aspectRatio: 400 / 600 }}
                />
              </div>

              <div className="absolute top-2 right-2 bg-white text-black px-4 py-1 text-sm rounded-md">
                &#9733; {item.rating}
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-end opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="text-center bg-white text-black my-4 rounded w-full mx-10 p-4">
                  <div className="text-xl font-semibold">{item.title}</div>
                  <div className="text-md">{item.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-8">
          Where will your next journey take you? Find your dream destination
          with Bavro! Explore More Destinations
        </p>
      </div>
    </>
  );
}

export default DestinationList;
