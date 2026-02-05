import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
})







// import { motion } from 'framer-motion';
// const GallerySection = () => {
//   const images = [
//     { src: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=800', size: 'col-span-1 row-span-2' },
//     { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800', size: 'col-span-1 row-span-1' },
//     { src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=800', size: 'col-span-1 row-span-1' },
//     { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1200', size: 'col-span-2 row-span-2' },
//     { src: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=800', size: 'col-span-1 row-span-1' },
//     { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800', size: 'col-span-1 row-span-1' },
//   ];

//   return (
//     <section className="py-32 bg-[#f8f7f3]">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Header */}
//         <div className="text-center mb-24">
//           <h2 className="tracking-[0.4em] text-sm text-gray-500">
//             ELEVATED EVERYDAY
//           </h2>
//           <p className="mt-4 text-xs tracking-[0.3em] text-gray-400">
//             LEGACY FOR TOMORROW
//           </p>
//         </div>




//         {/* Layout */}
//         <div className="flex flex-col lg:flex-row  gap-4">

//           {/* LEFT COLUMN */}
//           <div className="flex flex-col gap-[0.4]  w-full lg:w-1/2">

//             {/* Top Image */}
//             <div className='ml-[204px]'>
//               <p className="text-xs tracking-[0.3em] mb-4 text-gray-500">
//                 EXCLUSIVITY
//               </p>
//               <img
//                 src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800"
//                 className="w-[404px] h-[425px] object-cover"
//               />
//             </div>

//             {/* Small Image */}
//             <div className="w-1/2 mb-[335.5px] ml-[21rem]">
//               <div className='flex h-[200px] items-center '>

//                 <p className="text-xs mr-3 tracking-[0.3em] mb-4 text-gray-500">
//                   PRESTIGE
//                 </p>
//                 <img
//                   src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800"
//                   className="w-[174px] h-[149px] mb-6  object-cover"
//                 />
//               </div>
//               <p className="text-xs tracking-[0.3em] ml-40 mb-0 text-gray-500">
//                 PRESTIGE
//               </p>
//             </div>

//             {/* Bottom Small */}
//             <div className="w-1/2 ml-[309px] flex h-[185px] items-center">
//               <p className="text-xs mr-4 tracking-[0.3em] mb-4 text-gray-500">
//                 CURATED
//               </p>
//               <img
//                 src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=800"
//                 className="w-[202.24px] h-[202.24px] object-cover"
//               />
//             </div>
//           </div>





//           {/* RIGHT COLUMN */}
//           <div className="w-full lg:w-1/2 flex flex-col xl:mt-56 gap-4">

//             {/* Big Hero Image */}
//             <div>
//               <p className="text-xs tracking-[0.3em] mb-4 text-gray-500">
//                 BESPOKE
//               </p>
//               <img
//                 src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1200"
//                 className="w-[231px] h-[200px] object-cover"
//               />
//             </div>

//             {/* Bottom Row */}
//             <div>
//               {/* <p className="text-xs tracking-[0.3em] mb-4 text-gray-500">
//                 EXCLUSIVITY
//               </p> */}
//               <img
//                 src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=800"
//                 className="w-[520px] h-[512px] object-cover"
//               />
//             </div>

//             <div className='flex h-[200px] items-center'>
//               <img
//                 src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800"
//                 className="w-[220px] h-[202.24px] object-cover"
//               />
//                 <p className="text-xs ml-5 tracking-[0.3em] mb-4 text-gray-500">
//                   EXCLUSIVITY
//                 </p>
//             </div>


//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default GallerySection;