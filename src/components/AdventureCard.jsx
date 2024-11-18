import React from "react";
import { useNavigate } from "react-router-dom";

const AdventureCard = ({ adventure = {} }) => {
  const navigate = useNavigate()
  const { id, adventureTitle, image, ecoFriendlyFeatures } = adventure || {};
  return (
    <div className="card bg-base-100 border">
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
          <button onClick={()=>navigate(`/adventure/${id}`)} className="btn border bg-white border-[#0a5784] text-neutral font-semibold hover:bg-[#0a5784] hover:text-white">Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default AdventureCard;
