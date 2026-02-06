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

  // useEffect(() => {
  //   wrappersRef.current.forEach((wrapper) => {
  //     const img = wrapper.querySelector("img");

  //     gsap.fromTo(
  //       img,
  //       {
  //         scaleY: 0,
  //         transformOrigin: "bottom",
  //       },
  //       {
  //         scaleY: 1,
  //         duration: 1.2,
  //         ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: wrapper,
  //           start: "top 90%",
  //           end : "top 2%",
  //           // scrub : 1,
  //           // markers: true,
  //           toggleActions: "play none none none",
  //         },
  //       }
  //     );
  //   });
  // }, []);

  return (
    <section className="py-32 bg-[#f8f7f3]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="tracking-[2.25rem] text-[37px] text-gray-500">
            ELEVATED EVERYDAY
          </h2>
          <p className="mt-4 text-xs tracking-[0.3em] text-gray-400">
            LEGACY FOR TOMORROW
          </p>
        </div>
        {/* Gallery */}
        <div className='w-full flex gap-4 flex-col'>

  {/* FIRST SECTION */}
  <div className='w-full h-auto md:h-152 grid grid-cols-1 md:grid-cols-2 gap-4 top_section'>

    <div className='w-full aspect-square md:h-full'>
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg" 
        alt="" 
        className='w-full h-full object-cover'
      />
    </div>

    <div className='w-full h-full flex flex-col justify-between'>
      <p className='w-full h-1/2 text-2xl md:text-3xl font-serif tracking-[14px]'>
        Harmony
      </p>

      <div className='w-full h-1/2 overflow-hidden' ref={addToRefs}>
        <img 
          src="https://t4.ftcdn.net/jpg/02/70/35/97/360_F_270359790_oywvlHjQGnkT3pjdSAfqt4HZb6TTKOrz.jpg" 
          alt="img" 
          className='w-full md:w-1/2 h-full object-cover'
        />
      </div>
    </div>
  </div>

  {/* SECOND SECTION */}
  <div className='w-full h-auto md:h-152 grid grid-cols-1 md:grid-cols-2 gap-4 top_second_section'>

    <div className='w-full grid grid-cols-1 md:grid-cols-2 h-full left_second_images'>
      <p className='text-2xl md:text-3xl font-serif tracking-[14px]'>
        Wellbeing
      </p>

      <div className='grid grid-cols-1 md:grid-rows-2' ref={addToRefs}>
        <img 
          src="https://t4.ftcdn.net/jpg/02/70/35/97/360_F_270359790_oywvlHjQGnkT3pjdSAfqt4HZb6TTKOrz.jpg" 
          alt="img" 
          className='w-full aspect-square lg:h-full md:h-1/2 object-cover'
        />
        <p className='w-full text-2xl md:text-3xl font-serif tracking-[14px]'>
          Thoughtful
        </p>
      </div>
    </div>

    <div className='w-full aspect-square md:h-full'>
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg" 
        alt="" 
        className='w-full h-full object-cover'
      />
    </div>
  </div>

  {/* THIRD SECTION */}
  <div className='w-full h-auto md:h-76 grid grid-cols-1 md:grid-cols-2 gap-4 top_third_section'>

    <div className='w-full grid grid-cols-1 md:grid-cols-2 h-full'>
      <p className='text-2xl md:text-3xl font-serif tracking-[14px] w-full flex justify-end'>
        Rooted
      </p>
      <img 
        src="https://t4.ftcdn.net/jpg/02/70/35/97/360_F_270359790_oywvlHjQGnkT3pjdSAfqt4HZb6TTKOrz.jpg" 
        alt="img" 
        className='w-full aspect-square md:h-full object-cover'
      />
    </div>

    <div className='w-full grid grid-cols-1 md:grid-cols-2 flex gap-2'>
      <img 
        src="https://t4.ftcdn.net/jpg/02/70/35/97/360_F_270359790_oywvlHjQGnkT3pjdSAfqt4HZb6TTKOrz.jpg" 
        alt="img" 
        className='w-full aspect-square md:h-full object-cover'
      />
      <p className='text-2xl md:text-3xl font-serif tracking-[14px]'>
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
