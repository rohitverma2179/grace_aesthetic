import logo from '../assets/graceLogoGolden.webp'
const Footer = () => {
  return (
    <footer className="bg-[#f3f1eb] text-luxury-dark">
      
      {/* TOP SECTION */}
     <div className="max-w-[1280px] mx-auto px-6 lg:px-0 flex pb-14 pt-14  flex-col lg:flex-row items-center  justify-between
">

  {/* LEFT – LOGO */}
  <div className="flex items-center  gap-4 justify-center flex-col w-full lg:w-1/2">
    <img 
      src={logo} 
      alt="Logo" 
      className="max-w-[280px] md:max-w-[360px]"
    />
  <p>Guiding you from city chaos to serene living in Dehradun.</p>
  </div>


  {/* RIGHT – FORM */}
  <form className="
    w-full 
    lg:w-1/2 
    max-w-md 
    flex 
    flex-col 
    justify-center 
    space-y-8
  ">
    {["FULL NAME", "PHONE NUMBER", "EMAIL", "MESSAGE"].map((label, i) => (
      <div key={i}>
        <label className="block text-[10px] tracking-[0.3em] mb-2 text-luxury-dark/60">
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
            py-1
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
      <div className="max-w-[1280px] mx-auto px-6 lg:px-0 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">

        {/* CONTACT */}
        <div>
          <h4 className="text-sm mb-3">Contact</h4>
          <p className="text-sm text-luxury-dark/70">
            Grace@official.com<br />
            +91-95823 90987
          </p>
        </div>

        {/* ADDRESS */}
        <div>
          <h4 className="text-sm mb-3">Grace address</h4>
          <p className="text-sm text-luxury-dark/70">
            0-100 random place<br />
            New Delhi - 110084
          </p>
        </div>

        {/* LINKS */}
        <div className="lg:col-span-2 flex flex-wrap gap-x-12 gap-y-6 text-sm">
          {["Home", "About", "Projects", "Contact Us", "Blogs", "Insights"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="hover:text-luxury-dark"
              >
                {item}
              </a>
            )
          )}
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
