import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import ContactPopup from './ContactPopup';
import logo from "../assets/Grace_Aesthetic_logo.webp"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollUpAmount, setScrollUpAmount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY) {
        setShowNav(false);
        setScrollUpAmount(0);
      } else {
        const diff = lastScrollY - currentScrollY;
        setScrollUpAmount(prev => prev + diff);
        if (scrollUpAmount + diff > 120) {
          setShowNav(true);
          setScrollUpAmount(0);
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, scrollUpAmount]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/#story' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', action: 'popup' },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${showNav ? 'translate-y-0' : '-translate-y-full'
          } ${isScrolled
            ? 'bg-black/90 backdrop-blur-lg py-4 shadow-2xl'
            : 'bg-transparent py-6'
          }`}
      >
        <div className="container-custom flex justify-between items-center mx-auto px-4">
          <Link to="/" className="text-2xl font-serif font-bold tracking-tighter">
            <img src={logo} className="w-24 h-full object-contain" alt="Logo" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              link.path ? (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-white/80'
                    }`}
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => setContactOpen(true)}
                  className="text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:text-primary text-white/80"
                >
                  {link.name}
                </button>
              )
            ))}
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-luxury-dark border-t border-white/10 md:hidden"
            >
              <div className="flex flex-col p-6 space-y-4">
                {navLinks.map((link) => (
                  link.path ? (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="text-white/80 text-lg font-serif tracking-widest hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      key={link.name}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setContactOpen(true);
                      }}
                      className="text-white/80 text-lg font-serif tracking-widest text-left hover:text-primary transition-colors"
                    >
                      {link.name}
                    </button>
                  )
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <ContactPopup isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
};

export default Navbar;
