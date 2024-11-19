
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from "../assets/great.jfif";
import img2 from "../assets/himalaya.avif";
import img3 from "../assets/serengeti.webp";
import img4 from "../assets/sundarban.jpg";


const Banner = () => {
  return (
    <div className="py-10 w-11/12 mx-auto overflow-hidden">
      <div className="carousel w-full max-h-[calc(100vh-42px)] rounded-xl scroll-smooth">
        <div id="slide1" className="carousel-item relative w-full rounded-xl">
          <img
            src={img1}
            className="w-full h-full rounded-xl object-cover contrast-80"
          />
          <div className="absolute top-3/4 flex  transform duration-100 lg:py-10 justify-center items-center text-center w-full z-10">
           <div className="flex items-center justify-center gap-3">
           <a href="#slide4" tabIndex={-1} className="btn btn-circle btn-outline text-white">
              <FaArrowLeft className="text-xl"/>
            </a>
            <a href="#slide2" tabIndex={-1} className="btn btn-circle btn-outline text-white">
            <FaArrowRight className="text-xl"/>
            </a>
           </div>
          </div>
          <div className="w-full h-full top-0 bottom-0 backdrop-blur-sm bg-transparent absolute"></div>
          <div className="absolute top-5 md:top-1/4 flex flex-col  transform duration-100 w-full text-white lg:py-10 lg:space-y-6 rounded-lg text-center justify-center items-center">
            <h1 className="lg:text-6xl text-2xl text-white font-bold z-10">Explore the sights <br /> of the Great Barrier Reef</h1>
            <p className="text-gray-200">A place where nature and adventure unite</p>
            <a href='#adventure' className="px-4 py-2 border border-sky-200 text-gray-800 font-semibold bg-gradient-to-r from-blue-100 via-sky-200 rounded-lg hover:bg-blue-100 w-fit">Explore</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full rounded-xl">
          <img
            src={img2}
            className="w-full h-full rounded-xl object-cover contrast-80"
          />
          <div className="absolute top-3/4 flex transform duration-100 lg:py-10 justify-center items-center text-center w-full z-10">
            <div className="flex items-center justify-center gap-3">
            <a href="#slide1" tabIndex={-1} className="btn btn-circle btn-outline text-white">
            <FaArrowLeft className="text-xl"/>
            </a>
            <a href="#slide3" tabIndex={-1} className="btn btn-circle btn-outline text-white">
            <FaArrowRight className="text-xl"/>
            </a>
            </div>
          </div>
          <div className="w-full h-full top-0 bottom-0 backdrop-blur-sm bg-transparent absolute"></div>
          <div className="absolute top-5 md:top-1/4 flex flex-col transform duration-100  w-full text-gray-100 lg:py-10 lg:space-y-6 rounded-lg text-center justify-center items-center">
            <h1 className="lg:text-6xl text-2xl text-white">Explore the sights <br /> of the Himalayas</h1>
            <p className="text-gray-300">A place where nature and adventure unite</p>
            <a href="#adventure" className="px-4 py-2 border border-sky-200 text-gray-800 font-semibold bg-gradient-to-r from-blue-100 via-sky-200 rounded-lg hover:bg-blue-100 w-fit">Explore</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full rounded-xl">
          <img
            src={img3}
            className="w-full h-full rounded-xl object-cover contrast-125"
          />
          <div className="absolute top-3/4 flex transform duration-100 lg:py-10 justify-center items-center text-center w-full z-10">
            <div className="flex items-center justify-center gap-3">
            <a href="#slide2" tabIndex={-1} className="btn btn-circle btn-outline text-white">
            <FaArrowLeft className="text-xl"/>
            </a>
            <a href="#slide4" tabIndex={-1} className="btn btn-circle btn-outline text-white">
            <FaArrowRight className="text-xl"/>
            </a>
            </div>
          </div>
          <div className="w-full h-full top-0 bottom-0 backdrop-blur-sm bg-transparent absolute"></div>
          <div className="absolute top-5 md:top-1/4 flex flex-col transform duration-100 w-full text-gray-100 lg:py-10 lg:space-y-6 rounded-lg text-center justify-center items-center">
            <h1 className="lg:text-6xl text-2xl text-white">Explore the sights <br /> of the Serengeti National Park</h1>
            <p className="text-gray-300">A place where nature and adventure unite</p>
            <a href="#adventure" className="px-4 py-2 border border-sky-200 text-gray-800 font-semibold bg-gradient-to-r from-blue-100 via-sky-200 rounded-lg hover:bg-blue-100 w-fit">Explore</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full rounded-xl ">
          <img
            src={img4}
            className="w-full h-full rounded-xl object-cover contrast-80 opacity-90"
          />
          <div className="absolute top-3/4 flex transform duration-100 lg:py-10 justify-center items-center text-center w-full z-10">
            <div className="flex items-center justify-center gap-3">
            <a href="#slide3" tabIndex={-1} className="btn btn-circle btn-outline text-white">
            <FaArrowLeft className="text-xl"/>
            </a>
            <a href="#slide1" tabIndex={-1} className="btn btn-circle btn-outline text-white">
            <FaArrowRight className="text-xl"/>
            </a>
            </div>
          </div>
          <div className="w-full h-full top-0 bottom-0 backdrop-blur-sm bg-transparent absolute"></div>
          <div className="absolute top-5 md:top-1/4 flex flex-col transform duration-100  w-full text-gray-100 lg:py-10 lg:space-y-6 rounded-lg text-center justify-center items-center">
            <h1 className="lg:text-6xl text-2xl text-white">Explore the sights <br /> of the Sundarbans</h1>
            <p className="text-gray-300">A place where nature and adventure unite</p>
            <a href="#adventure" className="px-4 py-2 border border-sky-200 text-gray-800 font-semibold bg-gradient-to-r from-blue-100 via-sky-200 rounded-lg hover:bg-blue-100 w-fit">Explore</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
