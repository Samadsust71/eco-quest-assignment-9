import AOS from "aos";
import "aos/dist/aos.css";
import engFlag from "../assets/english.jpg";
import banglaFlag from "../assets/bangladesh.jpg";
import franceFlag from "../assets/france.jpg";
import germanFlag from "../assets/Germany.webp";
import Heading from "./Heading";
import { useEffect } from "react";
import { motion } from "framer-motion";

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
    <div className="space-y-4 py-10 md:py-20  text-gray-800 w-11/12 mx-auto">
      <div className="text-center">
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
          <div className="animate-spin-slow">
            <motion.div
              className="rounded-full"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={banglaFlag}
                className="h-12 w-12 rounded-full object-cover"
                alt="France Flag"
              />
            </motion.div>
          </div>
          <p className="text-gray-600 font-semibold">Bangla</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="animate-spin-slow">
            <motion.div
              className="rounded-full"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={engFlag}
                className="h-12 w-12 rounded-full object-cover"
                alt="France Flag"
              />
            </motion.div>
          </div>
          <p className="text-gray-600 font-semibold">English</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="animate-spin-slow">
            <motion.div
              className="rounded-full"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={franceFlag}
                className="h-12 w-12 rounded-full object-cover"
                alt="France Flag"
              />
            </motion.div>
          </div>
          <p className="text-gray-600 font-semibold">French</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="animate-spin-slow">
            <motion.div
              className="rounded-full"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={germanFlag}
                className="h-12 w-12 rounded-full object-cover"
                alt="France Flag"
              />
            </motion.div>
          </div>
          <p className="text-gray-600 font-semibold">Deutsch</p>
        </div>
      </div>
    </div>
  );
};

export default OurGuides;
