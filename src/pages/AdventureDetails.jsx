import React from "react";
import {
  FaBook,
  FaClock,
  FaLevelUpAlt,
  FaMapMarkerAlt,
  FaUsers,
} from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";

const AdventureDetails = () => {
  const data = useLoaderData();
  const {
    adventureTitle,
    img,
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
      window.open("https://meet.google.com", "_blank");
    } else {
      document.getElementById("my_modal_5").showModal();
    }
  };
  return (
    <div className="bg-gradient-to-t from-blue-50 via-sky-100 to-blue-50 py-10">
      <div className="card w-11/12 mx-auto">
        <div className="text-center space-y-2 mb-6">
          <h1 className="text-2xl font-bold text-neutral-800">
            {adventureTitle}
          </h1>
          <p className="text-gray-600">{shortDescription}</p>
        </div>
        <figure>
          <img
            src={img}
            alt={adventureTitle}
            className="rounded-lg h-[600px] w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <div className="mt-4 space-y-2">
            <h3 className="text-lg font-semibold text-neutral-700">
              {categoryName}
            </h3>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-green-600" />
              <p className="text-gray-700">Location: {location}</p>
            </div>
            <div className="flex items-center gap-2">
              <FaBook className="text-[#0a57849d]" />
              <p className="text-gray-700">Booking: {bookingAvailability}</p>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-[#0a5784]" />
              <p className="text-gray-700">Duration: {duration}</p>
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="text-[#0a5784a9]" />
              <p className="text-gray-700">Max Group Size: {maxGroupSize}</p>
            </div>
            <div className="flex items-center gap-2">
              <FaLevelUpAlt className="text-[#0a5784a9]" />
              <p className="text-gray-700">Adventure Level: {adventureLevel}</p>
            </div>
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
            <p className="text-lg font-bold">Cost: ${adventureCost}</p>
            <motion.button
              onClick={handleTalkWithExpert}
              className="px-4 py-2 rounded-lg bg-[#0a5784] text-white font-bold hover:bg-[#084a63] active:bg-[#06394e]"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Talk with Expert
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventureDetails;
