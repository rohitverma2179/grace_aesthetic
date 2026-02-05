
import { motion } from 'framer-motion';


const GallerySection = () => {
  const images = [
    { src: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=800', size: 'col-span-1 row-span-2' },
    { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800', size: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=800', size: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1200', size: 'col-span-2 row-span-2' },
    { src: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=800', size: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800', size: 'col-span-1 row-span-1' },
  ];

  return (
    <section className="py-32 bg-[#f8f7f3]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="tracking-[0.4em] text-sm text-gray-500">
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
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800"
                className="w-full max-w-[404px] xl:w-[404px] h-auto xl:h-[425px] object-cover"
              />
            </div>

            {/* Small Image */}
            <div className="w-full xl:w-1/2 xl:mb-[335.5px] xl:ml-[21rem] flex flex-col items-center xl:items-start px-4 xl:px-0">
              <div className='flex flex-col md:flex-row xl:h-[200px] items-center gap-4 xl:gap-0'>

                <p className="text-xs xl:mr-3 tracking-[0.3em] xl:mb-4 text-gray-500">
                  Wellbeing
                </p>
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800"
                  className="w-full max-w-[174px] xl:w-[174px] h-auto xl:h-[149px] xl:mb-6 object-cover"
                />
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
              <img
                src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=800"
                className="w-full max-w-[202.24px] xl:w-[202.24px] h-auto xl:h-[202.24px] object-cover"
              />
            </div>
          </div>




Rooted
Enduring



          {/* RIGHT COLUMN */}
          <div className="w-full xl:w-1/2 flex flex-col xl:mt-56 gap-12 xl:gap-4 items-center xl:items-start">

            {/* Big Hero Image */}
            <div className="flex flex-col items-center xl:items-start w-full px-4 xl:px-0">
              <p className="text-xs tracking-[0.3em] mb-4 text-gray-500">
                BESPOKE
              </p>
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1200"
                className="w-full max-w-[231px] xl:w-[231px] h-auto xl:h-[200px] object-cover"
              />
            </div>



            {/* Bottom Row */}
            <div className="w-full px-4 xl:px-0 flex justify-center xl:justify-start">
              {/* <p className="text-xs tracking-[0.3em] mb-4 text-gray-500">
                EXCLUSIVITY
              </p> */}
              <img
                src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=800"
                className="w-full max-w-[520px] xl:w-[520px] h-auto xl:h-[512px] object-cover"
              />
            </div>

            <div className='flex flex-col xl:flex-row xl:h-[200px] items-center gap-4 xl:gap-0 px-4 xl:px-0'>
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800"
                className="w-full max-w-[220px] xl:w-[220px] h-auto xl:h-[202.24px] object-cover"
              />
              <p className="text-xs xl:ml-5 tracking-[0.3em] xl:mb-4 text-gray-500">
                EXCLUSIVITY
              </p>
            </div>


          </div>

        </div>
      </div>
    </section>
  );
};

export default GallerySection;