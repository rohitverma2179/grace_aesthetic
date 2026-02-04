import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Play,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
  ChevronRight,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Our Story', href: '#story' },
    { name: 'Aesthetics', href: '#aesthetics' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container-custom flex justify-between items-center">
        <div className={`text-2xl font-serif font-bold tracking-tighter ${isScrolled ? 'text-luxury-dark' : 'text-white'}`}>
          GRACE <span className="text-primary italic font-light">Aesthetic</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm uppercase tracking-widest font-medium transition-colors hover:text-primary ${isScrolled ? 'text-luxury-dark' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? 'text-luxury-dark' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-luxury-dark' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-luxury-light overflow-hidden"
          >
            <div className="container-custom py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-luxury-dark text-lg font-serif tracking-wide hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070"
          alt="Aerial view of mountains and lake"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-white/10 backdrop-blur-md rounded-full p-8 cursor-pointer hover:bg-white/20 transition-all border border-white/30"
        >
          <Play className="text-white fill-white w-12 h-12 translate-x-1" />
        </motion.div>
      </div>

      {/* Floating House (Visual Reference from Design) */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-12 right-12 hidden lg:block"
      >
        <div className="bg-white/90 backdrop-blur-md p-6 luxury-shadow rounded-sm max-w-xs">
          <h3 className="text-primary font-serif italic mb-2">Mountain Retreat</h3>
          <p className="text-xs text-luxury-dark/70 leading-relaxed uppercase tracking-widest">
            Experience the pinnacle of alpine luxury with panoramic views and bespoke interiors.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

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

const GallerySection = () => {
  const images = [
    { src: 'https://images.unsplash.com/photo-1518173946687-a4c8a3b749f5?auto=format&fit=crop&q=80&w=800', size: 'col-span-1 row-span-2' },
    { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800', size: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=800', size: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1200', size: 'col-span-2 row-span-2' },
    { src: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=800', size: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800', size: 'col-span-1 row-span-1' },
  ];

  return (
    <section className="py-24 bg-luxury-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-[0.4em] text-xs font-bold mb-4 block">The Collections</span>
          <h2 className="section-title">Inspired by Nature</h2>
          <div className="w-24 h-px bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 auto-rows-[250px] md:auto-rows-[300px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-sm group ${img.size}`}
            >
              <img
                src={img.src}
                alt="Nature inspired design"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-luxury-dark/20 group-hover:bg-luxury-dark/0 transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InteriorsSection = () => {
  const interiors = [
    {
      title: "Zen Minimalist",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000",
      desc: "Clean lines and natural wood textures create a calming atmosphere."
    },
    {
      title: "Modern Lodge",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000",
      desc: "Warm tones and luxurious materials for the ultimate escape."
    },
    {
      title: "Earthy Elegance",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=2000",
      desc: "A perfect blend of contemporary pieces and organic forms."
    },
    {
      title: "Nordic Comfort",
      image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=2000",
      desc: "Light-filled spaces designed for relaxation and connection."
    }
  ];

  return (
    <section id="aesthetics" className="bg-luxury-dark text-white">
      {interiors.map((item, idx) => (
        <div key={idx} className="relative h-[80vh] min-h-[500px] overflow-hidden group">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover opacity-60 transition-transform duration-[2s] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-transparent to-transparent"></div>

          <div className="absolute bottom-20 left-4 md:left-24 lg:left-32 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl md:text-5xl font-serif mb-4 tracking-wide">{item.title}</h3>
              <p className="text-lg text-white/70 mb-8 font-light italic">{item.desc}</p>
              <button className="btn-primary">View Project</button>
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
};

const WhyChooseSection = () => {
  const points = [
    {
      title: "Curated Selection",
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800",
      text: "Handpicked locations that offer unparalleled natural beauty."
    },
    {
      title: "Architectural Excellence",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
      text: "Designs that respect the terrain while providing modern luxury."
    },
    {
      title: "Sustainable Living",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
      text: "Committed to eco-friendly practices and local materials."
    }
  ];

  return (
    <section id="destinations" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Why Choose Grace Aesthetic</h2>
          <p className="text-luxury-dark/60 max-w-2xl mx-auto italic">
            "Design is not just what it looks like and feels like. Design is how it works."
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group text-center"
            >
              <div className="relative h-64 overflow-hidden rounded-sm mb-6">
                <img
                  src={point.image}
                  alt={point.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <h4 className="text-xl font-serif mb-3 tracking-wide">{point.title}</h4>
              <p className="text-sm text-luxury-dark/70 leading-relaxed px-4">{point.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#EAE5DF] text-luxury-dark pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          <div className="space-y-6">
            <div className="text-3xl font-serif font-bold italic tracking-tighter">
              Grace <span className="text-primary">Aesthetic</span>
            </div>
            <p className="text-sm text-luxury-dark/60 max-w-xs leading-relaxed uppercase tracking-widest">
              Exclusive properties and bespoke interior design for the discerning traveler.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h5 className="font-semibold uppercase tracking-widest text-xs mb-8">Navigation</h5>
              <ul className="space-y-4 text-sm text-luxury-dark/70">
                <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Aesthetics</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Portfolio</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold uppercase tracking-widest text-xs mb-8">Follow</h5>
              <ul className="space-y-4 text-sm text-luxury-dark/70">
                <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pinterest</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Vimeo</a></li>
              </ul>
            </div>
          </div>

          <div id="contact">
            <h5 className="font-semibold uppercase tracking-widest text-xs mb-8">Get in Touch</h5>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="text-primary" size={18} />
                <span className="text-sm">hello@grace-aesthetic.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-primary" size={18} />
                <span className="text-sm">Dehradun, Uttarakhand, IN</span>
              </div>
              <form className="mt-8 relative">
                <input
                  type="email"
                  placeholder="SUBSCRIBE TO NEWSLETTER"
                  className="w-full bg-transparent border-b border-luxury-dark/20 py-2 text-xs focus:outline-none focus:border-primary uppercase tracking-widest"
                />
                <button type="submit" className="absolute right-0 bottom-2">
                  <ChevronRight size={18} className="text-primary" />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-luxury-dark/10 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] font-medium text-luxury-dark/40">
          <p>© 2024 Grace Aesthetic. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main Application ---

function App() {
  return (
    <div className="antialiased text-luxury-dark">
      <Navbar />
      <Hero />
      <AboutSection />
      <GallerySection />

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

      {/* Scenic Road Section */}
      <section className="h-[60vh] relative">
        <img
          src="https://images.unsplash.com/photo-1506905967146-e1f1a58d9299?auto=format&fit=crop&q=80&w=2000"
          alt="Winding mountain road"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
      </section>

      <WhyChooseSection />
      <Footer />
    </div>
  );
}

export default App;
