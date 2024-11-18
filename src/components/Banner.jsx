
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from "../assets/great.jfif";
import img2 from "../assets/himalaya.avif";
import img3 from "../assets/serengeti.webp";
import img4 from "../assets/sundarban.jpg";


const Banner = () => {
  return (
    <div className="py-10">
      <div className="carousel w-full max-h-[calc(100vh-42px)] rounded-xl">
        <div id="slide1" className="carousel-item relative w-full rounded-xl">
          <img
            src={img1}
            className="w-full h-full rounded-xl object-cover"
          />
          <div className="absolute left-5 right-5 top-3/4 flex -translate-y-1/2 transform duration-100 gap-2">
            <a href="#slide4" className="btn btn-circle btn-outline text-white">
              <FaArrowLeft className="text-xl"/>
            </a>
            <a href="#slide2" className="btn btn-circle btn-outline text-white">
            <FaArrowRight className="text-xl"/>
            </a>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex flex-col -translate-y-1/2 transform duration-100 gap-2">
            <h1 className="lg:text-6xl text-2xl text-white lg:w-[60%]">Explore the sights <br /> of the Great Barrier Reef</h1>
            <p className="text-gray-300">A place where nature and adventure unite</p>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full rounded-xl">
          <img
            src={img2}
            className="w-full h-full rounded-xl object-cover"
          />
          <div className="absolute left-5 right-5 top-3/4 flex -translate-y-1/2 transform duration-100  gap-2">
            <a href="#slide1" className="btn btn-circle btn-outline text-white">
            <FaArrowLeft className="text-xl"/>
            </a>
            <a href="#slide3" className="btn btn-circle btn-outline text-white">
            <FaArrowRight className="text-xl"/>
            </a>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex flex-col -translate-y-1/2 transform duration-100 gap-2">
            <h1 className="lg:text-6xl text-2xl text-white lg:w-[60%]">Explore the sights <br /> of the Himalayas</h1>
            <p className="text-gray-300">A place where nature and adventure unite</p>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full rounded-xl">
          <img
            src={img3}
            className="w-full h-full rounded-xl object-cover"
          />
          <div className="absolute left-5 right-5 top-3/4 flex -translate-y-1/2 transform duration-100  gap-2">
            <a href="#slide2" className="btn btn-circle btn-outline text-white">
            <FaArrowLeft className="text-xl"/>
            </a>
            <a href="#slide4" className="btn btn-circle btn-outline text-white">
            <FaArrowRight className="text-xl"/>
            </a>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex flex-col -translate-y-1/2 transform duration-100 gap-2">
            <h1 className="lg:text-6xl text-2xl text-white lg:w-[60%]">Explore the sights <br /> of the Serengeti National Park</h1>
            <p className="text-gray-300">A place where nature and adventure unite</p>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full rounded-xl">
          <img
            src={img4}
            className="w-full h-full rounded-xl object-cover"
          />
          <div className="absolute left-5 right-5 top-3/4 flex -translate-y-1/2 transform duration-100 gap-2">
            <a href="#slide3" className="btn btn-circle btn-outline text-white">
            <FaArrowLeft className="text-xl"/>
            </a>
            <a href="#slide1" className="btn btn-circle btn-outline text-white">
            <FaArrowRight className="text-xl"/>
            </a>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex flex-col -translate-y-1/2 transform duration-100 gap-2">
            <h1 className="lg:text-6xl text-2xl text-white lg:w-[60%]">Explore the sights <br /> of the Sundarbans</h1>
            <p className="text-gray-300">A place where nature and adventure unite</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
