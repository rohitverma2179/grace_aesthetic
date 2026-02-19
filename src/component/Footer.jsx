import { Link, useLocation } from 'react-router-dom';
import logograce from "../assets/gracefooter.png"
import logoisd from '../assets/Ishaadriifooter.png'

const Footer = () => {
  const location = useLocation();
  const isIshaadriPage = location.pathname === '/projects';
  const currentLogo = isIshaadriPage ? logoisd : logograce;

  return (
    <footer className="bg-[#f3f1eb] text-luxury-dark">

      {/* TOP SECTION */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-0 flex pb-14 pt-14  flex-col lg:flex-row items-center  justify-between
">

        {/* LEFT – LOGO */}
        <div className="flex items-center  gap-4 justify-center flex-col w-full lg:w-1/2">
          <img
            src={currentLogo}
            alt="Logo"
            className="max-w-[280px] md:max-w-[700px] transition-all duration-500"
          />
          {/* <p>Homes designed for balance, comfort, and calm.</p> */}
        </div>


        {/* RIGHT – FORM */}
        <form className=" w-full lg:w-1/2 max-w-md flex flex-col justify-center space-y-8 ">
          <div className='text-sm sm:text-xl'>Enquiry </div>
          {["FULL NAME", "PHONE NUMBER", "EMAIL", "MESSAGE"].map((label, i) => (
            <div key={i}>
              <label className="block text-[10px] tracking-[0.3em]  text-luxury-dark/60">
                {label}
              </label>
              <input
                type="text"
                className="
            w-full 
            bg-transparent 
            border-b 
            border-luxury-dark/30 
            focus:outline-none 
            focus:border-luxury-dark 
            
          "
              />
            </div>
          ))}

          <button
            type="submit"
            className="
        self-start
        bg-[#2f5d50] 
        text-white 
        text-[10px] 
        tracking-[0.3em] 
        px-8 py-3 
        uppercase 
        shadow-md
      "
          >
            Submit
          </button>
        </form>

      </div>


      {/* DIVIDER */}
      <div className="flex justify-center items-center">
        <div className="w-full max-w-[1280px] border-t border-[#2f5d50]/40" />
      </div>

      {/* MIDDLE NAV */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-0 py-8 grid grid-cols-1 lg:grid-cols-4 gap-12">

        {/* CONTACT */}
        <div>
          <h4 className="text-sm mb-3 font-semibold">Contact</h4>

          <div className="text-sm text-luxury-dark/70 space-y-1">

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=graceaestheticofficial@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-black transition duration-200 cursor-pointer"
            >
              graceaestheticofficial@gmail.com
            </a>

            <a
              href="tel:+919910346123"
              className="block hover:text-black transition duration-200 cursor-pointer"
            >
              Call: +91 99103 46123
            </a>


          </div>
        </div>


        {/* ADDRESS */}
        <div>
          <h4 className="text-sm mb-3">Marketing Office</h4>
          <p className="text-sm text-luxury-dark/70">
            Office No 111, 112 Spaze Platinum Tower, <br /> Sohna Road, Sector 47, <br /> Gurugram, Haryana 122018
          </p>

        </div>
        <div>
          <h4 className="text-sm mb-3">Registered Office</h4>
          <p className="text-sm text-luxury-dark/70">
            Village Bandran, Tehsil Sult, Post <br /> Sanker, Sankar, Almora, Bhikia Sain,<br />  Uttarakhand, India, 244715</p>



        </div>

        {/* LINKS */}
        <div className="lg:col-span-2 flex flex-wrap gap-x-20 gap-y-6 text-sm">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Projects", path: "/projects" },
            { name: "Contact Us", path: "#" },
            { name: "Blogs", path: "/blog" }
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="hover:text-luxury-dark"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-0 pb-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-luxury-dark/60">

        <p>© 2026 Grace Aesthetic</p>

        <div className="flex gap-6">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-4">
          {["in", "f", "ig", "yt"].map((icon) => (
            <div
              key={icon}
              className="w-8 h-8 border border-luxury-dark/40 rounded-full flex items-center justify-center text-xs"
            >
              {icon}
            </div>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
