import {
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/swastixa_logo.jpeg'

const Footer = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#story" },
    { name: "Projects", path: "/projects" },
    { name: "Contact Us", path: "/#contact" },
    { name: "Blogs", path: "/blogs" }
  ];

  return (
    <footer className="bg-[#EBE9E0] text-luxury-dark pt-24 pb-10 font-sans">
      <div className="max-w-350 mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-14">
          <div className="max-w-xl">
            <img src={logo} className="text-[clamp(2.6rem,7vw,5.5rem)] font-serif text-primary leading-[0.95] mb-8 tracking-tight" alt="Logo" />
          </div>
          <div className="flex flex-col items-start lg:items-start">
            <h2 className="text-[clamp(1.6rem,4vw,2.8rem)] font-serif leading-tight mb-10 xl:mt-8 text-[#333]">
              Trade the Noise for Nature <br />
              <span className="italic font-medium">Move to Dehradun.</span>
            </h2>
            <button className="bg-[#0D2B24] text-white px-7 py-3 rounded-full text-[10px] font-bold tracking-[0.14em] flex items-center gap-3 hover:bg-[#153a31] transition">
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              START YOUR PROPERTY JOURNEY
            </button>
          </div>
        </div>

        <div className="border-t border-[#0D2B24]/80 mb-14"></div>

        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-20">
          <div className="flex flex-col sm:flex-row gap-14">
            <div>
              <h4 className="text-[15px] font-serif font-bold mb-3">Contact</h4>
              <div className="text-[#6B6B6B] text-[13px] space-y-1">
                <p>Grace@official.com</p>
                <p>+91 95823 90987</p>
              </div>
            </div>
            <div>
              <h4 className="text-[15px] font-serif font-bold mb-3">Grace address</h4>
              <div className="text-[#6B6B6B] text-[13px] leading-snug">
                <p>O-100 Random Place</p>
                <p>New Delhi – 110084</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4 text-[13px] font-bold">
            {navLinks.map(link => (
              <Link key={link.name} to={link.path} className="hover:text-primary transition">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex gap-3">
            {[Linkedin, Facebook, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-8 h-8 border border-black/30 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[11px] font-semibold text-[#6B6B6B] pt-6 border-t border-black/5">
          <p>© 2026 Grace Aesthetic</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link to="#" className="hover:text-black transition">Privacy Policy</Link>
            <Link to="#" className="hover:text-black transition">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;