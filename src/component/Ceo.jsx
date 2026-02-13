import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ceoHead from "../assets/ownerimg/1.jpg"
import ceoHead2 from "../assets/ownerimg/2.png"
import ceoHead3 from "../assets/ownerimg/3.0.png"

const leaderSections = [
    {
        tag: "Founder & CEO, Team RKI",
        title: "Mr. Devender Tomar",
        description: [
            "With over 22 years of diversified experience across leading organizations like MRG, Signature Global, Unicon, Airtel, and Godrej Securities, Mr. Devender Tomar brings a wealth of knowledge, strategic expertise, and proven results to the real estate consulting space. At Team RKI, his focus is on helping clients make informed property decisions with transparency, integrity, and personalized guidance — ensuring every transaction is seamless, secure, and rewarding. ",
            "With a passion for innovation and client-centric service, he continues to bring global best practices and market insights to help clients achieve their real estate goals — whether it’s buying a dream home, securing a high-yield investment, or expanding a commercial portfolio. Driven by a passion for real estate consulting and a vision to deliver unmatched service quality, he founded this firm with a simple yet powerful philosophy: “SERVICE ABOVE ALL.”",
        ],
        image: ceoHead,
        reverse: false
    },
    {
        tag: "Co-Founder & CFO, Team RKI",
        title: "Ms. Neeru Tomar",
        description: [
            "With 19 years of extensive experience across Sales, E-Commerce, and Operations, Mrs. Neeru Tomar had the privilege of working with globally renowned organizations like American Express, Citi Group, Aon Hewitt, and Koziva UK Limited. At the core of her work lies a commitment to delivering measurable results — whether it’s through streamlined operations, high-impact sales strategies, or innovative e-commerce solutions. ",
            "She brings together the best practices learned from world-class organizations to help businesses achieve operational efficiency, boost revenue, and deliver exceptional customer experiences. Her mission is to help partners achieve true operational efficiency, unlock new revenue streams, and, most importantly, create exceptional experiences that keep customers coming back. For Neeru, success is about more than just hitting targets; it’s about building a sustainable foundation where businesses and people can thrive together.",
        ],
        image: ceoHead2,
        reverse: true
    },
    {
        tag: "Executive Director (Sales), Team RKI",
        title: "Mr. Saurabh Siddhartha Jha",
        description: [
            "With over 13 years of diversified experience across Sales, Marketing, SaaS, and Logistics, Mr. Saurabh Siddhartha Jha brings a wealth of knowledge and expertise to the real estate industry. Having worked with leading organizations such as Zomato, Loconav, Signature Global, and Bata, he has successfully built a career defined by strategic growth, client-centric solutions, and operational excellence. ",
            "His professional journey has spanned fast-paced startups, global enterprises, and leading real estate developers, enabling him to develop a 360-degree understanding of customer needs, market dynamics, and technology-driven solutions. From scaling sales operations to implementing innovative marketing strategies and driving logistics efficiency, his experience reflects a commitment to excellence and results."
        ],
        image: ceoHead3,
        reverse: false
    },
    {
        tag: "DESIGN INTEGRITY",
        title: "THOUGHTFUL LIVING BY DESIGN",
        description: [
            "Placing environmental respect and human comfort at the center of every project. We create spaces that are as functional as they are beautiful.",
            "By focusing on sustainable materials and thoughtful layouts, we create environments that inspire tranquility and foster meaningful connections with nature."
        ],
        image: "https://img.freepik.com/free-photo/portrait-confident-young-businessman-with-his-arms-crossed_23-2148176206.jpg?semt=ais_hybrid&w=740&q=80",
        reverse: true
    }
];

const Section = ({ section, index, total }) => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });
    
    // Sliding effect logic
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]);
    const yShift = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const numOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.05, 0.1, 0]);
    
    return (
        <div
            ref={sectionRef}
            className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
            style={{ zIndex: index + 1 }}
        >
            <motion.div
                style={{
                    scale,
                    opacity,
                    y: yShift
                }}
                className="w-full h-full relative flex items-center bg-[#FBFBF9]"
            >
                {/* Floating background number */}
                <motion.div
                    style={{ opacity: numOpacity }}
                    className={`absolute bottom-10 ${section.reverse ? 'left-10' : 'right-10'} text-[150px] md:text-[250px] font-serif text-primary select-none leading-none z-0`}
                >
                    {/* 0{index + 1} */}
                </motion.div>

                <div className="container-custom relative z-10 w-full px-6 md:px-12">
                    <div className={`flex flex-col ${section.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>

                        {/* IMAGE SECTION WITH SLIDING REVEAL */}
                        <div className="w-full lg:w-1/2 relative group">
                            <div className="relative overflow-hidden luxury-shadow rounded-sm aspect-4/5 sm:aspect-video lg:aspect-4/5">
                                {/* The "Sliding Div" Overlay Curtain */}
                                <motion.div
                                    initial={{ x: '0%' }}
                                    whileInView={{ x: '100%' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                                    className="absolute inset-0 bg-primary z-20 pointer-events-none"
                                />

                                <motion.div
                                    initial={{ scale: 1.2 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="w-full h-full"
                                >
                                    <img
                                        src={section.image}
                                        alt={section.title}
                                        className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-1000 "
                                    />
                                </motion.div>

                                <div className={`absolute top-6 ${section.reverse ? 'right-6' : 'left-6'} w-12 h-12 border-t-2 border-l-2 border-white/30 z-30`} />
                            </div>
                        </div>

                        {/* TEXT CONTENT */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="w-full lg:w-1/2 space-y-8"
                        >
                            <div className="space-y-4">
                                <span className="text-primary tracking-[8px] text-[10px] font-bold uppercase block">
                                    {section.tag}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-serif text-luxury-dark leading-[1.15]">
                                    {section.title}
                                </h3>
                            </div>

                            <div className="space-y-6 text-luxury-dark/80 font-light leading-relaxed text-base md:text-base border-l-2 border-primary/20 pl-8">
                                {section.description.map((para, pIndex) => (
                                    <p key={pIndex} className="text-justify lg:text-left">
                                        {para}
                                    </p>
                                ))}
                            </div>

                            {/* <div className="pt-4">
                                <button className="relative px-12 py-5 bg-luxury-dark text-white text-[10px] tracking-[5px] uppercase overflow-hidden group transition-all duration-300 luxury-shadow">
                                    <span className="relative z-10">Explore Project</span>
                                    <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                </button>
                            </div> */}
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const Ceo = () => {
    return (
        <section className="relative overflow-visible">
            {/* Background Zigzag remains throughout the scroll */}
            <div className="fixed inset-0 opacity-[0.02] pointer-events-none z-0"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 L10 0 L30 20 L50 0 L70 20 L90 0 L100 10' fill='none' stroke='%23C5A059' stroke-width='2'/%3E%3C/svg%3E")`,
                    backgroundSize: '100px 20px'
                }}
            />

            <div className="relative">
                {leaderSections.map((section, index) => (
                    <Section
                        key={index}
                        section={section}
                        index={index}
                        total={leaderSections.length}
                    />
                ))}
            </div>

            {/* Spacer for the last sticky item to scroll through */}
            {/* <div className="h-[20vh] bg-[#FBFBF9]" /> */}
        </section>
    );
};

export default Ceo;

