import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/great.jfif";
import img2 from "../assets/himalaya.avif";
import img3 from "../assets/serengeti.webp";
import img4 from "../assets/sundarban.jpg";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <div className="my-6">
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper bg-base-200 h-[400px] rounded-xl border border-green-700"
      >
        <SwiperSlide>
          <div className="flex items-center">
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                tempora animi iure quibusdam quidem, facere perferendis veniam
                cumque vel possimus.
              </p>
            </div>
            
              <img
                className="w-[50%] h-full object-cover rounded-xl"
                src={img1}
                alt=""
              />
           
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center">
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                tempora animi iure quibusdam quidem, facere perferendis veniam
                cumque vel possimus.
              </p>
            </div>
           
              <img
                className="w-[50%] h-full object-cover rounded-xl"
                src={img2}
                alt=""
              />
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center">
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                tempora animi iure quibusdam quidem, facere perferendis veniam
                cumque vel possimus.
              </p>
            </div>
            
              <img
                className="w-[50%] h-full object-cover rounded-xl"
                src={img3}
                alt=""
              />
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center">
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                tempora animi iure quibusdam quidem, facere perferendis veniam
                cumque vel possimus.
              </p>
            </div>
          
              <img
                className="w-[50%] h-full object-cover rounded-xl"
                src={img4}
                alt=""
              />
            
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
