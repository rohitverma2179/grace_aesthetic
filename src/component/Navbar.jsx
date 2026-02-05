import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import ContactPopup from './ContactPopup';
import logo from "../assets/ishaadri_second.webp"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollUpAmount, setScrollUpAmount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY) {
        // scrolling DOWN → hide immediately
        setShowNav(false);
        setScrollUpAmount(0);
      } else {
        // scrolling UP → accumulate distance
        const diff = lastScrollY - currentScrollY;
        setScrollUpAmount(prev => prev + diff);

        // show navbar only after ~3 steps (~120px)
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

  const navLinks = [
    { name: 'Home' },
    { name: 'About us' },
    { name: 'Projects' },
    { name: 'Blogs' },
    { name: 'Contact', action: 'popup' },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-transform duration-600 ${
          showNav ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled
            ? 'bg-black py-4'
            : 'bg-transparent backdrop-blur-md py-6'
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          <div className="text-2xl font-serif font-bold tracking-tighter">
            <img src={logo} className="w-24 h-full object-contain" alt="Logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  if (link.action === 'popup') {
                    setContactOpen(true);
                  }
                }}
                className="text-sm uppercase tracking-widest font-medium transition-colors hover:text-primary text-white"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="text-white" />
            ) : (
              <Menu className="text-white" />
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
              className="md:hidden bg-white border-t overflow-hidden"
            >
              <div className="container-custom py-6 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (link.action === 'popup') {
                        setContactOpen(true);
                      }
                    }}
                    className="text-black text-lg font-serif tracking-wide text-left"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <ContactPopup
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
};

export default Navbar;
