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

  const languages = [
    { name: "Bangla", flag: banglaFlag },
    { name: "English", flag: engFlag },
    { name: "French", flag: franceFlag },
    { name: "Deutsch", flag: germanFlag },
  ];

  return (
    <div className="space-y-4 py-10 md:py-20 text-gray-800 w-11/12 mx-auto">
      <div className="text-center">
        <Heading
          title={
            "No matter where you come from, our guides will be able to understand you."
          }
          subTitle={"Our guides are able to speak in the following languages"}
        ></Heading>
      </div>
      <div className="flex items-center justify-center gap-6">
        {languages.map((language, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-1"
            data-aos="fade-up"
            data-aos-delay={index * 100} 
          >
            <img
              src={language.flag}
              className="h-12 w-12 rounded-full object-cover"
              alt={`${language.name} Flag`}
            />
            <p className="text-gray-800 font-semibold">{language.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurGuides;
