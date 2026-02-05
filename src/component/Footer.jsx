import {
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
} from 'lucide-react';
import logo from '../assets/swastixa_logo.jpeg'

const Footer = () => {
  return (
    <footer className="bg-[#EBE9E0] text-luxury-dark pt-24 pb-10 font-sans">
      <div className="max-w-350 mx-auto px-6 md:px-10">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-14">

          {/* Brand */}
          <div className="max-w-xl">
            <img src={logo} className="text-[clamp(2.6rem,7vw,5.5rem)] font-serif text-primary leading-[0.95] mb-8 tracking-tight"
              alt="Grace Aesthetic Logo" />
            {/* <p className="text-[#6B6B6B] text-[13px] max-w-[300px] leading-relaxed font-medium">
              Guiding you from city chaos to serene living in Dehradun.
            </p> */}
          </div>

          {/* CTA */}
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

        {/* Divider */}
        <div className="border-t border-[#0D2B24]/80 mb-14"></div>

        {/* Middle */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-20">

          {/* Contact + Address */}
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

          {/* Navigation */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-[13px] font-bold">
            {["Home", "About", "Projects", "Contact Us", "Blogs"].map(link => (
              <a key={link} href="#" className="hover:text-primary transition">
                {link}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-3">
            {[Linkedin, Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 border border-black/30 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[11px] font-semibold text-[#6B6B6B] pt-6">
          <p>© 2026 Grace Aesthetic</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-black">Privacy Policy</a>
            <a href="#" className="hover:text-black">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;