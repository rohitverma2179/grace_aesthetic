import { ArrowRight } from "lucide-react";
import swastixaLogo from "../assets/swastixaLogo.png";

const AboutSection = () => {
  return (
    <section
      id="story"
      className="bg-[#f8f8f5] md:h-screen h-auto py-10   flex items-center justify-center"
    >
      <div className="w-[90%] max-w-300 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* LEFT CONTENT */}
        <div className="flex flex-col max-w-xl">
          <h3 className="tracking-[0.6em] 
    sm:tracking-[1rem] 
    md:tracking-[1.6rem] 
    lg:tracking-[2.25rem] 
    text-xl 
    sm:text-2xl 
    md:text-3xl 
    lg:text-[37px] 
    text-gray-500 pb-6">
            OUR STORY
          </h3>

          <p className="text-gray-500 leading-relaxed text-sm  md:text-base mb-10">
            At Grace Aesthetic, we believe real estate is about people before properties.
            We value honesty, transparency, and long-term trust in every interaction.
            Rooted in Dehradun, we respect nature, local surroundings, and thoughtful
            development that shapes calm and well-planned living environments.
            Our work is guided by a belief in creating homes that offer peace, balance,
            and lasting value. Every decision we make reflects care, clarity, and a
            genuine commitment to helping people begin a better life closer to nature.
          </p>

          {/* <button
            className="
              flex items-center gap-3
              bg-[#2F5D50]
              text-white
              px-6 py-3 w-fit
              text-xs uppercase tracking-widest
              transition-all duration-300
              hover:bg-white hover:text-black
               "
          >
            {<ArrowRight size={14} />}
            Discover More
          </button> */}
        </div>

        {/* RIGHT LOGO */}
        <div className="flex justify-center items-center w-full md:w-auto">
          <img
            src={swastixaLogo}
            alt="Brand Symbol"
            className="w-64 md:w-80 lg:w-96 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
