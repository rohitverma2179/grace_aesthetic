import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Section, Container, Grid, Button } from '../component/ui';
import {
    Dribbble,
    Wifi,
    Coffee,
    ShieldCheck,
    Car,
    Waves,
    ShoppingCart,
    TreePine,
    ArrowRight
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = () => {
    const horizontalRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const horizontalScroll = horizontalRef.current;
            const scrollWidth = horizontalScroll.scrollWidth;
            const containerWidth = window.innerWidth;
            const amountToScroll = scrollWidth - containerWidth;

            if (amountToScroll > 0) {
                gsap.to(horizontalScroll, {
                    x: -amountToScroll,
                    ease: "none",
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        start: "top top",
                        end: () => `+=${amountToScroll}`,
                        scrub: 1,
                        pin: true,
                        invalidateOnRefresh: true,
                        anticipatePin: 1,
                    },
                });
            }
        });

        return () => ctx.revert();
    }, []);

    const amenities = [
        { icon: Wifi, title: "High Speed Wifi", desc: "Stay connected always" },
        { icon: Car, title: "Private Parking", desc: "Safe and secure" },
        { icon: ShieldCheck, title: "24/7 Security", desc: "Total peace of mind" },
        { icon: Coffee, title: "Cafeteria", desc: "Fresh organic coffee" },
        { icon: Waves, title: "Swimming Pool", desc: "Infinity pool views" },
        { icon: ShoppingCart, title: "Mini Market", desc: "Daily essentials" },
        { icon: Dribbble, title: "Sports Area", desc: "Stay fit and active" },
        { icon: TreePine, title: "Zen Garden", desc: "Peaceful retreats" },
    ];

    return (
        <main className="bg-luxury-light">
            {/* 1. Project Hero (Using existing if available or new custom) */}
            <section className="relative h-screen overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=2000"
                    className="w-full h-full object-cover scale-105"
                    alt="Hero"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all">
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent translate-x-0.5"></div>
                    </div>
                </div>
            </section>

            {/* 2. Project Overview */}
            <Section variant="light" padding="lg">
                <Container className="max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-primary tracking-[0.5em] text-sm md:text-base font-bold uppercase mb-12">
                            Project Overview
                        </h2>
                        <div className="space-y-8 text-luxury-dark/70 font-sans leading-relaxed text-base md:text-lg max-w-2xl mx-auto">
                            <p>
                                Experience a sanctuary where luxury meets the untouched beauty of nature.
                                Our development is a testament to refined living, meticulously designed
                                to offer an unparalleled sense of peace and sophistication.
                            </p>
                            <p className="font-medium text-luxury-dark">
                                From the sprawling landscapes to the intricate details of our interiors,
                                every element is crafted to elevate your daily life. Discover a legacy
                                that grows with you, in the heart of the most serene valley.
                            </p>
                        </div>
                    </motion.div>
                </Container>
            </Section>

            {/* 3. Visual Journey (Horizontal Scroll) */}
            <div ref={triggerRef}>
                <div className="h-screen overflow-hidden flex flex-col justify-center">
                    <h2 className="text-center text-luxury-dark tracking-[0.8em] font-serif uppercase text-2xl md:text-3xl mb-16 px-4">
                        Visual Journey
                    </h2>
                    <div ref={horizontalRef} className="flex items-end gap-4 md:gap-8 px-[5vw] md:px-[10vw] relative w-max">
                        {[
                            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200",
                            "https://images.unsplash.com/photo-1600585154340-be60998ad50c?auto=format&fit=crop&w=1200",
                            "https://images.unsplash.com/photo-1613490492523-232323232323?auto=format&fit=crop&w=1200",
                            "https://images.unsplash.com/photo-1600607687940-c57fa8c950d8?auto=format&fit=crop&w=1200",
                            "https://images.unsplash.com/photo-1620332372374-910a5585293d?auto=format&fit=crop&w=1200",
                        ].map((img, i) => (
                            <div
                                key={i}
                                className={`
                                               w-[85vw] md:w-[45vw] lg:w-[40vw]
                                               h-[50vh]
                                               ${i === 1 ? "md:h-[60vh]" : "md:h-[80vh]"}
                                               shrink-0 relative group rounded-sm overflow-hidden 
                                             `}
                            >
                                <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={`Journey ${i}`} />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>




            {/* 4. Project Amenities */}
            <Section variant="white" padding="lg">
                <Container>
                    <div className="text-center mb-20">
                        <h2 className="text-luxury-dark tracking-[0.7em] font-serif uppercase text-2xl md:text-3xl">
                            Project Amenities
                        </h2>
                    </div>
                    <Grid cols={4} gap={8}>
                        {amenities.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-8 border border-luxury-dark/5 hover:border-primary/30 transition-all duration-500 text-center relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500"></div>
                                <item.icon className="w-8 h-8 mx-auto mb-6 text-primary group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-luxury-dark/80 mb-2 truncate">{item.title}</h3>
                            </motion.div>
                        ))}
                    </Grid>
                </Container>
            </Section>

            {/* 5. Scenic House Section */}
            <section className="relative h-[80vh] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1449156003053-c301a91316b2?auto=format&fit=crop&q=80&w=2000"
                    className="w-full h-full object-cover"
                    alt="Scenic House"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center cursor-pointer"
                    >
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent translate-x-0.5"></div>
                    </motion.div>
                </div>
            </section>


        </main>
    );
};

export default ProjectDetail;
