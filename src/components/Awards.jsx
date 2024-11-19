import React from "react";
import { motion } from "framer-motion";
import award1 from "../assets/awards/asia.webp";
import award2 from "../assets/awards/grant.png";
import award3 from "../assets/awards/grant2.gif";
import award4 from "../assets/awards/singapore.png";
import award5 from "../assets/awards/world.png";

const awardsData = [
  {
    id: 1,
    image: award1,
    title: "Best Eco-Tour Award",
    subtitle: "Recognized for outstanding sustainable practices.",
  },
  {
    id: 2,
    image: award2,
    title: "Traveler's Choice 2024",
    subtitle: "Voted by customers for exceptional adventures.",
  },
  {
    id: 3,
    image: award3,
    title: "Green Globe Certification",
    subtitle: "Awarded for eco-friendly and sustainable travel.",
  },
  {
    id: 4,
    image: award4,
    title: "Adventure Excellence Award",
    subtitle: "For providing unique and thrilling adventures.",
  },
  {
    id: 5,
    image: award5,
    title: "Innovative Travel Experience",
    subtitle: "Recognized for creative travel packages.",
  },
];

const Awards = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center mt-6">
        <h1 className="text-2xl font-bold text-gray-900">Our Achievements</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-10">
        {awardsData.map((award) => (
          <motion.div
            key={award.id}
            className="bg-gradient-to-b from-blue-50 via-sky-100 to-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={award.image}
              alt={award.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {award.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{award.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
