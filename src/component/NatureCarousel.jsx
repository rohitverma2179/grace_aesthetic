import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import img1 from "../assets/natureCoursal/img1.png";
import img2 from "../assets/natureCoursal/img2.png";
import img3 from "../assets/natureCoursal/img3.png";
import img4 from "../assets/natureCoursal/img4.png";

const NatureCarousel = () => {
  const images = [img1, img2, img3, img4];

  return (
    <section className="bg-[#f8f8f5] py-12  h-screen">

      {/* HEADER (BOXED) */}
      <div className="w-[90%] max-w-[1400px] mx-auto flex items-center justify-between mb-6">
        <h2 className="text-[#E0A82E] text-2xl md:text-3xl font-medium">
          Closer to Nature
        </h2>

        <div className="flex items-center gap-3">
          <button className="nature-prev w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100 transition">
            <ArrowLeft size={18} />
          </button>
          <button className="nature-next w-10 h-10 rounded-full bg-[#2F5D50] text-white flex items-center justify-center hover:opacity-90 transition">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* FULL WIDTH SLIDER */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".nature-prev",
          nextEl: ".nature-next",
        }}
        slidesPerView={1}
        spaceBetween={0}
        className="w-screen"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="w-screen h-[220px] sm:h-[320px] md:h-[420px] lg:h-[520px] flex">
              <img
                src={img}
                alt={`slide-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default NatureCarousel;
