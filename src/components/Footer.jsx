import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-[#2C3E50] rounded p-10 text-white">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold">Eco<span className="text-green-600">Quest</span> Chronicles</h1>
        <p className="md:w-[60%]">
        Embark on a journey where adventure meets sustainability. Explore breathtaking landscapes, uncover hidden wonders, and join us in preserving the planet for future generations—EcoQuest Chronicles awaits!
        </p>
      </div>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a className="text-blue-500 text-xl" href="https://x.com/SamadReza71" target="blank">
            <FaTwitter></FaTwitter>
          </a>
          <a className="text-red-500 text-xl" href="https://www.instagram.com/_samad_reza_/?hl=en" target="blank">
            <FaInstagram></FaInstagram>
          </a>
          <a className="text-blue-500 text-xl" href="https://www.facebook.com/samad.reza.31" target="blank">
            <FaFacebook></FaFacebook>
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Samad Reza
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
