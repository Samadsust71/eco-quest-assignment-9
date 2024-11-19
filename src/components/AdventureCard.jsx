import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AdventureCard = ({ adventure = {} }) => {
  const navigate = useNavigate()
  const { id, adventureTitle, image, ecoFriendlyFeatures } = adventure || {};
  return (
    <div 
    className="card bg-gradient-to-b from-white/50 to-blue-50 shadow-lg rounded-lg" 
   
    >
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt={adventureTitle}
          className="rounded-xl h-60 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{adventureTitle} </h2>
        <ul className="list-decimal list-inside flex-grow">
         <span className="font-semibold">Features :</span>
          {
          ecoFriendlyFeatures.map((feature,idx)=><li key={idx}>
           {feature} 
          </li>)
          
          }
          </ul>
        <div className="card-actions">
          <motion.button onClick={()=>navigate(`/adventure/${id}`)} className="px-4 py-2 border border-sky-200 text-gray-800 font-semibold bg-gradient-to-r from-blue-100 via-sky-200 rounded-lg hover:bg-blue-100"
             whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            
            >
            Explore Now
            </motion.button>
        </div>
      </div>
    </div>
  );
};

export default AdventureCard;
