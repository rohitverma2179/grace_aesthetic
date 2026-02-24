import React from "react";
import heroImg1 from "../assets/billoraImgs/heroImg1.png"
import heroImg2 from "../assets/billoraImgs/heroImg2.png"
import heroImg3 from "../assets/billoraImgs/heroImg3.png"
import { Waves, PawPrint, Utensils, Bed, MapPin, Car  } from "lucide-react";

import beyond1 from "../assets/billoraImgs/beyondWordsImgs/beyond1.png"
import beyond2 from "../assets/billoraImgs/beyondWordsImgs/beyond2.png"
import beyond3 from "../assets/billoraImgs/beyondWordsImgs/beyond3.png"
import beyond4 from "../assets/billoraImgs/beyondWordsImgs/beyond4.png"
import beyond5 from "../assets/billoraImgs/beyondWordsImgs/beyond5.png"
import beyond6 from "../assets/billoraImgs/beyondWordsImgs/beyond6.png"
import beyond7 from "../assets/billoraImgs/beyondWordsImgs/beyond7.png"
import beyond8 from "../assets/billoraImgs/beyondWordsImgs/beyond8.png"
import beyond9 from "../assets/billoraImgs/beyondWordsImgs/beyond9.png"
import beyond10 from "../assets/billoraImgs/beyondWordsImgs/beyond10.png"

const BilloraPage = () => {


  const images = [  
  { id: 1, src: beyond1, span: "col-span-1 row-span-1" },
  { id: 2, src: beyond2, span: "col-span-1 row-span-1" },
  { id: 3, src: beyond3, span: "col-span-1 row-span-1" },
  { id: 4, src: beyond4, span: "col-span-1 row-span-1" },
  { id: 5, src: beyond5, span: "col-span-2 row-span-1" },
  { id: 6, src: beyond6, span: "col-span-1 row-span-1" },
  { id: 7, src: beyond7, span: "col-span-1 row-span-1" },
  { id: 8, src: beyond8, span: "col-span-1 row-span-1" },
  { id: 9, src: beyond9, span: "col-span-1 row-span-1" },
  { id: 10, src: beyond10, span: "col-span-1 row-span-1" },
];



  return (
    <>
    <section className="relative bg-[#e9e6e2] py-20 px-4 md:px-0 overflow-hidden">
      
      {/* Decorative Circle */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] border border-yellow-500 rounded-full"></div>

      <div className=" mx-auto">
  
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light tracking-widest text-gray-700">
            Billora
          </h1>
          <p className="mt-4 text-xs md:text-sm tracking-[4px] text-yellow-600 uppercase">
            A New Beginning Rooted In Greenery, Space, And Quiet Comfort.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Left Large Image */}
          <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
            <img
              src={heroImg2}
              alt="Balcony View"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side Images */}
          <div className="flex flex-col gap-6">
            
            <div className="w-full h-[240px] md:h-[300px] lg:h-[290px] overflow-hidden">
              <img
                src={heroImg1}
                alt="Room Interior"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full h-[240px] md:h-[300px] lg:h-[290px] overflow-hidden">
              <img
                src={heroImg3}
                alt="Resort View"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    </section>



   {/* what we offer section */}

   <section className="relative bg-[#e9e6e2] py-20 px-6 md:px-16 overflow-hidden">
      
      {/* Top Right Decorative Curve */}
      {/* <div className="absolute -top-40 -right-40 w-[500px] h-[500px] border border-yellow-500 rounded-full"></div> */}

      <div className=" mx-auto">

        {/* Heading */}
        <h2 className="text-left text-2xl md:text-3xl tracking-[12px] text-black mb-20">
          WHAT WE OFFER
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-20">

          {/* Item 1 */}
          <div>
            <Waves size={40} className="text-teal-600 mb-6" strokeWidth={1.5} />
            <h3 className="tracking-[6px] text-sm mb-4">POOL</h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              A serene swimming pool designed for relaxation and leisure.
              An ideal space to unwind while surrounded by nature.
            </p>
          </div>

          {/* Item 2 */}
          <div>
            <PawPrint size={40} className="text-teal-600 mb-6" strokeWidth={1.5} />
            <h3 className="tracking-[6px] text-sm mb-4">PET-FRIENDLY</h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              Welcoming spaces thoughtfully planned for you and your pets.
              Because home should feel complete for every member of the family.
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-teal-300 my-16"></div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-20">

          {/* Item 3 */}
          <div>
            <Utensils size={40} className="text-teal-600 mb-6" strokeWidth={1.5} />
            <h3 className="tracking-[6px] text-sm mb-4">RESTAURANT</h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              An on-site dining space offering comfort and convenience.
              Enjoy curated meals without stepping away from home.
            </p>
          </div>

          {/* Item 4 */}
          <div>
            <Bed size={40} className="text-teal-600 mb-6" strokeWidth={1.5} />
            <h3 className="tracking-[6px] text-sm mb-4">
              CONNECTING ROOMS AVAILABLE
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              Flexible living spaces designed for families and guests.
              Perfect for comfort, privacy, and togetherness.
            </p>
          </div>

        </div>

        {/* Bottom Divider */}
        <div className="border-t border-teal-300 mt-16"></div>

      </div>
    </section>


    {/* BeyondWords section */}
 <section className="bg-[#e9e6e2] py-16 px-4 md:px-10">
  <div className="max-w-8xl mx-auto">

    {/* Heading */}
    <h2 className="text-2xl md:text-3xl tracking-[12px] text-black mb-12">
      BEYOND WORDS.
    </h2>

    <div className="flex flex-col gap-6">

      {/* Row 1 */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3 h-[455px]">
          <img src={beyond1} className="w-full h-full object-cover" />
        </div>
        <div className="md:w-1/3 h-[455px]">
          <img src={beyond2} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3 h-[455px]">
          <img src={beyond3} className="w-full h-full object-cover" />
        </div>
        <div className="md:w-2/3 h-[455px]">
          <img src={beyond4} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Row 3 (Left Bigger) */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3 h-[455px]">
          <img src={beyond5} className="w-full h-full object-cover" />
        </div>
        <div className="md:w-1/3 h-[455px]">
          <img src={beyond6} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Row 4 */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3 h-[455px]">
          <img src={beyond7} className="w-full h-full object-cover" />
        </div>
        <div className="md:w-2/3 h-[455px]">
          <img src={beyond8} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Row 5 */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3 h-[455px]">
          <img src={beyond9} className="w-full h-full object-cover" />
        </div>
        <div className="md:w-1/3 h-[455px]">
          <img src={beyond10} className="w-full h-full object-cover" />
        </div>
      </div>

    </div>
  </div>
</section>



{/* AboutArea    */}

   <section className="bg-[#e9e6e2] py-20 px-6 md:px-16">
      <div className="max-w-8xl mx-auto">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-around gap-24">

          {/* Left Map */}
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4353.744398929771!2d79.09750683833299!3d29.60645347011841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a1987c49e37a5%3A0xe32484b88696a4a!2sTerratrek%20Billora!5e0!3m2!1sen!2sin!4v1771914821975!5m2!1sen!2sin" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

          {/* Right Content */}
          <div className="lg:w-1/2 w-full">
            
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              About the area
            </h2>

            <p className="text-gray-600 mb-8">
              Jim Corbett National Park, Marchula,<br />
              Uttarakhand, 244715
            </p>

            {/* What's Nearby */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-3">
                <MapPin size={20} className="text-gray-700" />
                <h3 className="text-xl font-light">What’s nearby</h3>
              </div>

              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Corbett National Park - 11 min walk - 1.0 km</li>
                <li>• Dhangarhi Museum - 54 min drive - 14.3 km</li>
              </ul>
            </div>

            {/* Getting Around */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Car size={20} className="text-gray-700" />
                <h3 className="text-xl font-light">Getting around</h3>
              </div>

              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Ramnagar Station - 65 min drive</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="mt-24 text-center">
          <h2 className="text-xl md:text-3xl tracking-[8px] md:tracking-[12px] uppercase">
            Guiding You Home <br className="hidden md:block" />
            With Clarity And Confidence.
          </h2>
        </div>

      </div>
    </section>



    </>

  );
};

export default BilloraPage;