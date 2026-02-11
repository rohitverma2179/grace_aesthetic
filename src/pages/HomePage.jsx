import React from "react";
import Hero from "../component/Hero.jsx";
import AboutSection from "../component/AboutSection.jsx";
import GallerySection from "../component/GallerySection.jsx";
import InteriorsSection from "../component/InteriorsSection.jsx";
import WhyChooseSection from "../component/WhyChooseSection.jsx";
import { motion } from "framer-motion";
import NatureCarousel from "../component/NatureCarousel.jsx";
import LuxuryHighlights from "../component/LuxuryHighlights.jsx";

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <GallerySection />

      {/* Mid-page Text Break */}
      <section className="py-24 bg-white text-center">
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="tracking-[0.6em] 
    sm:tracking-[1rem] 
    md:tracking-[1.6rem] 
    lg:tracking-[2.25rem] 
    text-xl 
    sm:text-2xl 
    md:text-3xl 
    lg:text-[37px] 
    text-gray-500 mb-6 uppercase">
              Our Core Values
            </p>

            <p className="text-base md:text-2xl lg:text-[18px] font-serif text-luxury-dark/80 text-base/8">
              At Grace Aesthetic, we believe real estate should be built on
              trust, clarity, and genuine care. Rooted in Uttrakhand, we respect
              nature, local surroundings, and responsible development in every
              decision we make. Honesty, transparency, and long term
              relationships guide our work, ensuring clients feel confident and
              supported at every step. Above all, we are committed to helping
              people choose homes that offer peace, balance, and enduring value,
              closely connected .
            </p>
          </motion.div>
        </div>
      </section>

      <InteriorsSection />
      <LuxuryHighlights />
      <NatureCarousel />
      <WhyChooseSection />
    </>
  );
};

export default HomePage;
