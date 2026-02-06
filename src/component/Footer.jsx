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
    { name: "Blogs", path: "/blogs" },
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
          {/* CONTACT FORM */}
          <div className="w-full max-w-xl bg-white/30 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/20 shadow-xl">
            <div className="mb-10">
              <h3 className="text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-4">
                Inquire
              </h3>
              <h2 className="text-4xl font-serif text-[#0D2B24] leading-tight">
                Tell us about your <br />
                <span className="italic">dream home</span>.
              </h2>
            </div>

            <form className="space-y-8">
              <div className="group relative">
                <input
                  type="text"
                  required
                  className="peer w-full bg-transparent border-b border-[#0D2B24]/20 py-2 outline-none focus:border-primary transition-all duration-300 text-lg font-serif italic text-[#0D2B24] placeholder:opacity-0"
                  placeholder="Full Name"
                  id="footer-name"
                />
                <label
                  htmlFor="footer-name"
                  className="absolute left-0 -top-3.5 text-[10px] uppercase font-bold tracking-widest text-[#0D2B24]/40 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:font-serif peer-placeholder-shown:italic peer-placeholder-shown:tracking-normal peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:uppercase peer-focus:font-bold peer-focus:tracking-widest peer-focus:text-primary"
                >
                  Full Name
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group relative">
                  <input
                    type="email"
                    required
                    className="peer w-full bg-transparent border-b border-[#0D2B24]/20 py-2 outline-none focus:border-primary transition-all duration-300 text-lg font-serif italic text-[#0D2B24] placeholder:opacity-0"
                    placeholder="Email Address"
                    id="footer-email"
                  />
                  <label
                    htmlFor="footer-email"
                    className="absolute left-0 -top-3.5 text-[10px] uppercase font-bold tracking-widest text-[#0D2B24]/40 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:font-serif peer-placeholder-shown:italic peer-placeholder-shown:tracking-normal peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:uppercase peer-focus:font-bold peer-focus:tracking-widest peer-focus:text-primary"
                  >
                    Email Address
                  </label>
                </div>

                <div className="group relative">
                  <input
                    type="tel"
                    required
                    className="peer w-full bg-transparent border-b border-[#0D2B24]/20 py-2 outline-none focus:border-primary transition-all duration-300 text-lg font-serif italic text-[#0D2B24] placeholder:opacity-0"
                    placeholder="Phone"
                    id="footer-phone"
                  />
                  <label
                    htmlFor="footer-phone"
                    className="absolute left-0 -top-3.5 text-[10px] uppercase font-bold tracking-widest text-[#0D2B24]/40 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:font-serif peer-placeholder-shown:italic peer-placeholder-shown:tracking-normal peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:uppercase peer-focus:font-bold peer-focus:tracking-widest peer-focus:text-primary"
                  >
                    Phone
                  </label>
                </div>
              </div>

              <div className="group relative">
                <textarea
                  required
                  className="peer w-full bg-transparent border-b border-[#0D2B24]/20 py-2 outline-none focus:border-primary transition-all duration-300 text-lg font-serif italic text-[#0D2B24] placeholder:opacity-0 min-h-[100px] resize-none"
                  placeholder="Message"
                  id="footer-message"
                />
                <label
                  htmlFor="footer-message"
                  className="absolute left-0 -top-3.5 text-[10px] uppercase font-bold tracking-widest text-[#0D2B24]/40 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:font-serif peer-placeholder-shown:italic peer-placeholder-shown:tracking-normal peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:uppercase peer-focus:font-bold peer-focus:tracking-widest peer-focus:text-primary"
                >
                  Message
                </label>
              </div>

              <button
                type="submit"
                className="group w-full relative overflow-hidden bg-[#0D2B24] py-5 rounded-xl text-white text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-500 hover:shadow-2xl active:scale-[0.98]"
              >
                <span className="relative z-10">Send Inquiry</span>
                <div className="absolute inset-0 bg-primary translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
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
