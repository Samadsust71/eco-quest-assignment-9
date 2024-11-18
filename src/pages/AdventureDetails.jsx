import React from "react";
import { FaBook, FaClock, FaLeaf, FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const AdventureDetails = () => {
  const data = useLoaderData();
  const {
    id,
    adventureTitle,
    image,
    categoryName,
    shortDescription,
    adventureCost,
    bookingAvailability,
    location,
    duration,
    adventureLevel,
    includedItems,
    ecoFriendlyFeatures,
    maxGroupSize,
    specialInstructions,
  } = data || {};

  const handleTalkWithExpert = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 10 && currentHour < 20) {
      // Open Google Meet during consultation hours
      window.open("https://meet.google.com", "_blank");
    } else {
      // Show consultation time modal
      alert("Consultation is available only between 10:00 AM and 8:00 PM.");
    }
  };
  return (
    <div className="card w-full bg-base-100 shadow-xl p-6 my-6">
      <figure>
        <img
          src={image}
          alt={adventureTitle}
          className="rounded-lg h-96 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h1 className="text-2xl font-bold text-neutral-800">
          {adventureTitle}
        </h1>
        <h1 className="font-semibold text-neutral-800">
           {categoryName}
        </h1>
        <p className="text-gray-600 mt-2">{shortDescription}</p>

        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-green-600" />
            <p className="text-gray-700">Location: {location}</p>
          </div>
          <div className="flex items-center gap-2">
            <FaBook className="text-primary"/>
            <p className="text-gray-700">Booking: {bookingAvailability}</p>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-green-600" />
            <p className="text-gray-700">Duration: {duration}</p>
          </div>
          <div className="flex items-center gap-2">
            <FaUsers className="text-primary" />
            <p className="text-gray-700">
              Max Group Size: {maxGroupSize}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold text-neutral-700">
            Adventure Level
          </h3>
          <p className="text-gray-600">{adventureLevel}</p>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold text-neutral-700">
            Eco-Friendly Features
          </h3>
          <ul className="list-disc ml-6 text-gray-600">
            {ecoFriendlyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold text-neutral-700">
            Included Items
          </h3>
          <ul className="list-disc ml-6 text-gray-600">
            {includedItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold text-neutral-700">
            Special Instructions
          </h3>
          <ul className="list-disc ml-6 text-gray-600">
            {specialInstructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </div>

        <div className="card-actions mt-6 flex justify-between items-center">
          <p className="text-lg font-bold text-green-600">
            ${adventureCost}
          </p>
          <button
            onClick={handleTalkWithExpert}
            className="btn bg-green-600 hover:bg-green-600 font-semibold text-white"
          >
            Talk with Expert
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdventureDetails;