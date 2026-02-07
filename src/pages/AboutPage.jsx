import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 }
    };

    const teamMembers = [
        {
            name: "KARAN MEHTA",
            role: "DIRECTOR & CO-FOUNDER",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
        },
        {
            name: "KANISHKA SINGH",
            role: "CO-FOUNDER & PARTNER",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
        },
        {
            name: "VIKRAM MALHOTRA",
            role: "DIRECTOR OF BUSINESS OPERATIONS",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <div className="bg-[#FAF9F6] pt-24">
            {/* Hero Section */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto text-center">
                <motion.span
                    {...fadeIn}
                    className="block text-primary tracking-[0.4em] text-xs md:text-sm font-medium uppercase mb-6"
                >
                    A THOUGHTFUL WAY OF LIVING
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-widest text-luxury-dark mb-12 uppercase"
                >
                    ABOUT GRACE AESTHETIC
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="max-w-4xl mx-auto text-gray-500 leading-relaxed text-sm md:text-lg"
                >
                    Grace Aesthetic was created for those who believe a home should offer more than just walls and windows. Rooted in Dehradun, our philosophy revolves around a life enriched by nature, space, and authenticity. We are committed to helping families find more than just a property; we help them discover a sanctuary where the surroundings feel like home.
                </motion.p>
            </section>

            {/* Main Image Banner */}
            <section className="px-4 md:px-8 mb-32 relative group">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="max-w-7xl mx-auto h-[400px] md:h-[600px] overflow-hidden rounded-sm relative"
                >
                    <img
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                        alt="Grace Aesthetic Living"
                        className="w-full h-full object-cover grayscale-20 group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-black/10"></div>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 cursor-pointer group"
                        >
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl">
                                <div className="w-0 h-0 border-t-10 border-t-transparent border-l-18 border-l-luxury-dark border-b-10 border-b-transparent ml-1"></div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-8 left-8 w-12 h-px bg-white/50"></div>
                    <div className="absolute top-8 left-8 w-px h-12 bg-white/50"></div>
                    <div className="absolute bottom-8 right-8 w-12 h-px bg-white/50"></div>
                    <div className="absolute bottom-8 right-8 w-px h-12 bg-white/50"></div>
                </motion.div>
            </section>

            {/* What We Do Section */}
            <section className="py-24 bg-white px-4 md:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h2
                        {...fadeIn}
                        className="text-3xl md:text-5xl font-serif tracking-[0.2em] text-luxury-dark mb-10 uppercase"
                    >
                        WHAT WE DO
                    </motion.h2>
                    <motion.p
                        {...fadeIn}
                        className="max-w-5xl mx-auto text-gray-500 leading-relaxed text-base md:text-xl"
                    >
                        At Grace Aesthetic, we go beyond mere transactions of real estate. We are an architecture and lifestyle brand that focuses on the creation of premium and high-end living spaces. With quality craftsmanship and a thoughtful design process, we bring back the harmony that should exist between people and nature. We don't just build structures; we curate lifestyles.
                    </motion.p>
                </div>
            </section>

            {/* Vision Section */}
            <section className="bg-[#EAE8E3] py-24 px-4 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1"
                    >
                        <span className="text-primary tracking-[0.3em] text-xs font-bold uppercase mb-4 block">MEET THE LEADER</span>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-wider text-luxury-dark mb-8 leading-tight">
                            A VISION ROOTED IN TRUST & THOUGHTFUL LIVING
                        </h3>
                        <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
                            <p>
                                Grace Aesthetic was born out of a clear intention: to rethink what home can be and how we want to live in relationship with the earth. More than just a real estate brand, we focus on lifestyle, nature, and creating spaces where the soul can truly belong.
                            </p>
                            <p>
                                Our work is not about just selling properties, but about creating better lives. We believe architecture and real estate should always be about quality, not just numbers. Every project we undertake is driven by our commitment to help people find peace and balance.
                            </p>
                            <p>
                                Our work is dedicated to those who seek something more—homes that are an extension of their values. We are here to guide you to a path where nature and luxury coexist in perfect harmony.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                                alt="Visionary Leader"
                                className="w-full aspect-4/5 object-cover rounded-sm shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-primary/20 -z-10 hidden md:block"></div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-[#EAE8E3] ">
                <div className="py-32 px-4 md:px-8 max-w-7xl mx-auto bg-[#EAE8E3] ">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="flex flex-col group"
                            >
                                <div className="overflow-hidden mb-6 rounded-sm aspect-3/4">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 "
                                    />
                                </div>
                                <span className="text-[10px] tracking-[0.3em] text-primary font-bold uppercase mb-2">
                                    {member.role}
                                </span>
                                <h4 className="text-xl font-serif tracking-widest text-luxury-dark uppercase">
                                    {member.name}
                                </h4>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
