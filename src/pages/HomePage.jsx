import React from 'react';
import Hero from '../component/Hero.jsx';
import AboutSection from '../component/AboutSection.jsx';
import GallerySection from '../component/GallerySection.jsx';
import InteriorsSection from '../component/InteriorsSection.jsx';
import WhyChooseSection from '../component/WhyChooseSection.jsx';
import { motion } from 'framer-motion';
import NatureCarousel from '../component/NatureCarousel.jsx';
import LuxuryHighlights from '../component/LuxuryHighlights.jsx';

const HomePage = () => {
    return (
        <>
            <Hero />
            <AboutSection />
            <GallerySection />

            {/* Mid-page Text Break */}
            <section className="py-24 bg-white text-center">
                <div className="container-custom w-[1270px] px-4 mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <p className="text-sm uppercase tracking-[0.5em] text-primary mb-8">Our Core Values</p>
                        <p className="text-2xl md:text-3xl font-serif text-luxury-dark/80 italic leading-relaxed">
                            At Grace Aesthetic, we believe real estate should be built on trust, clarity, and genuine care. Rooted in Dehradun, we respect nature, local surroundings, and responsible development in every decision we make. Honesty, transparency, and long-term relationships guide our work, ensuring clients feel confident and supported at every step. Above all, we are committed to helping people choose homes that offer peace, balance, and enduring value, closely connected to nature.
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
