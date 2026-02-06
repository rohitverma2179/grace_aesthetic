import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import ContactPopup from './ContactPopup';
import logograce from "../assets/Grace_Aesthetic_logo.webp"
import logoisd from '../assets/ishaadri_second.webp'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollUpAmount, setScrollUpAmount] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  // Determine which logo to show
  const isIshaadriPage = location.pathname === '/projects';
  const currentLogo = isIshaadriPage ? logoisd : logograce;

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
    setDropdownOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/#story' },
    {
      name: 'Projects',
      path: '/projects',
      dropdown: [
        { name: ' Ishaadrii', path: '/projects' },
        { name: 'Project 2', path: '#' },
        { name: 'Project 3', path: '#' },
        { name: 'Project 4', path: '#' }
      ]
    },
    { name: 'Blogs', path: '#' },
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
            <img src={currentLogo} className="w-24 h-full object-contain transition-all duration-500" alt="Logo" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              link.dropdown ? (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:text-primary flex items-center gap-1 ${location.pathname === link.path ? 'text-primary' : 'text-white/80'
                      }`}
                  >
                    {link.name}
                    <motion.span
                      animate={{ rotate: dropdownOpen ? 180 : 0 }}
                      className="text-[10px]"
                    >
                      ▼
                    </motion.span>
                  </Link>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-luxury-dark/95 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden"
                      >
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-white/70 hover:text-primary hover:bg-white/5 transition-all duration-300"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : link.path ? (
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
                  link.dropdown ? (
                    <div key={link.name} className="flex flex-col space-y-4">
                      <Link
                        to={link.path}
                        className="text-white/80 text-lg font-serif tracking-widest hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                      <div className="pl-4 flex flex-col space-y-3 border-l border-white/10">
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="text-white/60 text-base font-serif tracking-widest hover:text-primary transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : link.path ? (
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
