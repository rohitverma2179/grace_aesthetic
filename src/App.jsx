import React, { useState, useEffect } from 'react';
import Navbar from './component/Navbar.jsx';
import Hero from './component/Hero.jsx';
import AboutSection from './component/AboutSection.jsx';
import GallerySection from './component/GallerySection.jsx';
import InteriorsSection from './component/InteriorsSection.jsx';
import WhyChooseSection from './component/WhyChooseSection.jsx';
import Footer from './component/Footer.jsx';
import { motion } from 'framer-motion';
import NatureCarousel from './component/NatureCarousel.jsx';
import LuxuryHighlights from './component/LuxuryHighlights.jsx';


function App() {

  return (
    <div className="antialiased text-luxury-dark">
      <Navbar />
      <Hero />
      <AboutSection />
      {/* <GallerySection /> */}

      {/* Mid-page Text Break */}
      <section className="py-24 bg-white text-center">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-sm uppercase tracking-[0.5em] text-primary mb-8">Our Core Values</p>
            <p className="text-2xl md:text-3xl font-serif text-luxury-dark/80 italic leading-relaxed">
              "We believe in the power of simplicity and the harmony of nature. Our goal is to create spaces that transcend time and offer a truly unique aesthetic experience."
            </p>
          </motion.div>
        </div>
      </section>

      <InteriorsSection />
      <LuxuryHighlights />

    
       
      <NatureCarousel />

      <WhyChooseSection />
      <Footer />
    </div>
  );
}

export default App;