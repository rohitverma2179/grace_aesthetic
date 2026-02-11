import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/blogouterimg/blog_hero.jpg'

const blogPosts = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800',
        category: 'MD REBEL BT',
        date: 'MARCH 10, 2022',
        title: 'MOST POPULAR REAL ESTATE AREA YOU CAN CHOOSE FROM',
        description: 'AT WATERSIDE RESIDENCES, STRIKING INTERIORS MEET ELEGANT, THOUGHTFULLY INTERIORS...'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1726471809116-7e8a552cca9b?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'MD REBEL BT',
        date: 'MARCH 10, 2022',
        title: 'MOST POPULAR REAL ESTATE AREA YOU CAN CHOOSE FROM',
        description: 'AT WATERSIDE RESIDENCES, STRIKING INTERIORS MEET ELEGANT, THOUGHTFULLY INTERIORS...'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1726471809131-ba7f33a1f6e9?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'MD REBEL BT',
        date: 'MARCH 10, 2022',
        title: 'MOST POPULAR REAL ESTATE AREA YOU CAN CHOOSE FROM',
        description: 'AT WATERSIDE RESIDENCES, STRIKING INTERIORS MEET ELEGANT, THOUGHTFULLY INTERIORS...'
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=800',
        category: 'MD REBEL BT',
        date: 'MARCH 10, 2022',
        title: 'MOST POPULAR REAL ESTATE AREA YOU CAN CHOOSE FROM',
        description: 'AT WATERSIDE RESIDENCES, STRIKING INTERIORS MEET ELEGANT, THOUGHTFULLY INTERIORS...'
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
        category: 'MD REBEL BT',
        date: 'MARCH 10, 2022',
        title: 'MOST POPULAR REAL ESTATE AREA YOU CAN CHOOSE FROM',
        description: 'AT WATERSIDE RESIDENCES, STRIKING INTERIORS MEET ELEGANT, THOUGHTFULLY INTERIORS...'
    },
    {
        id: 6,
        image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=800',
        category: 'MD REBEL BT',
        date: 'MARCH 10, 2022',
        title: 'MOST POPULAR REAL ESTATE AREA YOU CAN CHOOSE FROM',
        description: 'AT WATERSIDE RESIDENCES, STRIKING INTERIORS MEET ELEGANT, THOUGHTFULLY INTERIORS...'
    }
];

const BlogPage = () => {
    return (
        <div className="bg-[#EFEFEE] min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('${heroImg}')`,
                    }}
                >
                    <div className="absolute inset-0 bg-black/70"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    {/* <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white text-5xl md:text-8xl font-serif mb-8 tracking-tighter"
                    >
                        Our Blog Post
                    </motion.h1> */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/80 text-lg md:text-2xl font-light tracking-wide max-w-3xl mx-auto leading-relaxed"
                    >
                        Huge number of properties available here for buy and sell,
                        <br className="hidden md:block" /> also you can find here co-living property
                    </motion.p>
                </div>
            </section>

            {/* Timeless Maine Homes Banner */}
            <section className="bg-black py-24 px-4 overflow-hidden">
                <div className="container-custom mx-auto text-center">
                    <motion.p
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="text-white text-base md:text-lg uppercase tracking-[0.4em] font-light"
                    >
                        Over 20 years of crafting <span className="font-semibold text-primary">timeless Maine homes</span>
                    </motion.p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-32 px-4 bg-white">
                <div className="container-custom mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                className="group cursor-pointer"
                            >
                                <div className="aspect-4/3 overflow-hidden mb-10 bg-gray-100">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                                    />
                                </div>
                                <div className="space-y-5 px-1">
                                    {/* <p className="text-[10px] md:text-[11px] text-black/40 uppercase tracking-[0.25em] font-medium">
                                        {post.category} - {post.date}
                                    </p> */}
                                    <h3 className="text-xl md:text-xl font-semibold text-black leading-tight tracking-tight group-hover:text-primary transition-colors uppercase">
                                        {post.title}
                                    </h3>
                                    <p className="text-[10px] md:text-[11px] text-black/50 uppercase tracking-[0.18em] leading-[1.8] line-clamp-3 font-light">
                                        {post.description}
                                    </p>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-32 flex justify-center items-center gap-6">
                        {[1, 2, 3, 4].map((num) => (
                            <button
                                key={num}
                                className={`w-12 h-12 rounded-full flex items-center justify-center text-xs font-semibold tracking-widest transition-all duration-400 ${num === 1
                                        ? 'bg-black text-white'
                                        : 'bg-black/5 text-black hover:bg-black hover:text-white'
                                    }`}
                            >
                                {num}
                            </button>
                        ))}
                        <span className="text-black/30 text-lg tracking-widest">...</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;
