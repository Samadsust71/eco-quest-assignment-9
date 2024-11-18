import AOS from "aos";
import "aos/dist/aos.css";
import engFlag from "../assets/english.jpg";
import banglaFlag from "../assets/bangladesh.jpg";
import franceFlag from "../assets/france.jpg";
import germanFlag from "../assets/Germany.webp";
import Heading from "./Heading";
import { useEffect } from "react";

const OurGuides = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div className="my-6 space-y-4 bg-gray-300 rounded-xl py-10">
      <div>
        <Heading
          title={
            "No matter where you come from, our guides will be able to understand you."
          }
          subTitle={"Our guides are able to speak in the following languages"}
        ></Heading>
      </div>
      <div
        className="flex items-center justify-center gap-6"
        data-aos="flip-right"
      >
        <div className="flex flex-col items-center justify-center gap-1">
          <div>
            <img
              src={banglaFlag}
              className="h-12 w-12 rounded-full object-cover"
              alt=""
            />
          </div>
          <p>Bangla</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <div>
          <img
          src={engFlag}
          className="h-12 w-12 rounded-full object-cover"
          alt=""
        />
          </div>
          <p>English</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <div>
          <img
          src={franceFlag}
          className="h-12 w-12 rounded-full object-cover"
          alt=""
        />
          </div>
          <p>French</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <div>
          <img
          src={germanFlag}
          className="h-12 w-12 rounded-full object-cover"
          alt=""
        />
          </div>
          <p>Deutsch</p>
        </div>
        
        
        
      </div>
    </div>
  );
};

export default OurGuides;
