import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import img1 from "../assets/natureCoursal/img1.png";
import img2 from "../assets/natureCoursal/img2.png";
import img3 from "../assets/natureCoursal/img3.png";
import img4 from "../assets/natureCoursal/img4.png";

const NatureCarousel = () => {
  const images = [img1, img2, img3, img4];

  return (
    <section className="bg-[#f8f8f5] py-12">

      {/* HEADER (unchanged) */}
      <div className="w-[90%] max-w-[1400px] mx-auto mb-8">
        <h2 className="text-[#E0A82E] text-2xl md:text-3xl font-medium">
          Closer to Nature
        </h2>
      </div>

      {/* AUTO SCROLLING SLIDER */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop={true}                 // 🔹 infinite loop
        speed={1200}                // 🔹 smooth transition
        autoplay={{
          delay: 3000,              // 🔹 3 sec per slide
          disableOnInteraction: false,
        }}
        className="w-screen h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="w-screen h-[70vh]">
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
