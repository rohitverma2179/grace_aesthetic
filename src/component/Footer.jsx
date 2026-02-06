import {
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/swastixa_logo.jpeg";

const Footer = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#story" },
    { name: "Projects", path: "/projects" },
    { name: "Contact Us", path: "/#contact" },
    { name: "Blogs", path: "#" }
  ];

  return (
    <footer className="bg-[#EBE9E0] text-[#0D2B24] pt-24 pb-10 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* TOP SECTION : LOGO + FORM */}
        <div className="flex flex-col lg:flex-row justify-between gap-20 mb-24">

          {/* LOGO */}
          <div className="max-w-md">
            <img src={logo} alt="Logo" />
          </div>
          {/* CONTACT FORM */}
          <div className="w-full max-w-sm">
            <h2 className="text-[clamp(1.4rem,3vw,2rem)] font-serif text-[#333] mb-5">
              Contact
            </h2>

            <form className="space-y-5">

              <div className="border-b border-black/20 pb-2">
                <label className="block text-[9px] uppercase font-bold tracking-widest text-black/50 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent outline-none text-base font-serif italic"
                />
              </div>

              {/* EMAIL */}
              <div className="border-b border-black/20 pb-2">
                <label className="block text-[9px] uppercase font-bold tracking-widest text-black/50 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent outline-none text-base font-serif italic"
                />
              </div>

              {/* PHONE – NEXT LINE */}
              <div className="border-b border-black/20 pb-2">
                <label className="block text-[9px] uppercase font-bold tracking-widest text-black/50 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="+91 00000 00000"
                  className="w-full bg-transparent outline-none text-base font-serif italic"
                />
              </div>

              <div className="border-b border-black/20 pb-2">
                <label className="block text-[9px] uppercase font-bold tracking-widest text-black/50 mb-1">
                  Message
                </label>
                <textarea
                  placeholder="Tell us about your requirements..."
                  className="w-full bg-transparent outline-none text-base font-serif italic resize-none h-24"
                />
              </div>

              <button
                type="submit"
                className="mt-3 bg-[#0D2B24] text-white px-6 py-2 rounded-full text-[9px] font-bold tracking-[0.18em] hover:bg-[#153a31] transition"
              >
                SEND MESSAGE
              </button>

            </form>
          </div>



        </div>

        {/* DIVIDER */}
        <div className="border-t border-[#0D2B24]/80 mb-14"></div>

        {/* BOTTOM LINKS */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-20">

          {/* CONTACT INFO */}
          <div className="flex flex-col sm:flex-row gap-14">
            <div>
              <h4 className="text-[15px] font-serif font-bold mb-3">
                Contact
              </h4>
              <div className="text-[#6B6B6B] text-[13px] space-y-1">
                <p>Grace@official.com</p>
                <p>+91 95823 90987</p>
              </div>
            </div>

            <div>
              <h4 className="text-[15px] font-serif font-bold mb-3">
                Grace Address
              </h4>
              <div className="text-[#6B6B6B] text-[13px] leading-snug">
                <p>O-100 Random Place</p>
                <p>New Delhi – 110084</p>
              </div>
            </div>
          </div>

          {/* NAV LINKS */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-[13px] font-bold">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-black transition"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* SOCIAL ICONS */}
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

        {/* COPYRIGHT */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[11px] font-semibold text-[#6B6B6B] pt-6 border-t border-black/5">
          <p>© 2026 Grace Aesthetic</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link to="#" className="hover:text-black transition">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-black transition">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
