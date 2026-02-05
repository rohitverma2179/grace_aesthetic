import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import ContactPopup from './ContactPopup';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home' },
    { name: 'Our Story' },
    { name: 'Aesthetics' },
    { name: 'Destinations' },
    { name: 'Contact', action: 'popup' },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          <div
            className={`text-2xl font-serif font-bold tracking-tighter ${
              isScrolled ? 'text-luxury-dark' : 'text-white'
            }`}
          >
            GRACE <span className="text-primary italic font-light">Aesthetic</span>
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
                className={`text-sm uppercase tracking-widest font-medium transition-colors hover:text-primary ${
                  isScrolled ? 'text-luxury-dark' : 'text-white'
                }`}
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
                  <button
                    key={link.name}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (link.action === 'popup') {
                        setContactOpen(true);
                      }
                    }}
                    className="text-luxury-dark text-lg font-serif tracking-wide hover:text-primary text-left"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Contact Popup */}
      <ContactPopup
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
};

export default Navbar;
