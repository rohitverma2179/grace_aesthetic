import { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GallerySection = () => {
  const wrappersRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !wrappersRef.current.includes(el)) {
      wrappersRef.current.push(el);
    }
  };

  useEffect(() => {
    wrappersRef.current.forEach((wrapper) => {
      const img = wrapper.querySelector("img");

      gsap.fromTo(
        img,
        {
          scaleY: 0,
          transformOrigin: "bottom",
        },
        {
          scaleY: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapper,
            start: "top 90%",
            end : "top 2%",
            // scrub : 1,
            // markers: true,
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section className="py-32 bg-[#f8f7f3]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="tracking-[0.4em] text-[37px] text-gray-500">
            ELEVATED EVERYDAY
          </h2>
          <p className="mt-4 text-xs tracking-[0.3em] text-gray-400">
            LEGACY FOR TOMORROW
          </p>
        </div>

        {/* Layout */}
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-4 items-center xl:items-start">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-12 xl:gap-0 w-full xl:w-1/2 items-center xl:items-start">

            {/* Top Image */}
            <div className='xl:ml-[204px] flex flex-col items-center xl:items-start w-full px-4 xl:px-0'>
              <p className="text-xs tracking-[0.3em] mb-4 text-gray-500">
                Harmony
              </p>
              <div
                ref={addToRefs}
                className="overflow-hidden w-full max-w-[404px] xl:w-[404px] xl:h-[425px]"
              >
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Small Image */}
            <div className="w-full xl:w-1/2 xl:mb-[335.5px] xl:ml-[21rem] flex flex-col items-center xl:items-start px-4 xl:px-0">
              <div className='flex flex-col md:flex-row xl:h-[200px] items-center gap-4 xl:gap-0'>
                <p className="text-xs xl:mr-3 tracking-[0.3em] xl:mb-4 text-gray-500">
                  Wellbeing
                </p>

                <div
                  ref={addToRefs}
                  className="overflow-hidden max-w-[174px] xl:w-[174px] xl:h-[149px]"
                >
                  <img
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <p className="text-xs tracking-[0.3em] xl:ml-40 mt-4 xl:mt-0 xl:mb-0 text-gray-500">
                PRESTIGE
              </p>
            </div>

            {/* Bottom Small */}
            <div className="w-full xl:w-1/2 xl:ml-[309px] flex flex-col xl:flex-row xl:h-[185px] items-center gap-4 xl:gap-0 px-4 xl:px-0">
              <p className="text-xs xl:mr-4 tracking-[0.3em] xl:mb-4 text-gray-500">
                Thoughtful
              </p>

              <div
                ref={addToRefs}
                className="overflow-hidden max-w-[202.24px] xl:w-[202.24px] xl:h-[202.24px]"
              >
                <img
                  src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full xl:w-1/2 flex flex-col xl:mt-56 gap-12 xl:gap-4 items-center xl:items-start">

            {/* Big Hero Image */}
            <div className="flex flex-col items-center xl:items-start w-full px-4 xl:px-0">
              <p className="text-xs tracking-[0.3em] mb-4 text-gray-500">
                Rooted
              </p>

              <div
                ref={addToRefs}
                className="overflow-hidden max-w-[231px] xl:w-[231px] xl:h-[200px]"
              >
                <img
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1200"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bottom Row */}
            <div className="w-full px-4 xl:px-0 flex justify-center xl:justify-start">
              <div
                ref={addToRefs}
                className="overflow-hidden max-w-[520px] xl:w-[520px] xl:h-[512px]"
              >
                <img
                  src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className='flex flex-col xl:flex-row xl:h-[200px] items-center gap-4 xl:gap-0 px-4 xl:px-0'>
              <div
                ref={addToRefs}
                className="overflow-hidden max-w-[220px] xl:w-[220px] xl:h-[202.24px]"
              >
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-xs xl:ml-5 tracking-[0.3em] xl:mb-4 text-gray-500">

                Enduring
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
