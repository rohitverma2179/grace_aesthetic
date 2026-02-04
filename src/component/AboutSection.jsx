import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
const AboutSection = () => {
  return (
    <section id="story" className="py-24 bg-white">
      <div className="container-custom grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-4 block">Our Story</span>
          <h2 className="text-4xl md:text-5xl font-serif text-luxury-dark mb-6 leading-tight">
            Crafting Spaces that <br />
            <span className="italic text-primary">Echo Nature's Grace</span>
          </h2>
          <p className="text-luxury-dark/70 leading-relaxed mb-8 max-w-md">
            We believe that every home should be a reflection of the landscape it inhabits. Our design philosophy bridges the gap between raw natural beauty and sophisticated modern comfort, creating sanctuaries that inspire and endure.
          </p>
          <button className="flex items-center space-x-2 text-luxury-dark font-medium tracking-widest uppercase text-xs border-b border-primary pb-2 hover:text-primary transition-colors">
            <span>Discover Our Vision</span>
            <ArrowRight size={14} />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          {/* Stylized Logo Element from Design */}
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 border-[10px] border-luxury-dark/5 rounded-3xl rotate-12"></div>
            <div className="absolute inset-0 border-2 border-primary/20 rounded-full -rotate-6"></div>
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-luxury-dark">
                <path d="M20 20 L80 20 L80 30 L35 30 L35 45 L70 45 L70 55 L35 55 L35 70 L80 70 L80 80 L20 80 Z" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


export default AboutSection;