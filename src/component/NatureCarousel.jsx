import { useRef, useState } from "react";
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

  // 🔹 Swiper button refs (IMPORTANT)
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // 🔹 State for fade logic
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="bg-[#f8f8f5] py-12 h-screen">

      {/* HEADER */}
      <div className="w-[90%] max-w-[1400px] mx-auto flex items-center justify-between mb-6">
        <h2 className="text-[#E0A82E] text-2xl md:text-3xl font-medium">
          Closer to Nature
        </h2>

        {/* NAV BUTTONS */}
        <div className="flex items-center gap-3">
          {/* PREV */}
          <button
            ref={prevRef}
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition
              ${isBeginning ? "opacity-40 pointer-events-none" : "hover:bg-gray-100"}
            `}
          >
            <ArrowLeft size={18} />
          </button>

          {/* NEXT */}
          <button
            ref={nextRef}
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition
              ${isEnd ? "opacity-40 pointer-events-none" : "hover:bg-gray-100"}
            `}
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* SLIDER */}
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={0}
        className="w-screen"

        // 🔹 Correct navigation binding
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}

        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}

        // 🔹 Initial state
        onSwiper={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}

        // 🔹 Update on slide change
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="w-screen h-[220px] sm:h-[320px] md:h-[420px] lg:h-[520px]">
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
